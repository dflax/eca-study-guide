'use client';

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCourse } from '@/data/index';
import Header from '@/components/Header';
import UnitCard from '@/components/UnitCard';
import ProgressRing from '@/components/ProgressRing';
import { getUserProfile, getUnitProgress } from '@/lib/progress';

const SUMMARY_UNIT_ID = 'summary-quiz';

interface CoursePageProps {
  params: Promise<{ courseId: string }>;
}

export default function CoursePage({ params }: CoursePageProps) {
  const { courseId } = use(params);
  const course = getCourse(courseId);

  const [userName, setUserName] = useState('');
  const [overallPercent, setOverallPercent] = useState(0);
  const [unitsStarted, setUnitsStarted] = useState(0);
  const [summaryBest, setSummaryBest] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  if (!course) notFound();

  useEffect(() => {
    setMounted(true);
    const profile = getUserProfile();
    if (profile) setUserName(profile.name);

    let completed = 0;
    let started = 0;
    for (const unit of course.units) {
      const prog = getUnitProgress(courseId, unit.id);
      if (prog.notesViewed || prog.flashcardsLearned.length > 0 || prog.quizAttempts.length > 0) {
        started++;
      }
      const notesOk = prog.notesViewed;
      const flashcardsOk = unit.flashcards.length > 0
        ? prog.flashcardsLearned.length / unit.flashcards.length >= 0.8
        : true;
      const quizOk = prog.quizAttempts.length > 0 &&
        Math.max(...prog.quizAttempts.map(a => a.percentage)) >= 70;
      if (notesOk && flashcardsOk && quizOk) completed++;
    }
    const summaryAttempts = getUnitProgress(courseId, SUMMARY_UNIT_ID).quizAttempts;
    setSummaryBest(summaryAttempts.length > 0 ? Math.max(...summaryAttempts.map(a => a.percentage)) : null);
    setOverallPercent(course.units.length > 0 ? (completed / course.units.length) * 100 : 0);
    setUnitsStarted(started);
  }, [course, courseId]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        breadcrumbs={[
          { label: 'Library', href: '/' },
          { label: course.displayName },
        ]}
        userName={userName}
      />

      {/* Course Hero */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  {course.subject}
                </span>
                <span className="text-gray-400 text-sm">{course.year}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{course.displayName}</h1>
              <p className="text-gray-500">{course.school}</p>
              <p className="text-gray-600 mt-3 max-w-2xl">{course.description}</p>
            </div>
            {mounted && (
              <div className="shrink-0 flex flex-col items-center gap-2">
                <ProgressRing percent={overallPercent} size={80} strokeWidth={7} />
                <p className="text-xs text-gray-500 text-center">
                  {unitsStarted} / {course.units.length} units started
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Units Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {course.summaryQuiz && (
          <Link href={`/${courseId}/summary-quiz`} className="block group mb-10">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 p-5 sm:p-6 flex items-center gap-5 flex-wrap">
              <span className="text-4xl">🎯</span>
              <div className="flex-1 min-w-[16rem]">
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
                  {course.summaryQuiz.title}
                </h2>
                <p className="text-gray-500 text-sm mt-1">{course.summaryQuiz.description}</p>
              </div>
              <div className="flex items-center gap-3">
                {mounted && summaryBest !== null && (
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${summaryBest >= 70 ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-500'}`}>
                    Best: {summaryBest}%
                  </span>
                )}
                <span className="bg-indigo-600 group-hover:bg-indigo-700 text-white font-semibold text-sm py-2.5 px-5 rounded-xl transition-colors">
                  {summaryBest !== null ? 'Take Another' : 'Start Quiz'}
                </span>
              </div>
            </div>
          </Link>
        )}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Units</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {course.units.map(unit => (
            <UnitCard key={unit.id} courseId={courseId} unit={unit} />
          ))}
        </div>
      </div>
    </div>
  );
}
