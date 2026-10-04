import type { Unit } from '@/types/study';

export const unit06Lipids: Unit = {
  id: 'unit-06-lipids',
  number: 6,
  title: 'Lipids',
  description: 'Fats, steroids, phospholipids and the cell membrane, saturated vs. unsaturated, and cis vs. trans fatty acids.',
  notes: [
    {
      heading: 'Types of Lipids',
      content: 'Lipids are largely non-polar (hydrophobic) molecules made mostly of carbon and hydrogen. This unit covers three kinds.',
      bullets: [
        'Fats (triglycerides): a glycerol backbone with three fatty acid tails. Used for long-term energy storage. Contain C, H, O',
        'Steroids: four fused carbon rings plus a side chain. Serve primarily as signaling molecules (hormones). Contain C, H, O',
        'Phospholipids: make up the cell membrane. Contain C, H, O, P',
      ],
    },
    {
      heading: 'Phospholipids & the Cell Membrane',
      content: 'A phospholipid has both hydrophilic and hydrophobic parts. The polar head group (containing phosphate) is oriented toward the cellular environment because it favorably interacts with the water-based environment inside and outside the cell. The non-polar fatty acid tails face inward, away from water.',
      bullets: [
        'Polar head (phosphate): hydrophilic, faces the watery surroundings',
        'Non-polar tails: hydrophobic, tucked into the middle of the membrane',
        'Only small non-polar molecules can diffuse passively across the cell membrane',
      ],
    },
    {
      heading: 'Saturated vs. Unsaturated Fatty Acids',
      content: 'Saturated fatty acids have only single bonds between carbons, so they hold the maximum number of hydrogen atoms.\n\nUnsaturated fatty acids have one or more double bonds between carbons and therefore fewer hydrogen atoms.',
      bullets: [
        'Cis-unsaturated: hydrogens removed from the SAME side of the chain, creating a kink/bend',
        'Trans-unsaturated: hydrogens removed from OPPOSITE sides of the chain, so the chain stays straight',
        'Cis-unsaturated fatty acids generally have lower melting points (liquid at room temperature) because the kinks prevent tight packing',
      ],
    },
  ],
  flashcards: [
    {
      id: 'unit-06-lipids-fc-01',
      front: 'What structure do steroids have, and what do they serve primarily as?',
      back: 'Four fused carbon rings and a side chain; they serve primarily as signaling molecules.',
    },
    {
      id: 'unit-06-lipids-fc-02',
      front: 'What type of molecules can diffuse passively across a cell membrane?',
      back: 'Small non-polar molecules.',
    },
    {
      id: 'unit-06-lipids-fc-03',
      front: 'Which region of a phospholipid is oriented toward the cellular environment? Why?',
      back: 'The polar head group (phosphate), because it favorably interacts with the water-based intracellular environment.',
    },
    {
      id: 'unit-06-lipids-fc-04',
      front: 'Saturated vs. unsaturated fatty acid',
      back: 'Saturated fatty acids have only single bonds between carbons. Unsaturated fatty acids have one or more double bonds between carbons and fewer hydrogen atoms.',
    },
    {
      id: 'unit-06-lipids-fc-05',
      front: 'Cis-unsaturated vs. trans-unsaturated fatty acids',
      back: 'Cis: hydrogens removed from the same side of the chain, so the chain is kinked/bent. Trans: hydrogens removed from opposite sides, so the chain is straight.',
    },
    {
      id: 'unit-06-lipids-fc-06',
      front: 'Which generally has the lower melting point: cis- or trans-unsaturated fatty acids?',
      back: 'Cis-unsaturated fatty acids (liquid at room temperature) — the kinks keep them from packing tightly.',
    },
    {
      id: 'unit-06-lipids-fc-07',
      front: 'What is the function of fats (triglycerides)?',
      back: 'Long-term energy storage.',
    },
    {
      id: 'unit-06-lipids-fc-08',
      front: 'Which lipids make up the cell membrane?',
      back: 'Phospholipids.',
    },
    {
      id: 'unit-06-lipids-fc-09',
      front: 'Which elements are in triglycerides and steroids? In phospholipids?',
      back: 'Triglycerides and steroids: C, H, O. Phospholipids: C, H, O, and P.',
    },
    {
      id: 'unit-06-lipids-fc-10',
      front: 'Which lipid has both hydrophobic and hydrophilic properties?',
      back: 'Phospholipids (hydrophilic polar head, hydrophobic tails).',
    },
  ],
  quiz: [
    {
      id: 'unit-06-lipids-q-01',
      question: 'Steroids have a structure comprised of four fused carbon rings and a side chain. What do they serve primarily as?',
      options: ['Long-term energy storage', 'Signaling molecules', 'Genetic code', 'Plant cell walls'],
      correctIndex: 1,
      explanation: 'Steroids (such as hormones) primarily act as signaling molecules.',
    },
    {
      id: 'unit-06-lipids-q-02',
      question: 'What type of molecules can diffuse passively across a cell membrane?',
      options: ['Large polar molecules', 'Ions', 'Small non-polar molecules', 'Charged proteins'],
      correctIndex: 2,
      explanation: 'The interior of the membrane is non-polar, so only small non-polar molecules pass through freely.',
    },
    {
      id: 'unit-06-lipids-q-03',
      question: 'Which region of a phospholipid faces the watery cellular environment?',
      options: [
        'The non-polar fatty acid tails',
        'The polar phosphate head group',
        'The steroid rings',
        'The hydrocarbon chain',
      ],
      correctIndex: 1,
      explanation: 'The polar head favorably interacts with water, while the non-polar tails hide in the middle of the membrane.',
    },
    {
      id: 'unit-06-lipids-q-04',
      question: 'What is the difference between saturated and unsaturated fatty acids?',
      options: [
        'Saturated have double bonds; unsaturated have only single bonds',
        'Saturated have only single bonds; unsaturated have one or more double bonds and fewer hydrogens',
        'Saturated contain nitrogen; unsaturated do not',
        'There is no structural difference',
      ],
      correctIndex: 1,
      explanation: 'Saturated fatty acids are "saturated" with hydrogens and have only single C–C bonds.',
    },
    {
      id: 'unit-06-lipids-q-05',
      question: 'In a trans-unsaturated fatty acid, the hydrogens around the double bond are:',
      options: [
        'On the same side, giving a kinked chain',
        'On opposite sides, giving a straight chain',
        'Replaced by oxygen atoms',
        'Absent entirely',
      ],
      correctIndex: 1,
      explanation: 'Trans means "across": hydrogens are on opposite sides, so the chain stays straight. Cis means the same side (a bend).',
    },
    {
      id: 'unit-06-lipids-q-06',
      question: 'Which generally has a lower melting point (liquid at room temperature)?',
      options: ['Trans-unsaturated fatty acids', 'Cis-unsaturated fatty acids', 'Saturated fatty acids with straight chains', 'All are identical'],
      correctIndex: 1,
      explanation: 'The kinks in cis fatty acids prevent tight packing, lowering the melting point.',
    },
    {
      id: 'unit-06-lipids-q-07',
      question: 'Which lipid is the main structural component of the cell membrane?',
      options: ['Triglycerides', 'Steroids', 'Phospholipids', 'Starch'],
      correctIndex: 2,
      explanation: 'Phospholipids form the cell membrane bilayer.',
    },
    {
      id: 'unit-06-lipids-q-08',
      question: 'A drawing shows a glycerol backbone attached to three long hydrocarbon tails. This is a:',
      options: ['Steroid', 'Fat (triglyceride)', 'Nucleotide', 'Polysaccharide'],
      correctIndex: 1,
      explanation: 'Glycerol plus three fatty acids is a triglyceride (a fat), used for long-term energy storage.',
    },
  ],
};
