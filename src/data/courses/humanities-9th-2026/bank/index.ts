import { assembleBank } from '@/data/assemble-bank';
import { humanitiesNinth2026 } from '..';
import { topicData } from './topics';
import { unit01PeopleBank } from './unit-01';
import { unit02PoliticsBank } from './unit-02';
import { unit03IdeasBank } from './unit-03';
import { unit04ThemeABank } from './unit-04';
import { unit05ThemeBBank } from './unit-05';
import { unit06ThemeCBank } from './unit-06';

// New bank questions, keyed by unit id. Each needs `topic` = the exact heading of a note section in that unit.
const extra = {
  'unit-01-people': unit01PeopleBank,
  'unit-02-politics': unit02PoliticsBank,
  'unit-03-ideas': unit03IdeasBank,
  'unit-04-theme-a': unit04ThemeABank,
  'unit-05-theme-b': unit05ThemeBBank,
  'unit-06-theme-c': unit06ThemeCBank,
};

export const courseBank = assembleBank(humanitiesNinth2026, {
  topicData,
  extra,
});
