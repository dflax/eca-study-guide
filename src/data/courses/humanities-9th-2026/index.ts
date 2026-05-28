import type { Course } from '@/types/study';
import { unit01People } from './units/unit-01-people';
import { unit02Politics } from './units/unit-02-politics';
import { unit03Ideas } from './units/unit-03-ideas';
import { unit04ThemeA } from './units/unit-04-theme-a';
import { unit05ThemeB } from './units/unit-05-theme-b';
import { unit06ThemeC } from './units/unit-06-theme-c';

export const humanitiesNinth2026: Course = {
  id: 'humanities-9th-2026',
  displayName: '2025–2026 · Integrated Humanities · Ms. Attar',
  year: '2025-2026',
  subject: 'Integrated Humanities',
  teacher: 'Ms. Attar',
  school: 'Emet Classical Academy',
  description: 'Ancient history, political philosophy, and religion: key terms from Greece, Rome, and the ancient Near East, plus essay themes drawing on primary sources.',
  color: 'purple',
  units: [
    unit01People,
    unit02Politics,
    unit03Ideas,
    unit04ThemeA,
    unit05ThemeB,
    unit06ThemeC,
  ],
};
