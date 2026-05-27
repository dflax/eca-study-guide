export interface Course {
  id: string;
  displayName: string;  // e.g., "2025–2026 · 9th Grade Science · Ms. Johnson"
  year: string;         // e.g., "2025-2026"
  subject: string;      // e.g., "9th Grade Science"
  teacher: string;      // e.g., "[Teacher Name]"
  school: string;       // e.g., "Emet Classical Academy"
  description: string;
  color: string;        // Tailwind color class prefix e.g., "indigo"
  units: Unit[];
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

export interface AllProgress {
  user: UserProfile | null;
  courses: {
    [courseId: string]: CourseProgress;
  };
}
