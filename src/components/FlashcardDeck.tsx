'use client';

import { useState, useEffect } from 'react';
import type { Flashcard } from '@/types/study';
import { getUnitProgress, markFlashcardLearned } from '@/lib/progress';

interface FlashcardDeckProps {
  courseId: string;
  unitId: string;
  flashcards: Flashcard[];
}

export default function FlashcardDeck({ courseId, unitId, flashcards }: FlashcardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [learnedIds, setLearnedIds] = useState<Set<string>>(new Set());
  const [sessionReviewed, setSessionReviewed] = useState<Set<string>>(new Set());
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prog = getUnitProgress(courseId, unitId);
    setLearnedIds(new Set(prog.flashcardsLearned));
  }, [courseId, unitId]);

  if (flashcards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <p className="text-lg">No flashcards available for this unit.</p>
      </div>
    );
  }

  const card = flashcards[currentIndex];
  const progress = Math.round(((currentIndex) / flashcards.length) * 100);

  function handleFlip() {
    setIsFlipped(f => !f);
  }

  function handleGotIt() {
    markFlashcardLearned(courseId, unitId, card.id);
    setLearnedIds(prev => new Set([...prev, card.id]));
    setSessionReviewed(prev => new Set([...prev, card.id]));
    advance();
  }

  function handleReviewAgain() {
    setSessionReviewed(prev => new Set([...prev, card.id]));
    advance();
  }

  function advance() {
    setIsFlipped(false);
    if (currentIndex + 1 >= flashcards.length) {
      setDone(true);
    } else {
      setCurrentIndex(i => i + 1);
    }
  }

  function handleRestart() {
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionReviewed(new Set());
    setDone(false);
  }

  if (done) {
    const learnedCount = flashcards.filter(f => learnedIds.has(f.id)).length;
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Deck Complete!</h2>
        <p className="text-gray-600 mb-2">
          You&apos;ve reviewed all {flashcards.length} cards.
        </p>
        <p className="text-indigo-700 font-semibold text-lg mb-8">
          {learnedCount} / {flashcards.length} marked as learned
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={handleRestart}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
          >
            Review Again
          </button>
          <a
            href={`/${courseId}/${unitId}`}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-xl transition-colors"
          >
            Back to Unit
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center px-4 py-8 max-w-2xl mx-auto w-full">
      {/* Progress */}
      <div className="w-full mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Card {currentIndex + 1} of {flashcards.length}</span>
          <span>{learnedIds.size} learned total</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Already-learned badge */}
      {learnedIds.has(card.id) && (
        <div className="mb-3 bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full border border-green-200">
          Already learned
        </div>
      )}

      {/* Flashcard */}
      <div className="flashcard-container w-full h-64 mb-6" onClick={handleFlip}>
        <div className={`flashcard-inner w-full h-full ${isFlipped ? 'flipped' : ''}`}>
          {/* Front */}
          <div className="flashcard-front bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center justify-center p-8 cursor-pointer">
            <p className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-4">Question / Term</p>
            <p className="text-xl font-semibold text-gray-900 text-center leading-relaxed">{card.front}</p>
            <p className="text-sm text-gray-400 mt-6">Tap to flip</p>
          </div>
          {/* Back */}
          <div className="flashcard-back bg-indigo-600 rounded-2xl shadow-lg flex flex-col items-center justify-center p-8 cursor-pointer">
            <p className="text-xs uppercase tracking-widest text-indigo-200 font-semibold mb-4">Answer / Definition</p>
            <p className="text-lg font-medium text-white text-center leading-relaxed whitespace-pre-line">{card.back}</p>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 w-full justify-center">
        <button
          onClick={handleGotIt}
          className="flex-1 max-w-[200px] bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-base"
        >
          Got it
        </button>
        <button
          onClick={handleReviewAgain}
          className="flex-1 max-w-[200px] bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors text-base"
        >
          Review again
        </button>
      </div>

      {/* Hint */}
      {!isFlipped && (
        <p className="text-sm text-gray-400 mt-4">Tap the card to see the answer first</p>
      )}
    </div>
  );
}
