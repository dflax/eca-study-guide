import type { BankQuestion, Course, CourseBank, CourseTopicData, PoolQuestion, QuizQuestion } from '@/types/study';

interface AssembleOptions {
  topicData: CourseTopicData;
  pool?: PoolQuestion[];                    // an existing cross-unit pool (already includes each unit's quiz)
  extra?: Record<string, QuizQuestion[]>;   // unit id -> new questions, each carrying its own `topic`
  summaryUnitIds?: string[];                // defaults to the units present in `pool`
}

/**
 * Builds a course's question bank: every unit's quiz, plus its pool questions, plus any new bank
 * questions, de-duplicated by id and tagged with unit, topic and the topic's flashcards.
 * Questions with no topic get topic '' (the validator script flags them).
 */
export function assembleBank(course: Course, { topicData, pool = [], extra = {}, summaryUnitIds }: AssembleOptions): CourseBank {
  const unitByNumber = new Map(course.units.map(u => [u.number, u]));
  const seen = new Map<string, string>();
  const conflicts: string[] = [];
  const questions: BankQuestion[] = [];

  const add = (unitId: string, q: QuizQuestion) => {
    const earlier = seen.get(q.id);
    if (earlier !== undefined) {
      if (earlier !== q.question) conflicts.push(q.id);
      return;
    }
    seen.set(q.id, q.question);
    const topic = q.topic ?? topicData.questionTopics[q.id] ?? '';
    const flashcardIds = topicData.flashcards[unitId]?.[topic] ?? [];
    questions.push({ ...q, unitId, topic, flashcardIds });
  };

  for (const unit of course.units) {
    unit.quiz.forEach(q => add(unit.id, q));
    pool.filter(q => q.unitNumber === unit.number).forEach(q => add(unit.id, q));
    (extra[unit.id] ?? []).forEach(q => add(unit.id, q));
  }

  return {
    questions,
    conflicts,
    summaryUnitIds: summaryUnitIds ?? [...new Set(pool.map(q => unitByNumber.get(q.unitNumber)?.id).filter((id): id is string => !!id))],
  };
}
