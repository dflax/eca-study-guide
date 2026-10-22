import type { PoolQuestion, QuizQuestion } from '@/types/study';
import { unit01BeforeTheRenaissance } from '../units/unit-01-before-the-renaissance';
import { unit02ItalianHumanism } from '../units/unit-02-italian-humanism';
import { unit03RenaissanceArt } from '../units/unit-03-renaissance-art';
import { unit04NorthernRenaissance } from '../units/unit-04-northern-renaissance';
import { unit05NewMonarchiesTrends } from '../units/unit-05-new-monarchies-trends';
import { unit06FourCountryCases } from '../units/unit-06-four-country-cases';
import { unit01Pool } from './unit-01';
import { unit02Pool } from './unit-02';
import { unit03Pool } from './unit-03';
import { unit04Pool } from './unit-04';
import { unit05Pool } from './unit-05';
import { unit06Pool } from './unit-06';

// Each unit contributes its existing quiz questions plus extra questions written
// for the summary pool. Units 7 and 8 (class readings and quiz-prep) are study-only and are not
// in the pool, so the draw stays balanced across the six units the quiz covers.
const sources: { unitNumber: number; questions: QuizQuestion[] }[] = [
  { unitNumber: 1, questions: [...unit01BeforeTheRenaissance.quiz, ...unit01Pool] },
  { unitNumber: 2, questions: [...unit02ItalianHumanism.quiz, ...unit02Pool] },
  { unitNumber: 3, questions: [...unit03RenaissanceArt.quiz, ...unit03Pool] },
  { unitNumber: 4, questions: [...unit04NorthernRenaissance.quiz, ...unit04Pool] },
  { unitNumber: 5, questions: [...unit05NewMonarchiesTrends.quiz, ...unit05Pool] },
  { unitNumber: 6, questions: [...unit06FourCountryCases.quiz, ...unit06Pool] },
];

export const historySummaryPool: PoolQuestion[] = sources.flatMap(({ unitNumber, questions }) =>
  questions.map(q => ({ ...q, unitNumber })),
);
