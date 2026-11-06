import type { QuizQuestion } from '@/types/study';

// [topic, question, correct answer, three wrong answers, position of the correct answer (0-3), explanation]
export type Row = [string, string, string, [string, string, string], 0 | 1 | 2 | 3, string];

/** Builds bank questions with ids `<unitId>-b-NN`, placing the correct answer at the given position. */
export function bankRows(unitId: string, rows: Row[]): QuizQuestion[] {
  return rows.map(([topic, question, correct, wrong, pos, explanation], i) => {
    const options = [...wrong];
    options.splice(pos, 0, correct);
    return { id: `${unitId}-b-${String(i + 1).padStart(2, '0')}`, topic, question, options, correctIndex: pos, explanation };
  });
}
