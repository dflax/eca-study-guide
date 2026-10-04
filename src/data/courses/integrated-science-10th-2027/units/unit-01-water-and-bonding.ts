import type { Unit } from '@/types/study';

export const unit01WaterAndBonding: Unit = {
  id: 'unit-01-water-and-bonding',
  number: 1,
  title: 'Water & Chemical Bonds',
  description: 'Polarity of water, hydrogen bonds, dissolving ionic compounds, and the difference between covalent and ionic bonds.',
  notes: [
    {
      heading: 'Water Is Polar',
      content: 'In a water molecule (H₂O), oxygen pulls shared electrons closer to itself than hydrogen does. This gives oxygen a partial negative charge (δ−) and each hydrogen a partial positive charge (δ+). A molecule with uneven charge distribution like this is polar.',
      bullets: [
        'Oxygen = partial negative (δ−); hydrogens = partial positive (δ+)',
        'Polarity is what makes water such a good solvent for ions and other polar molecules',
        'Polar and charged substances are hydrophilic ("water-loving"); non-polar substances are hydrophobic ("water-fearing")',
      ],
    },
    {
      heading: 'Hydrogen Bonds',
      content: 'A hydrogen bond is a weak attraction between a partially positive hydrogen (one that is covalently bonded to O or N) and a partially negative atom (such as oxygen) on a neighboring molecule. Hydrogen bonds are NOT covalent bonds — no electrons are shared.',
      bullets: [
        'Each oxygen atom can make 2 hydrogen bonds (using its two lone pairs)',
        'Each hydrogen atom can make 1 hydrogen bond',
        'The hydrogen must be attached to a very electronegative atom (O or N). Hydrogens bonded to carbon do not form hydrogen bonds',
        'When drawing hydrogen bonds between alcohol or water molecules, the dotted line goes from the δ+ H (on an O–H) to the O of another molecule',
      ],
    },
    {
      heading: 'Water as a Solvent',
      content: 'When an ionic solid like table salt (NaCl) dissolves, water molecules surround each ion. The oxygen end of water (δ−) is attracted to the positive sodium cation (Na⁺), and the hydrogen ends (δ+) are attracted to the negative chloride anion (Cl⁻). This pulls the crystal apart.',
      bullets: [
        'Na⁺ attaches to the OXYGEN of water because oxygen has a partial negative charge',
        'Cl⁻ attaches to the HYDROGENS of water because hydrogens have a partial positive charge',
      ],
    },
    {
      heading: 'Covalent vs. Ionic Bonds',
      content: 'Covalent bonds form when atoms share electrons. Ionic bonds form when electrons are transferred from one atom to another, creating oppositely charged ions that attract each other.',
      bullets: [
        'CO₂ — covalent: carbon and oxygen atoms share electrons',
        'NaCl — ionic: an electron moves from sodium to chlorine, making Na⁺ and Cl⁻ ions',
        'In its most stable configuration, oxygen forms 2 bonds and nitrogen forms 3 bonds',
        'Carbon forms 4 bonds; hydrogen forms 1',
      ],
    },
  ],
  flashcards: [
    {
      id: 'unit-01-water-and-bonding-fc-01',
      front: 'Why is water a polar molecule?',
      back: 'Oxygen pulls shared electrons harder than hydrogen, so oxygen is partially negative (δ−) and the hydrogens are partially positive (δ+). The charge is unevenly distributed.',
    },
    {
      id: 'unit-01-water-and-bonding-fc-02',
      front: 'When salt dissolves in water, which atom of water attaches to the Na⁺ cation? Why?',
      back: 'The oxygen atom, because oxygen has a partial negative charge that is attracted to the positive sodium ion.',
    },
    {
      id: 'unit-01-water-and-bonding-fc-03',
      front: 'When salt dissolves in water, which part of water attaches to the Cl⁻ anion?',
      back: 'The hydrogen atoms, which carry a partial positive charge.',
    },
    {
      id: 'unit-01-water-and-bonding-fc-04',
      front: 'How many hydrogen bonds can each oxygen atom make?',
      back: '2',
    },
    {
      id: 'unit-01-water-and-bonding-fc-05',
      front: 'How many hydrogen bonds can each hydrogen atom make?',
      back: '1',
    },
    {
      id: 'unit-01-water-and-bonding-fc-06',
      front: 'What is a hydrogen bond?',
      back: 'A weak attraction between a partially positive hydrogen (attached to O or N) and a partially negative atom (like oxygen) on another molecule. It is not a covalent bond — no electrons are shared.',
    },
    {
      id: 'unit-01-water-and-bonding-fc-07',
      front: 'Can a hydrogen attached to carbon (C–H) form a hydrogen bond?',
      back: 'No. The hydrogen must be bonded to a highly electronegative atom such as oxygen (or nitrogen) to be partially positive enough to form a hydrogen bond.',
    },
    {
      id: 'unit-01-water-and-bonding-fc-08',
      front: 'How many bonds does oxygen form in its most stable configuration?',
      back: '2 bonds',
    },
    {
      id: 'unit-01-water-and-bonding-fc-09',
      front: 'How many bonds does nitrogen form in its most stable configuration?',
      back: '3 bonds',
    },
    {
      id: 'unit-01-water-and-bonding-fc-10',
      front: 'Explain the difference between the bonds in CO₂ and the bonds in NaCl.',
      back: 'CO₂ has covalent bonds, where atoms share electrons. NaCl has ionic bonds, where electrons have moved from one atom to another, creating ions that attract each other.',
    },
    {
      id: 'unit-01-water-and-bonding-fc-11',
      front: 'Hydrophilic vs. hydrophobic',
      back: 'Hydrophilic ("water-loving") substances are polar or charged and dissolve in water. Hydrophobic ("water-fearing") substances are non-polar and do not dissolve in water.',
    },
    {
      id: 'unit-01-water-and-bonding-fc-12',
      front: 'How many bonds does carbon form?',
      back: '4 bonds. This is why carbon can build the long, branched, diverse skeletons of organic molecules.',
    },
  ],
  quiz: [
    {
      id: 'unit-01-water-and-bonding-q-01',
      question: 'When table salt dissolves in water, which atom of a water molecule is attracted to the sodium cation (Na⁺)?',
      options: ['Hydrogen, because it is partially positive', 'Oxygen, because it is partially negative', 'Hydrogen, because it is partially negative', 'Oxygen, because it is partially positive'],
      correctIndex: 1,
      explanation: 'Opposites attract. Oxygen has a partial negative charge (δ−), so it is attracted to the positive Na⁺ ion.',
    },
    {
      id: 'unit-01-water-and-bonding-q-02',
      question: 'How many hydrogen bonds can each oxygen atom make?',
      options: ['1', '2', '3', '4'],
      correctIndex: 1,
      explanation: 'Oxygen has two lone pairs, so it can make 2 hydrogen bonds.',
    },
    {
      id: 'unit-01-water-and-bonding-q-03',
      question: 'How many hydrogen bonds can each hydrogen atom make?',
      options: ['0', '1', '2', '3'],
      correctIndex: 1,
      explanation: 'Each hydrogen atom can make 1 hydrogen bond.',
    },
    {
      id: 'unit-01-water-and-bonding-q-04',
      question: 'How many bonds does nitrogen form in its most stable configuration?',
      options: ['1', '2', '3', '4'],
      correctIndex: 2,
      explanation: 'Nitrogen forms 3 bonds (oxygen forms 2, carbon forms 4, hydrogen forms 1).',
    },
    {
      id: 'unit-01-water-and-bonding-q-05',
      question: 'Which statement correctly describes the bonds in CO₂ and NaCl?',
      options: [
        'Both are ionic',
        'Both are covalent',
        'CO₂ is covalent (shared electrons); NaCl is ionic (transferred electrons)',
        'CO₂ is ionic (transferred electrons); NaCl is covalent (shared electrons)',
      ],
      correctIndex: 2,
      explanation: 'CO₂ is made of nonmetals that share electrons (covalent). NaCl forms when an electron moves from sodium to chlorine, making ions (ionic).',
    },
    {
      id: 'unit-01-water-and-bonding-q-06',
      question: 'Which of the following is true of a hydrogen bond?',
      options: [
        'It is a strong covalent bond where electrons are shared',
        'It is a weak attraction between a partially positive H and a partially negative atom on another molecule',
        'It forms between two negatively charged atoms',
        'It forms only between ions',
      ],
      correctIndex: 1,
      explanation: 'Hydrogen bonds are weak attractions between δ+ hydrogen and a δ− atom (like O). They are not covalent.',
    },
    {
      id: 'unit-01-water-and-bonding-q-07',
      question: 'Which hydrogen can form a hydrogen bond in a methanol molecule (CH₃–O–H)?',
      options: ['Any of the three hydrogens on carbon', 'The hydrogen attached to oxygen', 'None of them', 'All four hydrogens'],
      correctIndex: 1,
      explanation: 'Only the hydrogen bonded to oxygen (the O–H) is partially positive enough to form hydrogen bonds. Hydrogens on carbon do not.',
    },
    {
      id: 'unit-01-water-and-bonding-q-08',
      question: 'Why is water considered a good solvent for ionic compounds?',
      options: [
        'Water is non-polar',
        'Water has no charge at all',
        'Its partially charged ends surround and attract ions',
        'Water forms covalent bonds with every ion',
      ],
      correctIndex: 2,
      explanation: 'Water\'s δ− oxygen and δ+ hydrogens surround ions and pull them apart.',
    },
  ],
};
