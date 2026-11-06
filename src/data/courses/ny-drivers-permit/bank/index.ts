import { assembleBank } from '@/data/assemble-bank';
import { nyDriversPermit } from '..';
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
  "unit-01-driver-licenses": unit01Bank,
  "unit-02-keeping-your-license": unit02Bank,
  "unit-03-owning-a-vehicle": unit03Bank,
  "unit-04-traffic-control": unit04Bank,
  "unit-05-intersections-turns": unit05Bank,
  "unit-06-passing-school-buses": unit06Bank,
  "unit-07-parking": unit07Bank,
  "unit-08-defensive-driving": unit08Bank,
  "unit-09-alcohol-drugs": unit09Bank,
  "unit-10-special-conditions": unit10Bank,
  "unit-11-sharing-the-road": unit11Bank,
  'unit-12-crashes-and-technology': unit12Bank,
};

export const courseBank = assembleBank(nyDriversPermit, {
  topicData,
  extra,
});
