'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Course } from '@/types/study';
import { getUnitProgress } from '@/lib/progress';
import ProgressRing from './ProgressRing';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
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
        <div className="h-2 bg-indigo-600" />
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
