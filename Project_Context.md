# Project Context — ECA Study Guide

## Project Overview

A Next.js 16 study guide app built to prepare Jack for his 9th grade final exams at Emet Classical Academy. The app provides notes, flashcards, and quizzes for each unit of each course. Progress is tracked per-unit in `localStorage`.

**Deployed to:** Vercel or Netlify  
**Tech stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn/ui components, pnpm

---

## Repository Structure

```
/Users/dflax/Sites/eca-study-guide/
  CLAUDE.md                        # AI pair-programming instructions
  Project_Context.md               # This file
  documentation/                   # Reference PDFs (study guides, etc.)
  eca-study-guide/                 # Next.js app root
    src/
      app/                         # Next.js App Router pages
        layout.tsx
        page.tsx                   # Home / course listing
        [courseId]/                # Course overview page
          [unitId]/                # Unit detail pages
            flashcards/
            notes/
            quiz/
      components/                  # Shared React components
        CourseCard.tsx
        Header.tsx
        ProgressRing.tsx
        UnitCard.tsx
        UserSetup.tsx
        ui/                        # shadcn/base-ui primitives
      data/                        # Static course/unit data
        index.ts                   # allCourses registry + getCourse/getUnit helpers
        courses/
          science-9th-2026/
            index.ts               # Course definition
            units/                 # One file per unit (unit-01 through unit-12)
      lib/
        progress.ts                # localStorage progress tracking helpers
      types/
        study.ts                   # Course, Unit, Flashcard, QuizQuestion, Progress types
```

---

## Courses

### Science — 9th Grade · 2025–2026

| Field | Value |
|-------|-------|
| `id` | `science-9th-2026` |
| `teacher` | Dr. Shulman |
| `displayName` | 2025–2026 · 9th Grade Science · Dr. Shulman |
| `subject` | 9th Grade Science |
| `school` | Emet Classical Academy |
| `color` | indigo |

**Units (12 total):**

| # | ID | Title | Description |
|---|----|-------|-------------|
| 1 | `unit-01-energy` | Energy | Kinetic and potential energy types, GPE formula, energy transfer diagrams, and dimensional analysis. |
| 2 | `unit-02-waves` | Waves | Transverse and longitudinal waves, wave components, behaviors, the double-slit experiment, and standing waves. |
| 3 | `unit-03-atomic-theory` | Development of Atomic Theory | Matter classification, physical vs. chemical properties, separation techniques, and the laws of Proust and Dalton. |
| 4 | `unit-04-atomic-structure` | Atomic Structure | Subatomic particles, atomic models, isotopes, moles, Avogadro's number, scientific notation, and significant figures. |
| 5 | `unit-05-electrons` | Electrons | Orbitals, electron configurations, Bohr diagrams, Lewis dot structures, and ions. |
| 6 | `unit-06-periodic-trends` | Periodic Trends | Shielding, effective nuclear charge, atomic radius, ionization energy, electronegativity, and how these trends vary across the periodic table. |
| 7 | `unit-07-bonding` | Bonding and Nomenclature | Ionic, covalent, and metallic bonds; naming compounds; Lewis structures; the octet rule; and properties of different compound types. |
| 8 | `unit-08-vsepr` | VSEPR and Molecular Geometry | Electron geometry, molecular geometry, hybridization, polarity, and intermolecular forces. |
| 9 | `unit-09-reactions` | Reactions | Reaction types, balancing equations, predicting products, and the reactivity series. |
| 10 | `unit-10-stoichiometry` | Stoichiometry | Molar ratios, molar mass conversions, limiting and excess reagents, and percent yield calculations. |
| 11 | `unit-11-kmt` | Kinetic Molecular Theory | KMT postulates, phase diagrams, heating curves, evaporation, specific heat capacity, and endothermic/exothermic phase changes. |
| 12 | `unit-12-lab-skills` | Lab Skills | Laboratory equipment identification, safety rules, measurement techniques, recording observations, and proper lab procedures. |

---

### Integrated Science II — Unit 2: Energy · 2026–2027

| Field | Value |
|---|---|
| `id` | `integrated-science-energy-10th-2027` |
| `displayName` | 2026–2027 · 10th Grade Integrated Science II · Unit 2: Energy · Dr. Shulman |
| Units | 6 (164 flashcards, 64 unit-quiz questions, 328-question summary pool) |

Built from the Unit 2 study guide and review sheet PDFs (`documentation/20261021 Integrated Science II - Unit 2 Energy Study Guide.pdf`, `20261022 Jack ... Review Sheet.pdf`). Separate course from Unit 1 so each exam has its own summary quiz. The teacher's review-sheet key has errors on Q2, Q4 and Q20 B; the content uses the corrected answers and flags them. Notes support an optional `image` (files in `public/images/integrated-science-10th-2027/`).

### History — 10th Grade · 2026–2027

| Field | Value |
|-------|-------|
| `id` | `history-10th-2027` |
| `displayName` | 2026–2027 · 10th Grade History · Dr. Levine |
| `teacher` | Dr. Levine |
| `color` | `red` |
| Units | 8 (Renaissance & New Monarchies, Module 002), 250 flashcards, 110 quiz questions, 432-question summary pool from units 1–6 (24 per attempt) |

Built from `documentation/20261021 Jack History Quiz Review Materials.pdf` plus the 002A, 002A.3, 002B, 002B.2, 002C, 002C.1, 002C.2 and 002C.3 class scans (same folder) (quiz Oct 26, 2026). Units map to guide sections 002A.1–2, 002A.3, 002B, 002C.1, 002C.2, 002C.3; the guide's 36 numbered review questions are flashcards in the matching unit. More units expected as the course continues.

