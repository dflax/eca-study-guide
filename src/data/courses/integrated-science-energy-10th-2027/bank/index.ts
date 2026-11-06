import { assembleBank } from '@/data/assemble-bank';
import { integratedScienceEnergyTenth2027 } from '..';
import { integratedScienceEnergySummaryPool } from '../summary-pool';
import { topicData } from './topics';
import { unit01Bank } from './unit-01';
import { unit02Bank } from './unit-02';
import { unit03Bank } from './unit-03';
import { unit05Bank } from './unit-05';
import { unit06Bank } from './unit-06';

// New bank questions, keyed by unit id. Each needs `topic` = the exact heading of a note section in that unit.
const extra = {
  'unit-01-energy-and-atp': unit01Bank,
  'unit-02-cellular-respiration': unit02Bank,
  'unit-03-photosynthesis': unit03Bank,
  'unit-05-life-domains-endosymbiosis': unit05Bank,
  'unit-06-review-sheet-practice': unit06Bank,
};

export const courseBank = assembleBank(integratedScienceEnergyTenth2027, {
  topicData,
  pool: integratedScienceEnergySummaryPool,
  extra,
});
