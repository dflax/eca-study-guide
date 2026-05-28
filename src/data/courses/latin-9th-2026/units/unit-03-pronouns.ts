import type { Unit } from '@/types/study';

export const unit03Pronouns: Unit = {
  id: 'unit-03-pronouns',
  number: 3,
  title: 'Pronouns',
  description: 'Possessive pronouns (meus, tuus, suus), the pronoun is/ea/id, demonstratives hic/haec/hoc and ille/illa/illud, and the relative pronoun qui/quae/quod.',
  notes: [
    {
      heading: 'Possessive Pronouns — meus, tuus, suus',
      content: 'These possessive pronouns decline like 1st/2nd declension adjectives (the bonus -a -um pattern), agreeing with the noun they modify in case, number, and gender.\n\nmeus, mea, meum = my, mine (1st person singular possessive)\ntuus, tua, tuum = your, yours (2nd person singular possessive — one person\'s possession)\nsuus, sua, suum = his own, her own, its own, their own (REFLEXIVE — refers back to the subject)\n\nCritical distinction: suus is reflexive — it refers back to the subject of the sentence. Dominus servum suum vocat = The master calls his own slave (his = the master\'s own). When the possessor is NOT the subject, use eius (genitive of is/ea/id) instead.\n\nSpecial note: The vocative of meus is mi — Mi fili! = My son!',
      bullets: [
        'meus, mea, meum = my (declines like bonus -a -um)',
        'tuus, tua, tuum = your (singular you)',
        'suus, sua, suum = his/her/its/their OWN (reflexive — possessor must be the subject)',
        'eius = his/her/its (not reflexive — use when possessor is NOT the subject)',
        'Vocative of meus: mi (e.g., Mi fili! = My son!)',
      ],
    },
    {
      heading: 'is, ea, id (he, she, it / that)',
      content: 'The pronoun is/ea/id serves as the 3rd person pronoun (he/she/it) and also as a demonstrative meaning "that." It has several irregular forms that must be memorized.\n\nSingular:\n  Nom: is (m)   ea (f)   id (n)\n  Gen: eius (m/f/n — all same)\n  Dat: ei (m/f/n — all same)\n  Acc: eum (m)  eam (f)  id (n)\n  Abl: eo (m)   ea (f)   eo (n)\n\nPlural:\n  Nom: ei/ii (m)  eae (f)  ea (n)\n  Gen: eorum (m)  earum (f) eorum (n)\n  Dat/Abl: eis (m/f/n — all same)\n  Acc: eos (m)   eas (f)  ea (n)\n\nKey: The genitive singular eius is the same for all genders. Eius also means "his/her/its" (non-reflexive possession — the possessor is not the subject).',
    },
    {
      heading: 'hic, haec, hoc (this) and ille, illa, illud (that)',
      content: 'Demonstrative pronouns point to specific nouns. hic points to things near the speaker ("this"); ille points to things farther away ("that"). Both are irregular and must be memorized.\n\nhic, haec, hoc (this — nearby):\n  Nom sg: hic (m)   haec (f)  hoc (n)\n  Gen sg: huius (m/f/n — all same)\n  Dat sg: huic (m/f/n — all same)\n  Acc sg: hunc (m)  hanc (f)  hoc (n)\n  Abl sg: hoc (m)   hac (f)   hoc (n)\n  Nom pl: hi (m)    hae (f)   haec (n)\n  Gen pl: horum (m) harum (f) horum (n)\n  Dat/Abl pl: his (m/f/n)\n  Acc pl: hos (m)   has (f)   haec (n)\n\nille, illa, illud (that — farther away):\n  Nom sg: ille (m)  illa (f)  illud (n)\n  Gen sg: illius (m/f/n — all same)\n  Dat sg: illi (m/f/n — all same)\n  Acc sg: illum (m) illam (f) illud (n)\n  Abl sg: illo (m)  illa (f)  illo (n)\n  Plural follows regular 1st/2nd declension pattern: illi, illae, illa (nom pl); etc.',
    },
    {
      heading: 'qui, quae, quod (who, which, that — relative pronoun)',
      content: 'The relative pronoun introduces a relative clause ("who," "which," "that"). It agrees with its antecedent (the noun it refers to) in gender and number, but its case is determined by its function within the relative clause — not by the antecedent.\n\nSingular:\n  Nom: qui (m)   quae (f)  quod (n)\n  Gen: cuius (m/f/n — all same)\n  Dat: cui (m/f/n — all same)\n  Acc: quem (m)  quam (f)  quod (n)\n  Abl: quo (m)   qua (f)   quo (n)\n\nPlural:\n  Nom: qui (m)    quae (f)  quae (n)\n  Gen: quorum (m) quarum (f) quorum (n)\n  Dat/Abl: quibus (m/f/n — all same)\n  Acc: quos (m)   quas (f)  quae (n)\n\nExample: Servus quem dominus videt laborat.\n= The slave whom the master sees is working.\nquem is accusative because it is the direct object of videt (within the relative clause). But quem is masculine singular because its antecedent servus is masculine singular.',
      bullets: [
        'Step 1: Find the antecedent → determines gender and number of the relative pronoun',
        'Step 2: Find the pronoun\'s function in its own clause → determines its case',
        'Nom sg: qui (m), quae (f), quod (n)',
        'Acc sg: quem (m), quam (f), quod (n)',
        'Gen sg: cuius (all genders)',
        'Dat/Abl pl: quibus (all genders)',
      ],
    },
  ],
  flashcards: [
    {
      id: 'unit-03-pronouns-fc-01',
      front: 'What does "meus -a -um" mean, and what pattern does it decline like?',
      back: 'My, mine. It declines like bonus -a -um (1st/2nd declension adjective), agreeing with the noun it modifies in case, number, and gender.',
    },
    {
      id: 'unit-03-pronouns-fc-02',
      front: 'What is the difference between "suus" and "eius"?',
      back: 'suus = reflexive (the possessor IS the subject of the sentence — "his/her/its own").\neius = genitive of is/ea/id (the possessor is NOT the subject — just "his/her/its").',
    },
    {
      id: 'unit-03-pronouns-fc-03',
      front: 'What is the vocative of "meus"?',
      back: 'mi — the vocative of meus is irregular. Example: Mi fili! = My son! (used in direct address)',
    },
    {
      id: 'unit-03-pronouns-fc-04',
      front: 'What does "hic, haec, hoc" mean?',
      back: 'This (near the speaker). hic = masculine, haec = feminine, hoc = neuter. Genitive singular: huius (all genders).',
    },
    {
      id: 'unit-03-pronouns-fc-05',
      front: 'What does "ille, illa, illud" mean?',
      back: 'That (farther away from the speaker). ille = masculine, illa = feminine, illud = neuter. Genitive singular: illius (all genders).',
    },
    {
      id: 'unit-03-pronouns-fc-06',
      front: 'What does "is, ea, id" mean?',
      back: 'He, she, it / that (3rd person pronoun and weak demonstrative). is = masculine, ea = feminine, id = neuter.',
    },
    {
      id: 'unit-03-pronouns-fc-07',
      front: 'What is the genitive singular of is/ea/id (all genders)?',
      back: 'eius — the same for all three genders. Also used as "his/her/its" (non-reflexive possession).',
    },
    {
      id: 'unit-03-pronouns-fc-08',
      front: 'What is the genitive singular of hic/haec/hoc (all genders)?',
      back: 'huius — the same for all three genders.',
    },
    {
      id: 'unit-03-pronouns-fc-09',
      front: 'What does "qui, quae, quod" mean?',
      back: 'Who, which, that — the relative pronoun. qui = masculine, quae = feminine, quod = neuter.',
    },
    {
      id: 'unit-03-pronouns-fc-10',
      front: 'How does the relative pronoun agree with its antecedent?',
      back: 'In gender and number (it matches the antecedent\'s gender and number). But its CASE is determined by its function within its own relative clause.',
    },
    {
      id: 'unit-03-pronouns-fc-11',
      front: 'Give the accusative singular of "qui/quae/quod."',
      back: 'quem (masculine), quam (feminine), quod (neuter).',
    },
    {
      id: 'unit-03-pronouns-fc-12',
      front: 'In "Servus quem dominus videt laborat," why is "quem" accusative?',
      back: 'Because quem is the direct object of videt within the relative clause (the master sees whom). Its gender/number match servus (masculine singular), but its case = accusative because it receives the action of videt.',
    },
    {
      id: 'unit-03-pronouns-fc-13',
      front: 'What does "tuus, tua, tuum" mean?',
      back: 'Your, yours — 2nd person singular possessive (referring to one person\'s possession). Declines like bonus -a -um.',
    },
    {
      id: 'unit-03-pronouns-fc-14',
      front: 'How does "suus -a -um" differ from "meus" and "tuus"?',
      back: 'suus is reflexive — it refers back to the subject of the sentence, whoever that subject is. meus and tuus refer to specific persons (I/me and you). suus can mean his own, her own, its own, or their own depending on the subject.',
    },
  ],
  quiz: [
    {
      id: 'unit-03-pronouns-q-01',
      question: '"Dominus servum suum vocat." What does "suum" indicate?',
      options: [
        'The slave\'s slave (eius, genitive of is)',
        'The master calls his own slave (suus = reflexive, refers back to dominus)',
        'The slave calls his own master',
        'A different person\'s slave',
      ],
      correctIndex: 1,
      explanation: 'suus -a -um is reflexive, meaning the possessor is the subject (dominus). So "servum suum" = his own slave (the master\'s own slave). The sentence means: The master calls his own slave.',
    },
    {
      id: 'unit-03-pronouns-q-02',
      question: 'When should you use "eius" instead of "suus" to translate "his/her/its"?',
      options: [
        'Always — eius and suus are interchangeable',
        'When the possessor IS the subject of the sentence',
        'When the possessor is NOT the subject of the sentence',
        'Only with feminine nouns',
      ],
      correctIndex: 2,
      explanation: 'Use eius (genitive of is/ea/id) when the possessor is NOT the subject. Use suus when the possessor IS the subject (reflexive). Example: Puella librum eius portat = The girl carries his/her book (someone else\'s book, not her own).',
    },
    {
      id: 'unit-03-pronouns-q-03',
      question: 'Choose the correct demonstrative: "___ puella (this girl — feminine, nominative, near the speaker)"',
      options: [
        'ille',
        'illa',
        'haec',
        'hic',
      ],
      correctIndex: 2,
      explanation: '"This" (near speaker) = hic/haec/hoc. For a feminine nominative singular noun, use haec. (hic = masc nom sg, haec = fem nom sg, hoc = neut nom sg)',
    },
    {
      id: 'unit-03-pronouns-q-04',
      question: 'What is the accusative singular masculine of the relative pronoun qui/quae/quod?',
      options: [
        'qui',
        'quod',
        'quem',
        'cuius',
      ],
      correctIndex: 2,
      explanation: 'The accusative singular masculine of the relative pronoun is quem. (Acc sg: quem (m), quam (f), quod (n))',
    },
    {
      id: 'unit-03-pronouns-q-05',
      question: 'In "Via quam video longa est," what determines that "quam" is feminine?',
      options: [
        'Its position in the sentence',
        'Its antecedent "via" is feminine',
        'The verb "video" requires a feminine object',
        '"quam" is always feminine',
      ],
      correctIndex: 1,
      explanation: 'The relative pronoun agrees with its antecedent in gender and number. Via is feminine, so the relative pronoun must be feminine: quam (acc sg fem). Its case (accusative) comes from its function as the object of video.',
    },
    {
      id: 'unit-03-pronouns-q-06',
      question: 'What is the genitive singular of "hic, haec, hoc" (all genders)?',
      options: [
        'hic',
        'huius',
        'eius',
        'illius',
      ],
      correctIndex: 1,
      explanation: 'The genitive singular of hic/haec/hoc is huius for all three genders. Compare: eius = genitive of is/ea/id; illius = genitive of ille/illa/illud.',
    },
    {
      id: 'unit-03-pronouns-q-07',
      question: '"Mi fili, cur non laboras?" What is "mi" here?',
      options: [
        'Nominative of meus (my)',
        'Vocative of meus (my) — irregular form used in direct address',
        'A form of is/ea/id',
        'Dative of ego (I)',
      ],
      correctIndex: 1,
      explanation: 'Mi is the irregular vocative of meus. It is used in direct address: Mi fili! = My son! (calling out to the son directly)',
    },
    {
      id: 'unit-03-pronouns-q-08',
      question: 'Which pronoun would you use to translate "that man (farther away)" in the nominative masculine singular?',
      options: [
        'hic',
        'is',
        'ille',
        'qui',
      ],
      correctIndex: 2,
      explanation: 'ille, illa, illud = that (farther away from the speaker). Nominative masculine singular = ille. Compare: hic = this (nearby); is = he/that (weak demonstrative).',
    },
    {
      id: 'unit-03-pronouns-q-09',
      question: 'What is the dative/ablative plural of "qui, quae, quod"?',
      options: [
        'quorum',
        'quibus',
        'quos',
        'cuius',
      ],
      correctIndex: 1,
      explanation: 'The dative and ablative plural of the relative pronoun is quibus (same for all genders). This is a key form to memorize.',
    },
    {
      id: 'unit-03-pronouns-q-10',
      question: 'Translate: "Puella cuius liber magnus est laeta est."',
      options: [
        'The girl who has a large book is happy',
        'The girl whose book is large is happy',
        'The happy girl reads a large book',
        'The girl sees whose large book',
      ],
      correctIndex: 1,
      explanation: 'cuius = genitive of qui/quae/quod (whose). "Puella cuius liber magnus est" = the girl whose book is large. The full sentence: The girl whose book is large is happy.',
    },
    {
      id: 'unit-03-pronouns-q-11',
      question: 'What is the accusative singular of "ille, illa, illud" in the masculine?',
      options: [
        'ille',
        'illius',
        'illum',
        'illi',
      ],
      correctIndex: 2,
      explanation: 'The accusative singular masculine of ille is illum. (Acc sg: illum (m), illam (f), illud (n)). Compare to hunc (acc sg masc of hic).',
    },
    {
      id: 'unit-03-pronouns-q-12',
      question: '"Puer quem puella amat" — what case is "quem" and why?',
      options: [
        'Nominative — because puer is the subject',
        'Accusative — because it is the object of amat in the relative clause',
        'Genitive — because it shows possession',
        'Dative — because it is the indirect object',
      ],
      correctIndex: 1,
      explanation: 'Within the relative clause "quem puella amat," quem is the direct object of amat (the girl loves whom). Direct object = accusative. Its gender (masculine) and number (singular) come from its antecedent puer.',
    },
  ],
};
