import type { Flashcard, QuizQuestion } from '@/types/study';

// [note heading it belongs to, front, back]
export type CardRow = [string, string, string];

// [note heading it tests, question, correct answer, three wrong answers, explanation]
export type Row = [string, string, string, [string, string, string], string];

const pad = (n: number) => String(n).padStart(2, '0');

/** Flashcards with ids `<unitId>-fc-NN`. */
export function buildCards(unitId: string, rows: CardRow[]): Flashcard[] {
  return rows.map(([, front, back], i) => ({ id: `${unitId}-fc-${pad(i + 1)}`, front, back }));
}

/** note heading -> ids of the flashcards that cover it (feeds the bank's topic data). */
export function cardsByTopic(unitId: string, rows: CardRow[]): Record<string, string[]> {
  const map: Record<string, string[]> = {};
  rows.forEach(([topic], i) => {
    (map[topic] ??= []).push(`${unitId}-fc-${pad(i + 1)}`);
  });
  return map;
}

/**
 * Questions with ids `<unitId>-<kind>-NN` (kind 'q' for the unit quiz, 'b' for bank questions).
 * The correct answer's position rotates through 0-3 so the first attempt is not predictable;
 * fresh draws reshuffle anyway.
 */
export function buildQuestions(unitId: string, kind: 'q' | 'b', rows: Row[]): QuizQuestion[] {
  return rows.map(([topic, question, correct, wrong, explanation], i) => {
    const pos = (i * 3 + Math.floor(i / 4)) % 4;
    const options: string[] = [...wrong];
    options.splice(pos, 0, correct);
    return { id: `${unitId}-${kind}-${pad(i + 1)}`, topic, question, options, correctIndex: pos, explanation };
  });
}
