import type { Course } from '@/types/study';
import { unit01Vocabulary } from './units/unit-01-vocabulary';
import { unit02Conversation } from './units/unit-02-conversation';

export const hebrewNinth2026: Course = {
  id: 'hebrew-9th-2026',
  displayName: '2025–2026 · Hebrew · Morah Gabay',
  year: '2025-2026',
  subject: 'Hebrew',
  teacher: 'Morah Gabay',
  school: 'Emet Classical Academy',
  description: 'Modern Hebrew language: vocabulary, conversation, and writing. Focuses on self-introduction, city vocabulary, and verbal noun (שם פועל) forms.',
  color: 'emerald',
  units: [
    unit01Vocabulary,
    unit02Conversation,
  ],
};
