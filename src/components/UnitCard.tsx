'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Unit } from '@/types/study';
import { getUnitProgress } from '@/lib/progress';

interface UnitCardProps {
  courseId: string;
  unit: Unit;
}

export default function UnitCard({ courseId, unit }: UnitCardProps) {
  const [mounted, setMounted] = useState(false);
  const [notesViewed, setNotesViewed] = useState(false);
  const [flashcardsLearned, setFlashcardsLearned] = useState(0);
  const [bestScore, setBestScore] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    const prog = getUnitProgress(courseId, unit.id);
    setNotesViewed(prog.notesViewed);
    setFlashcardsLearned(prog.flashcardsLearned.length);
    if (prog.quizAttempts.length > 0) {
      setBestScore(Math.max(...prog.quizAttempts.map(a => a.percentage)));
    }
  }, [courseId, unit.id]);

  const totalFlashcards = unit.flashcards.length;

  return (
    <Link href={`/${courseId}/${unit.id}`} className="block group">
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 p-5 h-full">
        <div className="flex items-start gap-3 mb-3">
          <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">
            {unit.number}
          </span>
          <h3 className="text-base font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors leading-snug">
            {unit.title}
          </h3>
        </div>

        {/* Progress indicators */}
        <div className="space-y-2 mt-3">
          {/* Notes */}
          <div className="flex items-center gap-2 text-sm">
            <span className={`w-2 h-2 rounded-full shrink-0 ${mounted && notesViewed ? 'bg-green-500' : 'bg-gray-300'}`} />
            <span className={mounted && notesViewed ? 'text-green-700' : 'text-gray-500'}>
              Notes {mounted ? (notesViewed ? '— viewed' : '— not viewed') : ''}
            </span>
          </div>
          {/* Flashcards */}
          <div className="flex items-center gap-2 text-sm">
            <span className={`w-2 h-2 rounded-full shrink-0 ${mounted && flashcardsLearned > 0 ? (flashcardsLearned >= totalFlashcards ? 'bg-green-500' : 'bg-indigo-400') : 'bg-gray-300'}`} />
            <span className={mounted && flashcardsLearned > 0 ? 'text-indigo-700' : 'text-gray-500'}>
              Flashcards {mounted ? `— ${flashcardsLearned}/${totalFlashcards} learned` : `— ${totalFlashcards} cards`}
            </span>
          </div>
          {/* Quiz */}
          <div className="flex items-center gap-2 text-sm">
            <span className={`w-2 h-2 rounded-full shrink-0 ${mounted && bestScore !== null ? (bestScore >= 70 ? 'bg-green-500' : 'bg-orange-400') : 'bg-gray-300'}`} />
            <span className={mounted && bestScore !== null ? (bestScore >= 70 ? 'text-green-700' : 'text-orange-600') : 'text-gray-500'}>
              Quiz {mounted ? (bestScore !== null ? `— best: ${bestScore}%` : '— not taken') : ''}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
