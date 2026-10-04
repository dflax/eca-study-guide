import type { Course } from '@/types/study';
import { scienceNinth2026 } from './courses/science-9th-2026';
import { hebrewNinth2026 } from './courses/hebrew-9th-2026';
import { latinNinth2026 } from './courses/latin-9th-2026';
import { humanitiesNinth2026 } from './courses/humanities-9th-2026';
import { integratedScienceTenth2027 } from './courses/integrated-science-10th-2027';
import { nyDriversPermit } from './courses/ny-drivers-permit';

export const allCourses: Course[] = [
  scienceNinth2026,
  hebrewNinth2026,
  latinNinth2026,
  humanitiesNinth2026,
  integratedScienceTenth2027,
  nyDriversPermit,
];

export function getCourse(id: string): Course | undefined {
  return allCourses.find(c => c.id === id);
}

export function getUnit(courseId: string, unitId: string) {
  return getCourse(courseId)?.units.find(u => u.id === unitId);
}
