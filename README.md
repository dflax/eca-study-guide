# ECA Study Guide

Interactive exam prep for students at **Emet Classical Academy**. Study notes, flashcards, and quizzes — organized by subject, unit, and teacher — accessible from any device via a shared URL.

**Live site:** [eca-study-guide.vercel.app](https://eca-study-guide.vercel.app)

---

## What's Inside

### Subjects

| Course | Teacher | Units | Flashcards | Quiz Questions |
|--------|---------|-------|------------|----------------|
| 2025–2026 · 9th Grade Science | Dr. Shulman | 12 | 156 | 129 |
| 2025–2026 · Hebrew | Morah Gabay | 2 | 79 | 24 |

### Science Units (Dr. Shulman)
1. Energy
2. Waves
3. Development of Atomic Theory of Matter
4. Atomic Structure
5. Electrons
6. Periodic Trends
7. Bonding and Nomenclature
8. VSEPR and Molecular Geometry
9. Reactions
10. Stoichiometry
11. Kinetic Molecular Theory
12. Lab Skills

### Hebrew Units (Morah Gabay)
1. Vocabulary — City & School (bidirectional flashcards: Hebrew ↔ English)
2. Self-Introduction Conversation & שם פועל Grammar

> More Hebrew units will be added when textbook pages 1–117 become available.

---

## Study Modes

Every unit has three modes:

- **Notes** — Structured reference material explaining key concepts, organized by topic
- **Flashcards** — Tap to flip. Mark cards as learned or flag for review. Progress is saved.
- **Quiz** — Multiple choice, one question at a time. Immediate feedback with explanations. Scores are saved.

---

## How Progress Works

No accounts or logins required. Each student enters their name on first visit. Progress is stored locally in the browser — private to that browser, no server involved. Any student can use the same URL and track their own progress independently.

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Package manager | pnpm |
| Progress storage | localStorage (no database) |
| Hosting | Vercel (auto-deploys on push to `main`) |

---

## Running Locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm build   # production build check
```

---

## Adding a New Subject

All course content lives in TypeScript data files — no database, no CMS. Adding a new subject is a single data file away from being live.

**Steps:**
1. Create `src/data/courses/[course-id]/index.ts` with course metadata
2. Create `src/data/courses/[course-id]/units/unit-01-*.ts` (and more as needed)
3. Register the course in `src/data/index.ts`
4. Run `pnpm build` to verify — then push to deploy

Each unit file exports a `Unit` object with three arrays: `notes`, `flashcards`, and `quiz`. See any existing unit file for the pattern.

**Planned subjects:**
- Bible (9th grade)
- History (9th grade)
- Additional Hebrew units (textbook pages 1–117)

---

## Project Structure

```
src/
  app/                          # Next.js pages (App Router)
    [courseId]/
      [unitId]/
        notes/
        flashcards/
        quiz/
  components/                   # UI components
  data/
    courses/
      science-9th-2026/         # Science course + 12 unit files
      hebrew-9th-2026/          # Hebrew course + unit files
    index.ts                    # Registers all courses
  lib/
    progress.ts                 # localStorage read/write helpers
  types/
    study.ts                    # TypeScript interfaces
```

---

## Source Materials

Study guide PDFs are stored in the `documentation/` directory at the repo root (one level up from this app). These are the source of truth for all course content.
