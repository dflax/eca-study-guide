import type { Unit } from '@/types/study';

export const unit03AtomicTheory: Unit = {
  id: 'unit-03-atomic-theory',
  number: 3,
  title: 'Development of Atomic Theory',
  description: 'Matter classification, physical vs. chemical properties, separation techniques, and the laws of Proust and Dalton.',
  notes: [
    {
      heading: 'Classifying Matter',
      content: 'All matter is classified in a hierarchy:\n\nMatter\n└── Pure Substance (fixed composition)\n    ├── Element: one type of atom (e.g., gold, oxygen gas)\n    └── Compound: two or more elements chemically combined in a fixed ratio (e.g., water H₂O)\n\nMatter\n└── Mixture (variable composition)\n    ├── Homogeneous mixture: same composition throughout, appears uniform (e.g., saltwater, air)\n    └── Heterogeneous mixture: different composition in different parts, visible distinction (e.g., sand + water, trail mix)\n\nKey distinction: A pure substance has a definite, fixed composition. A mixture can be separated by physical means.',
      bullets: [
        'Element: only one kind of atom; cannot be broken down chemically',
        'Compound: two or more elements bonded in a fixed ratio; can be broken down chemically',
        'Homogeneous mixture = solution (same throughout)',
        'Heterogeneous mixture = distinct phases or regions visible',
      ],
    },
    {
      heading: 'Properties of Matter',
      content: 'Physical properties: can be observed or measured WITHOUT changing the chemical composition.\nExamples: color, density, melting point, boiling point, mass, volume, state (solid/liquid/gas)\n\nChemical properties: describe how a substance reacts or changes into a different substance.\nExamples: flammability, reactivity with acid, ability to rust, ability to combust\n\nPhysical change: changes form or appearance but NOT chemical composition.\nExamples: cutting paper, melting ice, dissolving salt\n\nChemical change: creates a new substance with different chemical properties.\nExamples: burning wood, rust forming, cooking an egg\nEvidence of chemical change: color change, gas produced, precipitate forms, temperature change, light produced\n\nIntensive vs. Extensive properties:\n• Intensive: do NOT depend on amount of substance (density, temperature, color, melting point)\n• Extensive: DO depend on amount (mass, volume, length)',
    },
    {
      heading: 'States of Matter',
      content: 'Matter exists in four states:\n\n• Solid: definite shape and volume; particles tightly packed, vibrate in place\n• Liquid: definite volume, no definite shape; particles slide past each other\n• Gas: no definite shape or volume; particles move rapidly and are far apart\n• Plasma: high-energy ionized gas; rare on Earth but common in stars\n\nChanges between states involve energy transfer without changes in chemical composition (physical changes).',
    },
    {
      heading: 'Separation Techniques',
      content: 'Physical separation techniques exploit differences in physical properties:\n\n• Distillation: separates liquids with different boiling points by heating and collecting vapors separately. Example: separating alcohol from water. CAN recover specific components.\n\n• Evaporation: removes a liquid by heating, leaving behind dissolved solids. Example: evaporating saltwater to recover salt. Recovers the SOLID, not the liquid.\n\n• Filtration: separates insoluble solids from liquids using a filter. Example: removing sand from water. Recovers the solid on the filter and the liquid in the filtrate.\n\nEach technique works best for specific types of mixtures. You must know which technique to use for a given separation goal.',
      bullets: [
        'Distillation: separate LIQUIDS with different boiling points',
        'Evaporation: recover a DISSOLVED SOLID from solution',
        'Filtration: separate an INSOLUBLE SOLID from a liquid',
      ],
    },
    {
      heading: 'Laws of Chemical Composition',
      content: 'Two fundamental laws govern how elements combine in compounds:\n\nLaw of Definite Proportions (Proust, 1799): A pure compound always contains the same elements in the same mass ratio, regardless of the source or sample size.\nExample: Water is always 8:1 oxygen to hydrogen by mass. A 18g sample or 180g sample of water — always 8:1.\n\nLaw of Multiple Proportions (Dalton, 1803): When two elements form MORE THAN ONE compound, the masses of one element that combine with a fixed mass of the other are in small whole-number ratios.\nExample: Carbon and oxygen form CO and CO₂. For a fixed amount of carbon:\n  - In CO: 16g of oxygen\n  - In CO₂: 32g of oxygen\n  - Ratio: 16:32 = 1:2 (whole number ratio)\n\nHistorical context: Ancient alchemists sought to transform metals into gold (phlogiston theory). Proust and Dalton\'s careful quantitative measurements helped establish modern chemistry by showing that matter follows precise, reproducible laws.',
      bullets: [
        'Definite Proportions: same compound, same ratio, every time (Proust)',
        'Multiple Proportions: different compounds of same elements → whole-number mass ratios (Dalton)',
        'To check Law of Definite Proportions: calculate the mass ratio and verify it is constant',
        'To check Law of Multiple Proportions: compare ratios across different compounds for whole numbers',
      ],
    },
  ],
  flashcards: [
    {
      id: 'unit-03-atomic-theory-fc-01',
      front: 'What is the difference between an element and a compound?',
      back: 'Element: a pure substance made of only ONE type of atom (e.g., gold, oxygen).\nCompound: a pure substance made of two or more elements CHEMICALLY combined in a fixed ratio (e.g., H₂O, NaCl).\nBoth are pure substances; compounds can be broken down chemically, elements cannot.',
    },
    {
      id: 'unit-03-atomic-theory-fc-02',
      front: 'What is the difference between a homogeneous and heterogeneous mixture?',
      back: 'Homogeneous: uniform composition throughout — looks the same everywhere (e.g., saltwater, air, brass).\nHeterogeneous: different composition in different parts — distinct phases or regions visible (e.g., sand + water, salad, granite).',
    },
    {
      id: 'unit-03-atomic-theory-fc-03',
      front: 'What is the difference between a physical and a chemical property?',
      back: 'Physical property: observable/measurable without changing chemical composition (color, density, melting point).\nChemical property: describes how a substance REACTS to form new substances (flammability, reactivity, ability to rust).',
    },
    {
      id: 'unit-03-atomic-theory-fc-04',
      front: 'What distinguishes a physical change from a chemical change?',
      back: 'Physical change: changes form/appearance but NOT chemical composition (melting ice, tearing paper).\nChemical change: creates a new substance with different properties. Signs: color change, gas produced, precipitate, temperature change, light.',
    },
    {
      id: 'unit-03-atomic-theory-fc-05',
      front: 'What is the difference between intensive and extensive properties?',
      back: 'Intensive: do NOT depend on amount of substance — density, temperature, color, melting point. (Same for 1g or 1kg of water)\nExtensive: DO depend on amount — mass, volume, length. (More water = more mass)',
    },
    {
      id: 'unit-03-atomic-theory-fc-06',
      front: 'What does distillation separate and how does it work?',
      back: 'Distillation separates liquids with DIFFERENT BOILING POINTS. The mixture is heated; the component with the lower boiling point vaporizes first, is collected and cooled back to liquid. Example: separating alcohol from water.',
    },
    {
      id: 'unit-03-atomic-theory-fc-07',
      front: 'What does filtration separate?',
      back: 'Filtration separates an INSOLUBLE SOLID from a LIQUID using a physical barrier (filter paper). The solid remains on the filter; the liquid passes through. Example: separating sand from water.',
    },
    {
      id: 'unit-03-atomic-theory-fc-08',
      front: 'What does evaporation separate and what is recovered?',
      back: 'Evaporation separates a DISSOLVED SOLID from a LIQUID by heating the solution until the liquid boils away. The dissolved solid is left behind and recovered. Example: evaporating seawater to get salt.',
    },
    {
      id: 'unit-03-atomic-theory-fc-09',
      front: 'State the Law of Definite Proportions (Proust).',
      back: 'A pure compound always contains the same elements in the same MASS RATIO, regardless of the sample\'s source or size. Example: Water is always 8:1 oxygen to hydrogen by mass — always.',
    },
    {
      id: 'unit-03-atomic-theory-fc-10',
      front: 'State the Law of Multiple Proportions (Dalton).',
      back: 'When two elements form MORE THAN ONE compound, the masses of one element that combine with a fixed mass of the other are in small WHOLE-NUMBER RATIOS. Example: CO vs CO₂ — oxygen ratio is 1:2.',
    },
    {
      id: 'unit-03-atomic-theory-fc-11',
      front: 'What diagram would represent a COMPOUND?',
      back: 'A compound is represented by a diagram showing molecules where each molecule contains two or more DIFFERENT types of atoms bonded together in a fixed ratio (e.g., H₂O molecules, each with 2 H and 1 O).',
    },
    {
      id: 'unit-03-atomic-theory-fc-12',
      front: 'What were alchemists trying to do, and what is the phlogiston theory?',
      back: 'Alchemists sought to transform base metals into gold. Phlogiston theory was an early (incorrect) idea that a substance called "phlogiston" was released during burning. This was disproven when Lavoisier showed combustion involves oxygen.',
    },
  ],
  quiz: [
    {
      id: 'unit-03-atomic-theory-q-01',
      question: 'Saltwater is best classified as:',
      options: [
        'An element',
        'A compound',
        'A homogeneous mixture',
        'A heterogeneous mixture',
      ],
      correctIndex: 2,
      explanation: 'Saltwater is a homogeneous mixture (solution) — it has a uniform composition throughout (you cannot see distinct salt and water regions). It is not a pure substance because its composition varies with the amount of salt dissolved.',
    },
    {
      id: 'unit-03-atomic-theory-q-02',
      question: 'Which of the following is a CHEMICAL property?',
      options: [
        'Density of iron is 7.87 g/cm³',
        'Water freezes at 0°C',
        'Wood is flammable',
        'Gold has a shiny luster',
      ],
      correctIndex: 2,
      explanation: 'Flammability is a chemical property because it describes how a substance (wood) reacts to form new substances (CO₂ and H₂O) through combustion. Density, freezing point, and luster are physical properties.',
    },
    {
      id: 'unit-03-atomic-theory-q-03',
      question: 'A student wants to separate dissolved salt from water. Which technique is BEST?',
      options: [
        'Filtration',
        'Distillation',
        'Evaporation',
        'Centrifugation',
      ],
      correctIndex: 2,
      explanation: 'Evaporation is best for recovering a dissolved solid from solution — heat the water until it evaporates, leaving the salt behind. Filtration only works for insoluble solids (salt is dissolved). Distillation would recover the water, not the salt.',
    },
    {
      id: 'unit-03-atomic-theory-q-04',
      question: 'Which of the following is an INTENSIVE property?',
      options: [
        'Mass',
        'Volume',
        'Density',
        'Length',
      ],
      correctIndex: 2,
      explanation: 'Density (mass/volume) is an intensive property — it does not change with sample size. The density of water is always 1 g/mL whether you have 1 mL or 1000 mL. Mass, volume, and length are extensive (depend on amount).',
    },
    {
      id: 'unit-03-atomic-theory-q-05',
      question: 'According to the Law of Definite Proportions, water always contains oxygen and hydrogen in a mass ratio of 8:1. A sample of water has 40 g of oxygen. How much hydrogen does it contain?',
      options: [
        '0.5 g',
        '5 g',
        '8 g',
        '320 g',
      ],
      correctIndex: 1,
      explanation: 'The ratio is 8:1 (oxygen:hydrogen). If there is 40 g oxygen, then hydrogen = 40 ÷ 8 = 5 g. The ratio is always maintained regardless of sample size.',
    },
    {
      id: 'unit-03-atomic-theory-q-06',
      question: 'Two compounds are formed from nitrogen and oxygen. Compound A has a 7:8 (N:O) mass ratio. Compound B has a 7:16 (N:O) mass ratio. Do these satisfy the Law of Multiple Proportions?',
      options: [
        'No — the ratios are not equal, so they violate the law',
        'Yes — the oxygen masses (8 and 16) for fixed nitrogen are in a 1:2 ratio',
        'No — the law only applies to exactly two elements combined once',
        'Yes — any two different compounds always satisfy this law',
      ],
      correctIndex: 1,
      explanation: 'For a fixed mass of nitrogen (7g), the oxygen masses are 8g and 16g. The ratio 8:16 = 1:2, a simple whole-number ratio. This confirms the Law of Multiple Proportions.',
    },
    {
      id: 'unit-03-atomic-theory-q-07',
      question: 'A diagram shows molecules consisting of two DIFFERENT types of atoms. What does this represent?',
      options: [
        'A mixture of elements',
        'A pure element',
        'A compound',
        'A heterogeneous mixture',
      ],
      correctIndex: 2,
      explanation: 'A compound is represented by molecules where each molecule contains two or more different types of atoms chemically bonded together. This is different from a mixture (where the atoms/molecules are not bonded).',
    },
    {
      id: 'unit-03-atomic-theory-q-08',
      question: 'Burning wood is an example of:',
      options: [
        'A physical change only',
        'A chemical change',
        'A separation technique',
        'A homogeneous process',
      ],
      correctIndex: 1,
      explanation: 'Burning wood is a chemical change — it creates new substances (CO₂, H₂O, ash) with different properties. Evidence includes light produced, temperature change, gas produced, and color change. The original wood cannot be recovered.',
    },
    {
      id: 'unit-03-atomic-theory-q-09',
      question: 'Which separation technique is BEST for separating a mixture of alcohol and water (which have different boiling points)?',
      options: [
        'Filtration',
        'Evaporation',
        'Distillation',
        'Crystallization',
      ],
      correctIndex: 2,
      explanation: 'Distillation is designed to separate liquids with different boiling points. Alcohol (bp ~78°C) vaporizes before water (bp 100°C), and can be collected separately.',
    },
    {
      id: 'unit-03-atomic-theory-q-10',
      question: 'Which four states of matter are recognized in science?',
      options: [
        'Solid, liquid, gas, and plasma',
        'Solid, liquid, gas, and vapor',
        'Solid, liquid, gas, and crystal',
        'Solid, liquid, plasma, and solution',
      ],
      correctIndex: 0,
      explanation: 'The four states of matter are solid, liquid, gas, and plasma. Plasma is a high-energy ionized gas state — it is the most common state of matter in the universe (found in stars) but rare on Earth.',
    },
  ],
};
