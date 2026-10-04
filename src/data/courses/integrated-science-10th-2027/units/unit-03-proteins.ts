import type { Unit } from '@/types/study';

export const unit03Proteins: Unit = {
  id: 'unit-03-proteins',
  number: 3,
  title: 'Proteins',
  description: 'Amino acids, peptide bonds, and the four levels of protein structure: primary, secondary, tertiary, and quaternary.',
  notes: [
    {
      heading: 'Amino Acids & Peptide Bonds',
      content: 'Proteins are polymers of amino acids. Every amino acid has a central carbon bonded to an amino group (–NH₂), a carboxyl group (–COOH), a hydrogen, and a variable side chain (R group). The side chain gives each amino acid its unique properties; some are polar, some non-polar, some contain sulfur or a hydroxyl.',
      bullets: [
        'Amino acids are joined by peptide bonds (formed by dehydration synthesis)',
        'A chain of amino acids is a polypeptide',
        'Proteins contain C, H, O, N, and sometimes S',
        'Some proteins have both hydrophobic and hydrophilic regions',
      ],
    },
    {
      heading: 'Four Levels of Protein Structure',
      content: 'Protein shape determines function, and shape is built in four levels.',
      bullets: [
        'Primary: the sequence of amino acids. Bonds are peptide bonds. DNA directly codes for this level',
        'Secondary: local folding into an alpha helix or beta pleated sheet',
        'Tertiary: the overall 3D folding of one polypeptide. Held by hydrophobic interactions, disulfide bridges, and intermolecular forces (R-group interactions)',
        'Quaternary: several polypeptide chains linked together (e.g., hemoglobin has four chains)',
      ],
    },
    {
      heading: 'Enzymes',
      content: 'Enzymes are proteins that speed up chemical reactions. Like all proteins, they contain C, H, O, and N, and many contain S. Their function depends on their 3D shape.',
    },
  ],
  flashcards: [
    {
      id: 'unit-03-proteins-fc-01',
      front: 'What is the monomer of proteins?',
      back: 'Amino acid',
    },
    {
      id: 'unit-03-proteins-fc-02',
      front: 'What are the four parts attached to the central carbon of an amino acid?',
      back: 'An amino group (–NH₂), a carboxyl group (–COOH), a hydrogen atom, and a variable side chain (R group).',
    },
    {
      id: 'unit-03-proteins-fc-03',
      front: 'What type of bond links amino acids together?',
      back: 'Peptide bonds (formed by dehydration synthesis).',
    },
    {
      id: 'unit-03-proteins-fc-04',
      front: 'Primary structure of a protein',
      back: 'The sequence of amino acids. Bonds at this level are peptide bonds. DNA directly codes for this level.',
    },
    {
      id: 'unit-03-proteins-fc-05',
      front: 'Secondary structure of a protein',
      back: 'Local folding into an alpha helix or a beta pleated sheet.',
    },
    {
      id: 'unit-03-proteins-fc-06',
      front: 'Tertiary structure of a protein',
      back: 'The overall 3D folding of a single polypeptide, held by hydrophobic interactions, disulfide bridges, and intermolecular forces.',
    },
    {
      id: 'unit-03-proteins-fc-07',
      front: 'Quaternary structure of a protein',
      back: 'Several polypeptide chains linked together (example: hemoglobin has four chains).',
    },
    {
      id: 'unit-03-proteins-fc-08',
      front: 'Which level of protein structure can be either an alpha helix or a beta pleated sheet?',
      back: 'Secondary',
    },
    {
      id: 'unit-03-proteins-fc-09',
      front: 'Which level of protein structure does DNA directly code for?',
      back: 'Primary (the amino acid sequence).',
    },
    {
      id: 'unit-03-proteins-fc-10',
      front: 'Which bonds/interactions hold the tertiary structure together?',
      back: 'Hydrophobic interactions, disulfide bridges, and intermolecular forces.',
    },
    {
      id: 'unit-03-proteins-fc-11',
      front: 'Which elements are found in proteins and enzymes?',
      back: 'C, H, O, N, and S (sulfur in some amino acids).',
    },
    {
      id: 'unit-03-proteins-fc-12',
      front: 'What is a dipeptide?',
      back: 'Two amino acids joined by a peptide bond.',
    },
  ],
  quiz: [
    {
      id: 'unit-03-proteins-q-01',
      question: 'Which level of protein structure can be either an alpha helix or a beta pleated sheet?',
      options: ['Primary', 'Secondary', 'Tertiary', 'Quaternary'],
      correctIndex: 1,
      explanation: 'Alpha helices and beta pleated sheets are the two forms of secondary structure.',
    },
    {
      id: 'unit-03-proteins-q-02',
      question: 'At which level of protein structure are the bonds called peptide bonds?',
      options: ['Quaternary', 'Tertiary', 'Secondary', 'Primary'],
      correctIndex: 3,
      explanation: 'Peptide bonds link amino acids in the primary structure sequence.',
    },
    {
      id: 'unit-03-proteins-q-03',
      question: 'Hydrophobic interactions, disulfide bridges, and intermolecular forces hold which level of protein structure together?',
      options: ['Primary', 'Secondary', 'Tertiary', 'None of the levels'],
      correctIndex: 2,
      explanation: 'These R-group interactions fold the whole polypeptide into its tertiary structure.',
    },
    {
      id: 'unit-03-proteins-q-04',
      question: 'Hemoglobin is made of four polypeptide chains linked together. This is which level of structure?',
      options: ['Primary', 'Secondary', 'Tertiary', 'Quaternary'],
      correctIndex: 3,
      explanation: 'Multiple polypeptide chains assembled together make up quaternary structure.',
    },
    {
      id: 'unit-03-proteins-q-05',
      question: 'DNA directly codes for which level of protein structure?',
      options: ['Primary', 'Secondary', 'Tertiary', 'Quaternary'],
      correctIndex: 0,
      explanation: 'DNA specifies the amino acid sequence (primary structure); the higher levels of folding follow from that sequence.',
    },
    {
      id: 'unit-03-proteins-q-06',
      question: 'Which part of an amino acid is different from one amino acid to another?',
      options: ['The amino group', 'The carboxyl group', 'The side chain (R group)', 'The central carbon'],
      correctIndex: 2,
      explanation: 'All amino acids share the amino and carboxyl groups; the side chain is the variable part.',
    },
    {
      id: 'unit-03-proteins-q-07',
      question: 'Which set of elements is found in proteins?',
      options: ['C, H, O only', 'C, H, O, N (and sometimes S)', 'C, H, O, N, P only', 'C, H, O, P only'],
      correctIndex: 1,
      explanation: 'Proteins contain C, H, O, and N, and some include sulfur. Phosphorus is characteristic of nucleic acids and phospholipids.',
    },
    {
      id: 'unit-03-proteins-q-08',
      question: 'A peptide bond is formed by which type of reaction?',
      options: ['Hydrolysis', 'Dehydration synthesis', 'Combustion', 'Neutralization'],
      correctIndex: 1,
      explanation: 'Joining amino acids is a dehydration synthesis reaction that releases water.',
    },
  ],
};
