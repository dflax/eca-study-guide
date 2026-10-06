import type { PoolQuestion } from '@/types/study';
import { integratedScienceSummaryPool } from './courses/integrated-science-10th-2027/summary-pool';

// Question pools live here, not on the Course objects, so they are only bundled
// into the summary quiz page and not into every page that calls getCourse().
const pools: Record<string, PoolQuestion[]> = {
  'integrated-science-10th-2027': integratedScienceSummaryPool,
};

export function getSummaryPool(courseId: string): PoolQuestion[] | undefined {
  return pools[courseId];
}
