import type { Course } from '@/types/study';
import { scienceNinth2026 } from './courses/science-9th-2026';

export const allCourses: Course[] = [
  scienceNinth2026,
];

export function getCourse(id: string): Course | undefined {
  return allCourses.find(c => c.id === id);
}

export function getUnit(courseId: string, unitId: string) {
  return getCourse(courseId)?.units.find(u => u.id === unitId);
}
