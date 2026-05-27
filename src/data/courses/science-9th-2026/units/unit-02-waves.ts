import type { Unit } from '@/types/study';

export const unit02Waves: Unit = {
  id: 'unit-02-waves',
  number: 2,
  title: 'Waves',
  description: 'Transverse and longitudinal waves, wave components, behaviors, the double-slit experiment, and standing waves.',
  notes: [
    {
      heading: 'Types of Waves',
      content: 'Waves transfer energy from one place to another without transferring matter. There are two primary types based on how particles move relative to the wave\'s direction of travel:\n\nTransverse Waves: Particles move PERPENDICULAR (at right angles) to the direction the wave travels. Examples: light waves, ripples on water, waves on a guitar string.\n\nLongitudinal Waves: Particles move PARALLEL (back and forth in the same direction) as the wave travels. Example: sound waves in air.',
      bullets: [
        'Transverse waves have crests (peaks) and troughs (valleys)',
        'Longitudinal waves have compressions (squished regions) and rarefactions (spread-out regions)',
        'Sound is always a longitudinal wave',
        'Light is always a transverse wave',
      ],
    },
    {
      heading: 'Components of Waves',
      content: 'Transverse wave components:\n• Crest: the highest point of the wave above equilibrium\n• Trough: the lowest point of the wave below equilibrium\n• Amplitude: the distance from the equilibrium (rest) position to a crest or trough — measures the wave\'s energy/intensity\n• Wavelength (λ): the distance between two identical points on consecutive waves (e.g., crest to crest, or trough to trough)\n• Equilibrium / rest position: the undisturbed baseline of the medium\n\nLongitudinal wave components:\n• Compression: a region where particles are pushed closely together (high pressure)\n• Rarefaction: a region where particles are spread apart (low pressure)\n\nStanding wave components:\n• Nodes: points of zero displacement (no movement) — where the wave appears stationary\n• Antinodes: points of maximum displacement — where the wave moves most\n\nWave measurements:\n• Speed: how fast the wave travels through a medium\n• Frequency: how many wave cycles pass a point per second (Hz)\n• Period: the time for one complete wave cycle (seconds)',
    },
    {
      heading: 'Wave Behaviors',
      content: 'Waves interact with their environment in several ways:\n\nAbsorption: The wave\'s energy is taken in by the medium, reducing the wave\'s amplitude. Example: Sound is absorbed by foam.\n\nReflection: The wave bounces off a surface and travels back. Example: Echo of sound off a wall.\n\nRefraction: The wave changes direction when it passes from one medium into another (where speed changes). Example: Light bending through water, creating a straw-in-water optical illusion.\n\nDiffraction: The wave bends and spreads out around obstacles or through openings. Greatest when the opening/obstacle size ≈ wavelength. Example: Sound bending around corners.\n\nInterference: Two or more waves overlap in the same space at the same time.\n• Constructive interference: crests align with crests — amplitudes ADD, creating a larger wave\n• Destructive interference: crests align with troughs — amplitudes SUBTRACT, reducing or canceling the wave\n\nDoppler Effect: An apparent change in frequency due to relative motion between source and observer. Source moving TOWARD you → higher frequency (higher pitch). Source moving AWAY → lower frequency (lower pitch). Example: ambulance siren changing pitch.',
    },
    {
      heading: 'Standing Waves',
      content: 'A standing wave appears to be stationary — it doesn\'t seem to travel. It is created when a wave and its reflection interfere with each other consistently.\n\nKey features:\n• Nodes: fixed points of zero movement (destructive interference zones)\n• Antinodes: points of maximum movement (constructive interference zones)\n• Number of nodes: the 1st harmonic (fundamental) has 2 nodes (at the ends), 2nd harmonic has 3 nodes, etc.\n\nNote: You will NOT be tested on calculating wavelength of standing waves — only on identifying and counting nodes.',
    },
    {
      heading: 'The Double-Slit Experiment',
      content: 'The double-slit experiment demonstrates that light (and other waves) shows wave behavior — specifically, diffraction and interference working together.\n\nHow it works:\n1. A wave (light) passes through two narrow parallel slits\n2. Each slit acts as a new wave source — the waves DIFFRACT (spread out) as they pass through\n3. The two diffracted waves then INTERFERE with each other\n4. This creates an interference pattern: alternating bright bands (constructive interference, crests + crests) and dark bands (destructive interference, crests + troughs) on a screen\n\nSignificance: This result proves light behaves as a wave — a particle would not create this pattern. It was historically important evidence for the wave nature of light.',
      bullets: [
        'Bright bands = constructive interference (waves reinforce each other)',
        'Dark bands = destructive interference (waves cancel each other)',
        'Both diffraction AND interference are needed to explain the result',
        'The central band is always the brightest',
      ],
    },
  ],
  flashcards: [
    {
      id: 'unit-02-waves-fc-01',
      front: 'What is the difference between a transverse and a longitudinal wave?',
      back: 'Transverse: particles move PERPENDICULAR to the wave direction (crests & troughs).\nLongitudinal: particles move PARALLEL to the wave direction (compressions & rarefactions).\nExample: Light = transverse; Sound = longitudinal.',
    },
    {
      id: 'unit-02-waves-fc-02',
      front: 'What is the amplitude of a wave?',
      back: 'The distance from the equilibrium (rest) position to the crest or trough. Amplitude measures the wave\'s energy or intensity — a larger amplitude means a more energetic wave.',
    },
    {
      id: 'unit-02-waves-fc-03',
      front: 'What is wavelength?',
      back: 'The distance between two identical consecutive points on a wave (e.g., crest to crest, or trough to trough). Symbol: λ (lambda). Measured in meters.',
    },
    {
      id: 'unit-02-waves-fc-04',
      front: 'What are compressions and rarefactions?',
      back: 'Parts of a longitudinal wave:\n• Compression: region where particles are CLOSE together (high density/pressure)\n• Rarefaction: region where particles are SPREAD APART (low density/pressure)',
    },
    {
      id: 'unit-02-waves-fc-05',
      front: 'What is the difference between wave speed, frequency, and period?',
      back: '• Speed: how fast the wave travels through a medium (m/s)\n• Frequency: number of complete wave cycles per second (Hz)\n• Period: time for one complete cycle (seconds)\nNote: frequency and period are reciprocals of each other.',
    },
    {
      id: 'unit-02-waves-fc-06',
      front: 'What is diffraction?',
      back: 'Diffraction is when a wave bends and spreads out around obstacles or through openings. It is most pronounced when the opening size is similar to the wave\'s wavelength. Example: Sound bending around a corner of a building.',
    },
    {
      id: 'unit-02-waves-fc-07',
      front: 'What is the difference between constructive and destructive interference?',
      back: 'Constructive interference: two waves meet with crests aligned → amplitudes ADD → larger combined wave.\nDestructive interference: two waves meet with crest aligned with trough → amplitudes SUBTRACT → smaller (or zero) combined wave.',
    },
    {
      id: 'unit-02-waves-fc-08',
      front: 'What is the Doppler effect?',
      back: 'An apparent change in frequency caused by relative motion between a wave source and an observer.\n• Source moving TOWARD observer → frequency seems HIGHER\n• Source moving AWAY → frequency seems LOWER\nExample: A siren sounds higher-pitched as it approaches, lower as it moves away.',
    },
    {
      id: 'unit-02-waves-fc-09',
      front: 'What are nodes and antinodes in a standing wave?',
      back: '• Nodes: points of ZERO displacement — appear stationary. Result from consistent destructive interference.\n• Antinodes: points of MAXIMUM displacement — vibrate the most. Result from consistent constructive interference.',
    },
    {
      id: 'unit-02-waves-fc-10',
      front: 'How does the double-slit experiment prove that light behaves as a wave?',
      back: 'Light passes through two slits, diffracts at each, and the two sets of waves interfere. This creates alternating bright (constructive) and dark (destructive) bands — an interference pattern. Only waves can produce this; particles cannot.',
    },
    {
      id: 'unit-02-waves-fc-11',
      front: 'What is refraction?',
      back: 'Refraction is when a wave changes direction as it passes from one medium to another — caused by the change in wave speed. Example: Light bending when it enters water, making a straw appear bent.',
    },
    {
      id: 'unit-02-waves-fc-12',
      front: 'What is a standing wave and how is it formed?',
      back: 'A standing wave appears stationary — it doesn\'t seem to travel. It forms when a wave and its reflection interfere consistently, producing fixed nodes (no motion) and antinodes (maximum motion).',
    },
    {
      id: 'unit-02-waves-fc-13',
      front: 'What is the equilibrium (rest) position in a wave?',
      back: 'The equilibrium position is the undisturbed baseline of the medium — where particles sit when no wave is passing. The amplitude is measured from this line to the crest or trough.',
    },
    {
      id: 'unit-02-waves-fc-14',
      front: 'A string vibrates with 3 antinodes. How many nodes does it have?',
      back: 'A string with 3 antinodes is in the 3rd harmonic. It has 4 nodes (including both fixed endpoints). The pattern is always: nodes = antinodes + 1.',
    },
  ],
  quiz: [
    {
      id: 'unit-02-waves-q-01',
      question: 'In a transverse wave, how do particles move relative to the wave\'s direction of travel?',
      options: [
        'Parallel to the wave direction',
        'Perpendicular to the wave direction',
        'In circular paths',
        'They do not move at all',
      ],
      correctIndex: 1,
      explanation: 'In a transverse wave, particles oscillate PERPENDICULAR (at 90°) to the wave\'s direction of travel. Think of a wave on a rope — the rope moves up and down while the wave travels horizontally.',
    },
    {
      id: 'unit-02-waves-q-02',
      question: 'Which part of a longitudinal wave has particles spread FAR APART?',
      options: [
        'Compression',
        'Crest',
        'Rarefaction',
        'Antinode',
      ],
      correctIndex: 2,
      explanation: 'A rarefaction is the low-pressure, low-density region of a longitudinal wave where particles are spread apart. A compression is the opposite — particles pushed close together.',
    },
    {
      id: 'unit-02-waves-q-03',
      question: 'Two waves meet and their crests perfectly align. What happens?',
      options: [
        'Destructive interference — the waves cancel',
        'Constructive interference — the amplitudes add together',
        'Refraction — the waves bend',
        'Diffraction — the waves spread out',
      ],
      correctIndex: 1,
      explanation: 'When crests align with crests (or troughs with troughs), constructive interference occurs — the amplitudes add together, creating a wave with larger amplitude than either original wave.',
    },
    {
      id: 'unit-02-waves-q-04',
      question: 'An ambulance is driving TOWARD you with its siren on. What do you perceive?',
      options: [
        'Lower frequency (lower pitch) than when stationary',
        'Higher frequency (higher pitch) than when stationary',
        'The same frequency as when stationary',
        'No sound because of destructive interference',
      ],
      correctIndex: 1,
      explanation: 'The Doppler effect: when a sound source moves TOWARD you, the sound waves are compressed, increasing the perceived frequency — you hear a higher pitch. The reverse happens when it moves away.',
    },
    {
      id: 'unit-02-waves-q-05',
      question: 'In the double-slit experiment, what causes the dark bands on the screen?',
      options: [
        'Constructive interference',
        'Absorption by the screen',
        'Destructive interference',
        'Refraction of the light',
      ],
      correctIndex: 2,
      explanation: 'Dark bands in the double-slit pattern occur where destructive interference takes place — where a crest from one slit meets a trough from the other slit, canceling the light.',
    },
    {
      id: 'unit-02-waves-q-06',
      question: 'Diffraction is most pronounced when:',
      options: [
        'The obstacle is much larger than the wavelength',
        'The wave speed is very high',
        'The opening or obstacle size is similar to the wavelength',
        'The wave frequency is very low',
      ],
      correctIndex: 2,
      explanation: 'Diffraction (bending/spreading of waves) is most significant when the size of the opening or obstacle is approximately equal to the wavelength. When the opening is much larger, diffraction is minimal.',
    },
    {
      id: 'unit-02-waves-q-07',
      question: 'What two phenomena work together to produce the pattern in a double-slit experiment?',
      options: [
        'Reflection and absorption',
        'Refraction and the Doppler effect',
        'Diffraction and interference',
        'Constructive interference and standing waves',
      ],
      correctIndex: 2,
      explanation: 'First, diffraction causes the light to spread out as it passes through each slit. Then the two spreading wave patterns overlap and interfere with each other, creating the alternating bright/dark pattern.',
    },
    {
      id: 'unit-02-waves-q-08',
      question: 'In a standing wave, what is a NODE?',
      options: [
        'A point of maximum displacement',
        'A point of zero displacement that appears stationary',
        'The peak of the wave',
        'The distance between two crests',
      ],
      correctIndex: 1,
      explanation: 'A node is a fixed point of zero displacement in a standing wave — it never moves. Nodes result from consistent destructive interference. Antinodes are the points of maximum displacement.',
    },
    {
      id: 'unit-02-waves-q-09',
      question: 'A sound wave is an example of which type of wave?',
      options: [
        'Transverse wave',
        'Electromagnetic wave',
        'Longitudinal wave',
        'Standing wave',
      ],
      correctIndex: 2,
      explanation: 'Sound waves are longitudinal waves — the air molecules move parallel (back and forth in the same direction) as the wave travels. Compressions and rarefactions are created as the sound moves through the medium.',
    },
    {
      id: 'unit-02-waves-q-10',
      question: 'Which wave behavior occurs when light bends as it passes from air into water?',
      options: [
        'Reflection',
        'Diffraction',
        'Absorption',
        'Refraction',
      ],
      correctIndex: 3,
      explanation: 'Refraction occurs when a wave changes direction due to a change in speed as it moves from one medium to another. Light slows down in water compared to air, causing it to bend at the interface.',
    },
    {
      id: 'unit-02-waves-q-11',
      question: 'What does the AMPLITUDE of a wave tell you?',
      options: [
        'The speed of the wave',
        'The number of cycles per second',
        'The distance from equilibrium to crest — the wave\'s energy',
        'The distance from crest to crest',
      ],
      correctIndex: 2,
      explanation: 'Amplitude is the distance from the equilibrium (rest) position to the crest (or trough). It indicates the energy of the wave — larger amplitude = more energy. Wavelength (not amplitude) is crest-to-crest distance.',
    },
  ],
};
