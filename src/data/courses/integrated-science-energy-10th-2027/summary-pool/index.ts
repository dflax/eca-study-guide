import type { PoolQuestion, QuizQuestion } from '@/types/study';
import { unit01EnergyAndAtp } from '../units/unit-01-energy-and-atp';
import { unit02CellularRespiration } from '../units/unit-02-cellular-respiration';
import { unit03Photosynthesis } from '../units/unit-03-photosynthesis';
import { unit04MitochondriaAndChloroplasts } from '../units/unit-04-mitochondria-and-chloroplasts';
import { unit05LifeDomainsEndosymbiosis } from '../units/unit-05-life-domains-endosymbiosis';
import { unit06ReviewSheet } from '../units/unit-06-review-sheet-practice';
import { unit01Pool } from './unit-01';
import { unit02Pool } from './unit-02';
import { unit03Pool } from './unit-03';
import { unit04Pool } from './unit-04';
import { unit05Pool } from './unit-05';
import { unit06Pool } from './unit-06';

// Each unit contributes its existing quiz questions plus extra questions written
// for the summary pool.
const sources: { unitNumber: number; questions: QuizQuestion[] }[] = [
  { unitNumber: 1, questions: [...unit01EnergyAndAtp.quiz, ...unit01Pool] },
  { unitNumber: 2, questions: [...unit02CellularRespiration.quiz, ...unit02Pool] },
  { unitNumber: 3, questions: [...unit03Photosynthesis.quiz, ...unit03Pool] },
  { unitNumber: 4, questions: [...unit04MitochondriaAndChloroplasts.quiz, ...unit04Pool] },
  { unitNumber: 5, questions: [...unit05LifeDomainsEndosymbiosis.quiz, ...unit05Pool] },
  { unitNumber: 6, questions: [...unit06ReviewSheet.quiz, ...unit06Pool] },
];

export const integratedScienceEnergySummaryPool: PoolQuestion[] = sources.flatMap(({ unitNumber, questions }) =>
  questions.map(q => ({ ...q, unitNumber })),
);
