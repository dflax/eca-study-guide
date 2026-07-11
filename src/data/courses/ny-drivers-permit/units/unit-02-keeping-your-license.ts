import type { Unit } from '@/types/study';

export const unit02KeepingYourLicense: Unit = {
  id: 'unit-02-keeping-your-license',
  number: 2,
  title: 'How to Keep Your License',
  description: 'Suspension vs. revocation, junior driver sanctions, the probation period, the DMV point system, and fees and assessments.',
  notes: [
    {
      heading: 'Suspension vs. Revocation',
      content: '"Suspension" means your license or driving privilege is taken away for a period of time before it is returned (you may owe a suspension termination fee). "Revocation" means your license or privilege is cancelled — to drive again, you must re-apply to DMV once the revocation period is over, and you may owe a re-application fee. "Driving privilege" refers to an out-of-state driver\'s courtesy permission to drive in New York, or a license-less person\'s permission to obtain a NY license; it can be suspended or revoked just like a license.',
    },
    {
      heading: 'Sanctions for Junior Permit & License Holders',
      content: 'Junior permit/license holders face stricter, faster sanctions than older drivers. Your junior permit, license, or privileges will be SUSPENDED for 60 days if you are convicted of a serious traffic violation (3+ points) or two other violations. They will be REVOKED for 60 days if you are convicted of a serious violation (3+ points) or two other violations within the first six months after getting your permit/license/privileges back following a suspension or revocation.\n\nA texting or cell phone conviction suspends a junior driver\'s permit/license/privileges for 120 days.',
    },
    {
      heading: 'Probation Period for Drivers 18+',
      content: 'If you are 18 or older when you pass your road test (or get your license back after revocation), you are on probation for six months. If, during probation, you are convicted of DWAI (alcohol), speeding, reckless driving, following too closely, participating in a speed contest, or any two traffic violations, your license is suspended for 60 days, followed by a new six-month probationary period. A second such violation during that second probation period results in revocation for at least six months, followed by another six months of probation once restored.',
    },
    {
      heading: 'Traffic Tickets & Out-of-State Convictions',
      content: 'If you receive a ticket, you must respond — failing to respond can lead to indefinite suspension or a default conviction. New York does not add out-of-state moving violation convictions to your point total, except for violations committed in Ontario or Quebec, Canada. However, your NY license WILL be suspended if you fail to answer a ticket in any state except Alaska, California, Michigan, Montana, Oregon, Virginia, or Wisconsin.\n\nIf you are under 21 and convicted of any alcohol/drug-related violation that occurred out of state, your NY license is revoked for at least one year.',
    },
    {
      heading: 'The DMV Point System',
      content: 'The point system identifies "persistent violators" — drivers who commit a series of violations in a short time. If you accumulate 11 or more points within 24 months, your license will be suspended. Points are charged from the date you commit the violation, not the date of conviction. A DMV-approved Motor Vehicle Crash Prevention Course can reduce your point total by up to 4 points and save up to 10% on insurance — but it cannot prevent a mandatory suspension/revocation or reduce a Driver Responsibility Assessment.',
      bullets: [
        'Speeding 1–10 mph over limit: 3 points | 11–20 mph: 4 points | 21–30 mph: 6 points | 31–40 mph: 8 points | Over 40 mph: 11 points',
        'DWI / DWAI / Aggravated DWI / DWAI-Drugs / chemical test refusal: 11 points',
        'Reckless driving: 5 points | Failed to stop for school bus: 8 points | Speed in a construction zone: 8 points',
        'Failed to yield right-of-way: 3 points | Red light / disobeying STOP or YIELD sign: 3 points | Improper passing or unsafe lane change: 3 points',
        'Most other moving violations: 2 points | Failure to signal: 2 points | Improper turn: 2 points',
        'Unlicensed, uninspected, faulty equipment, tinted window: 0 points (but still finable)',
      ],
    },
    {
      heading: 'Fees, Civil Penalties & Driver Responsibility Assessments',
      content: 'If your license was suspended for an exact period, you generally owe a non-refundable $50 suspension termination fee before it is returned. A revoked license generally requires a non-refundable $100 fee to re-apply. Separately, a "Driver Responsibility Assessment" may apply: convictions for Agg-DWI, DWI, DWAI, DWAI-drugs, or chemical test refusal require $250/year for 3 years. Six or more points in an 18-month period requires $100/year for 3 years, plus $25/year per point for 3 years for each point beyond six.',
    },
    {
      heading: 'Driving While Suspended or Revoked',
      content: 'It is a criminal offense to drive while your license is suspended or revoked, carrying mandatory fines from $200 to $5,000, possible mandatory imprisonment or probation, and possible vehicle seizure/forfeiture. Penalties are more severe if you are also impaired or intoxicated at the time.',
    },
  ],
  flashcards: [
    { id: 'unit-02-keeping-your-license-fc-01', front: 'What is the difference between "suspension" and "revocation"?', back: 'Suspension: your license/privilege is taken away temporarily and returned later (often after a fee). Revocation: your license/privilege is cancelled — you must re-apply to DMV after the revocation period ends.' },
    { id: 'unit-02-keeping-your-license-fc-02', front: 'How many days is a junior driver\'s permit/license suspended for a serious traffic violation (3+ points) or two other violations?', back: '60 days.' },
    { id: 'unit-02-keeping-your-license-fc-03', front: 'How many days is a junior driver\'s permit/license suspended after a texting or cell phone conviction?', back: '120 days.' },
    { id: 'unit-02-keeping-your-license-fc-04', front: 'If you are 18+ when you pass your road test, how long is your probation period?', back: 'Six months.' },
    { id: 'unit-02-keeping-your-license-fc-05', front: 'During your probation period, what happens if you\'re convicted of DWAI, speeding, reckless driving, following too closely, a speed contest, or two traffic violations?', back: 'Your license is suspended for 60 days, then a new 6-month probationary period begins.' },
    { id: 'unit-02-keeping-your-license-fc-06', front: 'Does New York add out-of-state traffic conviction points to your NY driving record?', back: 'No — except for violations committed in Ontario or Quebec, Canada.' },
    { id: 'unit-02-keeping-your-license-fc-07', front: 'How many points can trigger a license suspension, and over what time period?', back: '11 or more points within 24 months.' },
    { id: 'unit-02-keeping-your-license-fc-08', front: 'From what date are point values charged against your record: the violation date or the conviction date?', back: 'The date you committed the violation, not the date of conviction.' },
    { id: 'unit-02-keeping-your-license-fc-09', front: 'How many points does a DWI, DWAI, Aggravated DWI, or chemical test refusal carry?', back: '11 points.' },
    { id: 'unit-02-keeping-your-license-fc-10', front: 'How many points does failing to stop for a school bus carry?', back: '8 points.' },
    { id: 'unit-02-keeping-your-license-fc-11', front: 'How many points does speeding 21–30 mph over the limit carry?', back: '6 points.' },
    { id: 'unit-02-keeping-your-license-fc-12', front: 'How many points does reckless driving carry?', back: '5 points.' },
    { id: 'unit-02-keeping-your-license-fc-13', front: 'How much can a DMV-approved Crash Prevention Course reduce your point total by?', back: 'Up to 4 points, and it can also save up to 10% on insurance — but it cannot prevent a mandatory suspension/revocation.' },
    { id: 'unit-02-keeping-your-license-fc-14', front: 'What is the standard suspension termination fee to get a suspended license back?', back: '$50 (non-refundable), in most cases.' },
    { id: 'unit-02-keeping-your-license-fc-15', front: 'What is the standard fee to re-apply for a license after revocation?', back: '$100 (non-refundable), in most cases.' },
    { id: 'unit-02-keeping-your-license-fc-16', front: 'What is the fine range for driving while your license is suspended or revoked?', back: 'A mandatory fine of $200 to $5,000, plus possible mandatory imprisonment or probation and vehicle seizure.' },
  ],
  quiz: [
    { id: 'unit-02-keeping-your-license-q-01', question: 'What does it mean if your license is "revoked" rather than "suspended"?', options: ['It is taken away temporarily and automatically returned', 'It is cancelled, and you must re-apply to DMV once the revocation period ends', 'Nothing changes — you may keep driving', 'It only affects your ability to drive out of state'], correctIndex: 1, explanation: 'Revocation cancels your license; you must re-apply to DMV (and may owe a fee) once the revocation period is over. Suspension is temporary and the license is simply returned.' },
    { id: 'unit-02-keeping-your-license-q-02', question: 'A junior license holder is convicted of a serious traffic violation worth 3 points. What is the standard sanction?', options: ['A warning letter only', '30-day suspension', '60-day suspension', 'Immediate permanent revocation'], correctIndex: 2, explanation: 'A junior permit/license holder convicted of a serious violation (3+ points) or two other violations faces a 60-day suspension.' },
    { id: 'unit-02-keeping-your-license-q-03', question: 'An 18-year-old just passed their road test. How long is their probation period?', options: ['30 days', '90 days', '6 months', '1 year'], correctIndex: 2, explanation: 'Drivers 18 or older who pass their road test are on probation for six months.' },
    { id: 'unit-02-keeping-your-license-q-04', question: 'During probation, a driver is convicted of reckless driving. What happens?', options: ['Nothing, reckless driving does not affect probation', 'License suspended 60 days, then a new 6-month probation period begins', 'Immediate lifetime revocation', 'A written warning only'], correctIndex: 1, explanation: 'Certain violations during probation (including reckless driving) trigger a 60-day suspension followed by a new six-month probationary period.' },
    { id: 'unit-02-keeping-your-license-q-05', question: 'You get a speeding ticket while driving in Pennsylvania. Will the points be added to your New York driving record?', options: ['Yes, always', 'No, except for violations in Ontario or Quebec, Canada', 'Only if you are under 21', 'Only if the fine exceeds $100'], correctIndex: 1, explanation: 'New York does not add out-of-state moving violation points to your record, with the specific exception of violations in Ontario or Quebec.' },
    { id: 'unit-02-keeping-your-license-q-06', question: 'How many points within 24 months will trigger a license suspension notice from DMV?', options: ['6 or more', '8 or more', '11 or more', '15 or more'], correctIndex: 2, explanation: 'Accumulating 11 or more points within a 24-month period results in DMV notifying you that your license will be suspended.' },
    { id: 'unit-02-keeping-your-license-q-07', question: 'How many points is a conviction for driving 35 mph over the posted speed limit worth?', options: ['4 points', '6 points', '8 points', '11 points'], correctIndex: 2, explanation: '31–40 mph over the posted limit is worth 8 points on the DMV point table.' },
    { id: 'unit-02-keeping-your-license-q-08', question: 'How many points does failing to stop for a school bus carry?', options: ['2 points', '5 points', '8 points', '11 points'], correctIndex: 2, explanation: 'Failing to stop for a school bus is worth 8 points — one of the higher point values on the table.' },
    { id: 'unit-02-keeping-your-license-q-09', question: 'Completing a DMV-approved Motor Vehicle Crash Prevention Course can do all of the following EXCEPT:', options: ['Reduce your point total by up to 4 points', 'Save up to 10% on liability/collision insurance', 'Prevent a mandatory suspension or revocation', 'Be taken voluntarily by any driver'], correctIndex: 2, explanation: 'The course can reduce points and lower insurance costs, but it cannot prevent a mandatory suspension or revocation, nor reduce a Driver Responsibility Assessment.' },
    { id: 'unit-02-keeping-your-license-q-10', question: 'What is the standard fee to reapply for a license after a revocation period ends?', options: ['$25', '$50', '$100', '$250'], correctIndex: 2, explanation: 'In most cases, you must pay a non-refundable $100 fee to reapply for a license after revocation.' },
    { id: 'unit-02-keeping-your-license-q-11', question: 'What is the mandatory fine range for driving while your license is suspended or revoked?', options: ['$50 to $200', '$200 to $5,000', '$1,000 flat fine only', 'There is no fine, only license points'], correctIndex: 1, explanation: 'Driving while suspended or revoked is a criminal offense carrying mandatory fines from $200 to $5,000, plus possible imprisonment/probation.' },
    { id: 'unit-02-keeping-your-license-q-12', question: 'From what date does the DMV count points against your driving record?', options: ['The date of your court conviction', 'The date you commit the violation', 'The date the ticket was mailed', 'The date your insurance is notified'], correctIndex: 1, explanation: 'Points are charged from the date the violation was committed, not the date of conviction.' },
  ],
};
