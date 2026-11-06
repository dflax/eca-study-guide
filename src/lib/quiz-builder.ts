import type { BankQuestion, QuestionRecord, QuizQuestion, TopicSession } from '@/types/study';
import { topicKey } from '@/lib/progress';
import { topicStatus, type TopicStatus } from '@/lib/mastery';

export type History = Record<string, QuestionRecord>;

export function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Returns a copy with options shuffled and correctIndex remapped. Never mutates the source.
export function shuffleOptions<T extends QuizQuestion>(q: T): T {
  const order = shuffle(q.options.map((_, i) => i));
  return { ...q, options: order.map(i => q.options[i]), correctIndex: order.indexOf(q.correctIndex) };
}

// Lower is better: never seen, then missed last time, then answered correctly. Questions to avoid go last.
function freshness(q: QuizQuestion, history: History, avoid: Set<string>): number {
  if (avoid.has(q.id)) return 3;
  const rec = history[q.id];
  if (!rec) return 0;
  return rec.lastCorrect ? 2 : 1;
}

function orderByFreshness<T extends QuizQuestion>(qs: T[], history: History, avoid: Set<string>): T[] {
  const buckets: T[][] = [[], [], [], []];
  for (const q of qs) buckets[freshness(q, history, avoid)].push(q);
  return buckets.flatMap(b => shuffle(b));
}

function usable(q: BankQuestion): boolean {
  return q.options.length === 4;
}

/**
 * A full replacement quiz for a scope. Prefers questions the learner has not seen and spreads
 * them across topics so one topic does not dominate.
 */
export function buildFreshQuiz(
  bank: BankQuestion[],
  count: number,
  history: History,
  avoidIds: string[] = [],
): BankQuestion[] {
  const avoid = new Set(avoidIds);
  const byTopic = new Map<string, BankQuestion[]>();
  for (const q of bank.filter(usable)) {
    const list = byTopic.get(q.topic) ?? [];
    list.push(q);
    byTopic.set(q.topic, list);
  }
  const queues = shuffle([...byTopic.values()].map(list => orderByFreshness(list, history, avoid)));
  const picked: BankQuestion[] = [];
  while (picked.length < count && queues.some(q => q.length > 0)) {
    for (const queue of queues) {
      const next = queue.shift();
      if (next && picked.length < count) picked.push(next);
    }
  }
  return shuffle(picked).map(shuffleOptions);
}

export interface WeakTopic {
  unitId: string;
  topic: string;
  weight: number;
}

/**
 * Topics in `bank` the learner has attempted and not yet mastered. Topics whose latest sitting
 * was below the threshold weigh more than topics that just need a confirming second sitting.
 */
export function findWeakTopics(
  bank: BankQuestion[],
  sessions: Record<string, TopicSession[]>,
): WeakTopic[] {
  const seen = new Set<string>();
  const weak: WeakTopic[] = [];
  for (const q of bank) {
    if (!q.topic) continue;
    const key = topicKey(q.unitId, q.topic);
    if (seen.has(key)) continue;
    seen.add(key);
    const status: TopicStatus = topicStatus(sessions[key]);
    if (status === 'needs-work') weak.push({ unitId: q.unitId, topic: q.topic, weight: 3 });
    else if (status === 'building') weak.push({ unitId: q.unitId, topic: q.topic, weight: 1 });
  }
  return weak;
}

/**
 * A quiz concentrated on the weak topics, weighted toward the weakest. Within a topic it serves
 * unseen questions first, then previously missed ones, and only then ones just answered.
 */
export function buildWeakAreaQuiz(
  bank: BankQuestion[],
  weak: WeakTopic[],
  count: number,
  history: History,
  avoidIds: string[] = [],
): BankQuestion[] {
  const avoid = new Set(avoidIds);
  const queues = weak.map(w => ({
    weight: w.weight,
    items: orderByFreshness(
      bank.filter(q => usable(q) && q.unitId === w.unitId && q.topic === w.topic),
      history,
      avoid,
    ),
  }));
  const picked: BankQuestion[] = [];
  // Weighted round-robin: a weight-3 topic gets up to three turns for every one of a weight-1 topic.
  while (picked.length < count && queues.some(q => q.items.length > 0)) {
    for (const queue of queues) {
      for (let turn = 0; turn < queue.weight && picked.length < count; turn++) {
        const next = queue.items.shift();
        if (next) picked.push(next);
      }
    }
  }
  return shuffle(picked).map(shuffleOptions);
}

/**
 * Another question on the same topic, never one already in the quiz or already shown as a
 * follow-up (that would spoil a later question).
 */
export function pickFollowUp(
  bank: BankQuestion[],
  question: QuizQuestion,
  excludeIds: string[],
  history: History,
): BankQuestion | null {
  if (!question.topic || !question.unitId) return null;
  const exclude = new Set([...excludeIds, question.id]);
  const candidates = bank.filter(
    q => usable(q) && q.unitId === question.unitId && q.topic === question.topic && !exclude.has(q.id),
  );
  if (candidates.length === 0) return null;
  const best = orderByFreshness(candidates, history, new Set())[0];
  return shuffleOptions(best);
}
