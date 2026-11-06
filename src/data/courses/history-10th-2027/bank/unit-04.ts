import type { QuizQuestion } from '@/types/study';
import { bankRows, type Row } from './helpers';

const WITTENBERG = 'New Universities and Wittenberg';
const CUSA = 'Nicholas of Cusa';
const ARTISTS = 'Northern Artists and the Met Comparison';

const rows: Row[] = [
  [WITTENBERG, 'Why were new universities founded in the Northern Renaissance?', 'To raise the level of scholarship and higher learning', ['To replace Paris, Oxford, and Cambridge entirely', 'To train only soldiers for the king', 'To print Bibles for the Church'], 0, 'One accomplishment of the Northern Renaissance was founding new universities to raise the level of scholarship in Europe.'],
  [WITTENBERG, 'In Jack\'s note, Wittenberg is described as a center for:', 'The new scientific and higher learning', ['Old medieval craft guilds', 'Royal tax collection', 'The Spanish Inquisition'], 2, 'Jack noted that Luther taught at Wittenberg, Hamlet goes to college there, and it was a center for the new learning.'],
  [WITTENBERG, 'Which work of English literature has its hero study at Wittenberg?', 'Hamlet', ['Don Quixote', 'The Decameron', 'The Prince'], 3, 'Wittenberg appears in Shakespeare\'s Hamlet as the place where Hamlet studied.'],
  [CUSA, 'When did Nicholas of Cusa live?', '1401 to 1464', ['1301 to 1364', '1501 to 1564', '1350 to 1420'], 1, 'Nicholas of Cusa (1401-1464) lived between the Middle Ages and the Northern Renaissance.'],
  [CUSA, 'What did Cusa propose in On Experiments with Weight-Scales (1450)?', 'Quantitative investigations, such as comparing the weights of air and water', ['A new calendar based on the Sun', 'A printing method using metal type', 'A treaty between rival popes'], 0, 'The 1450 dialogue proposed quantitative investigations; a proposed experiment is not proof that he performed it.'],
  [ARTISTS, 'Which of these artists is Italian rather than one of the Northern artists named in class?', 'Raphael', ['Jan van Eyck', 'Bosch', 'Bruegel'], 2, 'Class named Jan van Eyck, Bosch, and Bruegel as Northern artists; Raphael is an Italian painter.'],
  [ARTISTS, 'How is the Met\'s van Eyck Crucifixion; Last Judgment described?', 'Oil on canvas transferred from wood, ca. 1436-38', ['Marble sculpture, ca. 1501-1504', 'Limestone with traces of paint, ca. 1420-30', 'Fresco on a chapel ceiling, 1508-1512'], 3, 'The class guide describes the van Eyck panels as oil on canvas transferred from wood, ca. 1436-38.'],
  [ARTISTS, 'The sacred subjects in the van Eyck panels show which idea in the class comparison?', 'Religious continuity', ['A break with Christianity', 'The rise of pagan themes', 'The end of religious art'], 1, 'The Crucifixion and Last Judgment are sacred subjects that remain, showing religious continuity, while depth details show attention to the visible world.'],
];

export const unit04Bank: QuizQuestion[] = bankRows('unit-04-northern-renaissance', rows);
