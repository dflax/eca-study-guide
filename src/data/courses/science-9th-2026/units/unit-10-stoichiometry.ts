import type { Unit } from '@/types/study';

export const unit10Stoichiometry: Unit = {
  id: 'unit-10-stoichiometry',
  number: 10,
  title: 'Stoichiometry',
  description: 'Molar ratios, molar mass conversions, limiting and excess reagents, and percent yield calculations.',
  notes: [
    {
      heading: 'Molar Ratios',
      content: 'Stoichiometry is the study of the quantitative relationships between reactants and products in a chemical reaction.\n\nA balanced chemical equation tells you the MOLAR RATIO of every substance involved.\n\nExample: N₂ + 3H₂ → 2NH₃\n• 1 mole of N₂ reacts with 3 moles of H₂ to produce 2 moles of NH₃\n• Molar ratios: 1:3:2\n• Conversion factor: (2 mol NH₃)/(1 mol N₂) OR (1 mol N₂)/(3 mol H₂), etc.\n\nUsing molar ratios as conversion factors:\nTo find moles of product from moles of reactant:\n  moles A × (moles B / moles A from balanced equation) = moles B\n\nThe molar ratio comes directly from the coefficients in the balanced equation.',
      bullets: [
        'Coefficients in a balanced equation = molar ratios',
        'Write molar ratios as fractions with units to use as conversion factors',
        'Always use the BALANCED equation to get the correct ratios',
        'Mole-to-mole conversion = one step',
      ],
    },
    {
      heading: 'Multi-Step Conversions (Grams to Grams)',
      content: 'Stoichiometry problems often require converting between grams, moles, and other units.\n\nSteps for grams of A → grams of B:\n1. Convert grams of A → moles of A (divide by molar mass of A)\n2. Convert moles of A → moles of B (multiply by molar ratio B/A)\n3. Convert moles of B → grams of B (multiply by molar mass of B)\n\nFull chain as fractions:\ngrams A × (1 mol A / molar mass A) × (mol B / mol A) × (molar mass B / 1 mol B) = grams B\n\nExample: Given N₂ + 3H₂ → 2NH₃, how many grams of NH₃ are produced from 28g of N₂?\n  Molar mass N₂ = 28 g/mol; Molar mass NH₃ = 17 g/mol\n  28g N₂ × (1 mol N₂ / 28g) × (2 mol NH₃ / 1 mol N₂) × (17g NH₃ / 1 mol NH₃)\n  = 1 × 2 × 17 = 34g NH₃\n\nIdentifying how many steps:\n• Moles → Moles: 1 step (molar ratio only)\n• Moles → Grams: 1 step (multiply by molar mass)\n• Grams → Moles: 1 step (divide by molar mass)\n• Grams → Grams: 3 steps (g→mol→mol→g)',
    },
    {
      heading: 'Limiting and Excess Reagents',
      content: 'In real reactions, one reactant is used up first — this is the LIMITING REAGENT. The other is in excess.\n\nThe limiting reagent DETERMINES how much product is formed.\nThe excess reagent is the one left over after the reaction stops.\n\nIdentifying the limiting reagent (given amounts in moles):\n1. Calculate moles of product possible from each reactant using molar ratios\n2. The reactant that produces LESS product is the limiting reagent\n\nExample: N₂ + 3H₂ → 2NH₃\n  Given: 4 mol N₂ and 6 mol H₂\n  From N₂: 4 mol N₂ × (2 mol NH₃ / 1 mol N₂) = 8 mol NH₃\n  From H₂: 6 mol H₂ × (2 mol NH₃ / 3 mol H₂) = 4 mol NH₃\n  H₂ produces less → H₂ is the LIMITING REAGENT\n  Maximum NH₃ produced = 4 mol (based on limiting reagent H₂)\n\nNote: Exam questions on limiting reagents will give starting quantities in MOLES — only one conversion step needed.',
      bullets: [
        'Calculate product possible from EACH reactant separately',
        'The reactant that produces LESS product is limiting',
        'The product amount is determined by the LIMITING reagent',
        'The OTHER reactant is in EXCESS (some is left over)',
      ],
    },
    {
      heading: 'Percent Yield',
      content: 'In real-world chemistry, reactions rarely produce 100% of the theoretical (calculated) amount of product. The PERCENT YIELD measures efficiency.\n\nFormula: % Yield = (Actual Yield / Theoretical Yield) × 100%\n\n• Theoretical Yield: calculated maximum amount of product based on stoichiometry\n• Actual Yield: the amount actually collected in the experiment\n• Percent Yield: how efficient the reaction was (always ≤ 100% in real experiments)\n\nWhy is actual yield less than theoretical?\n• Side reactions occur\n• Some product is lost during collection\n• Reaction doesn\'t go to completion\n• Impure reactants\n\nExample: A reaction should produce 50g of product (theoretical yield), but only 40g is collected (actual yield).\n% Yield = (40g / 50g) × 100% = 80%\n\nNote: Percent yield problems always have ONE starting quantity in excess — so you won\'t need to find the limiting reagent for these problems.',
      bullets: [
        '% Yield = (Actual / Theoretical) × 100%',
        'Theoretical yield comes from stoichiometry calculations',
        'Actual yield is what you measure in the lab',
        'Percent yield is always between 0% and 100%',
      ],
    },
  ],
  flashcards: [
    {
      id: 'unit-10-stoichiometry-fc-01',
      front: 'What is a molar ratio and where does it come from?',
      back: 'A molar ratio is the ratio of moles of one substance to another in a chemical reaction. It comes directly from the COEFFICIENTS of the balanced chemical equation. Example: N₂ + 3H₂ → 2NH₃ gives ratio 1:3:2.',
    },
    {
      id: 'unit-10-stoichiometry-fc-02',
      front: 'Using N₂ + 3H₂ → 2NH₃, how many moles of NH₃ are produced from 5 mol of N₂?',
      back: '5 mol N₂ × (2 mol NH₃ / 1 mol N₂) = 10 mol NH₃\nThe molar ratio from the equation is 1 mol N₂ : 2 mol NH₃.',
    },
    {
      id: 'unit-10-stoichiometry-fc-03',
      front: 'How many conversion steps are needed to go from grams of A to grams of B?',
      back: '3 steps:\n1. Grams A → Moles A (divide by molar mass of A)\n2. Moles A → Moles B (multiply by molar ratio B/A)\n3. Moles B → Grams B (multiply by molar mass of B)',
    },
    {
      id: 'unit-10-stoichiometry-fc-04',
      front: 'What is the limiting reagent?',
      back: 'The limiting reagent is the reactant that is COMPLETELY CONSUMED first, stopping the reaction. It limits (determines) the maximum amount of product that can be formed. The other reactant is the "excess reagent."',
    },
    {
      id: 'unit-10-stoichiometry-fc-05',
      front: 'How do you identify the limiting reagent when given amounts in moles?',
      back: '1. Calculate moles of product possible from EACH reactant using molar ratios\n2. The reactant that produces the SMALLER amount of product is the LIMITING reagent\n3. The maximum product amount is based on that smaller value',
    },
    {
      id: 'unit-10-stoichiometry-fc-06',
      front: 'What is the percent yield formula?',
      back: '% Yield = (Actual Yield / Theoretical Yield) × 100%\n• Actual yield = amount collected in the lab experiment\n• Theoretical yield = calculated maximum from stoichiometry\n• Percent yield is always ≤ 100% in real experiments',
    },
    {
      id: 'unit-10-stoichiometry-fc-07',
      front: 'A reaction has a theoretical yield of 80g but only 60g is collected. What is the percent yield?',
      back: '% Yield = (60g / 80g) × 100% = 75%\nThe reaction was 75% efficient — 25% of the possible product was lost.',
    },
    {
      id: 'unit-10-stoichiometry-fc-08',
      front: 'For 2H₂ + O₂ → 2H₂O: if you start with 3 mol H₂ and 3 mol O₂, what is the limiting reagent?',
      back: 'From 3 mol H₂: 3 mol H₂ × (2 mol H₂O / 2 mol H₂) = 3 mol H₂O\nFrom 3 mol O₂: 3 mol O₂ × (2 mol H₂O / 1 mol O₂) = 6 mol H₂O\nH₂ produces less → H₂ is the LIMITING REAGENT. Max product = 3 mol H₂O.',
    },
    {
      id: 'unit-10-stoichiometry-fc-09',
      front: 'Why is actual yield less than theoretical yield?',
      back: 'Reasons the actual yield is less:\n• Side reactions consume some reactant\n• Product lost during collection/transfer\n• Reaction doesn\'t go to completion\n• Impure reactants reduce available starting material\n• Equilibrium prevents 100% conversion',
    },
    {
      id: 'unit-10-stoichiometry-fc-10',
      front: 'What is the theoretical yield and how is it calculated?',
      back: 'Theoretical yield is the MAXIMUM amount of product that could be formed based on stoichiometric calculations, assuming 100% efficiency. It is calculated using molar ratios and molar masses from the balanced equation.',
    },
    {
      id: 'unit-10-stoichiometry-fc-11',
      front: 'Convert: how many grams of H₂O are produced from 2 mol of H₂? (2H₂ + O₂ → 2H₂O; M(H₂O) = 18 g/mol)',
      back: '2 mol H₂ × (2 mol H₂O / 2 mol H₂) × (18 g / 1 mol H₂O)\n= 2 × 1 × 18 = 36 g H₂O',
    },
    {
      id: 'unit-10-stoichiometry-fc-12',
      front: 'How many conversion steps are needed to go from moles of A to moles of B?',
      back: '1 step: just use the molar ratio from the balanced equation as a conversion factor.\nmol A × (mol B / mol A) = mol B\nNo molar mass needed because you\'re staying in moles.',
    },
  ],
  quiz: [
    {
      id: 'unit-10-stoichiometry-q-01',
      question: 'For the reaction: 2Al + 3Cl₂ → 2AlCl₃, how many moles of AlCl₃ are produced from 4 mol of Al?',
      options: [
        '2 mol',
        '3 mol',
        '4 mol',
        '6 mol',
      ],
      correctIndex: 2,
      explanation: '4 mol Al × (2 mol AlCl₃ / 2 mol Al) = 4 mol AlCl₃. The molar ratio of Al to AlCl₃ is 2:2 = 1:1, so 4 mol Al produces 4 mol AlCl₃.',
    },
    {
      id: 'unit-10-stoichiometry-q-02',
      question: 'How many steps are required to convert grams of reactant A to grams of product B?',
      options: [
        '1 step',
        '2 steps',
        '3 steps',
        '4 steps',
      ],
      correctIndex: 2,
      explanation: '3 steps: (1) g A → mol A (divide by molar mass A), (2) mol A → mol B (molar ratio), (3) mol B → g B (multiply by molar mass B). This is sometimes written as one long chain of conversion factors.',
    },
    {
      id: 'unit-10-stoichiometry-q-03',
      question: 'For N₂ + 3H₂ → 2NH₃: Starting with 6 mol N₂ and 9 mol H₂, what is the LIMITING REAGENT?',
      options: [
        'N₂, because there is less of it',
        'H₂, because it produces less product',
        'NH₃, because it is the product',
        'Both are limiting reagents equally',
      ],
      correctIndex: 1,
      explanation: 'Calculate product from each: From 6 mol N₂: 6 × (2/1) = 12 mol NH₃. From 9 mol H₂: 9 × (2/3) = 6 mol NH₃. H₂ produces less product → H₂ is the limiting reagent. Max NH₃ = 6 mol.',
    },
    {
      id: 'unit-10-stoichiometry-q-04',
      question: 'A student calculates they should get 50g of NaCl but only collects 45g. What is the percent yield?',
      options: [
        '45%',
        '50%',
        '90%',
        '111%',
      ],
      correctIndex: 2,
      explanation: '% Yield = (Actual / Theoretical) × 100% = (45g / 50g) × 100% = 90%. The reaction was 90% efficient.',
    },
    {
      id: 'unit-10-stoichiometry-q-05',
      question: 'For 2H₂ + O₂ → 2H₂O: What is the molar ratio of H₂ to O₂?',
      options: [
        '1:1',
        '2:1',
        '1:2',
        '3:1',
      ],
      correctIndex: 1,
      explanation: 'From the balanced equation, the coefficients are 2 for H₂ and 1 for O₂. So the molar ratio of H₂ to O₂ is 2:1. For every mole of O₂ used, 2 moles of H₂ are consumed.',
    },
    {
      id: 'unit-10-stoichiometry-q-06',
      question: 'For 2Al + 3Cl₂ → 2AlCl₃: Starting with 4 mol Al and 4 mol Cl₂, which is the limiting reagent?',
      options: [
        'Al, because 4 mol Al produces only 4 mol AlCl₃',
        'Cl₂, because 4 mol Cl₂ produces only 8/3 mol AlCl₃ ≈ 2.67 mol',
        'Both are consumed equally',
        'Al, because it has a smaller molar mass',
      ],
      correctIndex: 1,
      explanation: 'From 4 mol Al: 4 × (2/2) = 4 mol AlCl₃. From 4 mol Cl₂: 4 × (2/3) = 2.67 mol AlCl₃. Cl₂ produces less product → Cl₂ is the limiting reagent. Max AlCl₃ = 2.67 mol.',
    },
    {
      id: 'unit-10-stoichiometry-q-07',
      question: 'The theoretical yield of a product is 120g. The actual yield gives a percent yield of 75%. What was the actual yield?',
      options: [
        '45g',
        '75g',
        '90g',
        '160g',
      ],
      correctIndex: 2,
      explanation: '% Yield = Actual / Theoretical × 100% → Actual = (% Yield / 100%) × Theoretical = 0.75 × 120g = 90g.',
    },
    {
      id: 'unit-10-stoichiometry-q-08',
      question: 'Going from moles of A to grams of B (where A and B are different substances in the same reaction), how many conversion steps are needed?',
      options: [
        '1 step',
        '2 steps',
        '3 steps',
        '4 steps',
      ],
      correctIndex: 1,
      explanation: '2 steps: (1) moles A → moles B (using the molar ratio), then (2) moles B → grams B (multiplying by molar mass of B). No need to convert moles of A to grams first.',
    },
    {
      id: 'unit-10-stoichiometry-q-09',
      question: 'For N₂ + 3H₂ → 2NH₃, how many moles of H₂ are needed to produce 10 mol of NH₃?',
      options: [
        '5 mol',
        '10 mol',
        '15 mol',
        '20 mol',
      ],
      correctIndex: 2,
      explanation: '10 mol NH₃ × (3 mol H₂ / 2 mol NH₃) = 15 mol H₂. The ratio of H₂ to NH₃ from the equation is 3:2, so you need 15 mol of H₂ to make 10 mol of NH₃.',
    },
    {
      id: 'unit-10-stoichiometry-q-10',
      question: 'Which of the following is TRUE about the limiting reagent?',
      options: [
        'It is always the reactant with the smallest mass',
        'It is the reactant that produces the MOST product based on stoichiometry',
        'It is completely consumed in the reaction and determines the amount of product',
        'It is always the first reactant listed in the equation',
      ],
      correctIndex: 2,
      explanation: 'The limiting reagent is completely consumed and LIMITS (determines) the maximum product that can form. It is identified as the reactant that would produce the LEAST product based on stoichiometric calculations — not necessarily the one with the smallest mass.',
    },
  ],
};
