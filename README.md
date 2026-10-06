# ECA Study Guide

Interactive exam prep for students at **Emet Classical Academy**. Study notes, flashcards, and quizzes — organized by subject, unit, and teacher — accessible from any device via a shared URL.

**Live site:** [ecastudyguide.org](https://www.ecastudyguide.org)

---

## What's Inside

Courses are organized on the homepage into sections by school year (newest first), plus a **General Topics** section for subjects that aren't tied to a specific school year or class.

### 2025–2026 School Year

| Course | Teacher | Units | Flashcards | Quiz Questions |
|--------|---------|-------|------------|----------------|
| 9th Grade Science | Dr. Shulman | 12 | 156 | 129 |
| Hebrew | Morah Gabay | 3 | 91 | 36 |
| Latin | Mr. Karlin | 6 | 121 | 70 |
| Integrated Humanities | Ms. Attar | 6 | 77 | 67 |

### 2026–2027 School Year

| Course | Teacher | Units | Flashcards | Quiz Questions |
|--------|---------|-------|------------|----------------|
| 10th Grade Integrated Science II | Dr. Shulman | 7 | 82 | 59 (+ 500-question summary pool) |

### General Topics

| Course | Units | Flashcards | Quiz Questions |
|--------|-------|------------|----------------|
| NY State Driver's Permit Test Prep | 12 | 195 | 146 |

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

### Integrated Science II Units — Unit 1: Chemistry of Life (2026–2027)
1. Water & Chemical Bonds
2. Macromolecules & Functional Groups
3. Proteins
4. Nucleic Acids
5. Carbohydrates
6. Lipids
7. Comparing the Macromolecules

**Summary Quiz — All Units:** 30 questions drawn at random from a 500-question pool (the 59 unit-quiz questions plus 441 summary-only questions), balanced across all seven units and reshuffled on every attempt. Pool lives in `src/data/courses/integrated-science-10th-2027/summary-pool/`.

### Hebrew Units (Morah Gabay)
1. Vocabulary — City & School (bidirectional flashcards: Hebrew ↔ English)
2. Self-Introduction Conversation & שם פועל Grammar
3. Reading Practice — A Student's Introduction

> More Hebrew units will be added when textbook pages 1–117 become available.

### Latin Units (Mr. Karlin)
1. The Latin Case System — names, functions, and order of all 6 cases
2. 1st & 2nd Declension — full noun and adjective declension tables
3. Pronouns — meus/tuus/suus, is/ea/id, hic/haec/hoc, ille/illa/illud, qui/quae/quod
4. Verbs — 3rd person indicative, 2nd person imperative, active vs. passive
5. Vocabulary — core words from *Lingua Latina* Chapters I–VIII (bidirectional Latin ↔ English)
6. Suffixes, Prepositions & Numbers — -ne / -que, prepositions with cases, numbers 1–10 / ordinals 1–3

> Vocabulary will be expanded when the textbook becomes available.

### Integrated Humanities Units (Ms. Attar)
1. Key Terms — People & Figures (Homer, Herodotus, Socrates, Plato, Caesar, Virgil, Jesus, Josephus, and more)
2. Political & Historical Concepts (Republic, Dictator, Pax Romana, Triumvirate, Rubicon, etc.)
3. Ideas, Religion & Culture (Philosophy, Justice, Virtue, Covenant, Monotheism, Catholic, etc.)
4. Essay Theme A — The Individual and the State (Plato's *Republic*, *Apology*, Aristotle's *Politics*)
5. Essay Theme B — The Jews and Rome (Livy, Hadas, Tacitus, Josephus)
6. Essay Theme C — Man and G-d (Numbers 35, Hammurabi, Memphite Theology, Gilgamesh, Homer)

### NY State Driver's Permit Test Prep (Self-Study)
Based on the official NY DMV Driver's Manual. Every fact, fine, point value, and BAC threshold is drawn directly from the manual text.
1. Driver Licenses & the Learner Permit
2. How to Keep Your License
3. Owning a Vehicle — Registration, Title & Inspection
4. Traffic Control — Signs, Signals & Pavement Markings
5. Intersections, Right-of-Way & Turns
6. How to Pass & School Buses
7. Parallel Parking & Parking Regulations
8. Defensive Driving
9. Alcohol, Drugs & the Law
10. Special Driving Conditions
11. Sharing the Road
12. Crashes & Modern Vehicle Technology

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
| Hosting | Vercel (auto-deploys on push to `master`) |

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
