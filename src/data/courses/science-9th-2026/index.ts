import type { Course } from '@/types/study';
import { unit01Energy } from './units/unit-01-energy';
import { unit02Waves } from './units/unit-02-waves';
import { unit03AtomicTheory } from './units/unit-03-atomic-theory';
import { unit04AtomicStructure } from './units/unit-04-atomic-structure';
import { unit05Electrons } from './units/unit-05-electrons';
import { unit06PeriodicTrends } from './units/unit-06-periodic-trends';
import { unit07Bonding } from './units/unit-07-bonding';
import { unit08Vsepr } from './units/unit-08-vsepr';
import { unit09Reactions } from './units/unit-09-reactions';
import { unit10Stoichiometry } from './units/unit-10-stoichiometry';
import { unit11Kmt } from './units/unit-11-kmt';
import { unit12LabSkills } from './units/unit-12-lab-skills';

export const scienceNinth2026: Course = {
  id: 'science-9th-2026',
  displayName: '2025–2026 · 9th Grade Science · Dr. Shulman',
  year: '2025-2026',
  subject: '9th Grade Science',
  teacher: 'Dr. Shulman',
  school: 'Emet Classical Academy',
  description: 'Comprehensive 9th grade science covering energy, waves, atomic theory, bonding, reactions, stoichiometry, and more. Prepare for your final exam with notes, flashcards, and quizzes for all 12 units.',
  color: 'indigo',
  units: [
    unit01Energy,
    unit02Waves,
    unit03AtomicTheory,
    unit04AtomicStructure,
    unit05Electrons,
    unit06PeriodicTrends,
    unit07Bonding,
    unit08Vsepr,
    unit09Reactions,
    unit10Stoichiometry,
    unit11Kmt,
    unit12LabSkills,
  ],
};
