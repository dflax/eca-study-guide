import type { PoolQuestion, QuizQuestion } from '@/types/study';
import { unit01WaterAndBonding } from '../units/unit-01-water-and-bonding';
import { unit02MacromoleculesFunctionalGroups } from '../units/unit-02-macromolecules-functional-groups';
import { unit03Proteins } from '../units/unit-03-proteins';
import { unit04NucleicAcids } from '../units/unit-04-nucleic-acids';
import { unit05Carbohydrates } from '../units/unit-05-carbohydrates';
import { unit06Lipids } from '../units/unit-06-lipids';
import { unit07ComparingMacromolecules } from '../units/unit-07-comparing-macromolecules';
import { unit01Pool } from './unit-01';
import { unit02Pool } from './unit-02';
import { unit03Pool } from './unit-03';
import { unit04Pool } from './unit-04';
import { unit05Pool } from './unit-05';
import { unit06Pool } from './unit-06';
import { unit07Pool } from './unit-07';

// Each unit contributes its existing quiz questions plus extra questions written
// for the summary pool, so the pool is 500 questions in total.
const sources: { unitNumber: number; questions: QuizQuestion[] }[] = [
  { unitNumber: 1, questions: [...unit01WaterAndBonding.quiz, ...unit01Pool] },
  { unitNumber: 2, questions: [...unit02MacromoleculesFunctionalGroups.quiz, ...unit02Pool] },
  { unitNumber: 3, questions: [...unit03Proteins.quiz, ...unit03Pool] },
  { unitNumber: 4, questions: [...unit04NucleicAcids.quiz, ...unit04Pool] },
  { unitNumber: 5, questions: [...unit05Carbohydrates.quiz, ...unit05Pool] },
  { unitNumber: 6, questions: [...unit06Lipids.quiz, ...unit06Pool] },
  { unitNumber: 7, questions: [...unit07ComparingMacromolecules.quiz, ...unit07Pool] },
];

export const integratedScienceSummaryPool: PoolQuestion[] = sources.flatMap(({ unitNumber, questions }) =>
  questions.map(q => ({ ...q, unitNumber })),
);
