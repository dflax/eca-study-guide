import type { QuizQuestion } from '@/types/study';
import { bankRows, type Row } from './helpers';

const CHURCH = 'The Church as a Political Force';
const NOBLES = 'Nobles, Land, and Local Justice';
const MAJESTY = 'Majesty, Sovereignty, Popular Appeal, and the Holy Roman Empire';

const rows: Row[] = [
  [CHURCH, 'How were high church officials such as cardinals treated in this period?', 'Like nobility', ['Like serfs bound to the land', 'Like townsmen holding a charter', 'Like infantry soldiers'], 0, 'High church officials such as cardinals were treated like nobility.'],
  [CHURCH, 'Why did kings and popes so often come into conflict?', 'Over politics and over Church policies touching local clergy', ['Over the invention of movable type', 'Over the cost of pikemen\'s armor', 'Over which language to use in charters'], 2, 'Kings often fought with popes over politics and over Church policies that touched local clergy.'],
  [CHURCH, 'Sometimes rulers intervened over the question of:', 'Who the legitimate Pope was', ['Which town deserved a charter', 'How many serfs a noble owned', 'Whether longbows could be used'], 1, 'Rulers sometimes took sides in disputes over the legitimate pope, which is the idea of a pope and an antipope.'],
  [CHURCH, 'Why could the Church resist a king?', 'It owned land and wanted a say in politics', ['It commanded the largest cavalry in Europe', 'It controlled every royal court', 'It elected each kingdom\'s parliament'], 3, 'The Church was one of the four political forces; it owned land and wanted a say in politics, so it could resist kings.'],
  [NOBLES, 'Who, more than kings and clergymen, was consistently powerful in this period?', 'Nobles', ['Serfs', 'Townsmen', 'Pikemen'], 2, 'Nobles owned estates, had representation in parliaments, and were served by knights, so they were consistently powerful.'],
  [NOBLES, 'What was the main source of wealth and power that kings and nobles fought over?', 'Land, held as estates', ['Armies of hired infantry', 'Charters granted to towns', 'Ownership of printing presses'], 0, 'Land was the main source of wealth and power, and controlling land meant controlling the serfs who were bound to it.'],
  [NOBLES, 'Who served high-ranking aristocrats in this period?', 'Knights', ['Wandering friars', 'Royal tax collectors', 'Town councils'], 1, 'High-ranking aristocrats were served by knights, one reason nobles were so powerful.'],
  [MAJESTY, 'Addressing a king as "your majesty" was a revival of a practice from:', 'Ancient Rome', ['Ancient Egypt', 'Viking kingdoms', 'The Council of Constance'], 3, '"Majesty" was a revival of a Roman practice, used as kings tried to bolster their authority.'],
  [MAJESTY, 'Which phrase is linked with Roman leaders who appealed to the people over nobles?', 'Bread and circuses', ['Salus populi suprema lex', 'Quod principi placuit', 'Deus secundus'], 0, 'The notes link the populares in Rome to "bread and circuses," an example of appealing to the people over nobles and institutions.'],
  [MAJESTY, 'Which Roman revival kept playing an important role in European power politics?', 'The Holy Roman Empire', ['The Roman Senate of the Republic', 'The Western Schism', 'The Spanish Inquisition'], 2, 'The Holy Roman Empire, another revival from the Roman Empire, continued to matter in European power politics.'],
];

export const unit05Bank: QuizQuestion[] = bankRows('unit-05-new-monarchies-trends', rows);
