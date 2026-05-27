'use client';

import { useState, useEffect } from 'react';
import { allCourses } from '@/data/index';
import CourseCard from '@/components/CourseCard';
import { getUserProfile } from '@/lib/progress';

export default function LibraryPage() {
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const profile = getUserProfile();
    if (profile) setUserName(profile.name);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-full">ECA</span>
                <span className="text-gray-500 text-sm font-medium">Emet Classical Academy</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
                Study Guide
              </h1>
              <p className="text-gray-500 text-lg max-w-xl">
                {userName
                  ? `Welcome back, ${userName}! Pick up where you left off.`
                  : 'Interactive exam prep: notes, flashcards, and quizzes for every unit.'}
              </p>
            </div>
            {userName && (
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl px-6 py-4 text-center">
                <p className="text-indigo-400 text-xs font-medium uppercase tracking-wide mb-1">Studying as</p>
                <p className="text-indigo-700 text-xl font-bold">{userName}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Course Library */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
          <span className="text-sm text-gray-500">{allCourses.length} course{allCourses.length !== 1 ? 's' : ''} available</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {allCourses.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-4xl mb-4">📚</p>
            <p className="text-lg">No courses available yet.</p>
          </div>
        )}
      </div>
    </main>
  );
}
