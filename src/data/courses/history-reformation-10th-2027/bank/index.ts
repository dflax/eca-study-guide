import { assembleBank } from '@/data/assemble-bank';
import { historyReformationTenth2027 } from '..';
import { topicData } from './topics';
import { unit01Bank } from './unit-01';
import { unit02Bank } from './unit-02';
import { unit03Bank } from './unit-03';
import { unit04Bank } from './unit-04';
import { unit05Bank } from './unit-05';
import { unit06Bank } from './unit-06';

// New bank questions, keyed by unit id. Each carries `topic` = the exact heading of a note section in that unit.
// There is no separate summary pool: the summary quiz draws from every unit's quiz + bank questions.
const extra = {
  'unit-01-luther-and-justification': unit01Bank,
  'unit-02-scripture-rulers-and-peasants': unit02Bank,
  'unit-03-calvin': unit03Bank,
  'unit-04-england': unit04Bank,
  'unit-05-catholic-reform': unit05Bank,
  'unit-06-source-paragraph-and-synthesis': unit06Bank,
};

export const courseBank = assembleBank(historyReformationTenth2027, {
  topicData,
  extra,
  summaryUnitIds: historyReformationTenth2027.units.map(u => u.id),
});
