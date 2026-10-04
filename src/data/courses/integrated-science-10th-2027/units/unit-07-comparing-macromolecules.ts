import type { Unit } from '@/types/study';

export const unit07ComparingMacromolecules: Unit = {
  id: 'unit-07-comparing-macromolecules',
  number: 7,
  title: 'Comparing the Macromolecules',
  description: 'Match functions and properties to carbohydrates, lipids, proteins, and nucleic acids, and identify structures from drawings.',
  notes: [
    {
      heading: 'Function & Property Matching',
      content: 'A key skill for the exam is matching a function or description to the correct macromolecule class.',
      bullets: [
        'Carbohydrate: short-term energy; makes up plant cell walls',
        'Lipid: long-term energy storage (fats); makes up the cell membrane (phospholipids); steroids; phospholipids have both hydrophobic and hydrophilic properties',
        'Protein: some proteins have both hydrophobic and hydrophilic regions; enzymes',
        'Nucleic acid: contains the genetic code',
      ],
    },
    {
      heading: 'Quick Reference: Elements',
      content: 'Use this to answer "which elements does this molecule contain?"',
      bullets: [
        'Carbohydrates, glucose, triglycerides, steroids: C, H, O',
        'Phospholipids: C, H, O, P',
        'Proteins, enzymes: C, H, O, N, S',
        'Nucleic acids, DNA: C, H, O, N, P',
      ],
    },
    {
      heading: 'Identify the Molecule',
      content: 'Practice classification from drawings:',
      bullets: [
        'Four fused rings with an OH → steroid (lipid)',
        'Glycerol with three long tails → fat (lipid)',
        'Central C with NH₃⁺, COO⁻, H and a side chain → amino acid (protein)',
        'Two sugar rings joined → carbohydrate',
        'Sugar + base + three phosphates (ATP) → nucleotide (nucleic acid)',
        'Two amino acids joined by a peptide bond → amino acid (dipeptide) / protein',
      ],
    },
  ],
  flashcards: [
    {
      id: 'unit-07-comparing-macromolecules-fc-01',
      front: 'Which macromolecule class has both hydrophobic and hydrophilic properties?',
      back: 'Lipids (phospholipids) and some proteins.',
    },
    {
      id: 'unit-07-comparing-macromolecules-fc-02',
      front: 'Which macromolecule class contains the genetic code?',
      back: 'Nucleic acids',
    },
    {
      id: 'unit-07-comparing-macromolecules-fc-03',
      front: 'Which macromolecule class do steroids belong to?',
      back: 'Lipids',
    },
    {
      id: 'unit-07-comparing-macromolecules-fc-04',
      front: 'Which macromolecule is used for short-term energy?',
      back: 'Carbohydrates',
    },
    {
      id: 'unit-07-comparing-macromolecules-fc-05',
      front: 'Which macromolecule makes up plant cell walls?',
      back: 'Carbohydrates',
    },
    {
      id: 'unit-07-comparing-macromolecules-fc-06',
      front: 'Which macromolecule is used for long-term energy storage?',
      back: 'Lipids (fats)',
    },
    {
      id: 'unit-07-comparing-macromolecules-fc-07',
      front: 'Which macromolecule makes up the cell membrane?',
      back: 'Lipids (phospholipids)',
    },
    {
      id: 'unit-07-comparing-macromolecules-fc-08',
      front: 'Which functional groups are found in nucleic acids?',
      back: 'Hydroxyl, amino (in the bases), and phosphate.',
    },
    {
      id: 'unit-07-comparing-macromolecules-fc-09',
      front: 'Which functional group(s) are found in phospholipids?',
      back: 'Phosphate',
    },
    {
      id: 'unit-07-comparing-macromolecules-fc-10',
      front: 'What are all four functional groups (–OH, –NH₂, –COOH, –PO₄²⁻) in terms of polarity?',
      back: 'All four are polar.',
    },
    {
      id: 'unit-07-comparing-macromolecules-fc-11',
      front: 'Class of macromolecule: tryptophan-type amino acid drawing (amino group, carboxylate, side chain)',
      back: 'Amino acid / protein.',
    },
    {
      id: 'unit-07-comparing-macromolecules-fc-12',
      front: 'Class of macromolecule: two sugar rings joined together',
      back: 'Carbohydrate.',
    },
  ],
  quiz: [
    {
      id: 'unit-07-comparing-macromolecules-q-01',
      question: 'Which macromolecule is used for short-term energy?',
      options: ['Lipid', 'Protein', 'Nucleic acid', 'Carbohydrate'],
      correctIndex: 3,
      explanation: 'Carbohydrates (glucose) are the quick-access energy source.',
    },
    {
      id: 'unit-07-comparing-macromolecules-q-02',
      question: 'Which macromolecule makes up the cell membrane?',
      options: ['Lipid', 'Carbohydrate', 'Nucleic acid', 'None of the macromolecules'],
      correctIndex: 0,
      explanation: 'The membrane is built from phospholipids, which are lipids.',
    },
    {
      id: 'unit-07-comparing-macromolecules-q-03',
      question: 'Which macromolecule is used for long-term energy storage?',
      options: ['Carbohydrate', 'Fats (a lipid)', 'Nucleic acid', 'Enzyme'],
      correctIndex: 1,
      explanation: 'Fats store large amounts of energy for the long term.',
    },
    {
      id: 'unit-07-comparing-macromolecules-q-04',
      question: 'A drawing shows four fused rings with an –OH group. Which class is it?',
      options: ['Carbohydrate', 'Lipid (steroid)', 'Protein', 'Nucleic acid'],
      correctIndex: 1,
      explanation: 'Four fused carbon rings = steroid, which is a lipid.',
    },
    {
      id: 'unit-07-comparing-macromolecules-q-05',
      question: 'Which of the following has both hydrophobic and hydrophilic properties?',
      options: ['A phospholipid', 'Glucose', 'Cellulose', 'A triglyceride'],
      correctIndex: 0,
      explanation: 'Phospholipids have a hydrophilic head and hydrophobic tails.',
    },
    {
      id: 'unit-07-comparing-macromolecules-q-06',
      question: 'Which table row is correct for functional groups?',
      options: [
        '–COOH is basic',
        '–NH₂ is acidic',
        '–COOH is acidic and –NH₂ is basic',
        '–OH is found in all amino acids',
      ],
      correctIndex: 2,
      explanation: 'Carboxyl groups are acidic; amino groups are basic. Hydroxyl groups are found only in some amino acids.',
    },
    {
      id: 'unit-07-comparing-macromolecules-q-07',
      question: 'Which functional groups are found in nucleic acids?',
      options: [
        'Hydroxyl only',
        'Carboxyl only',
        'Hydroxyl, amino, and phosphate',
        'Carboxyl and sulfhydryl',
      ],
      correctIndex: 2,
      explanation: 'Nucleic acids contain hydroxyl (on the sugar), amino (on the bases), and phosphate groups.',
    },
    {
      id: 'unit-07-comparing-macromolecules-q-08',
      question: 'A drawing shows a central carbon with NH₃⁺, COO⁻, a hydrogen, and a side chain. It is:',
      options: ['A carbohydrate', 'A fat', 'An amino acid', 'A nucleotide'],
      correctIndex: 2,
      explanation: 'The amino group, carboxyl group, hydrogen, and R group on a central carbon define an amino acid.',
    },
    {
      id: 'unit-07-comparing-macromolecules-q-09',
      question: 'Which elements does a triglyceride contain?',
      options: ['C, H, O', 'C, H, O, N', 'C, H, O, N, P', 'C, H, O, N, S'],
      correctIndex: 0,
      explanation: 'Triglycerides (and steroids) contain only C, H, and O.',
    },
  ],
};
