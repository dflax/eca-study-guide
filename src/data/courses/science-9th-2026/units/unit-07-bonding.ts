import type { Unit } from '@/types/study';

export const unit07Bonding: Unit = {
  id: 'unit-07-bonding',
  number: 7,
  title: 'Bonding and Nomenclature',
  description: 'Ionic, covalent, and metallic bonds; naming compounds; Lewis structures; the octet rule; and properties of different compound types.',
  notes: [
    {
      heading: 'Types of Chemical Bonds',
      content: 'Atoms bond together to achieve greater stability, typically by filling their outermost electron shell (octet rule — 8 valence electrons, except H which wants 2).\n\nIonic Bonds: form between a METAL and a NONMETAL (large difference in electronegativity)\n• The metal TRANSFERS electrons to the nonmetal\n• Metal becomes a cation (+), nonmetal becomes an anion (−)\n• Strong electrostatic attraction between oppositely charged ions\n• Forms crystal lattice structures (not individual molecules)\n• Example: NaCl — Na⁺ and Cl⁻ held together in a lattice\n\nCovalent Bonds: form between NONMETALS (small difference in electronegativity)\n• Atoms SHARE electrons\n• Both atoms benefit from the shared electrons counting toward their octets\n• Form discrete molecules\n• Can be polar (unequal sharing) or nonpolar (equal sharing)\n• Example: H₂O, CO₂, CH₄\n\nMetallic Bonds: form between METALS\n• Metal atoms release electrons into a "sea of electrons"\n• The positive metal ions are surrounded by freely moving electrons\n• Explains why metals conduct electricity and are malleable/ductile',
      bullets: [
        'Ionic: metal + nonmetal → TRANSFER electrons → crystal lattice',
        'Covalent: nonmetal + nonmetal → SHARE electrons → molecules',
        'Metallic: metal + metal → sea of electrons',
        'Electronegativity difference > 1.7: ionic; < 0.4: nonpolar covalent; 0.4–1.7: polar covalent',
      ],
    },
    {
      heading: 'Electrical Conductivity of Compounds',
      content: 'The ability to conduct electricity depends on whether charged particles (ions or electrons) can move freely.\n\nIonic compounds (e.g., NaCl):\n• Solid state: DOES NOT conduct — ions are locked in crystal lattice, cannot move\n• Molten (liquid) state: DOES conduct — ions can move freely when lattice breaks down\n• Aqueous (dissolved in water): DOES conduct — ions separate and move in solution\n\nCovalent compounds (e.g., sugar, water):\n• Solid, liquid, aqueous states: generally DOES NOT conduct — no ions, no free electrons\n• Exception: some covalent acids ionize in water and conduct\n\nMetallic compounds:\n• Solid AND liquid state: DOES conduct — electrons are always free to move\n\nThis property is a key way to identify bond type in a lab setting.',
      bullets: [
        'Ionic solid: no; Ionic molten: yes; Ionic aqueous: yes',
        'Covalent: no in all states (generally)',
        'Metallic: yes in solid and liquid',
        'Testing conductivity can reveal the bond type of an unknown compound',
      ],
    },
    {
      heading: 'Naming Ionic Compounds',
      content: 'Ionic compounds form between metals (or polyatomic cations) and nonmetals (or polyatomic anions).\n\nBinary ionic compounds (metal + nonmetal):\n• Name the metal first (unchanged, or with Roman numeral for variable charge)\n• Then name the nonmetal with "-ide" ending\n• Example: NaCl → sodium chloride; MgO → magnesium oxide\n\nTransition metals with variable charges: use Roman numerals\n• Fe²⁺ = iron(II); Fe³⁺ = iron(III)\n• Example: FeCl₃ → iron(III) chloride; FeCl₂ → iron(II) chloride\n\nPolyatomic ions: know the name (given on reference sheet)\n• Examples: SO₄²⁻ (sulfate), NO₃⁻ (nitrate), OH⁻ (hydroxide), NH₄⁺ (ammonium)\n\nFormula from name:\n• Use ion charges to determine ratio for electrical neutrality (total charge = 0)\n• Example: Calcium fluoride: Ca²⁺ and F⁻ → need 2 fluoride ions → CaF₂\n• Simplify to lowest whole number ratio when needed',
    },
    {
      heading: 'Naming Covalent Compounds',
      content: 'Covalent compounds form between two nonmetals. Use Greek numerical prefixes to indicate the number of each atom.\n\nPrefixes:\n1 = mono- (only on second element, or if ambiguous)\n2 = di-\n3 = tri-\n4 = tetra-\n5 = penta-\n6 = hexa-\n7 = hepta-\n8 = octa-\n\nRules:\n• First element: use prefix only if more than one (usually omit "mono" for first)\n• Second element: always use prefix + "-ide" ending\n• Drop the last vowel of prefix if element name starts with a vowel\n\nExamples:\n• CO = carbon monoxide\n• CO₂ = carbon dioxide\n• N₂O₄ = dinitrogen tetroxide\n• PCl₅ = phosphorus pentachloride\n\nFormula from name:\n• Use the prefixes to determine the subscripts directly\n• Example: dinitrogen trioxide → N₂O₃',
    },
    {
      heading: 'Lewis Structures and the Octet Rule',
      content: 'Lewis structures show how covalent molecules share electrons. Each atom should have 8 electrons around it (octet), except H (2).\n\nDrawing Lewis structures:\n1. Count total valence electrons (add all atoms\' valence electrons; add 1 per negative charge)\n2. Arrange atoms — least electronegative atom is usually central\n3. Place a single bond between each atom pair (uses 2 electrons per bond)\n4. Complete octets on outer atoms with lone pairs\n5. Give remaining electrons to the central atom\n6. If central atom lacks octet, form double or triple bonds by converting lone pairs\n\nExamples:\n• H₂O: O has 6 valence electrons; 2 bonds to H, 2 lone pairs on O → octets satisfied\n• CO₂: C forms 2 double bonds with each O → O=C=O\n• NH₃: N forms 3 bonds to H with 1 lone pair on N\n\nWhen to simplify ionic formulas:\n• Ionic compounds should be written in the lowest whole-number ratio\n• Example: Ca₂O₂ simplifies to CaO\n• But H₂O₂ (hydrogen peroxide) is NOT simplified — it\'s a covalent molecule where the structure matters',
      bullets: [
        'Step 1: Count ALL valence electrons in the molecule',
        'Step 2: Connect atoms with single bonds first',
        'Step 3: Complete octets on outer atoms',
        'Step 4: Use multiple bonds if central atom needs more electrons',
      ],
    },
  ],
  flashcards: [
    {
      id: 'unit-07-bonding-fc-01',
      front: 'What type of bond forms between a metal and a nonmetal?',
      back: 'An IONIC bond. The metal transfers electrons to the nonmetal. The metal becomes a positively charged cation; the nonmetal becomes a negatively charged anion. They are held together by electrostatic attraction in a crystal lattice.',
    },
    {
      id: 'unit-07-bonding-fc-02',
      front: 'What type of bond forms between two nonmetals?',
      back: 'A COVALENT bond. Nonmetal atoms SHARE electrons (rather than transferring them). Both atoms count the shared electrons toward their octets. Covalent bonds form discrete molecules.',
    },
    {
      id: 'unit-07-bonding-fc-03',
      front: 'What is a metallic bond?',
      back: 'Metallic bonds form between metal atoms. The metal atoms release their valence electrons into a "sea" of delocalized electrons. This explains metals\' ability to conduct electricity and heat, and their malleability and ductility.',
    },
    {
      id: 'unit-07-bonding-fc-04',
      front: 'Can ionic compounds conduct electricity? Under what conditions?',
      back: 'Solid: NO — ions locked in place.\nMolten (liquid): YES — ions move freely.\nAqueous (dissolved in water): YES — ions separate and move.\nIonic compounds need mobile ions to conduct electricity.',
    },
    {
      id: 'unit-07-bonding-fc-05',
      front: 'Name the compound FeCl₃.',
      back: 'Iron(III) chloride. Fe is a transition metal with variable charge. Cl is −1, so 3 Cl⁻ ions balance Fe at +3 → iron(III). Use Roman numeral in parentheses for variable-charge metals.',
    },
    {
      id: 'unit-07-bonding-fc-06',
      front: 'Write the formula for calcium fluoride.',
      back: 'CaF₂. Calcium (Ca²⁺) has +2 charge; Fluoride (F⁻) has −1 charge. Need 2 fluoride ions to balance one calcium ion: Ca²⁺ + 2F⁻ → CaF₂ (net charge = 0).',
    },
    {
      id: 'unit-07-bonding-fc-07',
      front: 'What does the prefix "di-" mean in covalent compound naming?',
      back: '"Di-" means 2. It\'s a Greek numerical prefix used in naming covalent (nonmetal-nonmetal) compounds. Example: carbon dioxide = CO₂ (one carbon, two oxygens).',
    },
    {
      id: 'unit-07-bonding-fc-08',
      front: 'Name the compound N₂O₅.',
      back: 'Dinitrogen pentoxide. N₂ → "di" (2) nitrogen. O₅ → "pent" + "oxide" (drop vowel before "oxide") = pentoxide. Full name: dinitrogen pentoxide.',
    },
    {
      id: 'unit-07-bonding-fc-09',
      front: 'What is the octet rule?',
      back: 'The octet rule states that atoms tend to gain, lose, or share electrons to achieve 8 valence electrons — a full outer shell like a noble gas. Exception: Hydrogen wants 2 electrons (like He).',
    },
    {
      id: 'unit-07-bonding-fc-10',
      front: 'How many total valence electrons does H₂O have for drawing its Lewis structure?',
      back: 'H contributes 1 × 2 = 2 electrons. O contributes 6 electrons. Total = 2 + 6 = 8 valence electrons. In the structure: 2 O-H bonds (4 e) + 2 lone pairs on O (4 e) = 8 electrons total.',
    },
    {
      id: 'unit-07-bonding-fc-11',
      front: 'What is a crystal lattice?',
      back: 'A crystal lattice is the three-dimensional, regular, repeating arrangement of ions in an ionic compound. Cations and anions alternate in a pattern held together by electrostatic attraction. It\'s not a discrete "molecule" — it extends throughout the solid.',
    },
    {
      id: 'unit-07-bonding-fc-12',
      front: 'When must you simplify the formula of an ionic compound?',
      back: 'Ionic compound formulas should always be written in the LOWEST whole-number ratio of ions. Example: Ca₂O₂ → CaO. The formula represents the empirical ratio of ions in the crystal lattice.',
    },
    {
      id: 'unit-07-bonding-fc-13',
      front: 'Name: MgSO₄',
      back: 'Magnesium sulfate. Mg is magnesium (fixed +2 charge metal — no Roman numeral needed). SO₄²⁻ is the sulfate polyatomic ion. Mg²⁺ + SO₄²⁻ → MgSO₄.',
    },
    {
      id: 'unit-07-bonding-fc-14',
      front: 'What is the formula for carbon tetrachloride?',
      back: 'CCl₄. Carbon (no prefix = 1 carbon), tetrachloride (tetra = 4, chloride = Cl). So: 1 carbon and 4 chlorine atoms → CCl₄. This is a covalent compound (nonmetal + nonmetal).',
    },
  ],
  quiz: [
    {
      id: 'unit-07-bonding-q-01',
      question: 'Which of the following is the BEST description of an ionic bond?',
      options: [
        'Two nonmetal atoms share electrons equally',
        'A metal TRANSFERS electrons to a nonmetal, creating oppositely charged ions held by electrostatic attraction',
        'Metal atoms share electrons in a delocalized "sea"',
        'Two nonmetal atoms unequally share electrons',
      ],
      correctIndex: 1,
      explanation: 'Ionic bonds form by electron TRANSFER from a metal (→ cation) to a nonmetal (→ anion). The resulting opposite charges attract each other. This is different from sharing (covalent) or the sea of electrons (metallic).',
    },
    {
      id: 'unit-07-bonding-q-02',
      question: 'An ionic compound is dissolved in water. Will the solution conduct electricity?',
      options: [
        'No — ionic compounds never conduct electricity',
        'No — the ions are bonded too strongly to move',
        'Yes — the ions separate in water and can move freely',
        'Yes — water itself is an ionic compound',
      ],
      correctIndex: 2,
      explanation: 'When an ionic compound dissolves in water, the lattice breaks apart and the ions become hydrated and free to move. Mobile ions carry electrical charge — so yes, aqueous ionic solutions conduct electricity.',
    },
    {
      id: 'unit-07-bonding-q-03',
      question: 'What is the name of CuCl₂?',
      options: [
        'Copper chloride',
        'Copper(I) chloride',
        'Copper(II) chloride',
        'Dicopper chloride',
      ],
      correctIndex: 2,
      explanation: 'Cu is a transition metal (variable charge). Each Cl⁻ is −1, and there are 2 Cl⁻ ions, so Cu must be +2. Name: copper(II) chloride. Always include the Roman numeral for variable-charge metals.',
    },
    {
      id: 'unit-07-bonding-q-04',
      question: 'What is the formula for aluminum oxide?',
      options: [
        'AlO',
        'AlO₃',
        'Al₂O₃',
        'Al₃O₂',
      ],
      correctIndex: 2,
      explanation: 'Al³⁺ and O²⁻. To balance charges (net = 0): need 2 Al³⁺ (+6 total) and 3 O²⁻ (−6 total). Formula: Al₂O₃. Use the "criss-cross" method: the charge of each ion becomes the subscript of the other.',
    },
    {
      id: 'unit-07-bonding-q-05',
      question: 'What is the name of the covalent compound P₄O₁₀?',
      options: [
        'Phosphorus oxide',
        'Tetraphosphorus decoxide',
        'Quadphosphorus tenoxide',
        'Phosphorus(IV) oxide',
      ],
      correctIndex: 1,
      explanation: 'P₄ → tetra (4) phosphorus. O₁₀ → dec- (10) + oxide = decoxide (drop the "a" before "oxide"). Full name: tetraphosphorus decoxide.',
    },
    {
      id: 'unit-07-bonding-q-06',
      question: 'How many total valence electrons does CO₂ have for drawing its Lewis structure? (C = Group 14, O = Group 16)',
      options: [
        '12',
        '14',
        '16',
        '18',
      ],
      correctIndex: 2,
      explanation: 'CO₂: C has 4 valence electrons, each O has 6. Total = 4 + 6 + 6 = 16 valence electrons. The structure is O=C=O with 2 double bonds and 2 lone pairs on each O (using all 16 electrons).',
    },
    {
      id: 'unit-07-bonding-q-07',
      question: 'Which type of compound typically conducts electricity in SOLID form?',
      options: [
        'Ionic compounds',
        'Covalent compounds',
        'Metallic compounds',
        'All compounds conduct in solid form',
      ],
      correctIndex: 2,
      explanation: 'Metallic compounds conduct in both solid AND liquid form because the "sea of electrons" is always free to move regardless of physical state. Ionic compounds only conduct when molten or dissolved. Covalent compounds generally don\'t conduct.',
    },
    {
      id: 'unit-07-bonding-q-08',
      question: 'What is the formula for the covalent compound "dinitrogen trifluoride"?',
      options: [
        'NF₃',
        'N₂F',
        'N₂F₃',
        'N₃F₂',
      ],
      correctIndex: 2,
      explanation: 'Di = 2 nitrogen (N₂), tri = 3 fluoride (F₃). Formula: N₂F₃. In covalent naming, the prefixes directly give you the subscripts.',
    },
    {
      id: 'unit-07-bonding-q-09',
      question: 'In a Lewis structure, if the central atom still needs more electrons after outer atoms have their octets, what should you do?',
      options: [
        'Add more electrons to the structure',
        'Convert lone pairs on outer atoms to form double or triple bonds',
        'Remove an outer atom from the structure',
        'Ignore the octet rule for the central atom',
      ],
      correctIndex: 1,
      explanation: 'To give the central atom its octet without adding extra electrons, convert lone pairs from outer atoms into shared bonds (double or triple bonds). This satisfies both atoms\' octets using the same electrons.',
    },
    {
      id: 'unit-07-bonding-q-10',
      question: 'Identify whether NaCl is ionic or covalent, and explain why.',
      options: [
        'Covalent, because Na and Cl share electrons equally',
        'Ionic, because Na is a metal and Cl is a nonmetal — Na transfers an electron to Cl',
        'Metallic, because Na is a metal',
        'Covalent polar, because Cl is more electronegative than Na',
      ],
      correctIndex: 1,
      explanation: 'NaCl is ionic. Na is a metal (Group 1) and Cl is a nonmetal (Group 17). The large electronegativity difference leads to electron TRANSFER: Na gives its 3s¹ electron to Cl, forming Na⁺ and Cl⁻ ions in a crystal lattice.',
    },
  ],
};
