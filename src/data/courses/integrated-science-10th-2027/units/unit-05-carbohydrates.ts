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
