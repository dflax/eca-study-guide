import { assembleBank } from '@/data/assemble-bank';
import { historyTenth2027 } from '..';
import { historySummaryPool } from '../summary-pool';
import { topicData } from './topics';
import { unit02Bank } from './unit-02';
import { unit03Bank } from './unit-03';
import { unit04Bank } from './unit-04';
import { unit05Bank } from './unit-05';
import { unit06Bank } from './unit-06';
import { unit07Bank } from './unit-07';
import { unit08Bank } from './unit-08';

// New bank questions, keyed by unit id. Each needs `topic` = the exact heading of a note section in that unit.
// Units 7 and 8 are deliberately not in the summary pool (summaryUnitIds comes from the pool, so they stay out of the summary quiz).
const extra = {
  'unit-02-italian-humanism': unit02Bank,
  'unit-03-renaissance-art': unit03Bank,
  'unit-04-northern-renaissance': unit04Bank,
  'unit-05-new-monarchies-trends': unit05Bank,
  'unit-06-four-country-cases': unit06Bank,
  'unit-07-pico-and-petrarch': unit07Bank,
  'unit-08-quiz-focus-and-comparisons': unit08Bank,
};

export const courseBank = assembleBank(historyTenth2027, {
  topicData,
  pool: historySummaryPool,
  extra,
});
