import type { Unit } from '@/types/study';

export const unit07Parking: Unit = {
  id: 'unit-07-parking',
  number: 7,
  title: 'Parallel Parking & Parking Regulations',
  description: 'How to parallel park and park on a hill, the difference between parking/standing/stopping, and the statewide distance rules for where you cannot park.',
  notes: [
    {
      heading: 'Parallel Parking Technique',
      content: 'Select a large-enough space, check mirrors, signal, and stop next to the vehicle ahead of the space, leaving about two feet between vehicles. Look behind over both shoulders, then back up slowly. When your front wheels are opposite the back bumper of the vehicle ahead, turn the wheel the other way while continuing to back up, then bring your wheels straight and pull forward. Your final position must have your wheels no more than one foot (30 cm) from the curb. Do not open the road-side door if it would interfere with bicyclists or traffic.',
    },
    {
      heading: 'Parking on a Hill',
      content: 'Set the parking brake, put the transmission in "Park" (or 1st gear for manual transmission), and turn your wheels toward the curb or side of the road so the vehicle cannot roll into traffic.',
    },
    {
      heading: 'Pulling Out & Entering Traffic',
      content: 'To pull out of a parallel parking space: make sure your wheels are straight, back up toward the vehicle behind you, and turn your wheels away from the curb. Use a six-step head-check and mirror sequence (right shoulder, interior mirror, signal, side mirrors, left shoulder, left shoulder again) before merging into traffic.',
    },
    {
      heading: 'Parking, Standing & Stopping — Definitions',
      content: '"Parking" is a vehicle stopped (occupied or not) other than temporarily to load/unload. "Standing" is similar but only for receiving/discharging passengers. "Stopping" is literally bringing the vehicle to a stop, even temporarily.',
      bullets: [
        'NO PARKING sign: you may make a temporary stop to load/unload merchandise or passengers.',
        'NO STANDING sign: you may only make a temporary stop to load/unload passengers — the driver cannot exit the vehicle.',
        'NO STOPPING sign: you may stop only to obey a traffic sign/signal/officer or to prevent conflicts with other vehicles.',
      ],
    },
    {
      heading: 'Statewide Distance Rules — Where You Cannot Park, Stand, or Stop',
      content: 'These rules apply even without posted signs.',
      bullets: [
        'Within 15 feet (5 m) of a fire hydrant, unless a licensed driver stays in the vehicle to move it in an emergency.',
        'On the road side of a parked vehicle ("double parking"); on a sidewalk or in a crosswalk; in an intersection (unless permitted); on railroad tracks; on a bridge or in a tunnel.',
        'Within 30 feet (10 m) of a pedestrian safety area, unless another distance is marked.',
        'Within 20 feet (6 m) of a crosswalk at an intersection.',
        'Within 30 feet (10 m) of a traffic light, STOP sign, or YIELD sign.',
        'Within 20 feet (6 m) of a fire station driveway, or within 75 feet (23 m) on the opposite side of the road.',
        'Within 50 feet (15 m) of a railroad crossing.',
        'In front of a driveway, or along a curb cut/lowered for sidewalk access.',
      ],
    },
    {
      heading: 'Reserved Parking for People with Disabilities',
      content: 'You can only park in a reserved space if you have a permit or vehicle plates for persons with disabilities, and only when the permit/plate holder is in the vehicle. Never park in spaces with diagonal stripes next to reserved spots — they provide wheelchair access. Making a false statement to obtain a disability parking permit is a misdemeanor carrying mandatory license revocation and civil penalties from $250 to $1,000.',
    },
  ],
  flashcards: [
    { id: 'unit-07-parking-fc-01', front: 'After parallel parking, how far from the curb must your wheels be at most?', back: 'No more than one foot (30 cm) from the curb.' },
    { id: 'unit-07-parking-fc-02', front: 'What should you do before opening your door after parking on the road side?', back: 'Make sure it will not interfere with bicyclists or other traffic before opening it.' },
    { id: 'unit-07-parking-fc-03', front: 'When parking on a hill, what three things should you do?', back: 'Set the parking brake, put the transmission in Park (or 1st gear for manual), and turn your wheels toward the curb/side of the road.' },
    { id: 'unit-07-parking-fc-04', front: 'What is the difference between "parking," "standing," and "stopping"?', back: 'Parking: stopped other than temporarily for loading/unloading. Standing: temporary stop only to receive/discharge passengers. Stopping: bringing the vehicle to a stop, even briefly.' },
    { id: 'unit-07-parking-fc-05', front: 'At a NO STANDING sign, can the driver exit the vehicle?', back: 'No — you may only make a temporary stop to load/unload passengers, and the driver cannot exit.' },
    { id: 'unit-07-parking-fc-06', front: 'At a NO STOPPING sign, when is stopping allowed?', back: 'Only to obey a traffic sign, signal, or officer, or to prevent conflicts with other vehicles.' },
    { id: 'unit-07-parking-fc-07', front: 'How close to a fire hydrant can you park?', back: 'You cannot park within 15 feet (5 m), unless a licensed driver stays in the vehicle to move it in an emergency.' },
    { id: 'unit-07-parking-fc-08', front: 'How close to a crosswalk at an intersection can you park?', back: 'You cannot park within 20 feet (6 m) of it.' },
    { id: 'unit-07-parking-fc-09', front: 'How close to a STOP sign, YIELD sign, or traffic light can you park?', back: 'You cannot park within 30 feet (10 m) of it.' },
    { id: 'unit-07-parking-fc-10', front: 'How close to a railroad crossing can you park?', back: 'You cannot park within 50 feet (15 m) of it.' },
    { id: 'unit-07-parking-fc-11', front: 'How close to a fire station driveway can you park? What about the opposite side of the road from it?', back: 'Within 20 feet (6 m) of the driveway itself, or within 75 feet (23 m) on the opposite side of the road.' },
    { id: 'unit-07-parking-fc-12', front: 'Under what condition can you legally park in a space reserved for people with disabilities?', back: 'Only if you have a permit or vehicle plates for persons with disabilities, and the permit/plate holder is in the vehicle.' },
  ],
  quiz: [
    { id: 'unit-07-parking-q-01', question: 'After you have parallel parked, how close must your wheels be to the curb?', options: ['No more than 3 feet', 'No more than 1 foot', 'Exactly touching the curb', 'Distance does not matter'], correctIndex: 1, explanation: 'Your final parked position must have your wheels no more than one foot (30 cm) from the curb.' },
    { id: 'unit-07-parking-q-02', question: 'What should you do with your wheels when parking on a hill?', options: ['Keep them straight', 'Turn them toward the curb or side of the road', 'Turn them into oncoming traffic', 'It does not matter'], correctIndex: 1, explanation: 'On a hill, turn your wheels toward the curb or side of the road so the vehicle can\'t roll into traffic if the brake fails.' },
    { id: 'unit-07-parking-q-03', question: 'What does a NO STANDING sign allow you to do?', options: ['Park indefinitely', 'Make a temporary stop only to load/unload passengers, without leaving the vehicle', 'Stop only to load merchandise', 'Nothing — stopping is fully prohibited'], correctIndex: 1, explanation: 'A NO STANDING sign allows only a temporary stop to receive or discharge passengers, and the driver cannot exit the vehicle.' },
    { id: 'unit-07-parking-q-04', question: 'What does a NO STOPPING sign mean?', options: ['You can stop briefly to load passengers', 'You can only stop to obey a sign/signal/officer or to avoid conflicting with other vehicles', 'You can park for up to 5 minutes', 'It only applies to trucks'], correctIndex: 1, explanation: 'A NO STOPPING sign means you may stop only to obey a traffic control device or officer, or to prevent a conflict with other vehicles.' },
    { id: 'unit-07-parking-q-05', question: 'How close to a fire hydrant can you legally park?', options: ['You cannot park within 15 feet unless a licensed driver stays in the vehicle', 'Right next to it is fine', 'Within 5 feet is allowed', 'Only trucks are restricted near hydrants'], correctIndex: 0, explanation: 'You cannot park within 15 feet (5 m) of a fire hydrant, unless a licensed driver remains in the vehicle to move it in an emergency.' },
    { id: 'unit-07-parking-q-06', question: 'How close to a STOP sign can you park?', options: ['Within 10 feet is fine', 'You cannot park within 30 feet', 'You cannot park within 5 feet', 'There is no restriction near STOP signs'], correctIndex: 1, explanation: 'You cannot park within 30 feet (10 m) of a traffic light, STOP sign, or YIELD sign.' },
    { id: 'unit-07-parking-q-07', question: 'How close to a railroad crossing is parking prohibited?', options: ['20 feet', '30 feet', '50 feet', '100 feet'], correctIndex: 2, explanation: 'You cannot park your vehicle within 50 feet (15 m) of a railroad crossing.' },
    { id: 'unit-07-parking-q-08', question: 'When may you park in a space reserved for people with disabilities?', options: ['Anytime if the space is empty', 'Only if you have the required permit/plates and the permit holder is in the vehicle', 'Only for a few minutes', 'Anyone can use it if no disabled person is nearby'], correctIndex: 1, explanation: 'You may only park in a reserved space if you have a disability permit or plates, and the person who holds the permit/plates is in the vehicle.' },
    { id: 'unit-07-parking-q-09', question: 'May you park on a crosswalk in the middle of a block?', options: ['Yes, if briefly', 'No, parking on a crosswalk is never allowed', 'Only at night', 'Only if hazard lights are on'], correctIndex: 1, explanation: 'Parking, standing, or stopping in a crosswalk is prohibited under the statewide rules.' },
    { id: 'unit-07-parking-q-10', question: 'What does "double parking" refer to, and is it legal?', options: ['Parking two cars in one spot; it is legal briefly', 'Parking on the road side of an already-parked vehicle; it is illegal', 'Parking in two spaces at once; only a minor infraction', 'A legal parking technique for large vehicles'], correctIndex: 1, explanation: 'Double parking means stopping on the road side of a vehicle that is already parked — this is prohibited statewide.' },
  ],
};
