'use client';

import { useEffect } from 'react';
import type { NoteSection } from '@/types/study';
import { markNotesViewed } from '@/lib/progress';

interface NotesViewProps {
  courseId: string;
  unitId: string;
  notes: NoteSection[];
}

export default function NotesView({ courseId, unitId, notes }: NotesViewProps) {
  useEffect(() => {
    markNotesViewed(courseId, unitId);
  }, [courseId, unitId]);

  if (notes.length === 0) {
    return (
      <div className="py-12 text-center text-gray-500">
        <p>No notes available for this unit yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      {notes.map((section, i) => (
        <section key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
            {section.heading}
          </h2>
          <div className="prose prose-gray max-w-none">
            {section.content.split('\n').map((paragraph, j) => {
              if (paragraph.trim() === '') return null;
              return (
                <p key={j} className="text-gray-700 leading-relaxed mb-3 last:mb-0">
                  {paragraph}
                </p>
              );
            })}
          </div>
          {section.bullets && section.bullets.length > 0 && (
            <ul className="mt-4 space-y-2">
              {section.bullets.map((bullet, k) => (
                <li key={k} className="flex items-start gap-2">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
