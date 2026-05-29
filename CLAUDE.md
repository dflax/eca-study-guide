# CLAUDE.md — Instructions for Claude Code AI Pair-Programming Partner

## Mission

Build and maintain the **ECA Study Guide** — an interactive exam prep web app for students at Emet Classical Academy. Daniel is the solo developer and product owner. The goal is to help students (primarily Jack and his friends) study for final exams across multiple subjects.

The live site is at [eca-study-guide.vercel.app](https://eca-study-guide.vercel.app). Every push to `master` auto-deploys via Vercel.

---

## Repository & Project Layout

```
/Users/dflax/Sites/eca-study-guide/   ← git repo root AND Next.js app root
  CLAUDE.md                           ← you are here
  Project_Context.md                  ← high-level project state (maintain this)
  documentation/                      ← source PDFs (study guides from teachers)
  src/                                ← Next.js source
  package.json
  next.config.ts
  tsconfig.json
```

**Git remote:** `git@github.com:dflax/eca-study-guide.git`

> **Vercel root directory:** must be set to repo root (blank/`./`) — not a subdirectory.

---

## Technology Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Package manager:** pnpm
- **Progress storage:** localStorage (no database — intentional for V1)
- **Hosting:** Vercel — push to `master` = live deploy

---

## Code Patterns & Conventions

### File Naming
- **Data files:** lowercase with hyphens → `unit-01-energy.ts`, `unit-02-waves.ts`
- **Components:** PascalCase → `FlashcardDeck.tsx`, `QuizMode.tsx`
- **Types:** `src/types/study.ts`
- **Lib utilities:** `src/lib/progress.ts`, `src/lib/courses.ts`

### Course Data Pattern
All content lives in TypeScript data files. No CMS, no API, no database.

```
src/data/
  index.ts                           ← registers all courses in allCourses[]
  courses/
    [course-id]/
      index.ts                       ← Course metadata + imports all units
      units/
        unit-01-[topic].ts           ← Unit with notes, flashcards, quiz
```

Each unit file exports a `Unit` object matching `src/types/study.ts`. Always check that file for the current interface before writing new data.

### Adding a New Subject
1. Create `src/data/courses/[course-id]/index.ts`
2. Create unit files under `src/data/courses/[course-id]/units/`
3. Register in `src/data/index.ts`
4. Run `pnpm build` — must pass before committing
5. **Update README.md** (see below)

### Next.js 15 Route Params
Always async in route handlers:
```typescript
// ✅ Correct
export default async function Page({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
}

// ✅ In client components
const { courseId } = useParams<{ courseId: string }>();
```

### Client vs. Server Components
- Pages that read `localStorage` must be `'use client'`
- `src/lib/progress.ts` guards all calls with `typeof window === 'undefined'` checks
- Static data pages (notes, flashcards, quiz) are server components that render client components

---

## README Maintenance (Required)

**The README.md must be kept current.** After every build that adds or changes content:

- Update the **Subjects table** (course name, teacher, unit count, flashcard count, quiz question count)
- Update the **unit lists** if units were added or renamed
- Update **Planned subjects** if something moved from planned to built

Run these to get current counts before updating:
```bash
grep -c "front:" src/data/courses/[course-id]/units/*.ts | awk -F: '{sum += $2} END {print sum}'
grep -c "question:" src/data/courses/[course-id]/units/*.ts | awk -F: '{sum += $2} END {print sum}'
```

Do not leave the README showing stale numbers. It is the project's public face on GitHub.

---

## Commit Strategy

```bash
pnpm build                          # must pass — never commit a broken build
git add [specific files]            # never `git add -A` blindly
git commit -m "descriptive message"
git push origin master              # triggers Vercel deploy
```

Commit messages should say what changed and why, not just what files were touched.

---

## Quality Gate

Before every commit: `pnpm build` must produce zero TypeScript errors and compile successfully.

There are no automated test suites in this project. Build success + manual spot-check is the quality gate.

---

## Progress Tracking Architecture

All progress stored in `localStorage` under key `eca_study_progress`. Structure:
```typescript
{
  user: { name: string, createdAt: string },
  courses: {
    [courseId]: {
      [unitId]: {
        flashcardsLearned: string[],   // flashcard IDs
        quizAttempts: { score, total, date, percentage }[],
        notesViewed: boolean,
        lastVisited: string
      }
    }
  }
}
```

**Do not add a database** unless Daniel explicitly asks for cross-device sync. The localStorage-only approach is intentional.

---

## Multi-Subject Design

Each subject gets a distinct color (Tailwind color name set in the course `color` field):
- Science: `indigo`
- Hebrew: `emerald`
- Bible: `amber` (planned)
- History: `rose` (planned)

The course `displayName` format is: `'YYYY–YYYY · Subject · Teacher'`
Example: `'2025–2026 · 9th Grade Science · Dr. Shulman'`

---

## Key Decisions (Do Not Revisit Without Daniel)

- **No database in V1** — localStorage is sufficient for exam prep; upgrade to Supabase if cross-device sync is needed
- **No user accounts** — share the URL; each browser is its own isolated progress tracker
- **Static content files** — all quiz/flashcard content in TypeScript; database-backed content is a future enhancement
- **No grade level in site title** — students from multiple grades use the same site

---

## Current Courses

| ID | Display Name | Teacher | Units |
|----|-------------|---------|-------|
| `science-9th-2026` | 2025–2026 · 9th Grade Science | Dr. Shulman | 12 |
| `hebrew-9th-2026` | 2025–2026 · Hebrew | Morah Gabay | 3 (expanding) |
| `latin-9th-2026` | 2025–2026 · Latin | Mr. Karlin | 6 |
| `humanities-9th-2026` | 2025–2026 · Integrated Humanities | Ms. Attar | 6 |

---

## Planned Enhancements (Future — Not Now)

- Additional Hebrew units from textbook pages 1–117 (when textbook is available)
- Bible (9th grade) study guide
- History (9th grade) study guide
- Supabase backend for cross-device progress sync
- Swift iOS app
- Database-backed content management (no-deploy content updates)
