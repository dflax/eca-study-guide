'use client';

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCourse, getUnit } from '@/data/index';
import Header from '@/components/Header';
import { getUserProfile, getUnitProgress } from '@/lib/progress';

interface UnitHubPageProps {
  params: Promise<{ courseId: string; unitId: string }>;
}

export default function UnitHubPage({ params }: UnitHubPageProps) {
  const { courseId, unitId } = use(params);
  const course = getCourse(courseId);
  const unit = getUnit(courseId, unitId);

  const [userName, setUserName] = useState('');
  const [notesViewed, setNotesViewed] = useState(false);
  const [flashcardsLearned, setFlashcardsLearned] = useState(0);
  const [bestScore, setBestScore] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  if (!course || !unit) notFound();

  useEffect(() => {
    setMounted(true);
    const profile = getUserProfile();
    if (profile) setUserName(profile.name);
    const prog = getUnitProgress(courseId, unitId);
    setNotesViewed(prog.notesViewed);
    setFlashcardsLearned(prog.flashcardsLearned.length);
    if (prog.quizAttempts.length > 0) {
      setBestScore(Math.max(...prog.quizAttempts.map(a => a.percentage)));
    }
  }, [courseId, unitId]);

  const totalFlashcards = unit.flashcards.length;
  const totalQuestions = unit.quiz.length;

  const modes = [
    {
      id: 'notes',
      title: 'Study Notes',
      description: 'Review key concepts and detailed explanations for this unit.',
      icon: '📖',
      href: `/${courseId}/${unitId}/notes`,
      status: mounted
        ? (notesViewed ? { label: 'Viewed', color: 'text-green-600', bg: 'bg-green-50' } : { label: 'Not viewed', color: 'text-gray-500', bg: 'bg-gray-50' })
        : { label: '...', color: 'text-gray-400', bg: 'bg-gray-50' },
      buttonLabel: notesViewed ? 'Review Notes' : 'Start Reading',
      buttonClass: notesViewed
        ? 'bg-green-600 hover:bg-green-700 text-white'
        : 'bg-indigo-600 hover:bg-indigo-700 text-white',
    },
    {
      id: 'flashcards',
      title: 'Flashcards',
      description: `Test your recall with ${totalFlashcards} flashcards for this unit.`,
      icon: '🃏',
      href: `/${courseId}/${unitId}/flashcards`,
      status: mounted
        ? (flashcardsLearned > 0
            ? { label: `${flashcardsLearned} / ${totalFlashcards} learned`, color: flashcardsLearned >= totalFlashcards ? 'text-green-600' : 'text-indigo-600', bg: flashcardsLearned >= totalFlashcards ? 'bg-green-50' : 'bg-indigo-50' }
            : { label: 'Not started', color: 'text-gray-500', bg: 'bg-gray-50' })
        : { label: `${totalFlashcards} cards`, color: 'text-gray-400', bg: 'bg-gray-50' },
      buttonLabel: flashcardsLearned > 0 ? 'Continue' : 'Start Flashcards',
      buttonClass: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    },
    {
      id: 'quiz',
      title: 'Quiz',
      description: `Check your understanding with ${totalQuestions} multiple-choice questions.`,
      icon: '✅',
      href: `/${courseId}/${unitId}/quiz`,
      status: mounted
        ? (bestScore !== null
            ? { label: `Best: ${bestScore}%`, color: bestScore >= 70 ? 'text-green-600' : 'text-orange-500', bg: bestScore >= 70 ? 'bg-green-50' : 'bg-orange-50' }
            : { label: 'Not taken', color: 'text-gray-500', bg: 'bg-gray-50' })
        : { label: `${totalQuestions} questions`, color: 'text-gray-400', bg: 'bg-gray-50' },
      buttonLabel: bestScore !== null ? 'Retake Quiz' : 'Start Quiz',
      buttonClass: bestScore !== null && bestScore >= 70
        ? 'bg-green-600 hover:bg-green-700 text-white'
        : 'bg-indigo-600 hover:bg-indigo-700 text-white',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        breadcrumbs={[
          { label: 'Library', href: '/' },
          { label: course.displayName, href: `/${courseId}` },
          { label: `Unit ${unit.number}: ${unit.title}` },
        ]}
        userName={userName}
      />

      {/* Unit hero */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 text-lg font-bold">
              {unit.number}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{unit.title}</h1>
          </div>
          <p className="text-gray-600">{unit.description}</p>
        </div>
      </div>

      {/* Mode cards */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-lg font-semibold text-gray-700 mb-6">Choose a study mode:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {modes.map(mode => (
            <Link key={mode.id} href={mode.href} className="block group">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 border border-gray-100 p-6 h-full flex flex-col">
                <div className="text-4xl mb-4">{mode.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">
                  {mode.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                  {mode.description}
                </p>
                {/* Status badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${mode.status.bg} ${mode.status.color} mb-4`}>
                  {mode.status.label}
                </div>
                {/* CTA button */}
                <div className={`w-full text-center py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors ${mode.buttonClass}`}>
                  {mode.buttonLabel}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link href={`/${courseId}`} className="text-gray-500 hover:text-indigo-600 text-sm font-medium transition-colors">
            ← Back to {course.displayName}
          </Link>
        </div>
      </div>
    </div>
  );
}
