import type { Course } from '@/types/study';
import { unit01BeforeTheRenaissance } from './units/unit-01-before-the-renaissance';
import { unit02ItalianHumanism } from './units/unit-02-italian-humanism';
import { unit03RenaissanceArt } from './units/unit-03-renaissance-art';
import { unit04NorthernRenaissance } from './units/unit-04-northern-renaissance';
import { unit05NewMonarchiesTrends } from './units/unit-05-new-monarchies-trends';
import { unit06FourCountryCases } from './units/unit-06-four-country-cases';
import { unit07PicoAndPetrarch } from './units/unit-07-pico-and-petrarch';
import { unit08QuizFocus } from './units/unit-08-quiz-focus-and-comparisons';

export const historyTenth2027: Course = {
  id: 'history-10th-2027',
  displayName: '2026–2027 · 10th Grade History · Dr. Levine',
  year: '2026-2027',
  category: 'school-year',
  subject: '10th Grade History',
  teacher: 'Dr. Levine',
  school: 'Emet Classical Academy',
  description: 'Module 002 review, Renaissance and New Monarchies: the world before the Renaissance, Italian humanism, Renaissance art, the Northern Renaissance, and the new monarchies of Spain, France, England, and the Habsburg lands. Built from the Renaissance and New Monarchies study guide for the October 26 quiz; more units will be added as the course continues.',
  color: 'red',
  summaryQuiz: {
    title: 'Summary Quiz — All Units',
    description: '24 questions drawn at random from a pool of 499 covering all eight units. Every attempt is a new mix, balanced across the units.',
    questionCount: 24,
    poolSize: 499,
  },
  units: [
    unit01BeforeTheRenaissance,
    unit02ItalianHumanism,
    unit03RenaissanceArt,
    unit04NorthernRenaissance,
    unit05NewMonarchiesTrends,
    unit06FourCountryCases,
    unit07PicoAndPetrarch,
    unit08QuizFocus,
  ],
};
