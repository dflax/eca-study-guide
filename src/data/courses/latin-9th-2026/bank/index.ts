import { assembleBank } from '@/data/assemble-bank';
import { latinNinth2026 } from '..';
import { topicData } from './topics';
import { unit01Bank } from './unit-01';
import { unit02Bank } from './unit-02';
import { unit03Bank } from './unit-03';
import { unit04Bank } from './unit-04';
import { unit05Bank } from './unit-05';
import { unit06Bank } from './unit-06';

// New bank questions, keyed by unit id. Each needs `topic` = the exact heading of a note section in that unit.
const extra = {
  'unit-01-cases': unit01Bank,
  'unit-02-declensions': unit02Bank,
  'unit-03-pronouns': unit03Bank,
  'unit-04-verbs': unit04Bank,
  'unit-05-vocabulary': unit05Bank,
  'unit-06-suffixes-prep-numbers': unit06Bank,
};

export const courseBank = assembleBank(latinNinth2026, {
  topicData,
  extra,
});
