import type { Unit } from '@/types/study';

export const unit06PeriodicTrends: Unit = {
  id: 'unit-06-periodic-trends',
  number: 6,
  title: 'Periodic Trends',
  description: 'Shielding, effective nuclear charge, atomic radius, ionization energy, electronegativity, and how these trends vary across the periodic table.',
  notes: [
    {
      heading: 'Shielding and Effective Nuclear Charge',
      content: 'Shielding (also called the "shielding effect"): Inner-shell electrons block (shield) the outer electrons from feeling the full attractive force of the nucleus.\n\nEffective Nuclear Charge (Zeff): The NET positive charge that valence electrons actually experience. It accounts for shielding.\nZeff = Actual nuclear charge (Z) − Shielding from inner electrons\n\nExample:\n• Sodium (Na): Z = 11 protons, but has 10 inner electrons (1s²2s²2p⁶) shielding the one 3s valence electron.\n  Approximate Zeff on the valence electron ≈ 11 − 10 = +1\n• Chlorine (Cl): Z = 17 protons, with 10 inner shielding electrons.\n  Approximate Zeff ≈ 17 − 10 = +7\n\nConclusion: As you move ACROSS a period (left to right), Zeff INCREASES because protons are added but inner shielding electrons stay the same — the valence electrons feel a stronger pull.',
      bullets: [
        'Across a period (→): Zeff INCREASES — more protons, same shielding',
        'Down a group (↓): Zeff stays roughly similar but valence electrons are farther away',
        'Greater Zeff = stronger nuclear attraction on valence electrons',
        'Shielding is provided ONLY by inner electrons (core electrons), not by other valence electrons',
      ],
    },
    {
      heading: 'Atomic Radius',
      content: 'Atomic radius: the size of an atom, measured approximately as half the distance between two bonded nuclei.\n\nTrend across a PERIOD (left → right): Atomic radius DECREASES\nWhy: Increasing Zeff pulls electrons closer to the nucleus. More protons, same number of shells, so the atom contracts.\n\nTrend down a GROUP (top → bottom): Atomic radius INCREASES\nWhy: Each new period adds a new electron shell that is farther from the nucleus. More shielding and more distance result in a larger atom.\n\nMemory aid:\n• Largest atoms: bottom-left corner of periodic table (Cs, Ba)\n• Smallest atoms: top-right corner (except noble gases) — like F and Ne',
      bullets: [
        'Across period (→): radius DECREASES (more Zeff, pulled tighter)',
        'Down group (↓): radius INCREASES (new shells added, farther from nucleus)',
        'Largest atoms are at the bottom-left of the periodic table',
        'Smallest atoms are at the top-right of the periodic table',
      ],
    },
    {
      heading: 'Ionization Energy',
      content: 'Ionization energy (IE): the energy required to REMOVE one valence electron from a neutral gas-phase atom. Higher IE = harder to remove an electron = electron is more tightly held.\n\nTrend across a PERIOD (left → right): Ionization energy INCREASES\nWhy: Greater Zeff means valence electrons are held more tightly — it takes more energy to remove them.\n\nTrend down a GROUP (top → bottom): Ionization energy DECREASES\nWhy: Valence electrons are farther from the nucleus and more shielded. Less energy needed to remove them.\n\nMemory aid: IE trends are the OPPOSITE of atomic radius trends.\n• Large atom (bottom-left) = low IE (easy to remove electrons)\n• Small atom (top-right) = high IE (hard to remove electrons)',
      bullets: [
        'Across period (→): IE INCREASES (valence electrons more tightly held)',
        'Down group (↓): IE DECREASES (valence electrons farther, more shielded)',
        'Ionization energy and atomic radius have OPPOSITE trends',
        'Highest IE in a period: noble gases (full outer shell, very stable)',
      ],
    },
    {
      heading: 'Electronegativity',
      content: 'Electronegativity (EN): the tendency of an atom to attract electrons TOWARD itself in a chemical bond. Higher EN = greater ability to attract bonding electrons.\n\nTrend across a PERIOD (left → right): EN INCREASES\nWhy: Greater Zeff means the nucleus pulls shared electrons more strongly.\n\nTrend down a GROUP (top → bottom): EN DECREASES\nWhy: Valence electrons are farther from the nucleus and more shielded — less attraction for bonding electrons.\n\nNote: Fluorine (F) has the HIGHEST electronegativity of all elements. Francium (Fr) has the LOWEST.\n\nYou will NOT be given the electronegativity chart or asked to calculate EN differences. You need to know the general trends to make comparisons between elements.',
      bullets: [
        'Across period (→): EN INCREASES (highest: F at top-right)',
        'Down group (↓): EN DECREASES (lowest: Fr at bottom-left)',
        'EN and atomic radius have OPPOSITE trends (small atom, high EN)',
        'Fluorine is the most electronegative element',
      ],
    },
    {
      heading: 'Potential Energy of Valence Electrons',
      content: 'The potential energy of valence electrons relates to their distance from the nucleus and the strength of the nuclear attraction (Zeff).\n\nHigher potential energy = electrons farther from nucleus OR weaker nuclear attraction\nLower potential energy = electrons closer to nucleus OR stronger nuclear attraction\n\nTrend across a period: Zeff increases → valence electrons drawn closer → LOWER potential energy\nTrend down a group: Electrons are in higher shells, farther from nucleus → HIGHER potential energy\n\nThis connects to ionization energy: higher potential energy electrons are easier to remove (lower IE), while lower potential energy electrons require more energy to remove (higher IE).',
      bullets: [
        'Across period (→): valence electron potential energy DECREASES (held tighter)',
        'Down group (↓): valence electron potential energy INCREASES (farther from nucleus)',
        'Lower PE electrons are more stable and harder to remove',
        'Higher PE electrons are less stable and easier to ionize',
      ],
    },
  ],
  flashcards: [
    {
      id: 'unit-06-periodic-trends-fc-01',
      front: 'What is shielding and which electrons provide it?',
      back: 'Shielding is when inner-shell (core) electrons block valence electrons from feeling the full nuclear charge. ONLY inner electrons (not other valence electrons in the same shell) provide effective shielding.',
    },
    {
      id: 'unit-06-periodic-trends-fc-02',
      front: 'What is effective nuclear charge (Zeff)?',
      back: 'Zeff is the net positive charge experienced by valence electrons after accounting for shielding from inner electrons.\nZeff ≈ Z (protons) − number of inner/shielding electrons\nHigher Zeff = stronger attraction on valence electrons.',
    },
    {
      id: 'unit-06-periodic-trends-fc-03',
      front: 'What happens to effective nuclear charge as you move LEFT to RIGHT across a period?',
      back: 'Zeff INCREASES. As you add protons (increasing Z) across a period, the number of inner shielding electrons stays the same — so each additional proton is felt more strongly by the valence electrons.',
    },
    {
      id: 'unit-06-periodic-trends-fc-04',
      front: 'What happens to ATOMIC RADIUS across a period and down a group?',
      back: 'Across period (→): atomic radius DECREASES (more Zeff, atoms contract)\nDown group (↓): atomic radius INCREASES (new electron shells added, atoms grow)\nLargest atoms: bottom-left. Smallest: top-right.',
    },
    {
      id: 'unit-06-periodic-trends-fc-05',
      front: 'What happens to IONIZATION ENERGY across a period and down a group?',
      back: 'Across period (→): IE INCREASES (more Zeff, harder to remove valence electrons)\nDown group (↓): IE DECREASES (valence electrons farther away, easier to remove)\nIE and atomic radius have OPPOSITE trends.',
    },
    {
      id: 'unit-06-periodic-trends-fc-06',
      front: 'What is electronegativity and which element has the highest?',
      back: 'Electronegativity is the tendency to attract bonding electrons toward an atom in a chemical bond. Fluorine (F) has the HIGHEST electronegativity. Francium (Fr) has the lowest.',
    },
    {
      id: 'unit-06-periodic-trends-fc-07',
      front: 'Compare: Na (Z=11) vs. Mg (Z=12) — which has higher ionization energy and why?',
      back: 'Mg has higher IE. Both Na and Mg are in Period 3, but Mg has one more proton (higher Zeff), so its valence electrons are held more tightly. More energy is needed to remove them.',
    },
    {
      id: 'unit-06-periodic-trends-fc-08',
      front: 'Compare: Li vs. Cs (both in Group 1) — which has larger atomic radius and why?',
      back: 'Cs (cesium) has the larger atomic radius. Going DOWN Group 1, each element adds a new electron shell, placing valence electrons farther from the nucleus. More distance + more shielding = larger atom.',
    },
    {
      id: 'unit-06-periodic-trends-fc-09',
      front: 'Why does atomic radius DECREASE across a period?',
      back: 'As you add protons moving across a period, Zeff increases while the number of electron shells stays the same. The stronger nuclear attraction pulls the electron cloud inward, shrinking the atom.',
    },
    {
      id: 'unit-06-periodic-trends-fc-10',
      front: 'What happens to the potential energy of valence electrons going DOWN a group?',
      back: 'Potential energy INCREASES going down a group. Valence electrons are in higher-numbered shells, farther from the nucleus — they are less tightly held and have higher potential energy (easier to remove).',
    },
    {
      id: 'unit-06-periodic-trends-fc-11',
      front: 'Rank in order of increasing ionization energy: Na, Mg, Al',
      back: 'Na < Mg < Al (lowest to highest IE)\nAll are in Period 3. Moving left to right: Zeff increases, so each successive element holds its valence electrons more tightly, requiring more energy to ionize.',
    },
    {
      id: 'unit-06-periodic-trends-fc-12',
      front: 'Which two periodic trends have the same direction as each other?',
      back: 'Ionization energy and electronegativity have the same trend:\n• Both INCREASE across a period (→)\n• Both DECREASE down a group (↓)\nThey both track with effective nuclear charge (Zeff).',
    },
  ],
  quiz: [
    {
      id: 'unit-06-periodic-trends-q-01',
      question: 'As you move LEFT to RIGHT across Period 3, what happens to effective nuclear charge (Zeff)?',
      options: [
        'Zeff decreases because more shielding electrons are added',
        'Zeff increases because more protons are added with the same number of inner shells',
        'Zeff stays the same across a period',
        'Zeff increases because electrons are added to larger shells',
      ],
      correctIndex: 1,
      explanation: 'Across a period, protons are added to the nucleus (Z increases) while the inner shielding electrons remain the same (same core electron count). The net effect is that Zeff increases — valence electrons feel a stronger pull.',
    },
    {
      id: 'unit-06-periodic-trends-q-02',
      question: 'Which element has the LARGEST atomic radius?',
      options: [
        'F (fluorine, Period 2, Group 17)',
        'Na (sodium, Period 3, Group 1)',
        'Cs (cesium, Period 6, Group 1)',
        'N (nitrogen, Period 2, Group 15)',
      ],
      correctIndex: 2,
      explanation: 'Cs is at the bottom-left of the periodic table — it has the most electron shells (6) and relatively low Zeff on valence electrons. Atoms get LARGER going down a group and going left in a period.',
    },
    {
      id: 'unit-06-periodic-trends-q-03',
      question: 'Which element has the HIGHEST ionization energy among Period 2 elements?',
      options: [
        'Li (lithium)',
        'C (carbon)',
        'Ne (neon)',
        'Na (sodium)',
      ],
      correctIndex: 2,
      explanation: 'Ne (neon) has the highest IE in Period 2. Moving right across the period, Zeff increases, making electrons harder to remove. Noble gases like Ne have a full outer shell and extremely high ionization energy.',
    },
    {
      id: 'unit-06-periodic-trends-q-04',
      question: 'Which has a LARGER atomic radius: Lithium (Li) or Sodium (Na)?',
      options: [
        'Li, because it has fewer electrons',
        'Na, because it has more protons',
        'Na, because it has an additional electron shell',
        'They are the same size',
      ],
      correctIndex: 2,
      explanation: 'Na is larger. Both Li and Na are in Group 1, but Na is in Period 3 (with 3 shells) while Li is in Period 2 (with 2 shells). Going DOWN a group adds electron shells, increasing atomic radius.',
    },
    {
      id: 'unit-06-periodic-trends-q-05',
      question: 'Which element has the HIGHEST electronegativity?',
      options: [
        'Oxygen (O)',
        'Chlorine (Cl)',
        'Fluorine (F)',
        'Nitrogen (N)',
      ],
      correctIndex: 2,
      explanation: 'Fluorine (F) has the highest electronegativity of all elements. It is the smallest highly reactive nonmetal (top-right of the table, excluding noble gases) with the strongest Zeff on its valence electrons relative to its size.',
    },
    {
      id: 'unit-06-periodic-trends-q-06',
      question: 'Compared to Na, Cl has a higher ionization energy. The BEST explanation is:',
      options: [
        'Cl is a nonmetal and Na is a metal',
        'Cl has more neutrons than Na',
        'Cl has a higher Zeff — more protons pull valence electrons more tightly',
        'Cl has fewer valence electrons so each is held more tightly',
      ],
      correctIndex: 2,
      explanation: 'Both Na and Cl are in Period 3, but Cl has 17 protons vs. Na\'s 11 — higher Zeff. This stronger nuclear attraction makes it harder to remove Cl\'s valence electrons, so Cl has higher IE.',
    },
    {
      id: 'unit-06-periodic-trends-q-07',
      question: 'Going DOWN Group 17 (halogens: F → Cl → Br → I), what happens to atomic radius and ionization energy?',
      options: [
        'Both increase',
        'Atomic radius increases; ionization energy decreases',
        'Both decrease',
        'Atomic radius decreases; ionization energy increases',
      ],
      correctIndex: 1,
      explanation: 'Going down a group: atomic radius INCREASES (more shells added) and ionization energy DECREASES (valence electrons are farther from the nucleus and more shielded, easier to remove).',
    },
    {
      id: 'unit-06-periodic-trends-q-08',
      question: 'What happens to the potential energy of valence electrons as you move across Period 3 from Na to Cl?',
      options: [
        'Potential energy increases because electrons gain energy',
        'Potential energy decreases because Zeff increases, pulling electrons lower in energy',
        'Potential energy stays the same across a period',
        'Potential energy increases because more electrons are added',
      ],
      correctIndex: 1,
      explanation: 'As Zeff increases across a period, valence electrons are pulled closer to the nucleus and held more tightly — their potential energy DECREASES. Lower PE = more stable, harder to remove.',
    },
    {
      id: 'unit-06-periodic-trends-q-09',
      question: 'Sodium (Z=11) has 2 inner electrons in shell 1 and 8 in shell 2. What is the approximate Zeff experienced by Na\'s valence electron?',
      options: [
        '+1',
        '+3',
        '+11',
        '+9',
      ],
      correctIndex: 0,
      explanation: 'Zeff ≈ Z − core electrons = 11 − 10 = +1. Na has 10 inner electrons (1s²2s²2p⁶) shielding its one 3s valence electron from the full +11 nuclear charge. The valence electron experiences approximately +1.',
    },
    {
      id: 'unit-06-periodic-trends-q-10',
      question: 'Rank from SMALLEST to LARGEST atomic radius: F, Cl, Br',
      options: [
        'Br < Cl < F',
        'F < Cl < Br',
        'Cl < F < Br',
        'F < Br < Cl',
      ],
      correctIndex: 1,
      explanation: 'F < Cl < Br (smallest to largest). All are in Group 17. Going DOWN the group (F → Cl → Br), atomic radius INCREASES as each element has one more electron shell than the previous.',
    },
  ],
};
