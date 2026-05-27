import type { Unit } from '@/types/study';

export const unit01Energy: Unit = {
  id: 'unit-01-energy',
  number: 1,
  title: 'Energy',
  description: 'Kinetic and potential energy types, GPE formula, energy transfer diagrams, and dimensional analysis.',
  notes: [
    {
      heading: 'What Is Energy?',
      content: 'Energy is defined as the capacity to effect change. Everything that happens in the universe involves energy being transferred or transformed from one form to another. Energy itself is never created or destroyed — it only changes form (Law of Conservation of Energy).',
      bullets: [
        'Energy is measured in Joules (J)',
        'Energy can be transferred between objects or transformed between types',
        'Every process requires energy — from a bouncing ball to a chemical reaction',
      ],
    },
    {
      heading: 'Potential Energy vs. Kinetic Energy',
      content: 'Energy exists in two fundamental categories:\n\nPotential Energy is stored energy — energy that has the capacity to do work but is not actively doing so. It depends on position, configuration, or composition.\n\nKinetic Energy is the energy of motion — any object that is moving has kinetic energy. The faster it moves and the more mass it has, the more kinetic energy it possesses.',
      bullets: [
        'Potential energy types: gravitational (height), chemical (bonds), elastic (stretch/compression)',
        'Kinetic energy types: mechanical (moving objects), thermal (heat/molecular motion), sound (vibrating air), radiant (light/electromagnetic waves)',
        'A stretched rubber band has elastic potential energy; when released, it becomes mechanical kinetic energy',
        'Chemical potential energy stored in food is converted to mechanical and thermal kinetic energy in your body',
      ],
    },
    {
      heading: 'Gravitational Potential Energy (GPE)',
      content: 'Gravitational potential energy depends on an object\'s mass and its height above a reference point.\n\nFormula: ΔGPE = mgΔh\n  • ΔGPE = change in gravitational potential energy (Joules, J)\n  • m = mass (kilograms, kg)\n  • g = gravitational acceleration ≈ 10 m/s² (on Earth)\n  • Δh = change in height (meters, m)\n\nWhen Δh is positive (object moves UP), ΔGPE is positive — the object gains potential energy.\nWhen Δh is negative (object moves DOWN), ΔGPE is negative — the object loses potential energy (converts to kinetic).\n\nFor a stationary object at height h: GPE = mgh (using reference point of h = 0 at ground level).',
      bullets: [
        'Example: A 2 kg book lifted 3 m has ΔGPE = (2)(10)(3) = 60 J',
        'Example: A 5 kg ball falls 4 m: ΔGPE = (5)(10)(−4) = −200 J (lost 200 J of GPE)',
        'You can rearrange to solve for mass: m = ΔGPE ÷ (gΔh)',
        'You can rearrange to solve for height: Δh = ΔGPE ÷ (mg)',
      ],
    },
    {
      heading: 'Energy Transfer Diagrams',
      content: 'Energy transfer diagrams show how energy flows through a process, identifying which form of energy is input (potential/stored) and which forms are output (kinetic/converted).\n\nExample: A campfire\n  Input: Chemical potential energy (wood)\n  Outputs: Thermal kinetic energy (heat) + Radiant kinetic energy (light)\n\nExample: A hydroelectric dam\n  Input: Gravitational potential energy (water at height)\n  Output: Mechanical kinetic energy (spinning turbine) → Electrical energy\n\nAlways identify: What energy is being used (potential)? What energy is being produced (kinetic)?',
    },
    {
      heading: 'Dimensional Analysis',
      content: 'Dimensional analysis is a method for converting between units using conversion factors written as fractions. The key is to set up fractions so that unwanted units cancel out, leaving only the desired units.\n\nMetric prefix sequence (from large to small):\nkilo (k) → hecto (h) → deca (da) → [base unit] → deci (d) → centi (c) → milli (m)\n\nEach step is a factor of 10.\n\nExample: Convert 5 km to m\n  5 km × (1000 m / 1 km) = 5000 m\n\nExample: Convert 250 cm to m\n  250 cm × (1 m / 100 cm) = 2.5 m\n\nAlways write conversion factors as fractions and show the unit cancellation clearly.',
      bullets: [
        'Write the given value with its unit as the starting point',
        'Multiply by a fraction where the unwanted unit cancels (goes on the bottom)',
        'The desired unit goes on top',
        'Chain multiple fractions for multi-step conversions',
      ],
    },
  ],
  flashcards: [
    {
      id: 'unit-01-energy-fc-01',
      front: 'What is energy?',
      back: 'Energy is the capacity to effect change. It is measured in Joules (J) and can be transferred or transformed but never created or destroyed.',
    },
    {
      id: 'unit-01-energy-fc-02',
      front: 'What is the difference between kinetic and potential energy?',
      back: 'Potential energy is stored energy (due to position, configuration, or composition). Kinetic energy is the energy of motion — any moving object has kinetic energy.',
    },
    {
      id: 'unit-01-energy-fc-03',
      front: 'Name the three types of potential energy.',
      back: '1. Gravitational potential energy (depends on height)\n2. Chemical potential energy (stored in chemical bonds)\n3. Elastic potential energy (stored in stretched/compressed objects)',
    },
    {
      id: 'unit-01-energy-fc-04',
      front: 'Name the four types of kinetic energy.',
      back: '1. Mechanical (moving objects)\n2. Thermal (heat / molecular motion)\n3. Sound (vibrating particles/air)\n4. Radiant (light / electromagnetic waves)',
    },
    {
      id: 'unit-01-energy-fc-05',
      front: 'What is the formula for change in gravitational potential energy?',
      back: 'ΔGPE = mgΔh\n• m = mass (kg)\n• g = 10 m/s² (on Earth)\n• Δh = change in height (m)\n• ΔGPE is in Joules (J)',
    },
    {
      id: 'unit-01-energy-fc-06',
      front: 'When is ΔGPE positive vs. negative?',
      back: 'ΔGPE is POSITIVE when an object moves UP (gains height — gains potential energy).\nΔGPE is NEGATIVE when an object moves DOWN (loses height — loses potential energy, converts to kinetic).',
    },
    {
      id: 'unit-01-energy-fc-07',
      front: 'A 3 kg object is lifted 5 meters. What is its ΔGPE? (g = 10 m/s²)',
      back: 'ΔGPE = mgΔh = (3 kg)(10 m/s²)(5 m) = 150 J\nThe object gained 150 Joules of gravitational potential energy.',
    },
    {
      id: 'unit-01-energy-fc-08',
      front: 'A 10 kg rock falls 8 meters. What is its ΔGPE? Is it positive or negative?',
      back: 'ΔGPE = mgΔh = (10)(10)(−8) = −800 J\nNegative, because the rock moved DOWN (lost height), losing gravitational potential energy.',
    },
    {
      id: 'unit-01-energy-fc-09',
      front: 'What is dimensional analysis?',
      back: 'A method to convert between units using conversion factors written as fractions. Unwanted units cancel when placed on opposite sides of the fraction bar.',
    },
    {
      id: 'unit-01-energy-fc-10',
      front: 'What are the metric prefixes in order from largest to smallest?',
      back: 'kilo (k) → hecto (h) → deca (da) → [base unit] → deci (d) → centi (c) → milli (m)\nEach step is a factor of 10.',
    },
    {
      id: 'unit-01-energy-fc-11',
      front: 'How do you convert 750 mm to meters using dimensional analysis?',
      back: '750 mm × (1 m / 1000 mm) = 0.75 m\nThe mm units cancel, leaving meters.',
    },
    {
      id: 'unit-01-energy-fc-12',
      front: 'An object has a GPE of 200 J and a mass of 4 kg. How high is it? (g = 10 m/s²)',
      back: 'Rearrange ΔGPE = mgΔh → Δh = ΔGPE ÷ (mg)\nΔh = 200 ÷ (4 × 10) = 200 ÷ 40 = 5 m',
    },
    {
      id: 'unit-01-energy-fc-13',
      front: 'What is an energy transfer diagram?',
      back: 'A diagram showing how energy flows through a process — identifying the input energy form (usually potential) and the output energy form(s) (usually kinetic). Example: Chemical PE (fuel) → Thermal KE (heat) + Radiant KE (light)',
    },
    {
      id: 'unit-01-energy-fc-14',
      front: 'A campfire converts what type of energy into what other types?',
      back: 'Input: Chemical potential energy (stored in wood)\nOutputs: Thermal kinetic energy (heat) + Radiant kinetic energy (light)',
    },
  ],
  quiz: [
    {
      id: 'unit-01-energy-q-01',
      question: 'Which of the following is an example of CHEMICAL potential energy?',
      options: [
        'A book sitting on a high shelf',
        'A compressed spring',
        'Glucose molecules in a cell',
        'A moving car',
      ],
      correctIndex: 2,
      explanation: 'Chemical potential energy is stored in chemical bonds. Glucose stores energy in its molecular bonds that cells can later release. A book on a shelf has gravitational PE, a compressed spring has elastic PE, and a moving car has mechanical kinetic energy.',
    },
    {
      id: 'unit-01-energy-q-02',
      question: 'A 5 kg object is lifted 6 meters. What is its change in gravitational potential energy? (g = 10 m/s²)',
      options: [
        '30 J',
        '110 J',
        '300 J',
        '3000 J',
      ],
      correctIndex: 2,
      explanation: 'ΔGPE = mgΔh = (5 kg)(10 m/s²)(6 m) = 300 J. Mass × g × height change gives you the energy in Joules.',
    },
    {
      id: 'unit-01-energy-q-03',
      question: 'An object\'s ΔGPE is −400 J. What does the negative sign tell you?',
      options: [
        'The object lost mass',
        'The object moved downward (lost height)',
        'The calculation was done incorrectly',
        'The object gained kinetic energy equal to 400 J',
      ],
      correctIndex: 1,
      explanation: 'A negative ΔGPE means Δh was negative — the object moved DOWN, losing gravitational potential energy. The lost PE converts to kinetic energy as the object falls.',
    },
    {
      id: 'unit-01-energy-q-04',
      question: 'A 2 kg ball has a ΔGPE of 80 J. What height change did it undergo? (g = 10 m/s²)',
      options: [
        '4 m',
        '8 m',
        '16 m',
        '40 m',
      ],
      correctIndex: 0,
      explanation: 'Rearrange ΔGPE = mgΔh to get Δh = ΔGPE ÷ (mg) = 80 ÷ (2 × 10) = 80 ÷ 20 = 4 m.',
    },
    {
      id: 'unit-01-energy-q-05',
      question: 'An object falls 10 m and has a mass of m kg, resulting in ΔGPE = −500 J. What is its mass?',
      options: [
        '2 kg',
        '5 kg',
        '50 kg',
        '500 kg',
      ],
      correctIndex: 1,
      explanation: 'ΔGPE = mgΔh → m = ΔGPE ÷ (gΔh). Since the object fell, Δh = −10 m. m = −500 ÷ (10 × −10) = −500 ÷ −100 = 5 kg.',
    },
    {
      id: 'unit-01-energy-q-06',
      question: 'Which type of kinetic energy is carried by electromagnetic waves like light?',
      options: [
        'Thermal',
        'Mechanical',
        'Sound',
        'Radiant',
      ],
      correctIndex: 3,
      explanation: 'Radiant (electromagnetic) kinetic energy is carried by light and other electromagnetic waves. Thermal = heat/molecular motion. Mechanical = moving objects. Sound = vibrating particles.',
    },
    {
      id: 'unit-01-energy-q-07',
      question: 'You need to convert 3.5 km to meters. Which conversion factor should you use?',
      options: [
        '1 km / 1000 m',
        '1000 m / 1 km',
        '100 m / 1 km',
        '1 m / 100 km',
      ],
      correctIndex: 1,
      explanation: 'To convert km → m, you need the km to cancel (on the bottom) and m to remain (on top). The fraction 1000 m / 1 km achieves this: 3.5 km × (1000 m / 1 km) = 3500 m.',
    },
    {
      id: 'unit-01-energy-q-08',
      question: 'A hydroelectric dam converts water at height into electricity. In the correct order, what energy transformations occur?',
      options: [
        'Chemical PE → Thermal KE → Electrical energy',
        'Gravitational PE → Mechanical KE → Electrical energy',
        'Elastic PE → Radiant KE → Electrical energy',
        'Thermal KE → Gravitational PE → Electrical energy',
      ],
      correctIndex: 1,
      explanation: 'Water stored at height has gravitational PE. As it falls, that becomes mechanical KE (spinning turbines), which generators convert to electrical energy.',
    },
    {
      id: 'unit-01-energy-q-09',
      question: 'Convert 4500 mL to liters using dimensional analysis. What is the answer?',
      options: [
        '0.45 L',
        '4.5 L',
        '45 L',
        '450 L',
      ],
      correctIndex: 1,
      explanation: '4500 mL × (1 L / 1000 mL) = 4.5 L. The mL units cancel, and 4500 ÷ 1000 = 4.5.',
    },
    {
      id: 'unit-01-energy-q-10',
      question: 'Which statement about energy is TRUE?',
      options: [
        'Energy can be created when an object gains speed',
        'Energy can be destroyed when an object stops moving',
        'Energy is conserved — it is transformed, not created or destroyed',
        'Potential energy and kinetic energy cannot both exist in the same system',
      ],
      correctIndex: 2,
      explanation: 'The Law of Conservation of Energy states that energy cannot be created or destroyed, only transformed from one form to another. A "stopped" object\'s kinetic energy converts to heat through friction.',
    },
    {
      id: 'unit-01-energy-q-11',
      question: 'In an energy transfer diagram for a person jumping: Which energy form is INPUT and which is OUTPUT?',
      options: [
        'Input: Mechanical KE; Output: Chemical PE',
        'Input: Chemical PE (food/ATP); Output: Mechanical KE (movement) + Thermal KE (body heat)',
        'Input: Gravitational PE; Output: Chemical PE',
        'Input: Thermal KE; Output: Gravitational PE',
      ],
      correctIndex: 1,
      explanation: 'The body uses chemical potential energy stored in food (ATP) as input. The output is mechanical kinetic energy (the jumping motion) and thermal kinetic energy (heat produced by muscle activity).',
    },
  ],
};
