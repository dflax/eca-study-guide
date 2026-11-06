import type { Unit } from '@/types/study';

export const unit05Carbohydrates: Unit = {
  id: 'unit-05-carbohydrates',
  number: 5,
  title: 'Carbohydrates',
  description: 'Monosaccharides, the 1:2:1 ratio, and how structural and energy-storage polysaccharides differ.',
  notes: [
    {
      heading: 'Carbohydrate Basics',
      content: 'Carbohydrates are made of carbon, hydrogen, and oxygen, with hydroxyl (–OH) groups. The monomer is the monosaccharide (for example, glucose). Monosaccharides are linked by dehydration synthesis into disaccharides and polysaccharides.',
      bullets: [
        'Elements: C, H, O only',
        'C, H, and O are present in a 1:2:1 ratio (e.g., glucose C₆H₁₂O₆)',
        'Carbohydrates are used for short-term energy (glucose)',
        'Polysaccharides can store energy or provide structure (plant cell walls)',
      ],
    },
    {
      heading: 'Building & Breaking Down Carbohydrates',
      content: 'A monosaccharide is a single sugar (glucose, C₆H₁₂O₆). Two monosaccharides joined together make a disaccharide (C₁₂H₂₂O₁₁ when built from two glucoses), and long chains make a polysaccharide. Monomers are linked by dehydration synthesis, which releases one water molecule for each bond made. Hydrolysis splits the bonds again and uses one water molecule per bond.',
      bullets: [
        'Dehydration synthesis: water is a PRODUCT. Joining n sugars releases n − 1 water molecules (2 glucoses → 1 water; 10 glucoses → 9 water)',
        'Hydrolysis: water is a REACTANT. Splitting a disaccharide into two monosaccharides uses 1 water',
        'Hydrolysis of starch ultimately gives glucose monomers',
        'Two glucoses (C₆H₁₂O₆ + C₆H₁₂O₆) minus one water gives C₁₂H₂₂O₁₁',
      ],
    },
    {
      heading: 'Structural vs. Energy-Storage Polysaccharides',
      content: 'The same monomer (glucose) can build very different polysaccharides depending on how the monomers are arranged.',
      bullets: [
        'Structural polysaccharides (e.g., cellulose in plant cell walls): linear, alternating structure. The bulky CH₂OH groups extend on alternating sides of the rings',
        'Energy storage polysaccharides (e.g., starch, glycogen): helical structure. The bulky CH₂OH groups extend on the same side of the rings',
      ],
    },
  ],
  flashcards: [
    {
      id: 'unit-05-carbohydrates-fc-01',
      front: 'What is the monomer of carbohydrates?',
      back: 'Monosaccharide (for example, glucose).',
    },
    {
      id: 'unit-05-carbohydrates-fc-02',
      front: 'What ratio of C : H : O is found in carbohydrates?',
      back: '1 : 2 : 1',
    },
    {
      id: 'unit-05-carbohydrates-fc-03',
      front: 'Structural polysaccharides have what kind of structure?',
      back: 'Linear, alternating. The bulky CH₂OH groups extend on alternating sides of the rings.',
    },
    {
      id: 'unit-05-carbohydrates-fc-04',
      front: 'Energy storage polysaccharides have what kind of structure?',
      back: 'Helical. The bulky CH₂OH groups extend on the same side of the rings.',
    },
    {
      id: 'unit-05-carbohydrates-fc-05',
      front: 'Which macromolecule makes up plant cell walls?',
      back: 'Carbohydrates (the structural polysaccharide cellulose).',
    },
    {
      id: 'unit-05-carbohydrates-fc-06',
      front: 'Which macromolecule is used for short-term energy?',
      back: 'Carbohydrates (like glucose).',
    },
    {
      id: 'unit-05-carbohydrates-fc-07',
      front: 'Which elements are in carbohydrates and glucose?',
      back: 'Carbon, hydrogen, and oxygen only.',
    },
    {
      id: 'unit-05-carbohydrates-fc-08',
      front: 'Which functional group is found in carbohydrates?',
      back: 'Hydroxyl / alcohol (–OH).',
    },
    {
      id: 'unit-05-carbohydrates-fc-09',
      front: 'How many water molecules are released when n monosaccharides are joined into one chain?',
      back: 'n − 1 water molecules (dehydration synthesis releases one water per bond). Two glucoses make a disaccharide and release 1 water.',
    },
    {
      id: 'unit-05-carbohydrates-fc-10',
      front: 'Monosaccharide vs. disaccharide vs. polysaccharide',
      back: 'Monosaccharide: one sugar (glucose, C₆H₁₂O₆). Disaccharide: two sugars joined (C₁₂H₂₂O₁₁). Polysaccharide: a long chain of sugars (starch, glycogen, cellulose). Hydrolysis breaks them back into monosaccharides.',
    },
  ],
  quiz: [
    {
      id: 'unit-05-carbohydrates-q-01',
      question: 'In carbohydrates, the elements C, H, and O are present in what ratio?',
      options: ['1:1:1', '1:2:1', '2:1:2', '1:2:2'],
      correctIndex: 1,
      explanation: 'Carbohydrates have a C:H:O ratio of 1:2:1 (glucose = C₆H₁₂O₆).',
    },
    {
      id: 'unit-05-carbohydrates-q-02',
      question: 'Which describes the structure of structural polysaccharides?',
      options: [
        'Helical, with CH₂OH groups on the same side',
        'Linear and alternating, with CH₂OH groups on alternating sides',
        'Branched ring of phosphates',
        'Four fused rings',
      ],
      correctIndex: 1,
      explanation: 'Structural polysaccharides are linear and alternating, with CH₂OH on alternating sides of the rings.',
    },
    {
      id: 'unit-05-carbohydrates-q-03',
      question: 'Energy storage polysaccharides have what structure?',
      options: [
        'Linear and alternating',
        'Helical, with CH₂OH groups on the same side of the rings',
        'Helical, with CH₂OH groups on alternating sides',
        'Linear, with CH₂OH groups on the same side',
      ],
      correctIndex: 1,
      explanation: 'Storage polysaccharides coil into a helix because the CH₂OH groups are all on the same side.',
    },
    {
      id: 'unit-05-carbohydrates-q-04',
      question: 'What is the monomer of a carbohydrate?',
      options: ['Nucleotide', 'Amino acid', 'Fatty acid', 'Monosaccharide'],
      correctIndex: 3,
      explanation: 'Carbohydrates are polymers of monosaccharides.',
    },
    {
      id: 'unit-05-carbohydrates-q-05',
      question: 'Which macromolecule makes up plant cell walls?',
      options: ['Carbohydrate', 'Lipid', 'Protein', 'Nucleic acid'],
      correctIndex: 0,
      explanation: 'Plant cell walls are made of a structural carbohydrate (cellulose).',
    },
    {
      id: 'unit-05-carbohydrates-q-06',
      question: 'Which functional group is characteristic of carbohydrates?',
      options: ['Amino', 'Carboxyl', 'Phosphate', 'Hydroxyl'],
      correctIndex: 3,
      explanation: 'Carbohydrates have many –OH (hydroxyl/alcohol) groups, which make them polar.',
    },
  ],
};
