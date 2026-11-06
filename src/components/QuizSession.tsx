'use client';

import { useCallback, useEffect, useState } from 'react';
import type { BankQuestion, Course, QuizQuestion } from '@/types/study';
import { loadCourseBank } from '@/data/banks';
import { getQuestionHistory, getTopicSessions } from '@/lib/progress';
import { buildFreshQuiz, buildWeakAreaQuiz, findWeakTopics, pickFollowUp } from '@/lib/quiz-builder';
import { buildSummaryQuiz } from '@/lib/summary-quiz';
import QuizMode from '@/components/QuizMode';

type Mode = 'base' | 'fresh' | 'weak';

const WEAK_QUIZ_SIZE = 10;

interface QuizSessionProps {
  course: Course;
  progressUnitId: string;        // a unit id, or 'summary-quiz'
  unitId?: string;               // set for a unit quiz: scopes fresh and weak-area quizzes to this unit
  baseQuiz?: QuizQuestion[];     // the unit's authored quiz, shown first
  summaryCount?: number;         // set for the summary quiz: questions per attempt
  backHref?: string;
  backLabel?: string;
}

/**
 * Runs a quiz and everything around it: loads the course question bank, serves a fresh draw on
 * "New Questions", builds weak-area quizzes, and supplies same-topic follow-ups.
 */
export default function QuizSession({
  course,
  progressUnitId,
  unitId,
  baseQuiz,
  summaryCount,
  backHref,
  backLabel,
}: QuizSessionProps) {
  const courseId = course.id;
  const [bank, setBank] = useState<BankQuestion[] | null>(null);
  const [summaryUnitIds, setSummaryUnitIds] = useState<string[]>([]);
  const [quiz, setQuiz] = useState<QuizQuestion[] | null>(null);
  const [mode, setMode] = useState<Mode>('base');
  const [weakLabel, setWeakLabel] = useState('');
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    let cancelled = false;
    loadCourseBank(courseId)
      .then(b => {
        if (cancelled) return;
        setBank(b?.questions ?? []);
        setSummaryUnitIds(b?.summaryUnitIds ?? []);
      })
      .catch(() => {
        if (!cancelled) setBank([]);   // the quiz still works, just without extras
      });
    return () => { cancelled = true; };
  }, [courseId]);

  // The bank restricted to what this quiz page covers.
  const scopeBank = useCallback((all: BankQuestion[]): BankQuestion[] => {
    if (unitId) return all.filter(q => q.unitId === unitId);
    return all.filter(q => summaryUnitIds.includes(q.unitId));
  }, [unitId, summaryUnitIds]);

  const drawSummary = useCallback((all: BankQuestion[]): QuizQuestion[] => {
    const numberOf = new Map(course.units.map(u => [u.id, u.number]));
    const pool = scopeBank(all).map(q => ({ ...q, unitNumber: numberOf.get(q.unitId) ?? 0 }));
    return buildSummaryQuiz(courseId, pool, summaryCount ?? 0);
  }, [course.units, courseId, scopeBank, summaryCount]);

  // Sampling happens after mount, never during render (Math.random would break hydration).
  const start = useCallback((next: Mode, all: BankQuestion[], previous: QuizQuestion[] = []) => {
    const scoped = scopeBank(all);
    const history = getQuestionHistory(courseId);
    const avoid = previous.map(q => q.id);
    let built: QuizQuestion[] | null = null;
    let label = '';

    if (next === 'weak') {
      const weak = findWeakTopics(scoped, getTopicSessions(courseId));
      if (weak.length > 0) {
        built = buildWeakAreaQuiz(scoped, weak, WEAK_QUIZ_SIZE, history, avoid);
        const names = weak.slice().sort((a, b) => b.weight - a.weight).slice(0, 3).map(w => w.topic);
        label = `Focused on: ${names.join('; ')}${weak.length > 3 ? ` and ${weak.length - 3} more` : ''}`;
      } else {
        next = 'fresh';
      }
    }
    if (!built && next === 'base') {
      if (summaryCount) built = drawSummary(all);
      else {
        // Carry topic tags onto the authored quiz by id, keeping its authored order.
        const tagged = new Map(all.map(q => [q.id, q]));
        built = (baseQuiz ?? []).map(q => tagged.get(q.id) ?? q);
      }
    }
    if (!built && next === 'fresh') {
      if (summaryCount) built = drawSummary(all);
      else {
        const size = baseQuiz?.length ?? WEAK_QUIZ_SIZE;
        built = scoped.length > size ? buildFreshQuiz(scoped, size, history, avoid) : buildFreshQuiz(scoped, Math.min(size, scoped.length), history);
      }
    }
    setMode(next);
    setWeakLabel(label);
    setQuiz(built ?? baseQuiz ?? []);
    setRunId(r => r + 1);
  }, [scopeBank, courseId, summaryCount, drawSummary, baseQuiz]);

  useEffect(() => {
    if (bank !== null && quiz === null) start('base', bank);
  }, [bank, quiz, start]);

  const getFollowUp = useCallback(
    (question: QuizQuestion, excludeIds: string[]) =>
      bank ? pickFollowUp(bank, question, excludeIds, getQuestionHistory(courseId)) : null,
    [bank, courseId],
  );

  if (quiz === null || bank === null) {
    return <div className="flex justify-center py-20 text-gray-500">Building your quiz…</div>;
  }

  return (
    <QuizMode
      key={runId}
      courseId={courseId}
      unitId={progressUnitId}
      quiz={quiz}
      getFollowUp={getFollowUp}
      recordAttempt={mode !== 'weak'}
      practiceLabel={mode === 'weak' ? weakLabel : undefined}
      onRestart={() => start('fresh', bank, quiz)}
      onWeakAreas={() => start('weak', bank, quiz)}
      backHref={backHref}
      backLabel={backLabel}
    />
  );
}
