'use client';

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCourse, getUnit } from '@/data/index';
import Header from '@/components/Header';
import NotesView from '@/components/NotesView';
import { getUserProfile } from '@/lib/progress';

interface NotesPageProps {
  params: Promise<{ courseId: string; unitId: string }>;
}

export default function NotesPage({ params }: NotesPageProps) {
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
          { label: 'Notes' },
        ]}
        userName={userName}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📖</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Study Notes</h1>
            <p className="text-gray-500 text-sm">Unit {unit.number}: {unit.title}</p>
          </div>
        </div>
      </div>

      <NotesView courseId={courseId} unitId={unitId} notes={unit.notes} />

      {/* Navigation */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-4">
          <Link
            href={`/${courseId}/${unitId}`}
            className="text-gray-500 hover:text-indigo-600 text-sm font-medium transition-colors"
          >
            ← Back to Unit Hub
          </Link>
          <Link
            href={`/${courseId}/${unitId}/flashcards`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors text-sm"
          >
            Practice Flashcards →
          </Link>
        </div>
      </div>
    </div>
  );
}
