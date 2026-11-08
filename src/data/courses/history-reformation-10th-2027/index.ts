import type { Course } from '@/types/study';
import { unit01LutherAndJustification } from './units/unit-01-luther-and-justification';
import { unit02ScriptureRulersAndPeasants } from './units/unit-02-scripture-rulers-and-peasants';
import { unit03Calvin } from './units/unit-03-calvin';
import { unit04England } from './units/unit-04-england';
import { unit05CatholicReform } from './units/unit-05-catholic-reform';
import { unit06SourceParagraph } from './units/unit-06-source-paragraph-and-synthesis';

export const historyReformationTenth2027: Course = {
  id: 'history-reformation-10th-2027',
  displayName: '2026–2027 · 10th Grade History · Module 003: The Protestant Reformation · Dr. Levine',
  year: '2026-2027',
  category: 'school-year',
  subject: '10th Grade History — Reformation',
  teacher: 'Dr. Levine',
  school: 'Emet Classical Academy',
  description: 'Module 003 review for the Reformation unit test (Thursday, November 12, 2026): Luther and justification, Scripture, rulers and the peasants, Calvin, England, Catholic reform, and the source paragraph. Built from the 003QSG study guide, the vocabulary and key terms sheet, the Flippity review, and the 003D, 003H05, 003H06 and 003H07 class packets.',
  color: 'red',
  summaryQuiz: {
    title: 'Summary Quiz — Reformation',
    description: '30 questions drawn at random from a pool of 312 covering all six Reformation units. Every attempt is a new mix, balanced across the units.',
    questionCount: 30,
    poolSize: 312,
  },
  units: [
    unit01LutherAndJustification,
    unit02ScriptureRulersAndPeasants,
    unit03Calvin,
    unit04England,
    unit05CatholicReform,
    unit06SourceParagraph,
  ],
};
