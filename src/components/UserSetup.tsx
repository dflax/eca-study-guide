'use client';

import { useState, useEffect } from 'react';
import { getUserProfile, setUserProfile } from '@/lib/progress';

export default function UserSetup() {
  const [showSetup, setShowSetup] = useState(false);
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const profile = getUserProfile();
    if (!profile) {
      setShowSetup(true);
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name to continue.');
      return;
    }
    setUserProfile(name.trim());
    setShowSetup(false);
  }

  if (!showSetup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-950/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full mx-4 text-center">
        <div className="mb-6">
          <div className="text-5xl mb-4">📚</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ECA Study Guide</h1>
          <p className="text-gray-500 text-base">Emet Classical Academy — 9th Grade Exam Prep</p>
        </div>
        <div className="mb-6">
          <p className="text-gray-700 text-lg mb-1">Welcome! Before we start,</p>
          <p className="text-gray-700 text-lg font-medium">what&apos;s your name?</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); setError(''); }}
            placeholder="Enter your name..."
            className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 text-center"
            autoFocus
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition-colors"
          >
            Start Studying
          </button>
        </form>
      </div>
    </div>
  );
}
