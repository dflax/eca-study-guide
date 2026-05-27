import { getCourse, getUnit } from '@/data/index';
import type { Course, Unit } from '@/types/study';

export { getCourse, getUnit };

export function getCourseOrThrow(courseId: string): Course {
  const course = getCourse(courseId);
  if (!course) throw new Error(`Course not found: ${courseId}`);
  return course;
}

export function getUnitOrThrow(courseId: string, unitId: string): Unit {
  const unit = getUnit(courseId, unitId);
  if (!unit) throw new Error(`Unit not found: ${courseId}/${unitId}`);
  return unit;
}
