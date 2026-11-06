'use client';

import { useState, useEffect, use } from 'react';
import { notFound, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getCourse, getUnit } from '@/data/index';
import Header from '@/components/Header';
import FlashcardDeck from '@/components/FlashcardDeck';
import { getUserProfile } from '@/lib/progress';

interface FlashcardsPageProps {
  params: Promise<{ courseId: string; unitId: string }>;
}

export default function FlashcardsPage({ params }: FlashcardsPageProps) {
  const { courseId, unitId } = use(params);
  const course = getCourse(courseId);
  const unit = getUnit(courseId, unitId);

  const searchParams = useSearchParams();
  const [userName, setUserName] = useState('');

  if (!course || !unit) notFound();

  useEffect(() => {
    const profile = getUserProfile();
    if (profile) setUserName(profile.name);
  }, []);

  // ?cards=id1,id2 narrows the deck to one topic (linked from a missed quiz question).
  const wanted = new Set((searchParams.get('cards') ?? '').split(',').filter(Boolean));
  const focused = unit.flashcards.filter(f => wanted.has(f.id));
  const isFocused = focused.length > 0;
  const cards = isFocused ? focused : unit.flashcards;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        breadcrumbs={[
          { label: 'Library', href: '/' },
          { label: course.displayName, href: `/${courseId}` },
          { label: `Unit ${unit.number}: ${unit.title}`, href: `/${courseId}/${unitId}` },
          { label: 'Flashcards' },
        ]}
        userName={userName}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🃏</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Flashcards</h1>
            <p className="text-gray-500 text-sm">Unit {unit.number}: {unit.title} — {cards.length} cards</p>
          </div>
        </div>
      </div>

      <FlashcardDeck
        key={isFocused ? 'focused' : 'all'}
        courseId={courseId}
        unitId={unitId}
        flashcards={cards}
        focusLabel={isFocused ? 'this topic' : undefined}
      />
    </div>
  );
}
