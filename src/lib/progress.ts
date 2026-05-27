import type { AllProgress, UnitProgress, QuizAttempt } from '@/types/study';

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
    saveAll(data);
  }
}

export function getLastQuizScore(courseId: string, unitId: string): QuizAttempt | null {
  const prog = getUnitProgress(courseId, unitId);
  return prog.quizAttempts.length > 0 ? prog.quizAttempts[prog.quizAttempts.length - 1] : null;
}
