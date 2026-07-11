import type { Unit } from '@/types/study';

export const unit12CrashesAndTechnology: Unit = {
  id: 'unit-12-crashes-and-technology',
  number: 12,
  title: 'Crashes & Modern Vehicle Technology',
  description: 'What to do at the scene of a crash, when you must report it to DMV, basic emergency first aid, and how to safely use Advanced Driver Assistance Systems (ADAS).',
  notes: [
    {
      heading: 'At the Scene of a Crash',
      content: 'If you are in a crash, you must stop, no matter how minor the damage. Leaving the scene of an incident involving property damage is a traffic violation; leaving the scene of one involving a fatality or personal injury is a criminal violation. Even for property-damage-only crashes, you must exchange name, address, driver license number, and vehicle registration/insurance information (including policy number and effective date) with the other driver(s) and police on scene.',
      bullets: [
        'If anyone is injured or killed, notify police immediately and make sure ambulance/rescue personnel are called.',
        'If possible, move your vehicle off the road and protect the scene with reflectors or flares — but watch for leaking fuel.',
        'If a parked vehicle, other property, or a domestic animal is damaged/injured and you cannot find the owner, you must notify the police.',
      ],
    },
    {
      heading: 'Emergency First Aid',
      content: 'Do not stop at a crash scene unless you are involved or emergency help has not yet arrived — otherwise focus on driving and any directions from traffic officers.',
      bullets: [
        'Do not move an injured person unless necessary due to fire or another life-threatening danger. If you must move them, keep the back and neck as straight as possible.',
        'If there are downed wires, stay away from them — warn occupants of an affected vehicle to remain inside until help arrives.',
      ],
    },
    {
      heading: 'Reporting a Crash to DMV',
      content: 'You must report to DMV any crash involving a fatality or personal injury, or one causing $1,000 or more in property damage to any one person, using the Report of Motor Vehicle Crash (MV-104) — even if you already reported it to your insurance company. This report must be filed within 10 days of the event. Failing to report a crash is a criminal offense (misdemeanor) that can lead to suspension or revocation of your license and/or registration.',
    },
    {
      heading: 'Advanced Driver Assistance Systems (ADAS)',
      content: 'Many newer vehicles include driver-assist safety features that sense conditions, identify dangers, and may alert you or take limited control (e.g., braking or steering) to help avoid a crash. Examples include blind spot warning, backup camera, forward collision warning, automatic emergency braking, lane-keeping assistance, and active parking assist.',
      bullets: [
        'ADAS features are meant to ASSIST you, not replace you — you remain fully responsible for safely operating the vehicle at all times.',
        'Safety features may not work properly in rain, snow, ice, fog, hills, or curves — never rely on them alone.',
        'On the road test, some features (like adaptive cruise control and automatic parallel parking) are NOT permitted; the examiner scores whether you demonstrate the ability to drive safely without relying on ADAS.',
        'Keep vehicle sensors clean and undamaged, and keep any related software up to date per the manufacturer\'s recommendations.',
      ],
    },
  ],
  flashcards: [
    { id: 'unit-12-crashes-and-technology-fc-01', front: 'If you are in a crash with only minor property damage, are you still required to stop?', back: 'Yes — you must stop regardless of how minor the damage is. Leaving the scene of a property-damage crash is a traffic violation.' },
    { id: 'unit-12-crashes-and-technology-fc-02', front: 'What kind of violation is it to leave the scene of a crash involving a fatality or personal injury?', back: 'A criminal violation (more serious than leaving the scene of a property-damage-only crash).' },
    { id: 'unit-12-crashes-and-technology-fc-03', front: 'What information must you exchange with other drivers after any crash, even property-damage-only?', back: 'Name, address, driver license number, vehicle registration, and insurance information (including policy number and effective date).' },
    { id: 'unit-12-crashes-and-technology-fc-04', front: 'What crashes must be reported to DMV, and using what form?', back: 'Any crash involving a fatality, personal injury, or $1,000+ in property damage to any one person\'s property — reported using Form MV-104.' },
    { id: 'unit-12-crashes-and-technology-fc-05', front: 'Within how many days of a reportable crash must you file the DMV report?', back: '10 days.' },
    { id: 'unit-12-crashes-and-technology-fc-06', front: 'Does reporting a crash to your insurance company satisfy your legal reporting obligation?', back: 'No — you must still separately file a report with DMV within 10 days.' },
    { id: 'unit-12-crashes-and-technology-fc-07', front: 'What happens if you fail to report a reportable crash to DMV?', back: 'It is a criminal offense (misdemeanor) that can result in suspension or revocation of your license and/or registration.' },
    { id: 'unit-12-crashes-and-technology-fc-08', front: 'Should you move an injured person at a crash scene?', back: 'No, not unless necessary because of fire or another life-threatening danger — and if you must, keep the back and neck as straight as possible.' },
    { id: 'unit-12-crashes-and-technology-fc-09', front: 'What are ADAS features designed to do — replace the driver or assist the driver?', back: 'Assist the driver. You remain fully responsible for safely operating the vehicle at all times, even with ADAS active.' },
    { id: 'unit-12-crashes-and-technology-fc-10', front: 'Name three examples of ADAS safety features.', back: 'Blind spot warning, backup camera, forward collision warning, automatic emergency braking, lane-keeping assistance, or active parking assist (any three).' },
    { id: 'unit-12-crashes-and-technology-fc-11', front: 'Are all ADAS features permitted for use during the road test?', back: 'No — some features, such as adaptive cruise control and automatic parallel parking, are not permitted during the road test.' },
    { id: 'unit-12-crashes-and-technology-fc-12', front: 'Can you always rely on ADAS safety features to work correctly?', back: 'No — they may not work properly in rain, snow, ice, fog, hills, or curves, so you should never rely on them alone.' },
  ],
  quiz: [
    { id: 'unit-12-crashes-and-technology-q-01', question: 'You are in a minor fender-bender with only slight property damage. Must you stop?', options: ['No, only for injury crashes', 'Yes — you must stop regardless of the damage level', 'Only if the other driver stops first', 'Only if a police officer is present'], correctIndex: 1, explanation: 'You must stop after any crash, regardless of the level of damage — leaving the scene of even a property-damage crash is a traffic violation.' },
    { id: 'unit-12-crashes-and-technology-q-02', question: 'What must you provide to the other driver after a crash, even if only property damage occurred?', options: ['Nothing is required for property-damage-only crashes', 'Your name, address, license number, and registration/insurance information', 'Only your phone number', 'Only your insurance company\'s name'], correctIndex: 1, explanation: 'You must exchange name, address, driver license number, and vehicle registration/insurance information, even for property-damage-only crashes.' },
    { id: 'unit-12-crashes-and-technology-q-03', question: 'A crash causes $1,500 in damage to another person\'s vehicle. What must you do?', options: ['Nothing beyond notifying your own insurance', 'Report it to DMV within 10 days using Form MV-104', 'Report it only if someone is injured', 'Wait for the other driver to report it'], correctIndex: 1, explanation: 'Any crash causing $1,000 or more in property damage to one person must be reported to DMV within 10 days using Form MV-104.' },
    { id: 'unit-12-crashes-and-technology-q-04', question: 'Does reporting a crash to your insurance company fulfill your legal obligation to report it?', options: ['Yes, that is sufficient', 'No, you must still file a separate report with DMV within 10 days', 'Only if the insurance company forwards it', 'Reporting is never required if insurance is involved'], correctIndex: 1, explanation: 'Reporting to your insurance company does not complete your legal obligation — a separate DMV report (MV-104) is required within 10 days for a reportable crash.' },
    { id: 'unit-12-crashes-and-technology-q-05', question: 'What is the consequence of failing to file a required crash report with DMV?', options: ['A small late fee only', 'A criminal offense (misdemeanor) that can suspend or revoke your license/registration', 'No consequence if the other driver reported it', 'A warning letter only'], correctIndex: 1, explanation: 'Failure to report a reportable crash is a criminal offense (misdemeanor) that can lead to suspension or revocation of your driver license and/or registration.' },
    { id: 'unit-12-crashes-and-technology-q-06', question: 'What is the purpose of Advanced Driver Assistance Systems (ADAS)?', options: ['To fully replace the driver in all conditions', 'To assist the driver — the driver remains fully responsible for safe operation', 'To operate only when the driver is not paying attention', 'To be used exclusively during the road test'], correctIndex: 1, explanation: 'ADAS features are designed to assist drivers, not to replace them — the driver is always responsible for the safe operation of the vehicle.' },
    { id: 'unit-12-crashes-and-technology-q-07', question: 'Are ADAS safety features guaranteed to work correctly in all weather conditions?', options: ['Yes, they work in all conditions', 'No — they may not work properly in rain, snow, ice, fog, hills, or curves', 'Only in snow, not other conditions', 'They only fail in direct sunlight'], correctIndex: 1, explanation: 'ADAS features may not function properly in certain conditions like rain, snow, ice, fog, hills, and curves — drivers should never rely on them alone.' },
    { id: 'unit-12-crashes-and-technology-q-08', question: 'Which of these ADAS features is NOT permitted for use during the road test?', options: ['Backup camera', 'Blind spot warning', 'Adaptive cruise control', 'Forward collision warning'], correctIndex: 2, explanation: 'Adaptive cruise control (along with automatic parallel parking) is not permitted for use during the road test — the examiner evaluates unassisted driving ability.' },
  ],
};
