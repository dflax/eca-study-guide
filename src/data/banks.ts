import type { CourseBank } from '@/types/study';

// Question banks are code-split per course and loaded on demand by the quiz pages, so they
// are not bundled into every page that calls getCourse().
const loaders: Record<string, () => Promise<CourseBank>> = {
  'science-9th-2026': () => import('./courses/science-9th-2026/bank').then(m => m.courseBank),
  'hebrew-9th-2026': () => import('./courses/hebrew-9th-2026/bank').then(m => m.courseBank),
  'latin-9th-2026': () => import('./courses/latin-9th-2026/bank').then(m => m.courseBank),
  'humanities-9th-2026': () => import('./courses/humanities-9th-2026/bank').then(m => m.courseBank),
  'integrated-science-10th-2027': () => import('./courses/integrated-science-10th-2027/bank').then(m => m.courseBank),
  'integrated-science-energy-10th-2027': () => import('./courses/integrated-science-energy-10th-2027/bank').then(m => m.courseBank),
  'history-10th-2027': () => import('./courses/history-10th-2027/bank').then(m => m.courseBank),
  'history-reformation-10th-2027': () => import('./courses/history-reformation-10th-2027/bank').then(m => m.courseBank),
  'ny-drivers-permit': () => import('./courses/ny-drivers-permit/bank').then(m => m.courseBank),
};

export function loadCourseBank(courseId: string): Promise<CourseBank | null> {
  const load = loaders[courseId];
  return load ? load() : Promise.resolve(null);
}