## Data Model

Defined in `src/types/study.ts`:

- **`Course`** — top-level object with id, displayName, teacher, school, units[]
- **`Unit`** — id, number, title, description, notes[], flashcards[], quiz[]
- **`NoteSection`** — heading, content (plain text with `\n`), optional bullets[]
- **`Flashcard`** — id, front, back
- **`QuizQuestion`** — id, question, options[4], correctIndex (0–3), explanation; optional `unitId`, `topic`, `flashcardIds` set when it comes from a bank
- **`BankQuestion` / `CourseBank` / `CourseTopicData`** — a tagged question; a course's whole bank plus `summaryUnitIds`; the hand-written tags (`flashcards` per note heading, `questionTopics` per existing question)
- **`TopicSession` / `QuestionRecord`** — per-topic sitting results and per-question history, stored in optional `AllProgress.topicSessions` / `questionHistory`
- **`UnitProgress`** — flashcardsLearned[], flashcardsSkipped[], quizAttempts[], notesViewed, lastVisited
- **`AllProgress`** — user profile + per-course per-unit progress map (stored in `localStorage`)

---

## Progress Tracking

Progress is persisted to `localStorage` under the key `eca_study_progress`. Helpers in `src/lib/progress.ts`:

- `getUserProfile()` / `setUserProfile(name)`
- `getUnitProgress(courseId, unitId)`
- `markNotesViewed(courseId, unitId)`
- `markFlashcardLearned(courseId, unitId, flashcardId)`
- `recordQuizAttempt(courseId, unitId, score, total)`
- `resetUnitProgress(courseId, unitId)`
- `getLastQuizScore(courseId, unitId)`

A unit is considered "complete" when: notes viewed + ≥80% of flashcards learned + best quiz score ≥70%.

---

## Adaptive Practice (question banks)

- Each course has `src/data/courses/<id>/bank/` (`index.ts`, `topics.ts`, optional `unit-NN.ts`). `assembleBank()` merges unit quiz + summary pool + new bank questions (de-duplicated by id) and tags each with unit, **topic = exact note `heading`**, and the topic's flashcard ids. `src/data/banks.ts` registers the loaders; banks are code-split and loaded on demand by `QuizSession`, never put on `Unit`/`Course`.
- Quiz pages render `QuizSession` (loads the bank, serves the first attempt, "New Questions", weak-area quiz, same-topic follow-ups) which renders `QuizMode`. Pure logic is in `src/lib/quiz-builder.ts` and `src/lib/mastery.ts`.
- **Mastery:** last two qualifying sittings (≥2 answers on the topic) each ≥80%; needs-work = latest sitting <80% (any size). Follow-up practice questions count toward topic stats but not the quiz score; weak-area quizzes are not recorded as unit quiz attempts. The overall pass message in `QuizMode` stays at 70% (same as unit completion); 80% applies to topic mastery only. A sitting below 80% on a topic marks it needs-work even if it had just one answer.
- Wrong answers link (new tab) to `/<course>/<unit>/notes#<slug of heading>` and `/<course>/<unit>/flashcards?cards=<ids>`.
- `pnpm validate:banks` (content validator: 4 options, topics are real headings, ≥25 questions per unit, ≥4 per topic, answer-length bias) and `pnpm test:quiz` (logic tests) — run both before committing content changes.
- When adding or changing a note heading, update the `bank/topics.ts` entries that use it; the validator will flag stale topics.

## Key Decisions

- **No database** — all content is static TypeScript; progress lives in `localStorage`
- **No auth** — single-user app (Jack), name collected on first visit via `UserSetup` component
- **Static course data** — adding a new course means creating a new directory under `src/data/courses/` and registering it in `src/data/index.ts`
- **Tailwind CSS v4** with `@tailwindcss/postcss` — no `tailwind.config.js` needed
- **Next.js 16 async params** — route handlers use `params: Promise<{...}>` pattern; client pages unwrap with `use()` hook
- **All pages are client components** — because localStorage is used for progress on every page
- **Flashcard 3D flip** — implemented via custom CSS classes in `globals.css` (perspective, transform-style, backface-visibility)
- **lib/utils.ts** — required by shadcn/ui components; provides `cn()` using clsx + tailwind-merge

## Build Status
- `pnpm build` passes with zero TypeScript errors as of 2026-05-26
- All 7 routes build successfully (static home + 6 dynamic routes)
- Deploy to Vercel: push to main branch, connect repo in Vercel dashboard

## Summary Quizzes (course-level)

- Optional `summaryQuiz` config on `Course` enables a cross-unit quiz at `/[courseId]/summary-quiz` (entry card on the course page).
- The summary quiz draws from the course question bank (see Adaptive Practice), restricted to `CourseBank.summaryUnitIds` (units present in the course's `summary-pool`; History units 7–8 are excluded on purpose).
- `src/lib/summary-quiz.ts` samples after mount: units get an even share (30 across 7 units = 4 each, 2 random units get 5), questions from the previous attempt are skipped when possible, and option order is shuffled.
- Attempts are saved under unit id `summary-quiz` (does not affect unit completion).
- `integrated-science-10th-2027` (500-question pool), `integrated-science-energy-10th-2027` (328-question pool) and `history-10th-2027` (432-question pool, units 1–6): existing unit quizzes + `summary-pool/unit-0N.ts`.
