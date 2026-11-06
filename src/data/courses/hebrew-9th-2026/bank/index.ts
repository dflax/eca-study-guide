import { assembleBank } from '@/data/assemble-bank';
import { hebrewNinth2026 } from '..';
import { topicData } from './topics';
import { unit01Bank } from './unit-01';
import { unit02Bank } from './unit-02';
import { unit03Bank } from './unit-03';

// New bank questions, keyed by unit id. Each needs `topic` = the exact heading of a note section in that unit.
const extra = {
  'unit-01-vocabulary': unit01Bank,
  'unit-02-conversation': unit02Bank,
  'unit-03-reading': unit03Bank,
};

export const courseBank = assembleBank(hebrewNinth2026, {
  topicData,
  extra,
});
