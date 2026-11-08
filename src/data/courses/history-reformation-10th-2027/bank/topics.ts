import type { CourseTopicData } from '@/types/study';
import { unit01CardRows } from '../units/unit-01-luther-and-justification';
import { unit02CardRows } from '../units/unit-02-scripture-rulers-and-peasants';
import { unit03CardRows } from '../units/unit-03-calvin';
import { unit04CardRows } from '../units/unit-04-england';
import { unit05CardRows } from '../units/unit-05-catholic-reform';
import { unit06CardRows } from '../units/unit-06-source-paragraph-and-synthesis';
import { cardsByTopic } from '../helpers';

// Flashcards and questions carry their note heading in the source rows, so the topic data is derived from them.
export const topicData: CourseTopicData = {
  flashcards: {
    'unit-01-luther-and-justification': cardsByTopic('unit-01-luther-and-justification', unit01CardRows),
    'unit-02-scripture-rulers-and-peasants': cardsByTopic('unit-02-scripture-rulers-and-peasants', unit02CardRows),
    'unit-03-calvin': cardsByTopic('unit-03-calvin', unit03CardRows),
    'unit-04-england': cardsByTopic('unit-04-england', unit04CardRows),
    'unit-05-catholic-reform': cardsByTopic('unit-05-catholic-reform', unit05CardRows),
    'unit-06-source-paragraph-and-synthesis': cardsByTopic('unit-06-source-paragraph-and-synthesis', unit06CardRows),
  },
  questionTopics: {},
};
