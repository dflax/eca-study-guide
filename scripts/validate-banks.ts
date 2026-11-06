/**
 * Validates every course's question bank. Run: pnpm validate:banks [courseId]
 * Exits 1 if any error is found; warnings are advisory.
 */
import { allCourses } from '../src/data/index';
import { loadCourseBank } from '../src/data/banks';
import { topicSlug } from '../src/lib/topics';

const MIN_UNIT_BANK = 25;          // target 25-40 per unit
const MIN_TOPIC_QUESTIONS = 4;     // error below this
const WARN_TOPIC_QUESTIONS = 6;
const MAX_LONGEST_SHARE = 0.4;     // correct option may be the strictly longest in at most 40% of a unit's questions

const only = process.argv[2];
let totalErrors = 0;
let totalWarnings = 0;

async function main() {
  for (const course of allCourses) {
    if (only && course.id !== only) continue;
    const errors: string[] = [];
    const warnings: string[] = [];
    const bank = await loadCourseBank(course.id);
    if (!bank) {
      errors.push('no bank registered in src/data/banks.ts');
      report(course.id, 0, errors, warnings);
      continue;
    }
    for (const id of bank.conflicts) errors.push(`id "${id}" is used by two different questions`);

    const unitIds = new Set(course.units.map(u => u.id));
    for (const id of bank.summaryUnitIds) if (!unitIds.has(id)) errors.push(`summaryUnitIds has unknown unit "${id}"`);

    const flashcardIdsByUnit = new Map(course.units.map(u => [u.id, new Set(u.flashcards.map(f => f.id))]));

    for (const unit of course.units) {
      const headings = unit.notes.map(n => n.heading);
      const headingSet = new Set(headings);
      const slugs = headings.map(topicSlug);
      if (new Set(slugs).size !== slugs.length) errors.push(`${unit.id}: two note headings share a URL anchor`);

      const qs = bank.questions.filter(q => q.unitId === unit.id);
      if (qs.length < MIN_UNIT_BANK) errors.push(`${unit.id}: only ${qs.length} questions (need ${MIN_UNIT_BANK}+)`);

      const seenText = new Set<string>();
      const perTopic = new Map<string, number>();
      let longest = 0;
      const positions = [0, 0, 0, 0];
      for (const q of qs) {
        const where = `${unit.id} ${q.id}`;
        if (q.options.length !== 4) errors.push(`${where}: ${q.options.length} options`);
        if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex > 3) errors.push(`${where}: bad correctIndex ${q.correctIndex}`);
        if (new Set(q.options.map(o => o.trim().toLowerCase())).size !== q.options.length) errors.push(`${where}: duplicate options`);
        if (!q.question.trim() || !q.explanation.trim()) errors.push(`${where}: empty question or explanation`);
        const norm = q.question.trim().toLowerCase();
        if (seenText.has(norm)) errors.push(`${where}: duplicate question text`);
        seenText.add(norm);

        if (!q.topic) errors.push(`${where}: no topic`);
        else if (!headingSet.has(q.topic)) errors.push(`${where}: topic "${q.topic}" is not a note heading in ${unit.id}`);
        else perTopic.set(q.topic, (perTopic.get(q.topic) ?? 0) + 1);

        const correctLen = q.options[q.correctIndex]?.length ?? 0;
        if (q.options.every((o, i) => i === q.correctIndex || o.length < correctLen)) longest++;
        positions[q.correctIndex]++;
      }

      for (const [topic, n] of perTopic) {
        if (n < MIN_TOPIC_QUESTIONS) errors.push(`${unit.id}: topic "${topic}" has only ${n} questions (need ${MIN_TOPIC_QUESTIONS}+)`);
        else if (n < WARN_TOPIC_QUESTIONS) warnings.push(`${unit.id}: topic "${topic}" has ${n} questions (aim for ${WARN_TOPIC_QUESTIONS}+)`);
      }
      for (const h of headings) if (!perTopic.has(h)) warnings.push(`${unit.id}: note heading "${h}" has no questions`);
      if (qs.length > 0 && longest / qs.length > MAX_LONGEST_SHARE) {
        errors.push(`${unit.id}: correct answer is the longest option in ${longest}/${qs.length} questions (answer-length bias)`);
      }
      if (qs.length > 0 && Math.max(...positions) / qs.length > 0.4) {
        warnings.push(`${unit.id}: authored answer positions skewed ${positions.join('/')} (fresh draws reshuffle, so this only affects the first attempt)`);
      }

      // Flashcard links per heading.
      const fcIds = flashcardIdsByUnit.get(unit.id)!;
      for (const q of qs) {
        for (const f of q.flashcardIds) if (!fcIds.has(f)) errors.push(`${unit.id} ${q.id}: unknown flashcard "${f}"`);
      }
      for (const h of headings) {
        const linked = qs.find(q => q.topic === h)?.flashcardIds ?? [];
        if (perTopic.has(h) && linked.length === 0) warnings.push(`${unit.id}: topic "${h}" links to no flashcards`);
      }
    }

    // Every question must belong to a real unit.
    for (const q of bank.questions) if (!unitIds.has(q.unitId)) errors.push(`${q.id}: unknown unit "${q.unitId}"`);

    report(course.id, bank.questions.length, errors, warnings);
  }
  console.log(`\n${totalErrors} error(s), ${totalWarnings} warning(s)`);
  process.exit(totalErrors > 0 ? 1 : 0);
}

function report(id: string, count: number, errors: string[], warnings: string[]) {
  totalErrors += errors.length;
  totalWarnings += warnings.length;
  console.log(`\n${errors.length === 0 ? 'OK  ' : 'FAIL'} ${id} (${count} questions, ${errors.length} errors, ${warnings.length} warnings)`);
  errors.slice(0, 60).forEach(e => console.log(`  error: ${e}`));
  if (errors.length > 60) console.log(`  ... ${errors.length - 60} more errors`);
  if (process.env.WARNINGS) warnings.forEach(w => console.log(`  warn:  ${w}`));
}

main();
