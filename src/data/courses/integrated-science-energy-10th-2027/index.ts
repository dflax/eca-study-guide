import type { Course } from '@/types/study';
import { unit01EnergyAndAtp } from './units/unit-01-energy-and-atp';
import { unit02CellularRespiration } from './units/unit-02-cellular-respiration';
import { unit03Photosynthesis } from './units/unit-03-photosynthesis';
import { unit04MitochondriaAndChloroplasts } from './units/unit-04-mitochondria-and-chloroplasts';
import { unit05LifeDomainsEndosymbiosis } from './units/unit-05-life-domains-endosymbiosis';
import { unit06ReviewSheet } from './units/unit-06-review-sheet-practice';

export const integratedScienceEnergyTenth2027: Course = {
  id: 'integrated-science-energy-10th-2027',
  displayName: '2026–2027 · 10th Grade Integrated Science II · Unit 2: Energy · Dr. Shulman',
  year: '2026-2027',
  category: 'school-year',
  subject: '10th Grade Integrated Science II — Unit 2',
  teacher: 'Dr. Shulman',
  school: 'Emet Classical Academy',
  description: 'Unit 2 review, Energy: ATP and energy change, cellular respiration, photosynthesis, mitochondria and chloroplasts, autotrophs and heterotrophs, and endosymbiosis. Built from the Unit 2 study guide, the review sheet, and class notes.',
  color: 'rose',
  summaryQuiz: {
    title: 'Summary Quiz — Unit 2 Energy',
    description: '30 questions drawn at random from a pool of 328 covering all six Unit 2 units. Every attempt is a new mix, balanced across the units.',
    questionCount: 30,
    poolSize: 328,
  },
  units: [
    unit01EnergyAndAtp,
    unit02CellularRespiration,
    unit03Photosynthesis,
    unit04MitochondriaAndChloroplasts,
    unit05LifeDomainsEndosymbiosis,
    unit06ReviewSheet,
  ],
};
