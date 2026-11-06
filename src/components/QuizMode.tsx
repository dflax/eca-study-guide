'use client';

import { useMemo, useState } from 'react';
import type { QuizQuestion } from '@/types/study';
import {
  recordQuizAttempt,
  recordQuestionResult,
  recordTopicSessions,
  getTopicSessions,
  topicKey,
} from '@/lib/progress';
import { MASTERY_THRESHOLD, topicStatus, sessionPercent, type TopicStatus } from '@/lib/mastery';
import { notesHref, flashcardsHref } from '@/lib/topics';

interface QuizModeProps {
  courseId: string;
  unitId: string;                 // progress bucket: a unit id, or 'summary-quiz'
  quiz: QuizQuestion[];
  onRestart?: () => void;         // if set, the results screen offers "New Questions" (a fresh draw)
  onWeakAreas?: () => void;       // if set, the results screen can start a quiz on the topics still to master
  getFollowUp?: (question: QuizQuestion, excludeIds: string[]) => QuizQuestion | null;
  recordAttempt?: boolean;        // false for practice quizzes, which should not count as unit quiz attempts
  practiceLabel?: string;         // banner shown above a practice quiz
  backHref?: string;              // defaults to the unit page
  backLabel?: string;
}

type AnswerState = 'unanswered' | 'answered';

interface Result {
  questionId: string;
  unitId: string;
  topic: string;
  correct: boolean;
}

const optionLabels = ['A', 'B', 'C', 'D'];
const PASS_PERCENT = 70;   // overall "Great job" message; matches unit completion elsewhere. Topic mastery uses MASTERY_THRESHOLD.

const STATUS_STYLE: Record<TopicStatus, { label: string; className: string }> = {
  mastered: { label: 'Mastered', className: 'bg-green-100 text-green-700' },
  building: { label: 'Almost — one more good round', className: 'bg-blue-100 text-blue-700' },
  'needs-work': { label: 'Needs work', className: 'bg-orange-100 text-orange-700' },
  new: { label: 'Not enough answers yet', className: 'bg-gray-100 text-gray-600' },
};

