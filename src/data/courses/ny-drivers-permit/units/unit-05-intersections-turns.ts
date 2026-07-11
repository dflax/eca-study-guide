import type { Unit } from '@/types/study';

export const unit05IntersectionsTurns: Unit = {
  id: 'unit-05-intersections-turns',
  number: 5,
  title: 'Intersections, Right-of-Way & Turns',
  description: 'Right-of-way rules at various intersection types, emergency vehicles and the Move Over Law, proper turning technique, and U-turn restrictions.',
  notes: [
    {
      heading: 'Right-of-Way Rules',
      content: 'Right-of-way rules resolve conflicts that signs, signals, and pavement markings don\'t settle on their own — they establish who goes first.',
      bullets: [
        'A driver approaching an intersection must yield to traffic already IN the intersection.',
        'If two drivers reach an intersection from opposite directions at about the same time, the driver turning LEFT must yield to traffic going straight or turning right.',
        'At intersections with no signs/signals, or where two+ drivers stop at STOP signs at the same time at right angles, the driver on the LEFT must yield to the driver on the RIGHT.',
        'A vehicle entering a roadway from a driveway, private road, or other non-roadway must stop and yield to traffic on the roadway AND to pedestrians.',
        'Drivers must yield to pedestrians who legally use marked or unmarked crosswalks — you must slow or stop if necessary.',
        'A driver approaching a traffic circle or rotary must yield to drivers already in the circle.',
        'You cannot enter an intersection if you cannot get completely through it before traffic on the other side backs up (do not block the intersection).',
      ],
    },
    {
      heading: 'Emergency Vehicles & the Move Over Law',
      content: 'When you see or hear an emergency vehicle (fire, ambulance, police, etc.) heading toward you from any direction, safely pull over to the right edge of the road and stop, even if it is approaching in the opposite lane of a two-way road. If you\'re in an intersection, drive out of it first, then pull over. If you hear a siren nearby but can\'t locate it, pull over and stop until you\'re sure it isn\'t headed toward you.\n\nThe Move Over Law requires every driver to exercise care around a stopped/parked emergency or hazard vehicle with activated lights on the shoulder or any part of the highway. On parkways, interstates, and other multi-lane controlled-access roads, you must move out of the lane adjacent to the vehicle if safely possible (also applies to any vehicle stopped on the shoulder of such a road). Violating the Move Over Law is a moving violation.',
    },
    {
      heading: 'Blue, Green & Amber Lights',
      content: 'Volunteer firefighters responding to alarms may display blue lights; volunteer ambulance/rescue squad members may display green lights. Amber lights (on snow plows, tow trucks, mail vehicles, school buses) warn of possible dangers. Vehicles with blue, green, or amber lights are NOT authorized emergency vehicles — their drivers must obey all traffic laws, and you are not required to yield the right-of-way, though you should yield as a courtesy when it is safe.',
    },
    {
      heading: 'Making Turns',
      content: 'You must signal a turn or lane change at least 100 feet (30 m) ahead. When preparing to turn, reduce speed, keep your wheels straight until you actually turn (to avoid being pushed into the oncoming lane if hit from behind), and watch especially for motorcycles, pedestrians, bicyclists, and moped riders.',
      bullets: [
        'RIGHT TURN: get as far right as possible; do not make wide, sweeping turns; turn into the right lane of the road you enter unless signs direct otherwise.',
        'LEFT TURN (two-way into two-way): approach from the right half of the roadway closest to center; keep to the right of the center line of the road you enter, as close to the center as possible.',
        'LEFT TURN (one-way into one-way): move into the left lane to prepare; if the entered road has two lanes, turn into its left lane.',
        'For any left turn, you must yield to oncoming traffic close enough to be a hazard — if in doubt, wait.',
      ],
    },
    {
      heading: 'U-Turns',
      content: 'A U-turn is any turn made to proceed in the opposite direction. Avoid U-turns on a highway unless absolutely necessary — use a parking lot, driveway, or other area instead. You can only make a U-turn from the left portion of the lane nearest the centerline, never from the right lane.',
      bullets: [
        'You cannot make a U-turn near the top of a hill, on a curve, or anywhere else drivers cannot see your vehicle from 500 feet (150 m) away in either direction.',
        'U-turns are illegal in NYC business districts, wherever a NO U-TURN sign is posted, in school zones, and on any limited-access expressway (even if connecting paths exist between the two sides).',
        'A three-point turn may be used on a narrow two-way street unless prohibited — you may be required to perform one on your road test.',
      ],
    },
  ],
  flashcards: [
    { id: 'unit-05-intersections-turns-fc-01', front: 'At an intersection with no signs, two drivers stop at STOP signs at the same time and are at right angles. Who must yield?', back: 'The driver on the LEFT must yield to the driver on the RIGHT.' },
    { id: 'unit-05-intersections-turns-fc-02', front: 'Two drivers reach an intersection from opposite directions at about the same time; one goes straight, the other turns left. Who yields?', back: 'The driver turning LEFT must yield to the driver going straight (or turning right).' },
    { id: 'unit-05-intersections-turns-fc-03', front: 'A vehicle enters a roadway from a driveway or private road. What must the driver do?', back: 'Stop and yield the right-of-way to traffic on the roadway and to pedestrians.' },
    { id: 'unit-05-intersections-turns-fc-04', front: 'Who has the right-of-way when approaching a traffic circle or rotary — the entering driver or drivers already in the circle?', back: 'Drivers already in the circle have the right-of-way; the entering driver must yield.' },
    { id: 'unit-05-intersections-turns-fc-05', front: 'What must you do when you see or hear an emergency vehicle approaching from any direction, including the opposite lane?', back: 'Safely pull over to the right edge of the road and stop, even if it is approaching in the opposite lane of a two-way road.' },
    { id: 'unit-05-intersections-turns-fc-06', front: 'If you hear a siren nearby but cannot see where the emergency vehicle is, what should you do?', back: 'Safely pull over to the right edge of the road and stop until you are sure it is not headed toward you.' },
    { id: 'unit-05-intersections-turns-fc-07', front: 'What does the Move Over Law require on a multi-lane parkway or interstate near a stopped emergency/hazard vehicle?', back: 'Move out of the lane adjacent to the vehicle, if you can do so safely (in addition to reducing speed).' },
    { id: 'unit-05-intersections-turns-fc-08', front: 'What do blue lights on a personal vehicle indicate? Green lights?', back: 'Blue: a volunteer firefighter responding to an alarm. Green: a volunteer ambulance/rescue squad member. Neither is an authorized emergency vehicle — you are not required to yield, though you should as a courtesy.' },
    { id: 'unit-05-intersections-turns-fc-09', front: 'How far before a turn or lane change must you signal?', back: 'At least 100 feet (30 m) ahead.' },
    { id: 'unit-05-intersections-turns-fc-10', front: 'Why should you keep your wheels straight until you actually begin a turn?', back: 'So that if you are hit from behind, your vehicle isn\'t pushed into oncoming traffic.' },
    { id: 'unit-05-intersections-turns-fc-11', front: 'From which lane can you legally make a U-turn?', back: 'Only from the left portion of the lane nearest the centerline — never from the right lane.' },
    { id: 'unit-05-intersections-turns-fc-12', front: 'How much visibility must other drivers have of your vehicle for a U-turn to be legal near a hill or curve?', back: 'They must be able to see your vehicle from at least 500 feet (150 m) away in either direction.' },
    { id: 'unit-05-intersections-turns-fc-13', front: 'Name three places where U-turns are always illegal.', back: 'NYC business districts, wherever a NO U-TURN sign is posted, in school zones, and on any limited-access expressway (any three).' },
    { id: 'unit-05-intersections-turns-fc-14', front: 'For a right turn, where should you position your vehicle before turning?', back: 'Get as far to the right as possible; do not make wide, sweeping turns; turn into the right lane of the road you enter.' },
  ],
  quiz: [
    { id: 'unit-05-intersections-turns-q-01', question: 'You approach an intersection with a green light, but another vehicle is already in the intersection completing a left turn. What must you do?', options: ['Proceed immediately since you have a green light', 'Let the vehicle complete its turn before you enter the intersection', 'Honk to signal the other driver to hurry', 'Stop and wait for the light to cycle again'], correctIndex: 1, explanation: 'A driver approaching an intersection must yield the right-of-way to traffic already in the intersection, regardless of the light.' },
    { id: 'unit-05-intersections-turns-q-02', question: 'You are stopped at a STOP sign going straight through. A driver on the cross street to your right has also stopped at a STOP sign, also going straight. Who yields?', options: ['You must yield to the driver on your right', 'The other driver must yield to you', 'Whoever arrived first has the right-of-way', 'Neither driver needs to yield'], correctIndex: 0, explanation: 'When drivers stop at STOP signs at the same time at right angles, the driver on the left yields to the driver on the right.' },
    { id: 'unit-05-intersections-turns-q-03', question: 'You are leaving a parking lot and turning right onto a street. A vehicle approaches from your left on the street. What must you do?', options: ['Proceed since you are turning right', 'Stop and wait for the vehicle to pass before entering the street', 'Only yield if turning left', 'Sound your horn and proceed'], correctIndex: 1, explanation: 'A vehicle entering a roadway from a driveway or parking lot must stop and yield to traffic already on the roadway.' },
    { id: 'unit-05-intersections-turns-q-04', question: 'An emergency vehicle with flashing lights approaches you from the opposite direction on a two-way road. What should you do?', options: ['Continue driving since it is in the other lane', 'Speed up to clear the area', 'Safely pull over to the right and stop', 'Pull into the emergency vehicle\'s lane to let it pass on your side'], correctIndex: 2, explanation: 'You must pull over to the right and stop for an approaching emergency vehicle even if it is in the opposite lane of a two-way road.' },
    { id: 'unit-05-intersections-turns-q-05', question: 'On a multi-lane interstate, you approach a police car stopped on the shoulder with lights activated. What does the Move Over Law require?', options: ['Nothing — only reduce speed', 'Move out of the lane next to the vehicle if it can be done safely, in addition to slowing down', 'Stop completely on the highway', 'Only applies to ambulances, not police cars'], correctIndex: 1, explanation: 'On parkways, interstates, and other controlled-access roads, drivers must move out of the lane adjacent to a stopped emergency/hazard vehicle when it is safe to do so, in addition to reducing speed.' },
    { id: 'unit-05-intersections-turns-q-06', question: 'What do amber lights on a tow truck or snow plow indicate?', options: ['It is an authorized emergency vehicle you must yield to', 'It is a hazard vehicle warning of possible danger — you are not required to yield but should as a courtesy', 'It has no special meaning', 'You must always stop for it like a school bus'], correctIndex: 1, explanation: 'Amber lights warn of possible dangers on hazard vehicles like tow trucks and snow plows. These are not authorized emergency vehicles, so yielding is a courtesy, not a legal requirement.' },
    { id: 'unit-05-intersections-turns-q-07', question: 'How far before a turn must you signal your intention?', options: ['At least 25 feet', 'At least 50 feet', 'At least 100 feet', 'At least 300 feet'], correctIndex: 2, explanation: 'The law requires signaling a turn or lane change at least 100 feet (30 m) before you make it.' },
    { id: 'unit-05-intersections-turns-q-08', question: 'From which lane can you legally begin a U-turn?', options: ['Any lane, if safe', 'Only the right lane', 'Only the left portion of the lane nearest the centerline', 'Only from a full stop in the center of the road'], correctIndex: 2, explanation: 'A U-turn can only be made from the left portion of the lane nearest the centerline of the roadway, never from the right lane.' },
    { id: 'unit-05-intersections-turns-q-09', question: 'Where are U-turns always illegal, regardless of visibility or signage?', options: ['On any two-lane road', 'On a limited-access expressway', 'In residential neighborhoods', 'At any traffic light'], correctIndex: 1, explanation: 'U-turns are never allowed on a limited-access expressway, even if paths connect the two sides. They are also illegal in school zones, NYC business districts, and wherever posted.' },
    { id: 'unit-05-intersections-turns-q-10', question: 'You want to make a U-turn near the crest of a hill. What visibility distance is required?', options: ['100 feet', '200 feet', '500 feet', '1,000 feet'], correctIndex: 2, explanation: 'You cannot make a U-turn where other drivers cannot see your vehicle from at least 500 feet (150 m) away in either direction.' },
    { id: 'unit-05-intersections-turns-q-11', question: 'A driver approaches a roundabout. Who has the right-of-way?', options: ['The entering driver, always', 'Whoever is going faster', 'Drivers already circulating in the roundabout', 'It depends on which direction you came from'], correctIndex: 2, explanation: 'A driver approaching a traffic circle or rotary must yield the right-of-way to drivers already in the circle.' },
  ],
};
