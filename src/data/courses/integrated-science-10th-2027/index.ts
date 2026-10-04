import type { Course } from '@/types/study';
import { unit01WaterAndBonding } from './units/unit-01-water-and-bonding';
import { unit02MacromoleculesFunctionalGroups } from './units/unit-02-macromolecules-functional-groups';
import { unit03Proteins } from './units/unit-03-proteins';
import { unit04NucleicAcids } from './units/unit-04-nucleic-acids';
import { unit05Carbohydrates } from './units/unit-05-carbohydrates';
import { unit06Lipids } from './units/unit-06-lipids';
import { unit07ComparingMacromolecules } from './units/unit-07-comparing-macromolecules';

export const integratedScienceTenth2027: Course = {
  id: 'integrated-science-10th-2027',
  displayName: '2026–2027 · 10th Grade Integrated Science II',
  year: '2026-2027',
  category: 'school-year',
  subject: '10th Grade Integrated Science II',
  teacher: 'Emet Classical Academy',
  school: 'Emet Classical Academy',
  description: 'Unit 1 review, The Chemistry of Life: water and bonding, functional groups, proteins, nucleic acids, carbohydrates, and lipids. Notes, flashcards, and quizzes built from the Unit 1 study guide.',
  color: 'rose',
  units: [
    unit01WaterAndBonding,
    unit02MacromoleculesFunctionalGroups,
    unit03Proteins,
    unit04NucleicAcids,
    unit05Carbohydrates,
    unit06Lipids,
    unit07ComparingMacromolecules,
  ],
};
