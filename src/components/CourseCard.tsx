'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Course } from '@/types/study';
import { getUnitProgress } from '@/lib/progress';
import ProgressRing from './ProgressRing';

interface CourseCardProps {
  course: Course;
  isFavorite?: boolean;
  onToggleFavorite?: (courseId: string) => void;
}

export default function CourseCard({ course, isFavorite = false, onToggleFavorite }: CourseCardProps) {
  const [overallPercent, setOverallPercent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let completedUnits = 0;
    for (const unit of course.units) {
      const prog = getUnitProgress(course.id, unit.id);
      const notesOk = prog.notesViewed;
      const flashcardsOk = unit.flashcards.length > 0
        ? prog.flashcardsLearned.length / unit.flashcards.length >= 0.8
        : true;
      const quizOk = prog.quizAttempts.length > 0 &&
        Math.max(...prog.quizAttempts.map(a => a.percentage)) >= 70;
      if (notesOk && flashcardsOk && quizOk) completedUnits++;
    }
    setOverallPercent(course.units.length > 0 ? (completedUnits / course.units.length) * 100 : 0);
  }, [course]);

  return (
    <Link href={`/${course.id}`} className="block group">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden border border-gray-100 h-full">
        {/* Top color bar */}
        <div className="h-2 bg-indigo-600 relative">
          {onToggleFavorite && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onToggleFavorite(course.id);
              }}
              aria-label={isFavorite ? 'Remove from My Courses' : 'Add to My Courses'}
              aria-pressed={isFavorite}
              className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/90 shadow-sm hover:bg-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill={isFavorite ? '#ef4444' : 'none'}
                stroke={isFavorite ? '#ef4444' : '#9ca3af'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors leading-tight">
                {course.displayName}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{course.school}</p>
            </div>
            {mounted && (
              <div className="shrink-0">
                <ProgressRing percent={overallPercent} size={52} strokeWidth={5} />
              </div>
            )}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{course.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {course.units.length} units
            </span>
            <span className="text-indigo-600 text-sm font-medium group-hover:underline">
              Start studying &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
