'use client';

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import { getCourse } from '@/data/index';
import { getSummaryPool } from '@/data/summary-quizzes';
import Header from '@/components/Header';
import QuizMode from '@/components/QuizMode';
import { getUserProfile } from '@/lib/progress';
import { buildSummaryQuiz } from '@/lib/summary-quiz';
import type { QuizQuestion } from '@/types/study';

const SUMMARY_UNIT_ID = 'summary-quiz';

interface SummaryQuizPageProps {
  params: Promise<{ courseId: string }>;
}

export default function SummaryQuizPage({ params }: SummaryQuizPageProps) {
  const { courseId } = use(params);
  const course = getCourse(courseId);
  const pool = getSummaryPool(courseId);

  const [userName, setUserName] = useState('');
  const [quiz, setQuiz] = useState<QuizQuestion[] | null>(null);
  const [attempt, setAttempt] = useState(0);

  if (!course || !course.summaryQuiz || !pool) notFound();
  const config = course.summaryQuiz;

  useEffect(() => {
    const profile = getUserProfile();
    if (profile) setUserName(profile.name);
  }, []);

  // Sample after mount (Math.random during render would cause a hydration mismatch).
  // Bumping `attempt` draws a fresh set.
  useEffect(() => {
    setQuiz(buildSummaryQuiz(courseId, pool, config.questionCount));
  }, [courseId, pool, config.questionCount, attempt]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        breadcrumbs={[
          { label: 'Library', href: '/' },
          { label: course.displayName, href: `/${courseId}` },
          { label: config.title },
        ]}
        userName={userName}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎯</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{config.title}</h1>
            <p className="text-gray-500 text-sm">
              {config.questionCount} questions from all {course.units.length} units — a new set every time
            </p>
          </div>
        </div>
      </div>

      {quiz ? (
        <QuizMode
          key={attempt}
          courseId={courseId}
          unitId={SUMMARY_UNIT_ID}
          quiz={quiz}
          onRestart={() => {
            setQuiz(null);
            setAttempt(a => a + 1);
          }}
          backHref={`/${courseId}`}
          backLabel="Back to Course"
        />
      ) : (
        <div className="flex justify-center py-20 text-gray-500">Building your quiz…</div>
      )}
    </div>
  );
}
