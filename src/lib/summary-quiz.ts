import type { PoolQuestion, QuizQuestion } from '@/types/study';

const LAST_SEEN_KEY = 'eca_summary_quiz_last_seen';

function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function readLastSeen(courseId: string): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(`${LAST_SEEN_KEY}:${courseId}`);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function writeLastSeen(courseId: string, ids: string[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`${LAST_SEEN_KEY}:${courseId}`, JSON.stringify(ids));
  } catch {
    // Non-critical: repeat-avoidance just won't persist.
  }
}

// Returns a copy with options shuffled and correctIndex remapped. Never mutates the pool.
function shuffleOptions(q: PoolQuestion): QuizQuestion {
  const order = shuffle(q.options.map((_, i) => i));
  return {
    id: q.id,
    question: q.question,
    options: order.map(i => q.options[i]),
    correctIndex: order.indexOf(q.correctIndex),
    explanation: q.explanation,
  };
}

/**
 * Draws `count` questions spread as evenly as possible across all units (the units
 * that get the one-or-two extra questions are chosen at random), skipping questions
 * from the previous attempt when the pool allows. Order and answer positions are shuffled.
 */
export function buildSummaryQuiz(courseId: string, pool: PoolQuestion[], count: number): QuizQuestion[] {
  const lastSeen = readLastSeen(courseId);

  const byUnit = new Map<number, PoolQuestion[]>();
  for (const q of pool) {
    const list = byUnit.get(q.unitNumber) ?? [];
    list.push(q);
    byUnit.set(q.unitNumber, list);
  }

  const units = shuffle([...byUnit.keys()]);
  const base = Math.floor(count / units.length);
  const extra = count % units.length;

  const picked: PoolQuestion[] = [];
  units.forEach((unitNumber, idx) => {
    const want = base + (idx < extra ? 1 : 0);
    const candidates = byUnit.get(unitNumber) ?? [];
    const fresh = shuffle(candidates.filter(q => !lastSeen.has(q.id)));
    const stale = shuffle(candidates.filter(q => lastSeen.has(q.id)));
    picked.push(...[...fresh, ...stale].slice(0, want));
  });

  const quiz = shuffle(picked).map(shuffleOptions);
  writeLastSeen(courseId, quiz.map(q => q.id));
  return quiz;
}
