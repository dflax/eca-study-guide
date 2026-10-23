import type { Unit } from '@/types/study';

export const unit01EnergyAndAtp: Unit = {
  id: 'unit-01-energy-and-atp',
  number: 1,
  title: 'Energy, Reactions & ATP',
  description: 'Reading energy-change graphs, predicting which reactions need or release energy, and why ATP is the cell\'s energy currency.',
  notes: [
    {
      heading: 'Reading Energy-Change Graphs',
      content: 'A reaction graph plots potential energy (up and down) against time or reaction progress (left to right). The reactants start on the left at their initial energy, and the products end on the right at their final energy. The energy change is always final minus initial (Jack\'s note: change = final - initial).',
      bullets: [
        'Products LOWER than reactants: final - initial is negative, so energy is released. This is exothermic (a negative change in potential energy)',
        'Products HIGHER than reactants: final - initial is positive, so energy must be put in. This is endothermic (a positive change in potential energy)',
        'Jack\'s graph examples: ATP (high) to ADP (low) is exothermic; ADP to ATP is endothermic',
        'One step vs. multiple steps: a graph with a single drop or climb from reactants to products is one step. A graph with several rises and dips in between is a multi-step reaction',
        'The overall change still only depends on the start and the end, even when there are many steps in between',
      ],
    },
    {
      heading: 'Big vs. Small: Which Direction Needs Energy?',
      content: 'You can predict whether a reaction needs energy or releases energy just by asking whether the molecules are getting bigger or smaller.',
      bullets: [
        'Big molecules broken into small molecules: RELEASES energy (and happens spontaneously)',
        'Small molecules built into big molecules: REQUIRES an energy input',
        'Building a big molecule from small ones generally means the products are less energetically stable, and it is ALWAYS less entropically favorable because it increases order in the universe',
        'Breaking a big molecule into small ones generally means the products are more energetically stable, and it is ALWAYS entropically favorable because it increases disorder',
        'Entropy wording to remember: more order = less entropy-favorable; more disorder = entropy-favorable',
      ],
    },
    {
      heading: 'Dehydration Synthesis vs. Hydrolysis',
      content: 'These are the two reactions that build and break big molecules. Look at what happens to the water. In the Review Sheet Q19 picture, Process A is dehydration synthesis and Process B is hydrolysis.',
      bullets: [
        'Dehydration synthesis: smaller molecules are joined into a bigger one and a water molecule is released (dehydrate = lose water). It likely REQUIRES energy',
        'Hydrolysis: a water molecule is added to split a big molecule into smaller ones (hydro = water, lysis = split). It likely RELEASES energy',
        'Quick trick: water leaving = building up = energy in. Water used up = breaking down = energy out',
      ],
      image: {
        src: '/images/integrated-science-10th-2027/unit-02-q19-dehydration-hydrolysis.jpg',
        alt: 'Two panels. A: two short molecules join into one longer molecule while a water molecule leaves. B: a water molecule is added to a long molecule and it splits into two shorter ones.',
        caption: 'Review Sheet Q19: Process A joins small molecules into a big one (dehydration synthesis, needs energy). Process B splits a big molecule using water (hydrolysis, releases energy).',
      },
    },
    {
      heading: 'Why ATP Is Good Energy Currency',
      content: 'ATP stands for adenosine triphosphate. It has three phosphate groups in a row, and each phosphate carries a negative (-) charge. Those negative charges are crowded close together and repel each other, which makes ATP unstable. An unstable molecule has HIGH potential energy.',
      bullets: [
        'ATP to ADP + a phosphate: breaks an unstable molecule into more stable products, so energy is released (exothermic)',
        'The released energy is used for cellular work',
        'ADP + phosphate to ATP: crowds the charges together again, so it takes energy (endothermic). The cell recharges ADP back into ATP',
        'Jack calls ATP "cellular cash": it is quick to spend, and it gets recycled again and again',
        'ATP is too unstable to be used for long-term storage, which is why cells keep long-term energy in more stable molecules',
      ],
    },
    {
      heading: 'Obtain, Store, Use: Jack\'s Money Analogy',
      content: 'Cells have three energy jobs, and Jack compares them to money.',
      bullets: [
        'OBTAIN: like money from sales, labor, or an inheritance. Cells obtain energy from food, or make it in photosynthesis',
        'STORE: like bonds, stocks, and real estate. Stored value that must be converted into a spendable form before it can be used. In cells: carbohydrates (short-term) and lipids/fats (long-term)',
        'USE: like cash, available for transactions. In cells: ATP',
        'Chain to remember: food, use sunlight to build them, lipids (fats) and carbohydrates, then ATP',
        'Cellular respiration converts stored energy into ATP',
        'Carbohydrates are the primary source of SHORT-term energy; lipids (fats) are LONG-term energy storage',
      ],
    },
    {
      heading: 'Energy Transfers & the Sun',
      content: 'Every time energy is transferred from one form or molecule to another, some of it is lost (Jack\'s note: all energy transfers lose some energy). That means an ecosystem cannot run on recycled energy alone; it needs a steady input from outside.',
      bullets: [
        'The Sun is the external input of energy to ecosystems',
        'Photosynthesis captures that light energy and builds it into big molecules like glucose (a 6-carbon sugar, C₆H₁₂O₆)',
        'Cellular respiration then turns glucose (carbohydrates) into ATP that cells can spend',
        'Autotrophs make their own food; heterotrophs get energy by breaking down big molecules they take in',
      ],
    },
    {
      heading: 'What the Study Guide Says You Must Know',
      content: 'These are the teacher\'s "You should know" items that belong to this unit.',
      bullets: [
        'Interpret a graph of initial vs. final energy of reactants and products: gain or loss of energy, one step or multiple steps',
        'Predict whether a reaction needs energy input or releases energy based on whether molecules are getting bigger or smaller',
        'Explain why ATP is an effective molecule for cells to use as energy currency',
        'Know which class of molecules is the primary source of SHORT-term energy (carbohydrates) and which is LONG-term energy storage (lipids/fats)',
      ],
    },
  ],
  flashcards: [
    {
      id: 'unit-01-energy-and-atp-fc-01',
      front: 'How do you calculate the change in energy of a reaction?',
      back: 'Change = final - initial (energy of the products minus energy of the reactants).',
    },
    {
      id: 'unit-01-energy-and-atp-fc-02',
      front: 'On an energy graph, what do the axes show?',
      back: 'Potential energy (vertical) versus time or reaction progress (horizontal).',
    },
    {
      id: 'unit-01-energy-and-atp-fc-03',
      front: 'Exothermic reaction',
      back: 'Products are lower in potential energy than reactants. The change is negative and energy is released.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-04',
      front: 'Endothermic reaction',
      back: 'Products are higher in potential energy than reactants. The change is positive and energy must be put in.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-05',
      front: 'A graph shows the products ending higher than the reactants. What does that tell you?',
      back: 'Final - initial is positive, so the reaction is endothermic and needs an energy input.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-06',
      front: 'How can you tell a one-step reaction from a multi-step reaction on a graph?',
      back: 'One step is a single drop or climb from reactants to products. Multiple steps show several rises and dips along the way.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-07',
      front: 'Does the number of steps change the overall energy change?',
      back: 'No. The overall change depends only on the final energy minus the initial energy.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-08',
      front: 'Breaking big molecules into small molecules: energy released or required?',
      back: 'Released. It happens spontaneously and the products are more energetically stable.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-09',
      front: 'Building big molecules from small molecules: energy released or required?',
      back: 'Required. An energy input is needed because the products are less energetically stable.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-10',
      front: 'Entropy wording: building a big molecule from small ones',
      back: 'It is always less entropically favorable because it increases order in the universe.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-11',
      front: 'Entropy wording: breaking a big molecule into small ones',
      back: 'It is always entropically favorable because it increases disorder.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-12',
      front: 'Dehydration synthesis',
      back: 'Smaller molecules are joined into a bigger one and water is released. It requires energy.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-13',
      front: 'Hydrolysis',
      back: 'Water is used to split a big molecule into smaller ones. It releases energy.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-14',
      front: 'Review Sheet Q19: Process A has two molecules joining while H₂O leaves. What is it?',
      back: 'Dehydration synthesis, which likely requires energy.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-15',
      front: 'Review Sheet Q19: Process B has H₂O added and a molecule splitting. What is it?',
      back: 'Hydrolysis, which likely releases energy.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-16',
      front: 'What does ATP stand for, and how many phosphates does it have?',
      back: 'Adenosine triphosphate. It has three phosphate groups.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-17',
      front: 'Why is ATP unstable (high in potential energy)?',
      back: 'Its three phosphates each carry a negative charge, and these charges are crowded close together and repel each other.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-18',
      front: 'Why does converting ATP to ADP release energy?',
      back: 'It breaks an unstable molecule into more stable products. The released energy is used for cellular work.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-19',
      front: 'On an energy graph, how do ATP to ADP and ADP to ATP look?',
      back: 'ATP to ADP drops (exothermic, negative change). ADP to ATP climbs (endothermic, positive change).',
    },
    {
      id: 'unit-01-energy-and-atp-fc-20',
      front: 'Why is ATP called "cellular cash"?',
      back: 'Like cash, it is the ready-to-spend form of energy that cells use directly for work.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-21',
      front: 'Jack\'s money analogy: what are the three energy jobs?',
      back: 'Obtain (money coming in = energy from food or photosynthesis), Store (bonds, stocks = carbohydrates and lipids), Use (cash = ATP).',
    },
    {
      id: 'unit-01-energy-and-atp-fc-22',
      front: 'Which class of molecules is the primary source of short-term energy?',
      back: 'Carbohydrates.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-23',
      front: 'Which class of molecules is used for long-term energy storage?',
      back: 'Lipids (fats).',
    },
    {
      id: 'unit-01-energy-and-atp-fc-24',
      front: 'Why is ATP not used for long-term energy storage?',
      back: 'ATP is too unstable. Cells keep long-term energy in more stable molecules like fats and make ATP when they need it.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-25',
      front: 'What happens to energy every time it is transferred?',
      back: 'Some energy is lost. All energy transfers lose some energy.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-26',
      front: 'What is the external input of energy to ecosystems?',
      back: 'The Sun.',
    },
    {
      id: 'unit-01-energy-and-atp-fc-27',
      front: 'What does cellular respiration do in terms of energy storage and use?',
      back: 'It converts stored energy (glucose, from carbohydrates) into ATP, the usable form.',
    },
  ],
  quiz: [
    {
      id: 'unit-01-energy-and-atp-q-01',
      question: 'An energy graph shows the products sitting lower than the reactants. Which statement is correct?',
      options: [
        'Final - initial is positive, so the reaction is endothermic and absorbs energy',
        'Final - initial is negative, so the reaction is exothermic and releases energy',
        'Final - initial is zero, so the reaction neither absorbs nor releases energy',
        'Final - initial is negative, so the reaction is endothermic and absorbs energy',
      ],
      correctIndex: 1,
      explanation: 'Energy change is final minus initial. Products lower than reactants gives a negative change, which is an exothermic reaction that releases energy.',
    },
    {
      id: 'unit-01-energy-and-atp-q-02',
      question: 'On a potential energy graph, converting ADP and a phosphate into ATP would look like',
      options: [
        'a drop from high to low energy, with a negative change in potential energy',
        'a flat line, because ATP and ADP hold exactly the same amount of energy in storage',
        'a single downhill step that releases energy for the cell to use for work',
        'a climb from low to high energy, with a positive change in potential energy',
      ],
      correctIndex: 3,
      explanation: 'Making ATP crowds the negative charges together, so energy must be put in. The products are higher than the reactants, giving a positive change (endothermic).',
    },
    {
      id: 'unit-01-energy-and-atp-q-03',
      question: 'A reaction builds a large molecule out of several small ones. What should you predict?',
      options: [
        'It releases energy, because larger molecules are always more stable',
        'It releases energy and increases disorder in the universe',
        'It requires an energy input and increases order',
        'It requires no energy because it happens spontaneously',
      ],
      correctIndex: 2,
      explanation: 'Small to big molecules requires energy input. The products are less energetically stable and the process increases order, so it is less entropically favorable.',
    },
    {
      id: 'unit-01-energy-and-atp-q-04',
      question: 'Which process uses a water molecule to split a large molecule into smaller ones?',
      options: [
        'Hydrolysis',
        'Dehydration synthesis',
        'Photosynthesis',
        'Fermentation',
      ],
      correctIndex: 0,
      explanation: 'Hydrolysis uses water to break a bond and split a big molecule. It generally releases energy. Dehydration synthesis does the opposite, joining molecules and releasing water.',
    },
    {
      id: 'unit-01-energy-and-atp-q-05',
      question: 'In a diagram, two short molecules join into one longer molecule while a water molecule leaves. What is this, and what does it likely need?',
      options: [
        'Hydrolysis, which likely releases a lot of energy',
        'Hydrolysis, which likely requires an energy input',
        'Dehydration synthesis, which likely releases energy',
        'Dehydration synthesis, which likely requires energy',
      ],
      correctIndex: 3,
      explanation: 'Joining small molecules with the loss of water is dehydration synthesis, and building bigger molecules generally requires an energy input.',
    },
    {
      id: 'unit-01-energy-and-atp-q-06',
      question: 'Why does breaking ATP into ADP and a phosphate release energy?',
      options: [
        'It breaks an unstable molecule into more stable products',
        'It joins two stable molecules into a larger, more ordered one',
        'It removes the negative charges from the cell entirely',
        'It adds a fourth phosphate to relieve the crowding',
      ],
      correctIndex: 0,
      explanation: 'The three crowded negative phosphates make ATP unstable. Splitting off a phosphate gives more stable products, and the difference in energy is released for cellular work.',
    },
    {
      id: 'unit-01-energy-and-atp-q-07',
      question: 'In Jack\'s money analogy, which molecule plays the role of cash that is ready to spend?',
      options: [
        'Glucose',
        'Lipids',
        'Starch',
        'ATP',
      ],
      correctIndex: 3,
      explanation: 'ATP is the spendable, usable form of energy. Carbohydrates and lipids are like bonds, stocks, and real estate: stored value that must be converted before use.',
    },
    {
      id: 'unit-01-energy-and-atp-q-08',
      question: 'A hiker eats a snack for quick energy at the start of the day, while her body also draws on stored body fat over many hours. Which pairing is correct?',
      options: [
        'Lipids for the quick energy, carbohydrates for the long-term supply',
        'Carbohydrates for the quick energy, lipids for the long-term supply',
        'Carbohydrates for both jobs, since lipids cannot be broken down for energy',
        'ATP for the long-term supply, carbohydrates for the quick energy',
      ],
      correctIndex: 1,
      explanation: 'Carbohydrates are the primary short-term energy source and lipids (fats) are long-term storage. ATP is too unstable to store energy for long.',
    },
    {
      id: 'unit-01-energy-and-atp-q-09',
      question: 'Which statement about energy transfers in an ecosystem is correct?',
      options: [
        'Energy is perfectly recycled, so no outside energy is needed',
        'Each transfer gains a little energy, so the total grows over time',
        'Every transfer loses some energy, so ecosystems need an outside energy input',
        'Only transfers that involve ATP lose energy along the way',
      ],
      correctIndex: 2,
      explanation: 'All energy transfers lose some energy, so ecosystems cannot run on recycled energy alone. The Sun supplies the external input.',
    },
    {
      id: 'unit-01-energy-and-atp-q-10',
      question: 'A graph of a reaction shows several rises and dips between the start and finish, ending at a lower energy than it began. How should it be described?',
      options: [
        'A one-step endothermic reaction',
        'A multi-step exothermic reaction overall',
        'A multi-step endothermic reaction overall',
        'A one-step exothermic reaction',
      ],
      correctIndex: 1,
      explanation: 'Several rises and dips mean multiple steps. The overall change is final minus initial, which is negative here, so the reaction is exothermic overall.',
    },
  ],
};
