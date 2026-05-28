import type { Unit } from '@/types/study';

export const unit02Declensions: Unit = {
  id: 'unit-02-declensions',
  number: 2,
  title: '1st and 2nd Declension',
  description: 'Noun declension patterns for 1st declension (puella) and 2nd declension masculine (servus) and neuter (oppidum), plus adjective agreement.',
  notes: [
    {
      heading: 'What Is a Declension?',
      content: 'A declension is a pattern of endings that a noun follows. Latin nouns belong to one of five declensions. In Lingua Latina Chapters I–VIII, we focus on the 1st and 2nd declensions, which contain the majority of nouns in the early text.',
    },
    {
      heading: '1st Declension (mostly feminine)',
      content: 'Pattern noun: puella, puellae (girl)\n\nCase endings:\n  Nominative sg: puella  |  pl: puellae\n  Genitive sg:   puellae |  pl: puellarum\n  Dative sg:     puellae |  pl: puellis\n  Accusative sg: puellam |  pl: puellas\n  Ablative sg:   puellā  |  pl: puellis\n  Vocative sg:   puella  |  pl: puellae\n\nKey facts: Most 1st declension nouns are feminine. The genitive singular -ae is the signal ending for 1st declension. Note that the dative singular, genitive singular, and nominative plural are all -ae.',
      bullets: [
        'Common 1st declension nouns: puella (girl), femina (woman), villa (country house), via (road), aqua (water)',
        'Silva (forest), ancilla (maidservant), rosa (rose), insula (island), terra (land)',
        'Memory aid: "a ae ae am a a" for the singular endings — notice -ae appears three times',
        'The genitive singular ending -ae identifies a noun as 1st declension',
      ],
    },
    {
      heading: '2nd Declension Masculine (-us)',
      content: 'Pattern noun: servus, servi (slave/servant)\n\nCase endings:\n  Nominative sg: servus  |  pl: servi\n  Genitive sg:   servi   |  pl: servorum\n  Dative sg:     servo   |  pl: servis\n  Accusative sg: servum  |  pl: servos\n  Ablative sg:   servo   |  pl: servis\n  Vocative sg:   serve   |  pl: servi\n\nKey facts: 2nd declension masculine nouns typically end in -us in the nominative. The vocative singular changes -us to -e (serve, not servus). The genitive singular -i signals 2nd declension.\n\nCommon 2nd declension masculine nouns: servus (slave), dominus (master), puer (boy — irregular, no -us), hortus (garden), numerus (number), filius (son), locus (place), animus (mind/spirit), oculus (eye)',
    },
    {
      heading: '2nd Declension Neuter (-um)',
      content: 'Pattern noun: oppidum, oppidi (town)\n\nCase endings:\n  Nominative sg: oppidum |  pl: oppida\n  Genitive sg:   oppidi  |  pl: oppidorum\n  Dative sg:     oppido  |  pl: oppidis\n  Accusative sg: oppidum |  pl: oppida\n  Ablative sg:   oppido  |  pl: oppidis\n  Vocative sg:   oppidum |  pl: oppida\n\nKey rule for ALL neuter nouns: the nominative, accusative, and vocative are always identical. The plural neuter nominative/accusative always ends in -a.\n\nCommon 2nd declension neuter nouns: oppidum (town), verbum (word), atrium (main hall), cubiculum (bedroom), triclinium (dining room), vinum (wine)',
      bullets: [
        'The neuter rule: Nom = Acc = Voc (all three identical — always, in all declensions)',
        'Neuter plural Nom/Acc/Voc always end in -a (oppida, verba, atria)',
        'Dative and ablative are always identical in 2nd declension (both -o sg, -is pl)',
      ],
    },
    {
      heading: '1st/2nd Declension Adjectives',
      content: 'Adjectives agree with their noun in case, number, and gender. 1st/2nd declension adjectives use 1st declension endings for feminine nouns and 2nd declension endings for masculine/neuter nouns.\n\nPattern: bonus, bona, bonum (good)\n  Masculine: follows the servus pattern → bonus, boni, bono, bonum, bono, bone\n  Feminine:  follows the puella pattern → bona, bonae, bonae, bonam, bona, bona\n  Neuter:    follows the oppidum pattern → bonum, boni, bono, bonum, bono, bonum',
      bullets: [
        'magnus, magna, magnum = large, great',
        'parvus, parva, parvum = small, little',
        'malus, mala, malum = bad, wicked, evil',
        'multus, multa, multum = much (sg), many (pl)',
        'pulcher, pulchra, pulchrum = beautiful, handsome (note: pulcher loses the e in most forms)',
        'laetus, laeta, laetum = happy, glad, joyful',
        'iratus, irata, iratum = angry',
        'An adjective does NOT have to look like its noun — it matches in case/number/gender, not spelling',
      ],
    },
  ],
  flashcards: [
    {
      id: 'unit-02-declensions-fc-01',
      front: 'What is the genitive singular ending that signals 1st declension?',
      back: '-ae (puella → puellae). Whenever you see genitive singular -ae, the noun belongs to the 1st declension.',
    },
    {
      id: 'unit-02-declensions-fc-02',
      front: 'What is the genitive singular ending that signals 2nd declension?',
      back: '-i (servus → servi; oppidum → oppidi). Genitive singular -i signals 2nd declension.',
    },
    {
      id: 'unit-02-declensions-fc-03',
      front: 'What gender are most 1st declension nouns?',
      back: 'Feminine — the vast majority of 1st declension nouns are feminine (puella, femina, via, villa, aqua, silva, etc.).',
    },
    {
      id: 'unit-02-declensions-fc-04',
      front: 'What gender are most 2nd declension -us nouns?',
      back: 'Masculine — 2nd declension -us nouns are typically masculine (servus, dominus, hortus, animus, etc.).',
    },
    {
      id: 'unit-02-declensions-fc-05',
      front: 'What is "puella" in the accusative singular?',
      back: 'puellam — the accusative singular of 1st declension nouns ends in -am.',
    },
    {
      id: 'unit-02-declensions-fc-06',
      front: 'What is "puella" in the genitive plural?',
      back: 'puellarum — the genitive plural of 1st declension nouns ends in -arum.',
    },
    {
      id: 'unit-02-declensions-fc-07',
      front: 'What is the vocative singular of "servus"?',
      back: 'serve — NOT servus. 2nd declension -us nouns change -us to -e in the vocative singular. (But in the plural, both nom and voc are servi.)',
    },
    {
      id: 'unit-02-declensions-fc-08',
      front: 'What is the key rule for ALL neuter nouns (in any declension)?',
      back: 'Nominative, accusative, and vocative are always identical. And in the plural, they always end in -a (oppida, verba).',
    },
    {
      id: 'unit-02-declensions-fc-09',
      front: 'What does an adjective agree with its noun in?',
      back: 'Case, number, and gender — an adjective must match its noun in all three, even if the endings look different (e.g., servus bonus, puella bona, oppidum bonum).',
    },
    {
      id: 'unit-02-declensions-fc-10',
      front: 'What are the nominative plural forms of "bonus, bona, bonum"?',
      back: 'boni (masculine), bonae (feminine), bona (neuter).',
    },
    {
      id: 'unit-02-declensions-fc-11',
      front: 'What case ending is -is in 2nd declension?',
      back: 'Dative or ablative plural (both are -is in 2nd declension: e.g., servis, oppidis). Always identical.',
    },
    {
      id: 'unit-02-declensions-fc-12',
      front: 'What ending marks the accusative singular of 2nd declension masculine nouns?',
      back: '-um (servum, dominum, hortum). Same ending as the nominative singular neuter.',
    },
    {
      id: 'unit-02-declensions-fc-13',
      front: 'What is the nominative plural of all 2nd declension neuter nouns?',
      back: '-a (oppida, verba, atria, cubicula). The plural of neuter nouns always ends in -a.',
    },
    {
      id: 'unit-02-declensions-fc-14',
      front: 'Give the dative singular of "puella."',
      back: 'puellae — same as the genitive singular and the nominative plural. Context determines which it is.',
    },
    {
      id: 'unit-02-declensions-fc-15',
      front: 'Give the ablative singular of "servus."',
      back: 'servo — the ablative singular of 2nd declension nouns ends in -o (same as dative singular).',
    },
  ],
  quiz: [
    {
      id: 'unit-02-declensions-q-01',
      question: 'A noun has the genitive singular form "puellae." Which declension does it belong to?',
      options: [
        '1st declension (genitive sg. -ae)',
        '2nd declension (genitive sg. -i)',
        '3rd declension (genitive sg. -is)',
        'Cannot be determined',
      ],
      correctIndex: 0,
      explanation: 'The genitive singular ending -ae signals 1st declension. The genitive singular is the standard way to identify a noun\'s declension from the dictionary entry.',
    },
    {
      id: 'unit-02-declensions-q-02',
      question: 'What is the accusative plural of "servus, servi" (slave)?',
      options: [
        'servi',
        'servos',
        'servum',
        'servis',
      ],
      correctIndex: 1,
      explanation: 'The accusative plural of 2nd declension masculine nouns ends in -os (servos). Compare: accusative singular = servum (-um), nominative plural = servi (-i).',
    },
    {
      id: 'unit-02-declensions-q-03',
      question: 'Which statement correctly describes neuter nouns?',
      options: [
        'Neuter nouns have no accusative form',
        'Neuter nouns\' nominative, accusative, and vocative are always identical',
        'Neuter nouns are always 1st declension',
        'Neuter nouns follow 2nd declension endings only',
      ],
      correctIndex: 1,
      explanation: 'The key rule for ALL neuter nouns (in any declension): nominative = accusative = vocative. In the plural, all neuter nouns end in -a for these three cases.',
    },
    {
      id: 'unit-02-declensions-q-04',
      question: 'A student writes "Serva puellarum." What does "puellarum" mean?',
      options: [
        'The girls (nominative plural)',
        'To the girls (dative plural)',
        'Of the girls (genitive plural)',
        'With the girls (ablative plural)',
      ],
      correctIndex: 2,
      explanation: '-arum is the genitive plural ending of 1st declension. "Puellarum" = of the girls. So "Serva puellarum" = the maidservant of the girls.',
    },
    {
      id: 'unit-02-declensions-q-05',
      question: 'Which is the correct vocative singular of "dominus" (master)?',
      options: [
        'dominus',
        'domini',
        'domine',
        'domino',
      ],
      correctIndex: 2,
      explanation: 'The vocative singular of 2nd declension -us nouns changes -us to -e: dominus → domine. This is used when calling out to the master directly.',
    },
    {
      id: 'unit-02-declensions-q-06',
      question: 'The adjective "magnus" modifies "puella" (feminine, nominative). What form does "magnus" take?',
      options: [
        'magnus',
        'magnum',
        'magna',
        'magnae',
      ],
      correctIndex: 2,
      explanation: 'Adjectives must agree with their noun in case, number, and gender. "Puella" is feminine, nominative, singular — so the adjective takes the feminine nominative singular form: magna.',
    },
    {
      id: 'unit-02-declensions-q-07',
      question: 'In "Servi in horto laborant," what case is "horto"?',
      options: [
        'Nominative — it is the subject',
        'Accusative — it is the direct object',
        'Dative — it is the indirect object',
        'Ablative — used with the preposition "in" for location',
      ],
      correctIndex: 3,
      explanation: '"In + ablative" = in/on (location, no motion). "Horto" is the ablative singular of hortus (garden). The sentence means: The slaves work in the garden.',
    },
    {
      id: 'unit-02-declensions-q-08',
      question: 'What is the genitive plural of "oppidum, oppidi" (town)?',
      options: [
        'oppida',
        'oppidos',
        'oppidorum',
        'oppidis',
      ],
      correctIndex: 2,
      explanation: 'The genitive plural of 2nd declension nouns (both masculine and neuter) ends in -orum. Oppidorum = of the towns.',
    },
    {
      id: 'unit-02-declensions-q-09',
      question: 'Which pair of case forms in 2nd declension are ALWAYS identical?',
      options: [
        'Nominative singular and accusative singular',
        'Genitive singular and dative singular',
        'Dative plural and ablative plural',
        'Genitive plural and ablative plural',
      ],
      correctIndex: 2,
      explanation: 'In 2nd declension, the dative plural and ablative plural are always identical: -is for both (servis, oppidis). Similarly, the dative singular and ablative singular are both -o (servo, oppido).',
    },
    {
      id: 'unit-02-declensions-q-10',
      question: 'A dictionary entry reads "villa, -ae (f)." What does this tell you?',
      options: [
        'Villa is 2nd declension, masculine',
        'Villa is 1st declension, feminine, with genitive singular villae',
        'Villa is 2nd declension, neuter',
        'Villa is 3rd declension, feminine',
      ],
      correctIndex: 1,
      explanation: 'Dictionary entries show the nominative then the genitive singular, followed by gender. Villa, -ae means: nominative = villa, genitive singular = villae, gender = feminine (f). This identifies it as 1st declension.',
    },
    {
      id: 'unit-02-declensions-q-11',
      question: 'Choose the correct form: "The good slave (object)" in Latin.',
      options: [
        'servus bonus',
        'servum bonum',
        'servo bono',
        'servi boni',
      ],
      correctIndex: 1,
      explanation: 'As the direct object, "slave" takes the accusative: servum. The adjective "good" must agree in case, number, and gender: accusative singular masculine = bonum. So: servum bonum.',
    },
  ],
};
