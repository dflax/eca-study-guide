import type { TopicSession } from '@/types/study';

export const MASTERY_THRESHOLD = 80;   // percent
export const MIN_SESSION_ANSWERS = 2;  // a sitting with fewer answers on a topic is too noisy to count
export const SESSIONS_REQUIRED = 2;    // consecutive qualifying sittings at or above the threshold

export type TopicStatus = 'new' | 'building' | 'needs-work' | 'mastered';

export function sessionPercent(s: { correct: number; total: number }): number {
  return s.total === 0 ? 0 : Math.round((s.correct / s.total) * 100);
}

function counted(sessions: TopicSession[]): TopicSession[] {
  return sessions.filter(s => s.total >= MIN_SESSION_ANSWERS);
}

/**
 * Needs-work = the latest sitting on the topic was below 80%, however few answers it had (a single
 * miss on a one-question topic must still send the learner back to it).
 * Mastered = the last two qualifying sittings (2+ answers each) were both at or above 80%.
 * Building = on track but not yet confirmed by a second good sitting.
 */
export function topicStatus(sessions: TopicSession[] | undefined): TopicStatus {
  const all = sessions ?? [];
  if (all.length === 0) return 'new';
  if (sessionPercent(all[all.length - 1]) < MASTERY_THRESHOLD) return 'needs-work';
  const c = counted(all);
  if (c.length === 0) return 'new';
  const lastN = c.slice(-SESSIONS_REQUIRED);
  if (lastN.length === SESSIONS_REQUIRED && lastN.every(s => sessionPercent(s) >= MASTERY_THRESHOLD)) return 'mastered';
  return 'building';
}
