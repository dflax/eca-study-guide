import type { Unit } from '@/types/study';

export const unit09Reactions: Unit = {
  id: 'unit-09-reactions',
  number: 9,
  title: 'Reactions',
  description: 'Reaction types, balancing equations, predicting products, and the reactivity series.',
  notes: [
    {
      heading: 'Chemical Equations',
      content: 'A chemical equation shows what happens in a chemical reaction:\n• Reactants: substances that START the reaction (left side of arrow)\n• Products: new substances FORMED by the reaction (right side of arrow)\n• Arrow (→): reads as "yields" or "produces"\n\nWord equation: uses names → "hydrogen + oxygen → water"\nFormula equation: uses chemical formulas → "2H₂ + O₂ → 2H₂O"\n\nState symbols written in subscript after the formula:\n• (s) = solid\n• (l) = liquid\n• (g) = gas\n• (aq) = aqueous (dissolved in water)\n\nConditions written above/below the arrow:\n• Δ (delta) = heat applied\n• Temperature, pressure conditions\n• Catalysts\n\nBalancing equations (Law of Conservation of Mass):\nAtoms are neither created nor destroyed — the same number of each type of atom must appear on both sides.\nMethod: adjust COEFFICIENTS (numbers in front of formulas), NEVER subscripts.',
      bullets: [
        'Coefficients balance the equation; subscripts change the formula (never change these)',
        'Check each element separately: count atoms on each side',
        'Balance the most complex molecules first; H and O last',
        'All coefficients should be in smallest whole-number ratio',
      ],
    },
    {
      heading: 'Types of Chemical Reactions',
      content: 'There are five main reaction types:\n\n1. SYNTHESIS (Combination): Two or more reactants combine to form ONE product.\n   General: A + B → AB\n   Action words: "combine," "react to form," "unite"\n   Example: 2H₂ + O₂ → 2H₂O\n\n2. DECOMPOSITION: ONE compound breaks down into two or more simpler substances.\n   General: AB → A + B\n   Action words: "decomposes," "breaks down," "splits"\n   Example: 2H₂O → 2H₂ + O₂ (with electricity)\n\n3. COMBUSTION: A hydrocarbon (C and H compound) reacts with O₂ to produce CO₂ and H₂O.\n   Complete combustion (excess O₂): → CO₂ + H₂O\n   Example: CH₄ + 2O₂ → CO₂ + 2H₂O\n\n4. SINGLE DISPLACEMENT: One element replaces another in a compound.\n   General: A + BC → AC + B (element A replaces element B)\n   Example: Zn + 2HCl → ZnCl₂ + H₂ (Zn replaces H)\n   — Only occurs if A is MORE reactive than B (see reactivity series)\n\n5. DOUBLE DISPLACEMENT: Two compounds swap partners.\n   General: AB + CD → AD + CB\n   Action: identify ionic pairs and swap the cations/anions\n   Example: NaCl + AgNO₃ → NaNO₃ + AgCl↓ (↓ = precipitate)',
    },
    {
      heading: 'The Reactivity Series',
      content: 'The reactivity series (activity series) ranks metals and halogens by how reactive they are. More reactive elements can displace less reactive ones from compounds.\n\nMetal reactivity series (most reactive → least reactive):\nLi > K > Ba > Ca > Na > Mg > Al > Zn > Fe > Ni > Sn > Pb > (H) > Cu > Ag > Au > Pt\n\nHalogen reactivity series:\nF > Cl > Br > I\n\nUsing the series for single displacement:\n• If Metal A is ABOVE Metal B in the series: A will displace B from solution. Reaction OCCURS.\n• If Metal A is BELOW Metal B: Reaction does NOT occur.\n• Metals above H will displace hydrogen from acids; metals below H will not.\n\nExamples:\n• Mg + FeSO₄ → MgSO₄ + Fe (Mg is above Fe — OCCURS)\n• Cu + ZnSO₄ → No reaction (Cu is below Zn — DOES NOT OCCUR)',
      bullets: [
        'More reactive displaces less reactive',
        'Metals above H react with acids to produce H₂ gas; below H do not',
        'Gold (Au) and platinum (Pt) are least reactive — they don\'t corrode',
        'Lithium (Li) and potassium (K) are most reactive — react violently with water',
      ],
    },
    {
      heading: 'Predicting Products',
      content: 'Synthesis: identify the product formed when the two reactants combine.\n• Metal + oxygen → metal oxide\n• Metal + nonmetal → ionic compound\n\nDecomposition: identify what simpler substances the compound breaks into.\n• Metal carbonate → metal oxide + CO₂\n• Metal oxide → metal + oxygen (sometimes)\n\nDouble Displacement products: swap the ionic partners.\n• Identify the cation and anion from each compound\n• Pair them with the opposite compound\'s ion\n• Identify if a precipitate (insoluble solid) forms (marked ↓)\n• Identify if a gas is produced (marked ↑ or (g))\n\nPrecipitate identification:\n• A precipitate forms when ions combine to form an INSOLUBLE compound\n• A "cloudy" or "solid forms in solution" observation = precipitate product\n\nCombustion products: always CO₂ and H₂O (complete combustion)\nC₃H₈ + 5O₂ → 3CO₂ + 4H₂O',
    },
  ],
  flashcards: [
    {
      id: 'unit-09-reactions-fc-01',
      front: 'What are the five types of chemical reactions?',
      back: '1. Synthesis: A + B → AB (two things join)\n2. Decomposition: AB → A + B (one thing breaks apart)\n3. Combustion: hydrocarbon + O₂ → CO₂ + H₂O\n4. Single Displacement: A + BC → AC + B (one element replaces another)\n5. Double Displacement: AB + CD → AD + CB (swap partners)',
    },
    {
      id: 'unit-09-reactions-fc-02',
      front: 'What are the products of complete combustion of any hydrocarbon?',
      back: 'Complete combustion always produces:\n• Carbon dioxide (CO₂)\n• Water (H₂O)\nExample: CH₄ + 2O₂ → CO₂ + 2H₂O\nIf oxygen is limited, incomplete combustion can produce CO or soot (C).',
    },
    {
      id: 'unit-09-reactions-fc-03',
      front: 'What do the state symbols (s), (l), (g), and (aq) mean?',
      back: '(s) = solid\n(l) = liquid\n(g) = gas\n(aq) = aqueous (dissolved in water)\nThese are written after each chemical formula in a balanced equation.',
    },
    {
      id: 'unit-09-reactions-fc-04',
      front: 'How do you balance a chemical equation? What can you change?',
      back: 'Add COEFFICIENTS in front of formulas to balance the number of atoms on each side. You may NEVER change subscripts (that would change the compound). Check each element separately and adjust until both sides are equal.',
    },
    {
      id: 'unit-09-reactions-fc-05',
      front: 'What is the reactivity series of metals in order?',
      back: 'Li > K > Ba > Ca > Na > Mg > Al > Zn > Fe > Ni > Sn > Pb > (H) > Cu > Ag > Au > Pt\n(Most reactive → least reactive)\nA metal will displace any metal BELOW it in the series from a compound.',
    },
    {
      id: 'unit-09-reactions-fc-06',
      front: 'Will zinc (Zn) displace copper (Cu) from a copper sulfate solution? Why?',
      back: 'YES. Zn is ABOVE Cu in the reactivity series (Zn is more reactive). Reaction: Zn + CuSO₄ → ZnSO₄ + Cu\nIf Zn were below Cu, no reaction would occur.',
    },
    {
      id: 'unit-09-reactions-fc-07',
      front: 'What type of reaction is: 2NaCl + Pb(NO₃)₂ → 2NaNO₃ + PbCl₂?',
      back: 'Double Displacement. The two compounds swap ionic partners: Na⁺ pairs with NO₃⁻ and Pb²⁺ pairs with Cl⁻. PbCl₂ may be a precipitate (insoluble).',
    },
    {
      id: 'unit-09-reactions-fc-08',
      front: 'What observation indicates a gas is a product of a chemical reaction?',
      back: 'Bubbles forming in the reaction mixture indicate a GAS product. In equations, gas products are marked with (g) or an upward arrow ↑. Example: Zn + 2HCl → ZnCl₂ + H₂↑',
    },
    {
      id: 'unit-09-reactions-fc-09',
      front: 'What is a precipitate and how is it shown in an equation?',
      back: 'A precipitate is an insoluble solid that forms from the reaction of two aqueous solutions. It is shown with ↓ after the formula or (s) state symbol. Example: AgCl↓ forms when Ag⁺ and Cl⁻ combine.',
    },
    {
      id: 'unit-09-reactions-fc-10',
      front: 'Which metals react with acids to produce hydrogen gas?',
      back: 'Metals ABOVE hydrogen (H) in the reactivity series react with acids to produce H₂ gas:\nLi, K, Ba, Ca, Na, Mg, Al, Zn, Fe, Ni, Sn, Pb — all react with acids.\nCu, Ag, Au, Pt — do NOT react with most acids.',
    },
    {
      id: 'unit-09-reactions-fc-11',
      front: 'What type of reaction is: 2H₂O → 2H₂ + O₂?',
      back: 'Decomposition. One compound (water) breaks down into simpler substances (hydrogen gas and oxygen gas). This specific decomposition is called electrolysis when electricity is used to drive it.',
    },
    {
      id: 'unit-09-reactions-fc-12',
      front: 'What is the halogen reactivity series?',
      back: 'F > Cl > Br > I (most to least reactive)\nA more reactive halogen will displace a less reactive halogen from a compound.\nExample: Cl₂ + 2NaBr → 2NaCl + Br₂ (Cl displaces Br because Cl is above Br)',
    },
  ],
  quiz: [
    {
      id: 'unit-09-reactions-q-01',
      question: 'What type of reaction is: Fe₂O₃ + 3CO → 2Fe + 3CO₂?',
      options: [
        'Synthesis',
        'Decomposition',
        'Single Displacement',
        'Double Displacement',
      ],
      correctIndex: 2,
      explanation: 'This is a single displacement reaction — CO (containing carbon) displaces iron (Fe) from iron oxide. One element (C) replaces another element (Fe) in a compound. The general pattern: A + BC → AC + B.',
    },
    {
      id: 'unit-09-reactions-q-02',
      question: 'Balance the equation: __ Al + __ O₂ → __ Al₂O₃',
      options: [
        '2 Al + 3 O₂ → 2 Al₂O₃',
        '4 Al + 3 O₂ → 2 Al₂O₃',
        '2 Al + 2 O₂ → Al₂O₃',
        '4 Al + 2 O₂ → 2 Al₂O₃',
      ],
      correctIndex: 1,
      explanation: '4Al + 3O₂ → 2Al₂O₃. Check: Left: 4 Al, 6 O. Right: 2×2=4 Al, 2×3=6 O. ✓ Remember: change only coefficients, never subscripts.',
    },
    {
      id: 'unit-09-reactions-q-03',
      question: 'Will silver (Ag) react with a hydrochloric acid (HCl) solution?',
      options: [
        'Yes — all metals react with acids',
        'Yes — Ag produces silver chloride',
        'No — Ag is below H in the reactivity series and will not displace H',
        'No — because Ag and Cl don\'t have opposite charges',
      ],
      correctIndex: 2,
      explanation: 'Ag is BELOW hydrogen in the reactivity series. Only metals ABOVE H react with acids to produce H₂ gas. Since Ag < H in reactivity, it cannot displace hydrogen from HCl.',
    },
    {
      id: 'unit-09-reactions-q-04',
      question: 'What are the products of combustion of propane (C₃H₈)?',
      options: [
        'CO + H₂',
        'CO₂ + H₂O',
        'C + H₂O',
        'CO₂ + H₂',
      ],
      correctIndex: 1,
      explanation: 'Complete combustion of any hydrocarbon always produces CO₂ and H₂O. C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. The carbon becomes CO₂; the hydrogen becomes H₂O.',
    },
    {
      id: 'unit-09-reactions-q-05',
      question: 'What type of reaction is: 2SO₂ + O₂ → 2SO₃?',
      options: [
        'Decomposition',
        'Synthesis',
        'Single Displacement',
        'Combustion',
      ],
      correctIndex: 1,
      explanation: 'Synthesis (combination): two or more reactants combine to form ONE product. Here, SO₂ and O₂ join to form SO₃. General pattern: A + B → AB.',
    },
    {
      id: 'unit-09-reactions-q-06',
      question: 'In a double displacement reaction, what causes bubbles to appear in the products?',
      options: [
        'A precipitate forms',
        'A gas product is formed',
        'The temperature increased',
        'A color change occurred',
      ],
      correctIndex: 1,
      explanation: 'Bubbles in the solution are caused by a GAS product forming (state symbol: (g) or ↑). For example, if the product is CO₂(g) or H₂(g), you would observe bubbling.',
    },
    {
      id: 'unit-09-reactions-q-07',
      question: 'Predict whether this single displacement will occur: Cu + AgNO₃ → ?',
      options: [
        'No reaction — Cu is below Ag in the reactivity series',
        'Yes — Cu is above Ag and displaces Ag: Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag',
        'Yes — Cu is more electronegative than Ag',
        'No reaction — Cu and Ag are both metals',
      ],
      correctIndex: 1,
      explanation: 'Cu is ABOVE Ag in the reactivity series (Cu > Ag). Therefore, Cu CAN displace Ag from silver nitrate solution. Products: Cu(NO₃)₂ + 2Ag (solid silver metal deposits).',
    },
    {
      id: 'unit-09-reactions-q-08',
      question: 'Which symbol above/below the reaction arrow indicates that heat is required?',
      options: [
        'A capital H',
        'Δ (delta)',
        '(aq)',
        'P',
      ],
      correctIndex: 1,
      explanation: 'The symbol Δ (delta, the Greek capital letter) written above or below the reaction arrow indicates that heat must be applied to drive the reaction. It represents thermal energy input.',
    },
    {
      id: 'unit-09-reactions-q-09',
      question: 'What type of reaction is: 2KClO₃ → 2KCl + 3O₂?',
      options: [
        'Synthesis',
        'Decomposition',
        'Single Displacement',
        'Combustion',
      ],
      correctIndex: 1,
      explanation: 'Decomposition: one compound (KClO₃) breaks down into two simpler substances (KCl and O₂). The pattern AB → A + B is the hallmark of decomposition.',
    },
    {
      id: 'unit-09-reactions-q-10',
      question: 'In the reaction: BaCl₂(aq) + Na₂SO₄(aq) → 2NaCl(aq) + BaSO₄(s), what is the (s) product called?',
      options: [
        'A catalyst',
        'A reactant',
        'A precipitate',
        'An aqueous product',
      ],
      correctIndex: 2,
      explanation: 'BaSO₄(s) is a precipitate — an insoluble solid that forms when two aqueous solutions react. When Ba²⁺ and SO₄²⁻ combine, they form an insoluble compound that "falls out" of solution.',
    },
    {
      id: 'unit-09-reactions-q-11',
      question: 'Does the following single displacement reaction occur? Pb + MgCl₂ → PbCl₂ + Mg',
      options: [
        'Yes — Pb is above Mg in the reactivity series',
        'No — Pb is BELOW Mg in the reactivity series',
        'Yes — lead is a heavy metal and more reactive',
        'No — Pb and Mg cannot react',
      ],
      correctIndex: 1,
      explanation: 'NO reaction occurs. Mg is much higher in the reactivity series than Pb. A metal can only displace metals BELOW it. Pb is below Mg, so Pb cannot displace Mg from MgCl₂.',
    },
  ],
};
