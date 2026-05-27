'use client';

import { useState } from 'react';
import type { QuizQuestion } from '@/types/study';
import { recordQuizAttempt } from '@/lib/progress';

interface QuizModeProps {
  courseId: string;
  unitId: string;
  quiz: QuizQuestion[];
}

type AnswerState = 'unanswered' | 'answered';

export default function QuizMode({ courseId, unitId, quiz }: QuizModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered');
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (quiz.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <p className="text-lg">No quiz questions available for this unit.</p>
      </div>
    );
  }

  const question = quiz[currentIndex];
  const optionLabels = ['A', 'B', 'C', 'D'];

  function handleSelect(idx: number) {
    if (answerState === 'answered') return;
    setSelectedIndex(idx);
    setAnswerState('answered');
    if (idx === question.correctIndex) {
      setScore(s => s + 1);
    }
  }

  function handleNext() {
    setSelectedIndex(null);
    setAnswerState('unanswered');
    if (currentIndex + 1 >= quiz.length) {
      const finalScore = selectedIndex === question.correctIndex ? score : score;
      recordQuizAttempt(courseId, unitId, finalScore, quiz.length);
      setFinished(true);
    } else {
      setCurrentIndex(i => i + 1);
    }
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setAnswerState('unanswered');
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const percentage = Math.round((score / quiz.length) * 100);
    const passed = percentage >= 70;
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center max-w-lg mx-auto">
        <div className="text-6xl mb-6">{passed ? '🌟' : '💪'}</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {passed ? 'Great job!' : 'Keep studying!'}
        </h2>
        <p className="text-gray-600 mb-6">Quiz complete</p>
        <div className={`rounded-2xl px-10 py-6 mb-8 ${passed ? 'bg-green-50 border-2 border-green-300' : 'bg-orange-50 border-2 border-orange-300'}`}>
          <p className={`text-5xl font-bold mb-1 ${passed ? 'text-green-700' : 'text-orange-600'}`}>
            {percentage}%
          </p>
          <p className={`text-lg ${passed ? 'text-green-600' : 'text-orange-500'}`}>
            {score} / {quiz.length} correct
          </p>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={handleRestart}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
          >
            Try Again
          </button>
          <a
            href={`/${courseId}/${unitId}`}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-xl transition-colors"
          >
            Back to Unit
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto w-full px-4 py-8">
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

      {/* Question */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 mb-6">
        <p className="text-xs text-indigo-500 font-semibold uppercase tracking-wide mb-3">Question {currentIndex + 1}</p>
        <p className="text-lg font-semibold text-gray-900 leading-relaxed">{question.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, idx) => {
          let buttonClass = 'w-full text-left px-5 py-4 rounded-xl border-2 font-medium transition-all duration-150 flex items-start gap-3 ';
          if (answerState === 'unanswered') {
            buttonClass += 'bg-white border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 text-gray-800 cursor-pointer';
          } else {
            if (idx === question.correctIndex) {
              buttonClass += 'bg-green-50 border-green-500 text-green-800';
            } else if (idx === selectedIndex) {
              buttonClass += 'bg-red-50 border-red-400 text-red-800';
            } else {
              buttonClass += 'bg-gray-50 border-gray-200 text-gray-500 cursor-not-allowed';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={buttonClass}
              disabled={answerState === 'answered'}
            >
              <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold ${
                answerState === 'unanswered'
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

      {/* Explanation & Next */}
      {answerState === 'answered' && (
        <div className="space-y-4">
          <div className={`rounded-xl p-4 border-l-4 ${selectedIndex === question.correctIndex ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-400'}`}>
            <p className={`text-sm font-bold mb-1 ${selectedIndex === question.correctIndex ? 'text-green-700' : 'text-red-700'}`}>
              {selectedIndex === question.correctIndex ? 'Correct!' : 'Incorrect'}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">{question.explanation}</p>
          </div>
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
