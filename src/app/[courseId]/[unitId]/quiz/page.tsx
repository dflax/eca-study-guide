'use client';

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCourse, getUnit } from '@/data/index';
import Header from '@/components/Header';
import QuizMode from '@/components/QuizMode';
import { getUserProfile } from '@/lib/progress';

interface QuizPageProps {
  params: Promise<{ courseId: string; unitId: string }>;
}

export default function QuizPage({ params }: QuizPageProps) {
  const { courseId, unitId } = use(params);
  const course = getCourse(courseId);
  const unit = getUnit(courseId, unitId);

  const [userName, setUserName] = useState('');

  if (!course || !unit) notFound();

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
          { label: `Unit ${unit.number}: ${unit.title}`, href: `/${courseId}/${unitId}` },
          { label: 'Quiz' },
        ]}
        userName={userName}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl">✅</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Quiz</h1>
            <p className="text-gray-500 text-sm">Unit {unit.number}: {unit.title} — {unit.quiz.length} questions</p>
          </div>
        </div>
      </div>

      <QuizMode courseId={courseId} unitId={unitId} quiz={unit.quiz} />
    </div>
  );
}
