import type { Unit } from '@/types/study';

export const unit08Vsepr: Unit = {
  id: 'unit-08-vsepr',
  number: 8,
  title: 'VSEPR and Molecular Geometry',
  description: 'Electron geometry, molecular geometry, hybridization, polarity, and intermolecular forces.',
  notes: [
    {
      heading: 'Regions of Electron Density and VSEPR',
      content: 'VSEPR (Valence Shell Electron Pair Repulsion) theory predicts the shape of molecules based on the idea that electron pairs repel each other and arrange themselves as far apart as possible.\n\nRegion of electron density: any group of electrons around a central atom that acts as a unit.\n• A single bond = 1 region\n• A double bond = 1 region (even though it has 4 electrons)\n• A triple bond = 1 region\n• A lone pair = 1 region\n\nTo determine geometry:\n1. Draw the Lewis structure\n2. Count total regions of electron density around the central atom\n3. Determine electron geometry (based on total regions)\n4. Determine molecular geometry (based on BONDED regions only — ignore lone pairs)\n\nKey: Electron geometry = arrangement of ALL regions. Molecular geometry = arrangement of ATOMS only.',
    },
    {
      heading: 'Electron and Molecular Geometries',
      content: 'The electron geometry is determined by the TOTAL number of electron density regions. The molecular geometry is determined by the arrangement of ATOMS only.\n\n2 regions → Electron geometry: LINEAR → Molecular geometry: LINEAR\nExample: CO₂ (O=C=O, no lone pairs) → linear, 180°\n\n3 regions → Electron geometry: TRIGONAL PLANAR\n• 0 lone pairs → Molecular geometry: TRIGONAL PLANAR (120°)\n• 1 lone pair → Molecular geometry: BENT (< 120°)\nExamples: BF₃ (trigonal planar); SO₂ (bent)\n\n4 regions → Electron geometry: TETRAHEDRAL\n• 0 lone pairs → Molecular geometry: TETRAHEDRAL (109.5°)\n• 1 lone pair → Molecular geometry: TRIGONAL PYRAMIDAL (< 109.5°)\n• 2 lone pairs → Molecular geometry: BENT (< 109.5°)\nExamples: CH₄ (tetrahedral), NH₃ (trigonal pyramidal), H₂O (bent)\n\nReference sheet notation: AX = bonded atom, E = lone pair on central atom.\n"Linear AX₂, trigonal planar AX₃, bent AX₂E/AX₂E₂, tetrahedral AX₄, trigonal pyramidal AX₃E"',
      bullets: [
        '2 regions: linear',
        '3 regions, 0 lone pairs: trigonal planar; 1 lone pair: bent',
        '4 regions, 0 LP: tetrahedral; 1 LP: trigonal pyramidal; 2 LP: bent',
        'Lone pairs take up MORE space than bonding pairs — compress bond angles',
      ],
    },
    {
      heading: 'Orbital Hybridization',
      content: 'Hybridization explains how atomic orbitals mix to form the electron geometry of a molecule.\n\n• 2 regions of electron density → sp hybridization (linear, 180°)\n• 3 regions of electron density → sp² hybridization (trigonal planar, 120°)\n• 4 regions of electron density → sp³ hybridization (tetrahedral, 109.5°)\n\nKey insight: The hybridization is determined by the NUMBER OF REGIONS OF ELECTRON DENSITY (including lone pairs), not by the molecular geometry.\n\nExamples:\n• BeCl₂ (2 regions, linear): sp\n• BF₃ (3 regions, trigonal planar): sp²\n• CH₄ (4 regions, tetrahedral): sp³\n• H₂O (4 regions, bent): sp³ (2 bonds + 2 lone pairs = 4 regions)\n• NH₃ (4 regions, trigonal pyramidal): sp³',
    },
    {
      heading: 'Sigma (σ) and Pi (π) Bonds',
      content: 'When atoms form bonds, the type of orbital overlap determines if it\'s a sigma or pi bond.\n\nSigma (σ) bond: direct, head-on overlap of orbitals between two atoms.\n• Every single bond is 1 sigma bond\n• The first bond in any double or triple bond is always sigma\n\nPi (π) bond: side-by-side overlap of p orbitals, above and below the bond axis.\n• A double bond = 1 σ + 1 π\n• A triple bond = 1 σ + 2 π\n\nCounting bonds:\n• Single bond: 1σ, 0π\n• Double bond: 1σ + 1π\n• Triple bond: 1σ + 2π\n\nExample: CO₂ (O=C=O)\n• 2 double bonds = 2σ + 2π → total: 2 sigma bonds, 2 pi bonds',
      bullets: [
        'Every bond has at least 1 sigma bond (the first bond)',
        'Pi bonds are always in addition to (not replacing) sigma bonds',
        'Double bond: 1σ + 1π; Triple bond: 1σ + 2π',
        'Rotation around double bonds is restricted (pi bonds break easily)',
      ],
    },
    {
      heading: 'Polarity and Intermolecular Forces',
      content: 'Molecular polarity depends on two factors:\n1. Whether individual bonds are polar (unequal sharing due to EN difference)\n2. Whether the bond dipoles cancel each other due to geometry\n\nNonpolar molecule: symmetrical arrangement of identical bonds → dipoles cancel\nExample: CO₂ (O=C=O, linear, bond dipoles point in opposite directions → cancel)\n\nPolar molecule: unsymmetrical arrangement → dipoles don\'t cancel\nExample: H₂O (bent, both O-H dipoles point toward O → don\'t cancel)\n\nIntermolecular Forces (IMFs): attractions between molecules (not within).\n• London Dispersion Forces (LDF): weakest, present in ALL molecules (polar and nonpolar). Caused by temporary dipoles. Larger/heavier molecules have stronger LDF.\n• Dipole-dipole: between POLAR molecules. Stronger than LDF alone.\n• Hydrogen bonding: strongest IMF. Occurs ONLY when H is bonded directly to N, O, or F (these are highly electronegative and small). The H on one molecule is attracted to the lone pair of N, O, or F on another molecule.\n\nComparing IMF strength:\n• For similar polar molecules: more polarized bonds (larger EN difference) = stronger IMF\n• For nonpolar molecules: larger molecule = more electrons = stronger LDF',
      bullets: [
        'Hydrogen bonds: H must be bonded to N, O, or F — and the other molecule must have a lone pair on N, O, or F',
        'Polar molecules: dipole-dipole forces (+ LDF)',
        'Nonpolar molecules: London Dispersion Forces only',
        'IMF strength: hydrogen bonds > dipole-dipole > London dispersion',
      ],
    },
  ],
  flashcards: [
    {
      id: 'unit-08-vsepr-fc-01',
      front: 'What does "region of electron density" mean in VSEPR?',
      back: 'A region of electron density is any group of electrons around a central atom that repels other electron groups. Each counts as 1 region: single bond = 1 region, double bond = 1 region, triple bond = 1 region, lone pair = 1 region.',
    },
    {
      id: 'unit-08-vsepr-fc-02',
      front: 'What is the difference between electron geometry and molecular geometry?',
      back: 'Electron geometry: the arrangement of ALL regions of electron density (including lone pairs) around the central atom.\nMolecular geometry: the arrangement of ATOMS ONLY (ignoring lone pairs). Lone pairs are invisible in the molecular shape but affect bond angles.',
    },
    {
      id: 'unit-08-vsepr-fc-03',
      front: 'Water (H₂O) has what electron geometry and molecular geometry?',
      back: 'O has 4 regions (2 bonds + 2 lone pairs).\nElectron geometry: TETRAHEDRAL (4 regions)\nMolecular geometry: BENT (only 2 atoms attached, 2 lone pairs push them together)\nHybridization: sp³',
    },
    {
      id: 'unit-08-vsepr-fc-04',
      front: 'NH₃ has what molecular geometry and hybridization?',
      back: 'N has 4 regions (3 bonds + 1 lone pair).\nElectron geometry: tetrahedral\nMolecular geometry: TRIGONAL PYRAMIDAL (3 H atoms + 1 lone pair)\nHybridization: sp³\nBond angle: slightly less than 109.5° (lone pair compresses it)',
    },
    {
      id: 'unit-08-vsepr-fc-05',
      front: 'What hybridization corresponds to 3 regions of electron density?',
      back: 'sp² hybridization. Three regions → trigonal planar electron geometry → sp² hybrid orbitals. Examples: BF₃, SO₂ (has a lone pair but still 3 regions, bent molecular geometry).',
    },
    {
      id: 'unit-08-vsepr-fc-06',
      front: 'What is the difference between a sigma bond and a pi bond?',
      back: 'Sigma (σ) bond: head-on orbital overlap — always the FIRST bond formed between atoms. Every bond has 1 sigma.\nPi (π) bond: side-by-side p orbital overlap — only in double or triple bonds. Double = 1σ+1π. Triple = 1σ+2π.',
    },
    {
      id: 'unit-08-vsepr-fc-07',
      front: 'How many sigma and pi bonds are in a triple bond?',
      back: 'A triple bond contains 1 sigma (σ) bond and 2 pi (π) bonds. The first bond is always sigma; additional bonds are pi. Example: N≡N has 1σ + 2π.',
    },
    {
      id: 'unit-08-vsepr-fc-08',
      front: 'Why is CO₂ nonpolar even though C=O bonds are polar?',
      back: 'CO₂ is linear (O=C=O). The two C=O bond dipoles point in OPPOSITE directions and are equal in magnitude — they cancel each other out. A symmetrical arrangement of polar bonds results in a nonpolar molecule.',
    },
    {
      id: 'unit-08-vsepr-fc-09',
      front: 'What three conditions are required for a hydrogen bond to form?',
      back: '1. H must be covalently bonded to N, O, or F (on one molecule)\n2. There must be a lone pair on N, O, or F (on the neighboring molecule)\n3. The H is attracted to that lone pair\nThese are the strongest of the intermolecular forces.',
    },
    {
      id: 'unit-08-vsepr-fc-10',
      front: 'Which IMF is present in ALL molecules?',
      back: 'London Dispersion Forces (LDF) are present in ALL molecules — polar and nonpolar alike. They arise from temporary, instantaneous dipoles caused by electron movement. Larger molecules have stronger LDF (more electrons = larger temporary dipoles).',
    },
    {
      id: 'unit-08-vsepr-fc-11',
      front: 'Between HF and HCl, which has stronger IMF and why?',
      back: 'HF has stronger IMF. Both can form hydrogen bonds (H bonded to F or Cl). However, F is more electronegative than Cl, making the H-F bond MORE polarized → stronger hydrogen bond and dipole-dipole interactions.',
    },
    {
      id: 'unit-08-vsepr-fc-12',
      front: 'What is the molecular geometry of CH₄?',
      back: 'Tetrahedral. C has 4 bonding pairs and 0 lone pairs. 4 regions → tetrahedral electron geometry → tetrahedral molecular geometry. Bond angles: 109.5°. Hybridization: sp³.',
    },
    {
      id: 'unit-08-vsepr-fc-13',
      front: 'Between CH₄ and CCl₄ (both nonpolar), which has stronger London Dispersion Forces?',
      back: 'CCl₄ has stronger LDF. Cl atoms are much larger and have more electrons than H atoms. Larger molecules with more electrons have larger temporary dipoles → stronger London Dispersion Forces.',
    },
    {
      id: 'unit-08-vsepr-fc-14',
      front: 'BF₃ has what electron geometry, molecular geometry, and hybridization?',
      back: 'B has 3 bonding pairs and 0 lone pairs.\nElectron geometry: TRIGONAL PLANAR\nMolecular geometry: TRIGONAL PLANAR (same — no lone pairs)\nHybridization: sp²\nBond angles: 120°',
    },
  ],
  quiz: [
    {
      id: 'unit-08-vsepr-q-01',
      question: 'A molecule has 4 regions of electron density and 1 lone pair around the central atom. What is its molecular geometry?',
      options: [
        'Tetrahedral',
        'Trigonal planar',
        'Trigonal pyramidal',
        'Bent',
      ],
      correctIndex: 2,
      explanation: '4 regions → tetrahedral electron geometry. With 1 lone pair and 3 bonding pairs: AX₃E → trigonal pyramidal molecular geometry. Example: NH₃.',
    },
    {
      id: 'unit-08-vsepr-q-02',
      question: 'How many total sigma (σ) bonds does CO₂ (O=C=O) have?',
      options: [
        '1',
        '2',
        '4',
        '6',
      ],
      correctIndex: 1,
      explanation: 'CO₂ has 2 double bonds (O=C=O). Each double bond contains 1σ + 1π. So: 2 sigma bonds and 2 pi bonds total.',
    },
    {
      id: 'unit-08-vsepr-q-03',
      question: 'Which of these molecules is POLAR?',
      options: [
        'CO₂ (linear)',
        'CCl₄ (tetrahedral, all bonds identical)',
        'H₂O (bent)',
        'BF₃ (trigonal planar, all bonds identical)',
      ],
      correctIndex: 2,
      explanation: 'H₂O is polar because it has a bent shape — the two O-H bond dipoles do not cancel. CO₂, CCl₄, and BF₃ are all nonpolar because their symmetrical geometry causes bond dipoles to cancel.',
    },
    {
      id: 'unit-08-vsepr-q-04',
      question: 'What hybridization does a central atom with 2 regions of electron density have?',
      options: [
        'sp',
        'sp²',
        'sp³',
        'sp³d',
      ],
      correctIndex: 0,
      explanation: '2 regions of electron density → sp hybridization → linear geometry. One s orbital and one p orbital combine to make 2 sp hybrid orbitals arranged 180° apart. Example: CO₂, BeCl₂.',
    },
    {
      id: 'unit-08-vsepr-q-05',
      question: 'Which type of intermolecular force is STRONGEST?',
      options: [
        'London Dispersion Forces',
        'Dipole-dipole forces',
        'Hydrogen bonding',
        'Ionic forces',
      ],
      correctIndex: 2,
      explanation: 'Among intermolecular forces: hydrogen bonding > dipole-dipole > London Dispersion Forces. Hydrogen bonding is strongest because of the high polarity of N-H, O-H, and F-H bonds. (Ionic bonds are intramolecular, not IMF.)',
    },
    {
      id: 'unit-08-vsepr-q-06',
      question: 'Which molecule can form hydrogen bonds?',
      options: [
        'CH₄',
        'CCl₄',
        'NH₃',
        'CO₂',
      ],
      correctIndex: 2,
      explanation: 'NH₃ can form hydrogen bonds — it has H atoms directly bonded to N, and nitrogen\'s lone pair can accept a hydrogen bond from another NH₃. CH₄ and CCl₄ lack H-N/O/F bonds. CO₂ lacks H atoms.',
    },
    {
      id: 'unit-08-vsepr-q-07',
      question: 'A triple bond contains how many pi bonds?',
      options: [
        '0',
        '1',
        '2',
        '3',
      ],
      correctIndex: 2,
      explanation: 'A triple bond = 1σ + 2π. There is always 1 sigma bond (head-on overlap) plus 2 pi bonds (side-by-side overlap in two perpendicular planes). Example: N≡N or C≡O.',
    },
    {
      id: 'unit-08-vsepr-q-08',
      question: 'H₂O has what hybridization on the oxygen atom?',
      options: [
        'sp',
        'sp²',
        'sp³',
        'p³',
      ],
      correctIndex: 2,
      explanation: 'O in H₂O has 4 regions of electron density (2 bonds + 2 lone pairs). 4 regions → sp³ hybridization → tetrahedral electron geometry → bent molecular geometry.',
    },
    {
      id: 'unit-08-vsepr-q-09',
      question: 'Between HBr and HI (both polar), which has stronger IMF?',
      options: [
        'HBr, because Br is more electronegative than I',
        'HI, because I is a larger atom with more electrons',
        'They are equal',
        'HBr, because it is a smaller molecule',
      ],
      correctIndex: 0,
      explanation: 'For similar polar molecules, more electronegative = more polarized bond = stronger dipole-dipole forces. Br is more electronegative than I, making H-Br more polarized → stronger IMF. (For nonpolar molecules, size matters — but for polar, EN difference matters more.)',
    },
    {
      id: 'unit-08-vsepr-q-10',
      question: 'Which of the following has 3 regions of electron density around the central atom?',
      options: [
        'H₂O (2 bonds + 2 lone pairs)',
        'CH₄ (4 bonds + 0 lone pairs)',
        'SO₂ (2 bonds + 1 lone pair)',
        'CO₂ (2 double bonds + 0 lone pairs)',
      ],
      correctIndex: 2,
      explanation: 'SO₂ has 3 regions (2 bonding regions + 1 lone pair on S) → sp² hybridization → bent molecular geometry. Note: CO₂ has only 2 regions (both double bonds count as 1 region each).',
    },
    {
      id: 'unit-08-vsepr-q-11',
      question: 'What does VSEPR stand for and what is the core principle?',
      options: [
        'Valence Shell Electron Pair Repulsion — electron pairs arrange to be as far apart as possible',
        'Valence Structure Electron Probability Region — orbitals are probability regions',
        'Very Small Electron Pair Radius — electrons are tiny particles',
        'Valence Shell Electron Pair Rotation — molecules rotate around bonds',
      ],
      correctIndex: 0,
      explanation: 'VSEPR = Valence Shell Electron Pair Repulsion. The core principle: electron pairs (both bonding and lone pairs) repel each other and arrange themselves to minimize repulsion — as far apart in space as possible.',
    },
  ],
};
