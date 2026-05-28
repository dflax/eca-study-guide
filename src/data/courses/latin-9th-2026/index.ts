import type { Course } from '@/types/study';
import { unit01Cases } from './units/unit-01-cases';
import { unit02Declensions } from './units/unit-02-declensions';
import { unit03Pronouns } from './units/unit-03-pronouns';
import { unit04Verbs } from './units/unit-04-verbs';
import { unit05Vocabulary } from './units/unit-05-vocabulary';
import { unit06SuffixesPrepNumbers } from './units/unit-06-suffixes-prep-numbers';

export const latinNinth2026: Course = {
  id: 'latin-9th-2026',
  displayName: '2025–2026 · Latin · Mr. Karlin',
  year: '2025-2026',
  subject: 'Latin',
  teacher: 'Mr. Karlin',
  school: 'Emet Classical Academy',
  description: 'Latin language and grammar: noun cases, 1st and 2nd declension, pronouns, verbs, vocabulary from Lingua Latina Chapters I–VIII, and translation.',
  color: 'amber',
  units: [
    unit01Cases,
    unit02Declensions,
    unit03Pronouns,
    unit04Verbs,
    unit05Vocabulary,
    unit06SuffixesPrepNumbers,
  ],
};
