import { assembleBank } from '@/data/assemble-bank';
import { scienceNinth2026 } from '..';
import { topicData } from './topics';
import { unit01Bank } from './unit-01';
import { unit02Bank } from './unit-02';
import { unit03Bank } from './unit-03';
import { unit04Bank } from './unit-04';
import { unit05Bank } from './unit-05';
import { unit06Bank } from './unit-06';
import { unit07Bank } from './unit-07';
import { unit08Bank } from './unit-08';
import { unit09Bank } from './unit-09';
import { unit10Bank } from './unit-10';
import { unit11Bank } from './unit-11';
import { unit12Bank } from './unit-12';

// New bank questions, keyed by unit id. Each needs `topic` = the exact heading of a note section in that unit.
const extra = {
  'unit-01-energy': unit01Bank,
  'unit-02-waves': unit02Bank,
  'unit-03-atomic-theory': unit03Bank,
  'unit-04-atomic-structure': unit04Bank,
  'unit-05-electrons': unit05Bank,
  'unit-06-periodic-trends': unit06Bank,
  'unit-07-bonding': unit07Bank,
  'unit-08-vsepr': unit08Bank,
  'unit-09-reactions': unit09Bank,
  'unit-10-stoichiometry': unit10Bank,
  'unit-11-kmt': unit11Bank,
  'unit-12-lab-skills': unit12Bank,
};

export const courseBank = assembleBank(scienceNinth2026, {
  topicData,
  extra,
});
