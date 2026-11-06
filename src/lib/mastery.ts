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
 * Mastered = the last two qualifying sittings were each at or above 80%.
 * Needs-work = the latest qualifying sitting was below 80%.
 * Building = on track but not yet confirmed by a second good sitting.
 */
export function topicStatus(sessions: TopicSession[] | undefined): TopicStatus {
  const c = counted(sessions ?? []);
  if (c.length === 0) return 'new';
  const latest = c[c.length - 1];
  if (sessionPercent(latest) < MASTERY_THRESHOLD) return 'needs-work';
  const lastN = c.slice(-SESSIONS_REQUIRED);
  if (lastN.length === SESSIONS_REQUIRED && lastN.every(s => sessionPercent(s) >= MASTERY_THRESHOLD)) return 'mastered';
  return 'building';
}
