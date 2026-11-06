import type { AllProgress, UnitProgress, QuizAttempt, TopicSession, QuestionRecord } from '@/types/study';

const STORAGE_KEY = 'eca_study_progress';

function getAll(): AllProgress {
  if (typeof window === 'undefined') return { user: null, courses: {} };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { user: null, courses: {} };
  } catch {
    return { user: null, courses: {} };
  }
}

function saveAll(data: AllProgress): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getUserProfile() { return getAll().user; }

export function setUserProfile(name: string) {
  const data = getAll();
  data.user = { name: name.trim(), createdAt: new Date().toISOString() };
  saveAll(data);
  return data.user;
}

export function getUnitProgress(courseId: string, unitId: string): UnitProgress {
  const data = getAll();
  return data.courses[courseId]?.[unitId] ?? {
    flashcardsLearned: [],
    flashcardsSkipped: [],
    quizAttempts: [],
    notesViewed: false,
    lastVisited: '',
  };
}

export function markNotesViewed(courseId: string, unitId: string) {
  const data = getAll();
  if (!data.courses[courseId]) data.courses[courseId] = {};
  if (!data.courses[courseId][unitId]) data.courses[courseId][unitId] = { flashcardsLearned: [], flashcardsSkipped: [], quizAttempts: [], notesViewed: false, lastVisited: '' };
  data.courses[courseId][unitId].notesViewed = true;
  data.courses[courseId][unitId].lastVisited = new Date().toISOString();
  saveAll(data);
}

export function markFlashcardLearned(courseId: string, unitId: string, flashcardId: string) {
  const data = getAll();
  if (!data.courses[courseId]) data.courses[courseId] = {};
  if (!data.courses[courseId][unitId]) data.courses[courseId][unitId] = { flashcardsLearned: [], flashcardsSkipped: [], quizAttempts: [], notesViewed: false, lastVisited: '' };
  const prog = data.courses[courseId][unitId];
  if (!prog.flashcardsLearned.includes(flashcardId)) prog.flashcardsLearned.push(flashcardId);
  prog.flashcardsSkipped = prog.flashcardsSkipped.filter(id => id !== flashcardId);
  prog.lastVisited = new Date().toISOString();
  saveAll(data);
}

export function recordQuizAttempt(courseId: string, unitId: string, score: number, total: number) {
  const data = getAll();
  if (!data.courses[courseId]) data.courses[courseId] = {};
  if (!data.courses[courseId][unitId]) data.courses[courseId][unitId] = { flashcardsLearned: [], flashcardsSkipped: [], quizAttempts: [], notesViewed: false, lastVisited: '' };
  const attempt: QuizAttempt = { score, total, date: new Date().toISOString(), percentage: Math.round((score / total) * 100) };
  data.courses[courseId][unitId].quizAttempts.push(attempt);
  data.courses[courseId][unitId].lastVisited = new Date().toISOString();
  saveAll(data);
}

export function resetUnitProgress(courseId: string, unitId: string) {
  const data = getAll();
  if (data.courses[courseId]) {
    delete data.courses[courseId][unitId];
  }
  const sessions = data.topicSessions?.[courseId];
  if (sessions) {
    for (const k of Object.keys(sessions)) {
      if (k.startsWith(`${unitId}::`)) delete sessions[k];
    }
  }
  saveAll(data);
}

export function getLastQuizScore(courseId: string, unitId: string): QuizAttempt | null {
  const prog = getUnitProgress(courseId, unitId);
  return prog.quizAttempts.length > 0 ? prog.quizAttempts[prog.quizAttempts.length - 1] : null;
}

// ---- Topic mastery + per-question history (powers focused practice and weak-area quizzes) ----

export function topicKey(unitId: string, topic: string): string {
  return `${unitId}::${topic}`;
}

export function getTopicSessions(courseId: string): Record<string, TopicSession[]> {
  return getAll().topicSessions?.[courseId] ?? {};
}

export function getQuestionHistory(courseId: string): Record<string, QuestionRecord> {
  return getAll().questionHistory?.[courseId] ?? {};
}

export function recordQuestionResult(courseId: string, questionId: string, correct: boolean) {
  const data = getAll();
  data.questionHistory ??= {};
  data.questionHistory[courseId] ??= {};
  const prev = data.questionHistory[courseId][questionId];
  data.questionHistory[courseId][questionId] = {
    attempts: (prev?.attempts ?? 0) + 1,
    correct: (prev?.correct ?? 0) + (correct ? 1 : 0),
    lastCorrect: correct,
    lastDate: new Date().toISOString(),
  };
  saveAll(data);
}

const MAX_SESSIONS_PER_TOPIC = 10;

export function recordTopicSessions(
  courseId: string,
  results: { unitId: string; topic: string; correct: boolean }[],
) {
  const byKey = new Map<string, { correct: number; total: number }>();
  for (const r of results) {
    if (!r.topic) continue;
    const k = topicKey(r.unitId, r.topic);
    const agg = byKey.get(k) ?? { correct: 0, total: 0 };
    agg.total += 1;
    if (r.correct) agg.correct += 1;
    byKey.set(k, agg);
  }
  if (byKey.size === 0) return;
  const data = getAll();
  data.topicSessions ??= {};
  data.topicSessions[courseId] ??= {};
  const date = new Date().toISOString();
  for (const [k, agg] of byKey) {
    const list = data.topicSessions[courseId][k] ?? [];
    list.push({ ...agg, date });
    data.topicSessions[courseId][k] = list.slice(-MAX_SESSIONS_PER_TOPIC);
  }
  saveAll(data);
}
