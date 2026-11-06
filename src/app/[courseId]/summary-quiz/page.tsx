'use client';

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import { getCourse } from '@/data/index';
import Header from '@/components/Header';
import QuizSession from '@/components/QuizSession';
import { getUserProfile } from '@/lib/progress';

const SUMMARY_UNIT_ID = 'summary-quiz';

interface SummaryQuizPageProps {
  params: Promise<{ courseId: string }>;
}

export default function SummaryQuizPage({ params }: SummaryQuizPageProps) {
  const { courseId } = use(params);
  const course = getCourse(courseId);

  const [userName, setUserName] = useState('');

  if (!course || !course.summaryQuiz) notFound();
  const config = course.summaryQuiz;

  useEffect(() => {
    const profile = getUserProfile();
    if (profile) setUserName(profile.name);
  }, []);

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

      <QuizSession
        course={course}
        progressUnitId={SUMMARY_UNIT_ID}
        summaryCount={config.questionCount}
        backHref={`/${courseId}`}
        backLabel="Back to Course"
      />
    </div>
  );
}
