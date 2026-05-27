import type { Unit } from '@/types/study';

export const unit05Electrons: Unit = {
  id: 'unit-05-electrons',
  number: 5,
  title: 'Electrons',
  description: 'Orbitals, electron configurations, Bohr diagrams, Lewis dot structures, and ions.',
  notes: [
    {
      heading: 'Orbitals and Subshells',
      content: 'Electrons don\'t orbit in fixed circles — they occupy regions of probability called ORBITALS. Each orbital can hold a maximum of 2 electrons (Pauli Exclusion Principle).\n\nShells: Numbered 1, 2, 3, etc. (the energy level). Higher = farther from nucleus = higher energy.\n\nSubshells within each shell: s, p, d, f\n• s subshell: 1 orbital → holds 2 electrons; spherical shape\n• p subshell: 3 orbitals → holds 6 electrons; dumbbell-shaped along x, y, z axes\n• d subshell: 5 orbitals → holds 10 electrons\n\nNodes: Points in an orbital where there is ZERO probability of finding an electron.\n• 1st shell: 0 nodes\n• 2nd shell: 1 node\n• 3rd shell: 2 nodes\n(Each shell has one more node than the previous)\n\nOrbital filling order: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p...\n(Note: 4s fills BEFORE 3d)',
      bullets: [
        'Each orbital holds a maximum of 2 electrons with opposite spins (Pauli Exclusion)',
        'Hund\'s rule: fill orbitals of equal energy singly before doubling up (like bus seats)',
        's: 2 electrons max; p: 6 electrons max; d: 10 electrons max',
        'The 1s² electron configuration means 2 electrons in the 1s orbital',
      ],
    },
    {
      heading: 'Electron Configurations',
      content: 'An electron configuration describes exactly where all the electrons in an atom are located.\n\nFull notation example — Sodium (Na, Z=11):\n1s² 2s² 2p⁶ 3s¹\n(Read: 1s subshell with 2 electrons, 2s with 2, 2p with 6, 3s with 1)\nTotal: 2+2+6+1 = 11 electrons ✓\n\nNoble gas shorthand: Abbreviated by replacing inner electrons with the nearest noble gas in brackets.\nSodium: [Ne] 3s¹   (Neon has the configuration 1s²2s²2p⁶)\n\nRules:\n1. Fill lowest energy orbitals first (Aufbau principle)\n2. Maximum 2 electrons per orbital (Pauli Exclusion Principle)\n3. Fill equal-energy orbitals singly before pairing (Hund\'s rule)\n\nExamples:\n• Hydrogen (Z=1): 1s¹\n• Helium (Z=2): 1s²\n• Carbon (Z=6): 1s² 2s² 2p²\n• Oxygen (Z=8): 1s² 2s² 2p⁴\n• Chlorine (Z=17): 1s² 2s² 2p⁶ 3s² 3p⁵ or [Ne] 3s² 3p⁵',
    },
    {
      heading: 'Valence Electrons, Bohr Diagrams, and Lewis Dot Structures',
      content: 'Valence electrons: electrons in the OUTERMOST shell. These electrons determine chemical behavior.\n• Elements in Group 1 have 1 valence electron\n• Elements in Group 2 have 2 valence electrons\n• Elements in Groups 13-18 have 3-8 valence electrons\n\nBohr Diagram: shows the nucleus with protons/neutrons labeled, and electrons arranged in concentric rings (shells).\n• Shell 1: holds up to 2 electrons\n• Shell 2: holds up to 8 electrons\n• Shell 3: holds up to 8 electrons (for first 18 elements)\nUseful for: showing which shell electrons are in, comparing potential energy and shielding.\n\nLewis Dot Structure: shows only the VALENCE ELECTRONS as dots around the element symbol.\n• Dots are placed on the four sides (top, bottom, left, right) of the symbol\n• First place one dot on each side before pairing up\nUseful for: predicting bonding, because only valence electrons are shown (no distracting inner electrons).',
      bullets: [
        'Bohr diagram: better for comparing potential energy levels and shielding',
        'Lewis dot: better for predicting chemical bonding (only shows valence electrons)',
        'The number of valence electrons = the group number (for main group elements)',
        'Carbon (Group 14) has 4 valence electrons — shown as 4 dots around C',
      ],
    },
    {
      heading: 'Ions: Cations and Anions',
      content: 'Ions form when atoms GAIN or LOSE electrons.\n\nCation (positive ion): atom LOSES electrons → fewer electrons than protons → net + charge\n• Metals typically form cations\n• Example: Na (11 e⁻) → Na⁺ (10 e⁻), losing 1 electron\n• Example: Mg (12 e⁻) → Mg²⁺ (10 e⁻), losing 2 electrons\n\nAnion (negative ion): atom GAINS electrons → more electrons than protons → net − charge\n• Nonmetals typically form anions\n• Example: Cl (17 e⁻) → Cl⁻ (18 e⁻), gaining 1 electron\n• Example: O (8 e⁻) → O²⁻ (10 e⁻), gaining 2 electrons\n\nPredicting ion charge: elements gain/lose electrons to achieve a noble gas electron configuration (full outer shell — the octet rule).\n\nNaming ions:\n• Monatomic cations: element name + ion charge (if variable), e.g., Na⁺ = sodium ion; Fe²⁺ = iron(II) ion\n• Monatomic anions: element name with -ide suffix, e.g., Cl⁻ = chloride; O²⁻ = oxide\n\nElectron configurations and diagrams of ions:\n• Draw the same as neutral atoms, but add/remove electrons from the outermost shell',
      bullets: [
        'Cation = lost electrons → positive charge (CAT-ion → pawsitive)',
        'Anion = gained electrons → negative charge',
        'Ions still have the same number of protons as the neutral atom — only electrons change',
        'Noble gases have 8 valence electrons (full outer shell) — most stable configuration',
      ],
    },
  ],
  flashcards: [
    {
      id: 'unit-05-electrons-fc-01',
      front: 'What is the Pauli Exclusion Principle?',
      back: 'Each orbital can hold a maximum of 2 electrons, and those two electrons must have opposite spins. No two electrons in an atom can have the exact same set of quantum numbers.',
    },
    {
      id: 'unit-05-electrons-fc-02',
      front: 'What is Hund\'s Rule?',
      back: 'When filling orbitals of equal energy (e.g., the three 2p orbitals), electrons fill each orbital singly before any orbital gets a second electron — like filling bus seats one at a time before doubling up.',
    },
    {
      id: 'unit-05-electrons-fc-03',
      front: 'How many electrons can the s, p, and d subshells each hold?',
      back: '• s subshell: 1 orbital → max 2 electrons\n• p subshell: 3 orbitals → max 6 electrons\n• d subshell: 5 orbitals → max 10 electrons\n(2 electrons per orbital)',
    },
    {
      id: 'unit-05-electrons-fc-04',
      front: 'Write the full electron configuration of Chlorine (Cl, Z=17).',
      back: '1s² 2s² 2p⁶ 3s² 3p⁵\nTotal: 2+2+6+2+5 = 17 electrons ✓\nNoble gas shorthand: [Ne] 3s² 3p⁵',
    },
    {
      id: 'unit-05-electrons-fc-05',
      front: 'What are valence electrons?',
      back: 'Valence electrons are the electrons in the OUTERMOST energy shell. They determine chemical behavior and bonding. For main group elements, valence electrons = the group number (e.g., oxygen is Group 16, so it has 6 valence electrons).',
    },
    {
      id: 'unit-05-electrons-fc-06',
      front: 'What does a Bohr diagram show, and when is it most useful?',
      back: 'A Bohr diagram shows the nucleus (with proton/neutron count) and electrons arranged in concentric rings (shells). It\'s most useful for comparing potential energy levels and visualizing shielding effects — showing which electrons are in which shell.',
    },
    {
      id: 'unit-05-electrons-fc-07',
      front: 'What does a Lewis dot structure show, and when is it most useful?',
      back: 'A Lewis dot structure shows only the VALENCE ELECTRONS as dots around the element symbol. It\'s most useful for predicting chemical bonding because only the relevant (valence) electrons are shown, without distracting inner electrons.',
    },
    {
      id: 'unit-05-electrons-fc-08',
      front: 'What is a cation? How does it form?',
      back: 'A cation is a positively charged ion. It forms when an atom LOSES electrons (fewer electrons than protons). Metals typically form cations. Example: Na → Na⁺ by losing 1 electron.',
    },
    {
      id: 'unit-05-electrons-fc-09',
      front: 'What is an anion? How does it form?',
      back: 'An anion is a negatively charged ion. It forms when an atom GAINS electrons (more electrons than protons). Nonmetals typically form anions. Example: Cl → Cl⁻ by gaining 1 electron.',
    },
    {
      id: 'unit-05-electrons-fc-10',
      front: 'Magnesium (Mg, Z=12) forms Mg²⁺. How many electrons does Mg²⁺ have?',
      back: 'Mg has 12 electrons. Mg²⁺ loses 2 electrons: 12 − 2 = 10 electrons.\nMg²⁺ has the same electron configuration as neon (Ne): 1s² 2s² 2p⁶.',
    },
    {
      id: 'unit-05-electrons-fc-11',
      front: 'How many nodes does an electron in the 3rd shell have?',
      back: '2 nodes. The number of nodes in a shell = shell number − 1.\n• Shell 1: 0 nodes\n• Shell 2: 1 node\n• Shell 3: 2 nodes',
    },
    {
      id: 'unit-05-electrons-fc-12',
      front: 'Draw the Lewis dot structure for Carbon (C, Z=6).',
      back: 'Carbon has 4 valence electrons (Group 14).\nLewis structure: C with one dot on top, one on the right, one on the bottom, one on the left — 4 single dots total (none paired, by Hund\'s rule for Lewis structures).',
    },
    {
      id: 'unit-05-electrons-fc-13',
      front: 'Oxygen (O, Z=8) typically forms O²⁻. Why?',
      back: 'Oxygen has 6 valence electrons. By gaining 2 electrons, it achieves 8 valence electrons — a full outer shell (noble gas configuration, like neon). This is the stable octet that drives ion formation.',
    },
    {
      id: 'unit-05-electrons-fc-14',
      front: 'What is the difference between a shell and a subshell?',
      back: 'A shell is a main energy level (n = 1, 2, 3...). Each shell contains one or more subshells (s, p, d, f). Shell 1 has only 1s. Shell 2 has 2s and 2p. Shell 3 has 3s, 3p, and 3d.',
    },
  ],
  quiz: [
    {
      id: 'unit-05-electrons-q-01',
      question: 'Which rule states that electrons fill orbitals of equal energy one at a time before doubling up?',
      options: [
        'Pauli Exclusion Principle',
        'Aufbau Principle',
        'Hund\'s Rule',
        'Octet Rule',
      ],
      correctIndex: 2,
      explanation: 'Hund\'s Rule states that electrons occupy equal-energy orbitals singly before any orbital receives a second electron. Think of it like the bus seat rule — one per seat first.',
    },
    {
      id: 'unit-05-electrons-q-02',
      question: 'What is the electron configuration of Oxygen (O, Z=8)?',
      options: [
        '1s² 2s² 2p⁴',
        '1s² 2s² 2p⁶',
        '1s² 2s⁶',
        '1s² 2s² 2p² 3s²',
      ],
      correctIndex: 0,
      explanation: 'Oxygen has 8 electrons: fill 1s² (2 electrons), then 2s² (2 more = 4 total), then 2p⁴ (4 more = 8 total). Configuration: 1s² 2s² 2p⁴.',
    },
    {
      id: 'unit-05-electrons-q-03',
      question: 'Fluorine (F, Z=9) gains 1 electron to form F⁻. How many electrons does F⁻ have?',
      options: [
        '8',
        '9',
        '10',
        '18',
      ],
      correctIndex: 2,
      explanation: 'F has 9 electrons. After gaining 1 electron: 9 + 1 = 10 electrons. F⁻ has the same electron configuration as Ne: 1s² 2s² 2p⁶ (10 electrons total).',
    },
    {
      id: 'unit-05-electrons-q-04',
      question: 'Which electron diagram type is BEST for predicting chemical bonding?',
      options: [
        'Bohr diagram, because it shows all energy shells',
        'Lewis dot structure, because it shows only valence electrons',
        'Electron configuration, because it shows all electrons',
        'Orbital diagram, because it shows electron spins',
      ],
      correctIndex: 1,
      explanation: 'Lewis dot structures are best for predicting bonding because they show only the valence electrons that participate in bonding, without the distraction of inner electron shells.',
    },
    {
      id: 'unit-05-electrons-q-05',
      question: 'Sodium (Na, Z=11) forms Na⁺. What is the charge, and why does Na form this ion?',
      options: [
        '+1; Na loses 1 electron to achieve a noble gas configuration',
        '+1; Na gains 1 electron to fill its outer shell',
        '−1; Na gains 1 electron',
        '+2; Na loses 2 electrons from its outer shell',
      ],
      correctIndex: 0,
      explanation: 'Na has configuration [Ne] 3s¹ — one electron in its outer shell. Losing that 1 electron gives Na⁺ with the neon configuration (full outer shell). This is energetically favorable.',
    },
    {
      id: 'unit-05-electrons-q-06',
      question: 'How many valence electrons does Sulfur (S, Group 16) have?',
      options: [
        '2',
        '4',
        '6',
        '8',
      ],
      correctIndex: 2,
      explanation: 'Sulfur is in Group 16, so it has 6 valence electrons. Electron configuration: [Ne] 3s² 3p⁴. The valence electrons are the 3s² and 3p⁴ = 6 electrons in the outermost (3rd) shell.',
    },
    {
      id: 'unit-05-electrons-q-07',
      question: 'How many nodes does an electron in the 2nd energy shell have?',
      options: [
        '0',
        '1',
        '2',
        '3',
      ],
      correctIndex: 1,
      explanation: 'Number of nodes = shell number − 1. For shell 2: 2 − 1 = 1 node. Shell 1 has 0 nodes, shell 3 has 2 nodes, etc.',
    },
    {
      id: 'unit-05-electrons-q-08',
      question: 'What is the maximum number of electrons in the p subshell?',
      options: [
        '2',
        '3',
        '6',
        '10',
      ],
      correctIndex: 2,
      explanation: 'The p subshell has 3 orbitals. Each orbital holds 2 electrons maximum (Pauli Exclusion). So 3 orbitals × 2 electrons = 6 electrons maximum in the p subshell.',
    },
    {
      id: 'unit-05-electrons-q-09',
      question: 'Which of the following is an ANION?',
      options: [
        'Na⁺',
        'Mg²⁺',
        'Fe³⁺',
        'Cl⁻',
      ],
      correctIndex: 3,
      explanation: 'Cl⁻ is an anion — it has a negative charge, meaning it GAINED an electron. The others (Na⁺, Mg²⁺, Fe³⁺) are all cations — they lost electrons and have positive charges.',
    },
    {
      id: 'unit-05-electrons-q-10',
      question: 'What is the noble gas shorthand for Potassium (K, Z=19)?',
      options: [
        '[He] 4s¹',
        '[Ne] 3s¹',
        '[Ar] 4s¹',
        '[Kr] 4s¹',
      ],
      correctIndex: 2,
      explanation: 'Potassium (Z=19) has full configuration: 1s²2s²2p⁶3s²3p⁶4s¹. The noble gas Argon (Ar, Z=18) has configuration 1s²2s²2p⁶3s²3p⁶. So K = [Ar] 4s¹.',
    },
  ],
};
