import { assembleBank } from '@/data/assemble-bank';
import { integratedScienceTenth2027 } from '..';
import { integratedScienceSummaryPool } from '../summary-pool';
import { topicData } from './topics';

// New bank questions, keyed by unit id. Each needs `topic` = the exact heading of a note section in that unit.
const extra = {};

export const courseBank = assembleBank(integratedScienceTenth2027, {
  topicData,
  pool: integratedScienceSummaryPool,
  extra,
});