function QuestionView({
  question,
  selectedIndex,
  answered,
  onSelect,
}: {
  question: QuizQuestion;
  selectedIndex: number | null;
  answered: boolean;
  onSelect: (idx: number) => void;
}) {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 mb-6">
        <p className="text-lg font-semibold text-gray-900 leading-relaxed">{question.question}</p>
      </div>
      <div className="space-y-3 mb-6">
        {question.options.map((option, idx) => {
          let buttonClass = 'w-full text-left px-5 py-4 rounded-xl border-2 font-medium transition-all duration-150 flex items-start gap-3 ';
          if (!answered) {
            buttonClass += 'bg-white border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 text-gray-800 cursor-pointer';
          } else if (idx === question.correctIndex) {
            buttonClass += 'bg-green-50 border-green-500 text-green-800';
          } else if (idx === selectedIndex) {
            buttonClass += 'bg-red-50 border-red-400 text-red-800';
          } else {
            buttonClass += 'bg-gray-50 border-gray-200 text-gray-500 cursor-not-allowed';
          }
          return (
            <button key={idx} onClick={() => onSelect(idx)} className={buttonClass} disabled={answered}>
              <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold ${
                !answered
                  ? 'bg-indigo-100 text-indigo-700'
                  : idx === question.correctIndex
                  ? 'bg-green-500 text-white'
                  : idx === selectedIndex
                  ? 'bg-red-400 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {optionLabels[idx]}
              </span>
              <span className="leading-snug">{option}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}

function Feedback({
  courseId,
  question,
  correct,
}: {
  courseId: string;
  question: QuizQuestion;
  correct: boolean;
}) {
  const hasLinks = !correct && !!question.unitId && !!question.topic;
  return (
    <div className={`rounded-xl p-4 border-l-4 ${correct ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-400'}`}>
      <p className={`text-sm font-bold mb-1 ${correct ? 'text-green-700' : 'text-red-700'}`}>
        {correct ? 'Correct!' : 'Incorrect'}
      </p>
      <p className="text-sm text-gray-700 leading-relaxed">{question.explanation}</p>
      {hasLinks && (
        <p className="text-sm mt-3 pt-3 border-t border-red-200 text-gray-700">
          Brush up on <span className="font-semibold">{question.topic}</span>:{' '}
          <a
            href={notesHref(courseId, question.unitId!, question.topic!)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-700 font-semibold underline underline-offset-2"
          >
            Read the notes
          </a>
          {question.flashcardIds && question.flashcardIds.length > 0 && (
            <>
              {' · '}
              <a
                href={flashcardsHref(courseId, question.unitId!, question.flashcardIds)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 font-semibold underline underline-offset-2"
              >
                Review the flashcards
              </a>
            </>
          )}
          <span className="text-gray-400"> (opens in a new tab, so your quiz is safe)</span>
        </p>
      )}
    </div>
  );
}

export default function QuizMode({
  courseId,
  unitId,
  quiz,
  onRestart,
  onWeakAreas,
  getFollowUp,
  recordAttempt = true,
  practiceLabel,
  backHref,
  backLabel,
}: QuizModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered');
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState<Result[]>([]);          // includes follow-up practice answers
  const [offered, setOffered] = useState<QuizQuestion | null>(null);   // follow-up available for the current wrong answer
  const [followUp, setFollowUp] = useState<QuizQuestion | null>(null); // follow-up currently on screen
  const [followUpSelected, setFollowUpSelected] = useState<number | null>(null);
  const [followUpOffered, setFollowUpOffered] = useState<QuizQuestion | null>(null);
  const [usedFollowUpIds, setUsedFollowUpIds] = useState<string[]>([]);

  const topicRows = useMemo(() => {
    if (!finished) return [];
    const sessions = getTopicSessions(courseId);
    const agg = new Map<string, { unitId: string; topic: string; correct: number; total: number }>();
    for (const r of results) {
      if (!r.topic) continue;
      const k = topicKey(r.unitId, r.topic);
      const row = agg.get(k) ?? { unitId: r.unitId, topic: r.topic, correct: 0, total: 0 };
      row.total += 1;
      if (r.correct) row.correct += 1;
      agg.set(k, row);
    }
    return [...agg.entries()]
      .map(([k, row]) => ({ ...row, status: topicStatus(sessions[k]), pct: sessionPercent(row) }))
      .sort((a, b) => a.pct - b.pct);
  }, [finished, results, courseId]);

  if (quiz.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <p className="text-lg">No quiz questions available for this unit.</p>
      </div>
    );
  }

  const question = quiz[currentIndex];
  const excludeIds = [...quiz.map(q => q.id), ...usedFollowUpIds];

  function record(q: QuizQuestion, correct: boolean) {
    recordQuestionResult(courseId, q.id, correct);
    setResults(r => [...r, { questionId: q.id, unitId: q.unitId ?? '', topic: q.topic ?? '', correct }]);
  }

  function handleSelect(idx: number) {
    if (answerState === 'answered') return;
    const correct = idx === question.correctIndex;
    setSelectedIndex(idx);
    setAnswerState('answered');
    if (correct) setScore(s => s + 1);
    record(question, correct);
    setOffered(!correct && getFollowUp ? getFollowUp(question, excludeIds) : null);
  }

  function startFollowUp(q: QuizQuestion) {
    setFollowUp(q);
    setFollowUpSelected(null);
    setFollowUpOffered(null);
    setUsedFollowUpIds(ids => [...ids, q.id]);
  }

  function handleFollowUpSelect(idx: number) {
    if (!followUp || followUpSelected !== null) return;
    const correct = idx === followUp.correctIndex;
    setFollowUpSelected(idx);
    record(followUp, correct);
    setFollowUpOffered(
      !correct && getFollowUp ? getFollowUp(followUp, [...excludeIds, followUp.id]) : null,
    );
  }

  function handleNext() {
    setSelectedIndex(null);
    setAnswerState('unanswered');
    setOffered(null);
    if (currentIndex + 1 >= quiz.length) {
      if (recordAttempt) recordQuizAttempt(courseId, unitId, score, quiz.length);
      recordTopicSessions(courseId, results);
      setFinished(true);
    } else {
      setCurrentIndex(i => i + 1);
    }
  }

  if (finished) {
    const percentage = Math.round((score / quiz.length) * 100);
    const passed = percentage >= PASS_PERCENT;
    const allMastered = topicRows.length > 0 && topicRows.every(r => r.status === 'mastered');
    const hasTopics = topicRows.length > 0;
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center max-w-lg mx-auto">
        <div className="text-6xl mb-6">{passed ? '🌟' : '💪'}</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {passed ? 'Great job!' : 'Keep studying!'}
        </h2>
        <p className="text-gray-600 mb-6">{practiceLabel ? 'Practice complete' : 'Quiz complete'}</p>
        <div className={`rounded-2xl px-10 py-6 mb-8 ${passed ? 'bg-green-50 border-2 border-green-300' : 'bg-orange-50 border-2 border-orange-300'}`}>
          <p className={`text-5xl font-bold mb-1 ${passed ? 'text-green-700' : 'text-orange-600'}`}>
            {percentage}%
          </p>
          <p className={`text-lg ${passed ? 'text-green-600' : 'text-orange-500'}`}>
            {score} / {quiz.length} correct
          </p>
        </div>

        {hasTopics && (
          <div className="w-full text-left mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-3">
              How you did by topic
            </h3>
            <ul className="space-y-2">
              {topicRows.map(row => (
                <li key={topicKey(row.unitId, row.topic)} className="bg-white border border-gray-200 rounded-xl p-3">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-gray-900 text-sm leading-snug">{row.topic}</p>
                    <p className="text-sm font-bold text-gray-700 shrink-0">
                      {row.correct}/{row.total} · {row.pct}%
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-2 flex-wrap">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${STATUS_STYLE[row.status].className}`}>
                      {STATUS_STYLE[row.status].label}
                    </span>
                    {row.pct < MASTERY_THRESHOLD && (
                      <a
                        href={notesHref(courseId, row.unitId, row.topic)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-indigo-700 font-semibold underline underline-offset-2"
                      >
                        Review notes
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-3">
              A topic is mastered when you score {MASTERY_THRESHOLD}% or better on it in two quizzes in a row.
            </p>
          </div>
        )}

        {allMastered && (
          <p className="text-green-700 font-semibold mb-6">🏆 You have mastered every topic in this quiz!</p>
        )}

        <div className="flex gap-4 flex-wrap justify-center">
          {onWeakAreas && hasTopics && !allMastered && (
            <button
              onClick={onWeakAreas}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
            >
              Practice my weak areas
            </button>
          )}
          {onRestart && (
            <button
              onClick={onRestart}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
            >
              New Questions
            </button>
          )}
          <a
            href={backHref ?? `/${courseId}/${unitId}`}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-xl transition-colors"
          >
            {backLabel ?? 'Back to Unit'}
          </a>
        </div>
      </div>
    );
  }

  // Inline focused practice: an extra question on the topic the learner just missed.
  if (followUp) {
    const answered = followUpSelected !== null;
    const correct = followUpSelected === followUp.correctIndex;
    return (
      <div className="max-w-2xl mx-auto w-full px-4 py-8">
        <div className="mb-4 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
          <p className="text-xs font-bold uppercase tracking-wide text-amber-700">Practice question</p>
          <p className="text-sm text-amber-800">
            One more on the topic you just missed. This does not change your quiz score.
          </p>
        </div>
        <QuestionView
          question={followUp}
          selectedIndex={followUpSelected}
          answered={answered}
          onSelect={handleFollowUpSelect}
        />
        {answered && (
          <div className="space-y-4">
            <Feedback courseId={courseId} question={followUp} correct={correct} />
            {followUpOffered && (
              <button
                onClick={() => startFollowUp(followUpOffered)}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-base"
              >
                Try another on this topic
              </button>
            )}
            <button
              onClick={() => setFollowUp(null)}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-base"
            >
              Back to the quiz
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto w-full px-4 py-8">
      {practiceLabel && (
        <div className="mb-4 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3">
          <p className="text-xs font-bold uppercase tracking-wide text-orange-700">Weak-area practice</p>
          <p className="text-sm text-orange-800">{practiceLabel}</p>
        </div>
      )}

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question {currentIndex + 1} of {quiz.length}</span>
          <span>{score} correct so far</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex) / quiz.length) * 100}%` }}
          />
        </div>
      </div>

      <p className="text-xs text-indigo-500 font-semibold uppercase tracking-wide mb-3">
        Question {currentIndex + 1}
        {/* Topic names can give away the answer, so they only appear once the question is answered. */}
        {question.topic && answerState === 'answered' && <span className="text-gray-400 normal-case tracking-normal font-medium"> · {question.topic}</span>}
      </p>
      <QuestionView
        question={question}
        selectedIndex={selectedIndex}
        answered={answerState === 'answered'}
        onSelect={handleSelect}
      />

      {/* Explanation & Next */}
      {answerState === 'answered' && (
        <div className="space-y-4">
          <Feedback courseId={courseId} question={question} correct={selectedIndex === question.correctIndex} />
          {offered && (
            <button
              onClick={() => startFollowUp(offered)}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-base"
            >
              Try another question on this topic
            </button>
          )}
          <button
            onClick={handleNext}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-base"
          >
            {currentIndex + 1 >= quiz.length ? 'See Results' : 'Next Question →'}
          </button>
        </div>
      )}
    </div>
  );
}
