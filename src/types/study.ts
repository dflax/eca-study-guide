export interface Course {
  id: string;
  displayName: string;  // e.g., "2025–2026 · 9th Grade Science · Ms. Johnson"
  year: string;         // e.g., "2025-2026". For general-topics courses, a stable non-year slug like "general".
  category: 'school-year' | 'general'; // 'school-year' groups by `year`; 'general' lands in the General Topics section
  subject: string;      // e.g., "9th Grade Science"
  teacher: string;      // e.g., "[Teacher Name]"
  school: string;       // e.g., "Emet Classical Academy"
  description: string;
  color: string;        // Tailwind color class prefix e.g., "indigo"
  units: Unit[];
  summaryQuiz?: SummaryQuizConfig; // Optional cross-unit quiz drawn from a large question pool
}

export interface SummaryQuizConfig {
  title: string;
  description: string;
  questionCount: number;  // questions per attempt
  poolSize: number;       // total questions in the pool (display only; verified at build by the pool module)
}

export interface PoolQuestion extends QuizQuestion {
  unitNumber: number;     // which unit the question belongs to, used to balance each attempt
}

export interface Unit {
  id: string;           // e.g., "unit-01-energy"
  number: number;
  title: string;
  description: string;
  notes: NoteSection[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
}

export interface NoteSection {
  heading: string;
  content: string;      // Plain text with \n for newlines
  bullets?: string[];   // Optional bullet list items
  image?: NoteImage;    // Optional diagram shown below the text
}

export interface NoteImage {
  src: string;          // Path under /public, e.g. "/images/<course>/diagram.jpg"
  alt: string;          // Describes the diagram for screen readers
  caption?: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];      // Always 4 options
  correctIndex: number;   // 0-3
  explanation: string;
  // Set on questions that come from a course question bank (see src/data/assemble-bank.ts).
  unitId?: string;          // unit the question belongs to
  topic?: string;           // exact `heading` of a note section in that unit
  flashcardIds?: string[];  // flashcards that cover the topic
}

// A question once it has been placed in a unit and tagged with a topic.
export interface BankQuestion extends QuizQuestion {
  unitId: string;
  topic: string;            // '' when the question has not been tagged
  flashcardIds: string[];
}

export interface CourseBank {
  questions: BankQuestion[];   // every quiz question for the course: unit quizzes + pools + new bank questions
  summaryUnitIds: string[];    // units the cross-unit summary quiz draws from (empty when the course has none)
  conflicts: string[];         // ids reused by two different questions; the later one is dropped (validator reports these)
}

// Hand-written topic data a course supplies to assemble its bank.
export interface CourseTopicData {
  // unit id -> note heading -> ids of the flashcards that cover that heading
  flashcards: Record<string, Record<string, string[]>>;
  // id of an existing (untagged) question -> note heading it tests
  questionTopics: Record<string, string>;
}

// Progress tracking
export interface UserProfile {
  name: string;
  createdAt: string;
}

export interface QuizAttempt {
  score: number;
  total: number;
  date: string;
  percentage: number;
}

export interface UnitProgress {
  flashcardsLearned: string[];  // flashcard IDs
  flashcardsSkipped: string[];  // flashcard IDs
  quizAttempts: QuizAttempt[];
  notesViewed: boolean;
  lastVisited: string;
}

export interface CourseProgress {
  [unitId: string]: UnitProgress;
}

// One quiz sitting's results for a single topic (practice follow-ups included).
export interface TopicSession {
  correct: number;
  total: number;
  date: string;
}

export interface QuestionRecord {
  attempts: number;
  correct: number;
  lastCorrect: boolean;
  lastDate: string;
}

export interface AllProgress {
  user: UserProfile | null;
  // Both optional so progress saved by earlier versions still loads.
  topicSessions?: { [courseId: string]: { [topicKey: string]: TopicSession[] } };   // key: `${unitId}::${topic}`
  questionHistory?: { [courseId: string]: { [questionId: string]: QuestionRecord } };
  courses: {
    [courseId: string]: CourseProgress;
  };
}
