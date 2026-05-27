import type { Unit } from '@/types/study';

export const unit04AtomicStructure: Unit = {
  id: 'unit-04-atomic-structure',
  number: 4,
  title: 'Atomic Structure',
  description: 'Subatomic particles, atomic models, isotopes, moles, Avogadro\'s number, scientific notation, and significant figures.',
  notes: [
    {
      heading: 'Subatomic Particles',
      content: 'Atoms are made of three subatomic particles:\n\n• Proton: located in the NUCLEUS, charge = +1, mass ≈ 1 atomic mass unit (amu)\n• Neutron: located in the NUCLEUS, charge = 0 (neutral), mass ≈ 1 amu\n• Electron: located OUTSIDE the nucleus (in electron cloud/orbitals), charge = −1, mass ≈ 0 (negligible, ~1/1836 of proton)\n\nThe nucleus is very small but contains almost all the atom\'s mass. The electron cloud is much larger in volume but contributes almost no mass.\n\nAtomic Number (Z): the number of PROTONS in the nucleus. This defines what element an atom is. Every atom of an element has the same atomic number.\n\nMass Number (A): the number of PROTONS + NEUTRONS in the nucleus.\nNumber of Neutrons = Mass Number − Atomic Number',
      bullets: [
        'Protons = Z (atomic number) — never changes for a given element',
        'Neutrons = A − Z (mass number minus atomic number)',
        'Electrons = protons (in a neutral atom)',
        'Ions have different numbers of electrons than protons',
      ],
    },
    {
      heading: 'Atomic Models (Historical Development)',
      content: 'The model of the atom has evolved through history as new experiments revealed new information:\n\n1. Solid Sphere Model (Dalton, ~1803): Atoms are tiny, indivisible solid spheres. Different elements = different spheres.\n\n2. Plum Pudding Model (Thomson, 1904): After discovering electrons, Thomson proposed atoms are a "pudding" of positive charge with electrons embedded like plums. Cathode ray experiments showed electrons exist and have negative charge.\n\n3. Nuclear Model (Rutherford, 1911): Gold Foil Experiment showed most of the atom is empty space, with a tiny, dense, positively charged NUCLEUS at the center. Some particles bounced back — unexpected.\n\n4. Planetary / Bohr Model (Bohr, 1913): Electrons orbit the nucleus in fixed circular energy levels (shells), like planets around the sun. Only specific orbits are allowed.\n\n5. Quantum / Electron Cloud Model (modern): Electrons don\'t have fixed paths — they exist in probability regions called orbitals. We can only say where electrons are LIKELY to be.',
      bullets: [
        'Cathode ray experiment proved electrons exist and are negatively charged',
        'Gold foil experiment (Rutherford): most alpha particles passed through, but some deflected back → dense positive nucleus',
        'Key conclusion from gold foil: the atom is mostly empty space',
        'Modern model uses wave functions and probability to describe electron locations',
      ],
    },
    {
      heading: 'Isotopes and Average Atomic Mass',
      content: 'Isotopes are atoms of the same element with the same number of protons but DIFFERENT numbers of neutrons.\n\nExample: Carbon-12 and Carbon-14 are both carbon (6 protons), but C-12 has 6 neutrons and C-14 has 8 neutrons.\n\nIsotope notations (all equivalent):\n• Carbon-12  →  C-12  →  ¹²C (where 12 is the mass number)\n• Written as: symbol-mass number, or mass number superscript before the symbol\n\nAverage atomic mass: because most elements have multiple naturally occurring isotopes, the periodic table shows a weighted average based on natural abundance.\n\nFormula: Average atomic mass = Σ (mass of each isotope × relative abundance as decimal)\nExample: Chlorine has two isotopes:\n  Cl-35 (34.97 amu, 75.77% abundant) and Cl-37 (36.97 amu, 24.23% abundant)\n  Average = (34.97 × 0.7577) + (36.97 × 0.2423) = 26.50 + 8.96 = 35.45 amu',
      bullets: [
        'Same element = same protons, different isotopes = different neutrons',
        'Isotopes have same chemical properties but different masses',
        'Average atomic mass is a weighted average — closer to the most abundant isotope',
        'Percent abundance must add to 100%; relative abundance decimals add to 1.00',
      ],
    },
    {
      heading: 'The Mole and Avogadro\'s Number',
      content: 'The mole is a counting unit for chemistry, just as "dozen" means 12.\n\nAvogadro\'s Number: 1 mole = 6.022 × 10²³ particles (atoms, molecules, ions, etc.)\n\nMolar mass: the mass of one mole of a substance, equal to the atomic/molecular mass in grams.\n• 1 mole of carbon (atomic mass 12.01 amu) = 12.01 g\n• 1 mole of H₂O (molecular mass = 2×1.01 + 16.00 = 18.02) = 18.02 g\n\nConversions using dimensional analysis:\n• Grams → Moles: divide by molar mass (g/mol)\n• Moles → Grams: multiply by molar mass\n• Moles → Particles: multiply by 6.022 × 10²³\n• Particles → Moles: divide by 6.022 × 10²³\n\nExample: How many grams is 2.5 mol of NaCl?\n  Molar mass of NaCl = 22.99 + 35.45 = 58.44 g/mol\n  2.5 mol × (58.44 g / 1 mol) = 146.1 g\n\nAlways show conversion factors as fractions with units!',
    },
    {
      heading: 'Scientific Notation and Significant Figures',
      content: 'Scientific Notation: a way to write very large or very small numbers.\n  Format: M × 10ⁿ  where 1 ≤ M < 10\n  • 6,022,000,000,000,000,000,000,000 = 6.022 × 10²³\n  • 0.000000001 = 1 × 10⁻⁹\n  • Moving decimal left → positive exponent; right → negative exponent\n\nSignificant Figures (sig figs): the digits in a measurement that are meaningful/reliable.\nRules for counting sig figs:\n  • All nonzero digits are significant: 1234 → 4 sig figs\n  • Zeros BETWEEN nonzero digits are significant: 1002 → 4 sig figs\n  • Leading zeros are NOT significant: 0.0045 → 2 sig figs\n  • Trailing zeros with a decimal point ARE significant: 2.500 → 4 sig figs\n  • Trailing zeros WITHOUT a decimal are ambiguous: 1200 → unclear (2, 3, or 4?)\n\nNote: You will NOT be asked to track sig figs through calculations — only to count how many sig figs a number has as written.',
      bullets: [
        '6.022 × 10²³ has 4 significant figures',
        '0.0045 has 2 significant figures (leading zeros don\'t count)',
        '1002 has 4 sig figs (zero between nonzero digits counts)',
        '3.400 has 4 sig figs (trailing zeros after decimal point count)',
      ],
    },
  ],
  flashcards: [
    {
      id: 'unit-04-atomic-structure-fc-01',
      front: 'What are the three subatomic particles, and where is each located?',
      back: '• Proton: +1 charge, mass ≈ 1 amu — in the NUCLEUS\n• Neutron: 0 charge, mass ≈ 1 amu — in the NUCLEUS\n• Electron: −1 charge, mass ≈ 0 — OUTSIDE the nucleus (electron cloud)',
    },
    {
      id: 'unit-04-atomic-structure-fc-02',
      front: 'What is the atomic number (Z) and what does it tell you?',
      back: 'The atomic number (Z) is the number of PROTONS in an atom\'s nucleus. It defines which element an atom is — every atom of the same element has the same atomic number. Carbon is always Z=6.',
    },
    {
      id: 'unit-04-atomic-structure-fc-03',
      front: 'How do you find the number of neutrons in an isotope?',
      back: 'Neutrons = Mass Number − Atomic Number (A − Z)\nExample: Iron-56 (Fe-56): 56 − 26 = 30 neutrons.\nThe mass number (A) is the total of protons + neutrons.',
    },
    {
      id: 'unit-04-atomic-structure-fc-04',
      front: 'What did Rutherford\'s Gold Foil Experiment show?',
      back: 'Most alpha particles passed through the gold foil (atom is mostly empty space), but some deflected at large angles — even backward. Conclusion: atoms have a tiny, dense, positively charged NUCLEUS at the center.',
    },
    {
      id: 'unit-04-atomic-structure-fc-05',
      front: 'What is an isotope?',
      back: 'Isotopes are atoms of the same element (same number of protons) with different numbers of NEUTRONS, giving them different mass numbers. Example: C-12 (6 protons, 6 neutrons) and C-14 (6 protons, 8 neutrons).',
    },
    {
      id: 'unit-04-atomic-structure-fc-06',
      front: 'What is Avogadro\'s Number and what does it represent?',
      back: 'Avogadro\'s number = 6.022 × 10²³ particles per mole. One MOLE of any substance contains 6.022 × 10²³ atoms, molecules, or formula units. This is a counting unit for chemistry.',
    },
    {
      id: 'unit-04-atomic-structure-fc-07',
      front: 'How do you calculate the molar mass of a compound?',
      back: 'Add up the atomic masses of all atoms in the formula:\nExample: H₂O = 2(1.01) + 1(16.00) = 18.02 g/mol\nExample: NaCl = 22.99 + 35.45 = 58.44 g/mol\nMolar mass in g/mol equals the sum of atomic masses from the periodic table.',
    },
    {
      id: 'unit-04-atomic-structure-fc-08',
      front: 'How many grams is 3 moles of water (H₂O)? Molar mass = 18.02 g/mol',
      back: '3 mol × (18.02 g / 1 mol) = 54.06 g\nAlways write conversion factors as fractions. The "mol" units cancel, leaving grams.',
    },
    {
      id: 'unit-04-atomic-structure-fc-09',
      front: 'How many atoms are in 2 moles of carbon?',
      back: '2 mol × (6.022 × 10²³ atoms / 1 mol) = 1.204 × 10²⁴ atoms\nMultiply moles by Avogadro\'s number to get particles.',
    },
    {
      id: 'unit-04-atomic-structure-fc-10',
      front: 'How many significant figures does 0.00450 have?',
      back: '3 significant figures. The leading zeros (0.00) are NOT significant. The 4, 5, and the trailing 0 after the 5 (after the decimal point) ARE all significant.',
    },
    {
      id: 'unit-04-atomic-structure-fc-11',
      front: 'Write 0.0000045 in scientific notation.',
      back: '4.5 × 10⁻⁶\nMove the decimal point 6 places to the right to get a number between 1 and 10. Moving right = negative exponent.',
    },
    {
      id: 'unit-04-atomic-structure-fc-12',
      front: 'List the 5 atomic models in chronological order.',
      back: '1. Solid Sphere (Dalton) — atoms are solid, indivisible\n2. Plum Pudding (Thomson) — electrons in positive "pudding"\n3. Nuclear (Rutherford) — tiny dense nucleus, mostly empty space\n4. Planetary/Bohr — electrons in fixed circular orbits/shells\n5. Quantum/Electron Cloud — electrons in probability orbitals',
    },
    {
      id: 'unit-04-atomic-structure-fc-13',
      front: 'What is average atomic mass and how is it calculated?',
      back: 'The weighted average of all naturally occurring isotopes based on their relative abundance.\nFormula: Average mass = Σ(mass of isotope × fraction abundance)\nExample: Two isotopes 50% each, masses 10 and 12: average = (10×0.5) + (12×0.5) = 11',
    },
    {
      id: 'unit-04-atomic-structure-fc-14',
      front: 'How many significant figures does 1002.0 have?',
      back: '5 significant figures. The zero between the 1 and 2 is significant (between nonzero digits). The trailing zero after the decimal point is also significant.',
    },
  ],
  quiz: [
    {
      id: 'unit-04-atomic-structure-q-01',
      question: 'An atom has atomic number 17 and mass number 35. How many neutrons does it have?',
      options: [
        '17',
        '18',
        '35',
        '52',
      ],
      correctIndex: 1,
      explanation: 'Neutrons = Mass Number − Atomic Number = 35 − 17 = 18. This is chlorine-35, with 17 protons and 18 neutrons.',
    },
    {
      id: 'unit-04-atomic-structure-q-02',
      question: 'What was the MAJOR conclusion from Rutherford\'s Gold Foil Experiment?',
      options: [
        'Electrons are negatively charged',
        'Atoms are solid, indivisible spheres',
        'Atoms have a small, dense, positively charged nucleus surrounded by mostly empty space',
        'Electrons orbit the nucleus in fixed energy levels',
      ],
      correctIndex: 2,
      explanation: 'Rutherford\'s experiment showed that most alpha particles passed through (empty space), but some deflected greatly — proving a tiny, dense, positive nucleus exists. This replaced Thomson\'s plum pudding model.',
    },
    {
      id: 'unit-04-atomic-structure-q-03',
      question: 'How many grams is 0.5 moles of NaCl? (Molar mass of NaCl = 58.44 g/mol)',
      options: [
        '29.22 g',
        '58.44 g',
        '116.88 g',
        '0.0086 g',
      ],
      correctIndex: 0,
      explanation: '0.5 mol × (58.44 g / 1 mol) = 29.22 g. The mol units cancel. Half a mole equals half the molar mass in grams.',
    },
    {
      id: 'unit-04-atomic-structure-q-04',
      question: 'What is the molar mass of CO₂? (C = 12.01, O = 16.00)',
      options: [
        '28.01 g/mol',
        '44.01 g/mol',
        '32.00 g/mol',
        '56.00 g/mol',
      ],
      correctIndex: 1,
      explanation: 'CO₂ has 1 carbon and 2 oxygens: (1 × 12.01) + (2 × 16.00) = 12.01 + 32.00 = 44.01 g/mol.',
    },
    {
      id: 'unit-04-atomic-structure-q-05',
      question: 'How many significant figures does 0.00304 have?',
      options: [
        '2',
        '3',
        '5',
        '6',
      ],
      correctIndex: 1,
      explanation: '0.00304 has 3 significant figures. The leading zeros (0.00) are NOT significant. The 3, 0 (between two nonzero digits), and 4 ARE significant.',
    },
    {
      id: 'unit-04-atomic-structure-q-06',
      question: 'Write 65,000,000 in proper scientific notation.',
      options: [
        '65 × 10⁶',
        '6.5 × 10⁷',
        '0.65 × 10⁸',
        '6.5 × 10⁻⁷',
      ],
      correctIndex: 1,
      explanation: '65,000,000 = 6.5 × 10⁷. The first factor must be between 1 and 10. Count: we moved the decimal 7 places to the left, giving a positive exponent of 7.',
    },
    {
      id: 'unit-04-atomic-structure-q-07',
      question: 'Carbon-12 and Carbon-14 are isotopes. What is TRUE about both?',
      options: [
        'They have the same mass number',
        'They have the same number of neutrons',
        'They have the same number of protons (6)',
        'They have identical chemical and physical properties',
      ],
      correctIndex: 2,
      explanation: 'Isotopes have the same number of protons (same element, same atomic number = 6 for carbon) but different numbers of neutrons. C-12 has 6 neutrons, C-14 has 8 neutrons.',
    },
    {
      id: 'unit-04-atomic-structure-q-08',
      question: 'Which atomic model proposed that electrons orbit the nucleus in fixed circular paths?',
      options: [
        'Plum Pudding Model (Thomson)',
        'Solid Sphere Model (Dalton)',
        'Planetary/Bohr Model',
        'Quantum/Electron Cloud Model',
      ],
      correctIndex: 2,
      explanation: 'Niels Bohr proposed the planetary model (1913) where electrons orbit the nucleus in specific, fixed circular energy levels — like planets around the sun. The modern quantum model replaced fixed orbits with probability orbitals.',
    },
    {
      id: 'unit-04-atomic-structure-q-09',
      question: 'Bromine has two isotopes: Br-79 (50.69%) and Br-81 (49.31%). What is the approximate average atomic mass?',
      options: [
        '79.0 amu',
        '79.99 amu',
        '81.0 amu',
        '80.5 amu',
      ],
      correctIndex: 1,
      explanation: 'Average = (79 × 0.5069) + (81 × 0.4931) = 40.05 + 39.94 = 79.99 amu ≈ 80. Since the two isotopes are nearly equal in abundance, the average falls almost exactly between them.',
    },
    {
      id: 'unit-04-atomic-structure-q-10',
      question: 'How many moles is 12.044 × 10²³ atoms of iron?',
      options: [
        '0.5 mol',
        '1 mol',
        '2 mol',
        '6.022 mol',
      ],
      correctIndex: 2,
      explanation: '12.044 × 10²³ ÷ (6.022 × 10²³ atoms/mol) = 2 mol. Divide the number of atoms by Avogadro\'s number to get moles.',
    },
    {
      id: 'unit-04-atomic-structure-q-11',
      question: 'What charge does an electron have?',
      options: [
        '+1',
        '0',
        '−1',
        '+2',
      ],
      correctIndex: 2,
      explanation: 'Electrons have a charge of −1. Protons have +1. Neutrons have 0. In a neutral atom, the number of electrons equals the number of protons, making the overall charge zero.',
    },
    {
      id: 'unit-04-atomic-structure-q-12',
      question: 'What particle defines which element an atom is?',
      options: [
        'Neutron',
        'Electron',
        'Proton',
        'Nucleus',
      ],
      correctIndex: 2,
      explanation: 'The NUMBER OF PROTONS (the atomic number, Z) uniquely defines which element an atom is. Change the number of protons and you have a different element. Adding/removing neutrons gives isotopes; adding/removing electrons gives ions.',
    },
  ],
};
