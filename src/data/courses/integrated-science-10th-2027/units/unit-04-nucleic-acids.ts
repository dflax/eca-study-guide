import type { Unit } from '@/types/study';

export const unit04NucleicAcids: Unit = {
  id: 'unit-04-nucleic-acids',
  number: 4,
  title: 'Nucleic Acids',
  description: 'Nucleotide structure, DNA base pairing, the sugar-phosphate backbone, and why DNA is read in codons.',
  notes: [
    {
      heading: 'Nucleotides',
      content: 'Nucleic acids (DNA and RNA) are polymers of nucleotides. Each nucleotide has three parts: a 5-carbon sugar, a phosphate group, and a nitrogenous base.',
      bullets: [
        '5-carbon sugar (the pentagon in diagrams)',
        'Phosphate group',
        'Nitrogenous base (this is where the amino group –NH₂ appears in nucleic acids)',
        'Nucleic acids contain C, H, O, N, and P',
        'Nucleic acids carry the genetic code',
      ],
    },
    {
      heading: 'Bonds in DNA',
      content: 'Two different types of bonds hold DNA together.',
      bullets: [
        'The nitrogenous bases of the two strands are held together by hydrogen bonds',
        'The backbone (sugar–phosphate) of DNA and RNA is held together by covalent bonds',
      ],
    },
    {
      heading: 'The Genetic Code: Codons',
      content: 'DNA sequences are often written in groups of three bases (for example 3\' ATA TAT GCT ACT GCA AAG 5\') because DNA is read in codons — three bases at a time. Each codon specifies an amino acid, which is how DNA directly codes for the primary structure of proteins.',
    },
  ],
  flashcards: [
    {
      id: 'unit-04-nucleic-acids-fc-01',
      front: 'What are the three parts of a nucleotide?',
      back: 'A 5-carbon sugar, a phosphate group, and a nitrogenous base.',
    },
    {
      id: 'unit-04-nucleic-acids-fc-02',
      front: 'What are the elements in nucleic acids?',
      back: 'Carbon, hydrogen, oxygen, nitrogen, and phosphorus.',
    },
    {
      id: 'unit-04-nucleic-acids-fc-03',
      front: 'What holds the nitrogenous bases of DNA together across the two strands?',
      back: 'Hydrogen bonds',
    },
    {
      id: 'unit-04-nucleic-acids-fc-04',
      front: 'What holds the backbone of DNA and RNA together?',
      back: 'Covalent bonds',
    },
    {
      id: 'unit-04-nucleic-acids-fc-05',
      front: 'Why are DNA sequences often listed in groups of 3 bases?',
      back: 'DNA is read in codons — three bases at a time.',
    },
    {
      id: 'unit-04-nucleic-acids-fc-06',
      front: 'Which macromolecule contains the genetic code?',
      back: 'Nucleic acids (DNA).',
    },
    {
      id: 'unit-04-nucleic-acids-fc-07',
      front: 'Which functional groups are found in nucleic acids?',
      back: 'Hydroxyl (–OH), amino (–NH₂, in the nitrogenous bases), and phosphate (–PO₄²⁻).',
    },
    {
      id: 'unit-04-nucleic-acids-fc-08',
      front: 'What is the monomer of nucleic acids?',
      back: 'Nucleotide',
    },
    {
      id: 'unit-04-nucleic-acids-fc-09',
      front: 'ATP is classified as which kind of molecule?',
      back: 'A nucleotide: a sugar, a nitrogenous base (adenine), and three phosphate groups.',
    },
  ],
  quiz: [
    {
      id: 'unit-04-nucleic-acids-q-01',
      question: 'Which list gives the three parts of a nucleotide?',
      options: [
        'Amino group, carboxyl group, side chain',
        'Glycerol, fatty acid, phosphate',
        '5-carbon sugar, phosphate group, nitrogenous base',
        'Monosaccharide, hydroxyl, steroid ring',
      ],
      correctIndex: 2,
      explanation: 'Every nucleotide is made of a 5-carbon sugar, a phosphate group, and a nitrogenous base.',
    },
    {
      id: 'unit-04-nucleic-acids-q-02',
      question: 'The nitrogenous bases in DNA are held together by:',
      options: ['Covalent bonds', 'Ionic bonds', 'Peptide bonds', 'Hydrogen bonds'],
      correctIndex: 3,
      explanation: 'Complementary bases pair across the two strands using hydrogen bonds.',
    },
    {
      id: 'unit-04-nucleic-acids-q-03',
      question: 'The sugar–phosphate backbone of DNA and RNA is held together by:',
      options: ['Hydrogen bonds', 'Covalent bonds', 'Ionic bonds', 'Disulfide bridges'],
      correctIndex: 1,
      explanation: 'The backbone is a chain of strong covalent bonds.',
    },
    {
      id: 'unit-04-nucleic-acids-q-04',
      question: 'Why are DNA sequences often written in groups of 3 bases?',
      options: [
        'DNA only contains 3 different bases',
        'DNA is read in codons of 3 bases at a time',
        'Every nucleotide has 3 phosphate groups',
        'Three hydrogen bonds hold the whole strand together',
      ],
      correctIndex: 1,
      explanation: 'A codon is a group of 3 bases that is read together.',
    },
    {
      id: 'unit-04-nucleic-acids-q-05',
      question: 'Which set of elements is found in DNA?',
      options: ['C, H, O only', 'C, H, O, N, S', 'C, H, O, N, P', 'C, H, O, P only'],
      correctIndex: 2,
      explanation: 'DNA has C, H, O, N (in bases), and P (in phosphate groups).',
    },
    {
      id: 'unit-04-nucleic-acids-q-06',
      question: 'A molecule has a 5-carbon sugar, a nitrogenous base, and three phosphates. It is a:',
      options: ['Triglyceride', 'Dipeptide', 'Nucleotide', 'Steroid'],
      correctIndex: 2,
      explanation: 'This describes ATP, a nucleotide.',
    },
    {
      id: 'unit-04-nucleic-acids-q-07',
      question: 'Which macromolecule class contains the genetic code?',
      options: ['Carbohydrates', 'Lipids', 'Proteins', 'Nucleic acids'],
      correctIndex: 3,
      explanation: 'DNA, a nucleic acid, stores the genetic code.',
    },
  ],
};
