/** Unit tests for the pure quiz logic. Run: pnpm test:quiz */
import assert from 'node:assert/strict';
import type { BankQuestion, TopicSession } from '../src/types/study';
import { topicStatus } from '../src/lib/mastery';
import { buildFreshQuiz, buildWeakAreaQuiz, findWeakTopics, pickFollowUp, shuffleOptions } from '../src/lib/quiz-builder';
import { topicSlug } from '../src/lib/topics';
import { loadCourseBank } from '../src/data/banks';

let passed = 0;
function test(name: string, fn: () => void | Promise<void>) {
  return Promise.resolve(fn()).then(
    () => { passed++; console.log(`  ok  ${name}`); },
    err => { console.error(`FAIL  ${name}\n${err}`); process.exit(1); },
  );
}

function q(id: string, unitId: string, topic: string): BankQuestion {
  return { id, unitId, topic, flashcardIds: [], question: id, options: ['a', 'bb', 'ccc', 'dddd'], correctIndex: 2, explanation: 'x' };
}
const sess = (correct: number, total: number): TopicSession => ({ correct, total, date: '2026-01-01' });

async function main() {
  await test('mastery: two qualifying sittings at 80%+ is mastered', () => {
    assert.equal(topicStatus([sess(4, 5), sess(5, 5)]), 'mastered');
    assert.equal(topicStatus([sess(8, 10), sess(4, 5)]), 'mastered');
  });
  await test('mastery: 79% does not count, 80% does', () => {
    assert.equal(topicStatus([sess(4, 5), sess(79, 100)]), 'needs-work');
    assert.equal(topicStatus([sess(4, 5), sess(80, 100)]), 'mastered');
  });
  await test('mastery: one good sitting is only building; no sittings is new', () => {
    assert.equal(topicStatus([sess(5, 5)]), 'building');
    assert.equal(topicStatus([]), 'new');
    assert.equal(topicStatus(undefined), 'new');
  });
  await test('mastery: a later bad sitting breaks mastery; sittings of 1 answer are ignored', () => {
    assert.equal(topicStatus([sess(5, 5), sess(5, 5), sess(1, 5)]), 'needs-work');
    assert.equal(topicStatus([sess(5, 5), sess(1, 1)]), 'building');
    assert.equal(topicStatus([sess(1, 1)]), 'new');
  });
  await test('mastery: a single miss (0 of 1) is needs-work, not ignored', () => {
    assert.equal(topicStatus([sess(0, 1)]), 'needs-work');
    assert.equal(topicStatus([sess(5, 5), sess(5, 5), sess(0, 1)]), 'needs-work');
  });
  await test('mastery: only the last two qualifying sittings matter', () => {
    assert.equal(topicStatus([sess(0, 5), sess(5, 5), sess(5, 5)]), 'mastered');
  });

  await test('shuffleOptions keeps the correct answer text and does not mutate', () => {
    const src = q('x', 'u', 't');
    for (let i = 0; i < 50; i++) {
      const out = shuffleOptions(src);
      assert.equal(out.options[out.correctIndex], 'ccc');
      assert.deepEqual([...out.options].sort(), ['a', 'bb', 'ccc', 'dddd']);
      assert.equal(out.topic, 't');
    }
    assert.deepEqual(src.options, ['a', 'bb', 'ccc', 'dddd']);
  });

  const bank: BankQuestion[] = [];
  for (const t of ['A', 'B', 'C']) for (let i = 0; i < 8; i++) bank.push(q(`${t}${i}`, 'u1', t));
  for (let i = 0; i < 8; i++) bank.push(q(`Z${i}`, 'u2', 'A'));   // same topic name, different unit

  await test('fresh quiz: right size, no duplicates, spread across topics', () => {
    const quiz = buildFreshQuiz(bank.filter(b => b.unitId === 'u1'), 9, {});
    assert.equal(quiz.length, 9);
    assert.equal(new Set(quiz.map(x => x.id)).size, 9);
    for (const t of ['A', 'B', 'C']) assert.equal(quiz.filter(x => x.topic === t).length, 3);
  });
  await test('fresh quiz: prefers unseen questions', () => {
    const u1 = bank.filter(b => b.unitId === 'u1');
    const seen = ['A', 'B', 'C'].flatMap(t => u1.filter(x => x.topic === t).slice(0, 4));
    const history = Object.fromEntries(seen.map(x => [x.id, { attempts: 1, correct: 1, lastCorrect: true, lastDate: 'd' }]));
    const quiz = buildFreshQuiz(u1, 9, history);
    assert.ok(quiz.every(x => !history[x.id]), 'each topic has 4 unseen left, so none of the 9 should be a repeat');
  });
  await test('fresh quiz: a small bank returns what exists without crashing', () => {
    assert.equal(buildFreshQuiz(bank.slice(0, 3), 10, {}).length, 3);
    assert.equal(buildFreshQuiz([], 10, {}).length, 0);
  });
  await test('fresh quiz: avoided questions are used last', () => {
    const u1 = bank.filter(b => b.unitId === 'u1');
    const avoid = ['A', 'B', 'C'].flatMap(t => u1.filter(x => x.topic === t).slice(0, 4)).map(x => x.id);
    const quiz = buildFreshQuiz(u1, 12, {}, avoid);
    assert.ok(quiz.every(x => !avoid.includes(x.id)));
  });

  await test('follow-up: same unit and topic, never excluded ids or the question itself', () => {
    const asked = bank[0];
    const exclude = bank.filter(b => b.topic === 'A' && b.unitId === 'u1').slice(0, 5).map(b => b.id);
    for (let i = 0; i < 30; i++) {
      const f = pickFollowUp(bank, asked, exclude, {})!;
      assert.equal(f.topic, 'A');
      assert.equal(f.unitId, 'u1');
      assert.ok(!exclude.includes(f.id) && f.id !== asked.id);
    }
  });
  await test('follow-up: null when the topic is used up or the question is untagged', () => {
    const topicA = bank.filter(b => b.topic === 'A' && b.unitId === 'u1');
    assert.equal(pickFollowUp(bank, topicA[0], topicA.map(b => b.id), {}), null);
    assert.equal(pickFollowUp(bank, { ...topicA[0], topic: '' }, [], {}), null);
  });
  await test('follow-up: prefers an unseen question', () => {
    const topicA = bank.filter(b => b.topic === 'A' && b.unitId === 'u1');
    const history = Object.fromEntries(topicA.slice(1, 7).map(x => [x.id, { attempts: 1, correct: 1, lastCorrect: true, lastDate: 'd' }]));
    for (let i = 0; i < 20; i++) assert.equal(pickFollowUp(bank, topicA[0], [], history)!.id, topicA[7].id);
  });

  await test('weak topics: needs-work weighs more than building; mastered and new are skipped', () => {
    const sessions = {
      'u1::A': [sess(1, 5)],
      'u1::B': [sess(5, 5)],
      'u1::C': [sess(5, 5), sess(5, 5)],
    };
    const weak = findWeakTopics(bank.filter(b => b.unitId === 'u1'), sessions);
    assert.deepEqual(weak.map(w => [w.topic, w.weight]).sort(), [['A', 3], ['B', 1]]);
  });
  await test('weak topics: same topic name in another unit is tracked separately', () => {
    const weak = findWeakTopics(bank, { 'u2::A': [sess(0, 4)] });
    assert.deepEqual(weak, [{ unitId: 'u2', topic: 'A', weight: 3 }]);
  });
  await test('weak quiz: a topic missed once on a one-question sitting is included', () => {
    const weak = findWeakTopics(bank.filter(b => b.unitId === 'u1'), { 'u1::B': [sess(0, 1)], 'u1::C': [sess(1, 1)] });
    assert.deepEqual(weak, [{ unitId: 'u1', topic: 'B', weight: 3 }]);
    const quiz = buildWeakAreaQuiz(bank, weak, 5, {});
    assert.equal(quiz.length, 5);
    assert.ok(quiz.every(x => x.topic === 'B' && x.unitId === 'u1'));
  });
  await test('weak quiz: only weak topics, weighted toward the weakest', () => {
    const weak = [{ unitId: 'u1', topic: 'A', weight: 3 }, { unitId: 'u1', topic: 'B', weight: 1 }];
    const quiz = buildWeakAreaQuiz(bank, weak, 8, {});
    assert.equal(quiz.length, 8);
    assert.ok(quiz.every(x => x.unitId === 'u1' && (x.topic === 'A' || x.topic === 'B')));
    assert.equal(quiz.filter(x => x.topic === 'A').length, 6);
    assert.equal(quiz.filter(x => x.topic === 'B').length, 2);
  });
  await test('weak quiz: backfills from the other topic when one runs out', () => {
    const small = [...bank.filter(b => b.topic === 'B' && b.unitId === 'u1'), ...bank.filter(b => b.topic === 'A' && b.unitId === 'u1').slice(0, 2)];
    const weak = [{ unitId: 'u1', topic: 'A', weight: 3 }, { unitId: 'u1', topic: 'B', weight: 1 }];
    const quiz = buildWeakAreaQuiz(small, weak, 8, {});
    assert.equal(quiz.length, 8);
    assert.equal(new Set(quiz.map(x => x.id)).size, 8);
  });
  await test('weak quiz: serves unseen, then missed, then correct; avoided last', () => {
    const topicA = bank.filter(b => b.topic === 'A' && b.unitId === 'u1');
    const history: Record<string, { attempts: number; correct: number; lastCorrect: boolean; lastDate: string }> = {};
    topicA.slice(0, 3).forEach(x => (history[x.id] = { attempts: 1, correct: 0, lastCorrect: false, lastDate: 'd' }));
    topicA.slice(3, 5).forEach(x => (history[x.id] = { attempts: 1, correct: 1, lastCorrect: true, lastDate: 'd' }));
    const quiz = buildWeakAreaQuiz(topicA, [{ unitId: 'u1', topic: 'A', weight: 1 }], 6, history);
    const ids = new Set(quiz.map(x => x.id));
    topicA.slice(5).forEach(x => assert.ok(ids.has(x.id), 'unseen first'));
    topicA.slice(0, 3).forEach(x => assert.ok(ids.has(x.id), 'then missed'));
  });

  await test('topicSlug: stable, URL-safe anchors', () => {
    assert.equal(topicSlug('Advanced Driver Assistance Systems (ADAS)'), 'advanced-driver-assistance-systems-adas');
    assert.equal(topicSlug('Fats & Oils'), 'fats-and-oils');
  });

  await test('real bank: pilot unit is assembled with topics and flashcard links', async () => {
    const b = await loadCourseBank('ny-drivers-permit');
    assert.ok(b);
    const u12 = b!.questions.filter(x => x.unitId === 'unit-12-crashes-and-technology');
    assert.ok(u12.length >= 25);
    assert.ok(u12.every(x => x.topic));
    assert.ok(u12.filter(x => x.topic === 'Reporting a Crash to DMV').every(x => x.flashcardIds.length > 0));
    assert.deepEqual(b!.conflicts, []);
  });

  console.log(`\n${passed} tests passed`);
}

main();
