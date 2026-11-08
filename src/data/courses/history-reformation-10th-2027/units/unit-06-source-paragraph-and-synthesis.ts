import type { Unit } from '@/types/study';
import { buildCards, buildQuestions, type CardRow, type Row } from '../helpers';

const ID = 'unit-06-source-paragraph-and-synthesis';

export const unit06Topics = {
  sources: 'The Two Sources: Twelve Articles (A) and Luther (B)',
  paragraph: 'Writing the Source Paragraph (Question 30)',
  examples: 'Choosing a Different Unit Example',
  claim: 'The Big Claim: Individual Judgment or New Authorities? (Question 31)',
  qualify: 'Qualifications and Although-Clauses',
  chart: 'The Churches at a Glance',
  timeline: 'Reformation Timeline',
} as const;
const T = unit06Topics;

export const unit06CardRows: CardRow[] = [
  [T.sources, "Source A: Twelve Articles of the Swabian Peasants (1525), Third Article", "\"We are thus ready to yield obedience according to God's law to our elected and regular authorities in all proper things becoming to a Christian. We therefore take it for granted that you will release us from serfdom as true Christians, unless it should be shown from the gospel that we are serfs.\" (003D, Section A)"],
  [T.sources, "Source B: Luther, Against the Murdering and Robbing Bands of the Peasants (1525)", "\"First, they have sworn to their true and gracious rulers to be submissive and obedient, in accord with God's command ... 'Let every soul be subject unto the higher powers.'\" (003D, Section B; the ellipsis marks omitted material)"],
  [T.sources, "What did Sources A and B allow Christians to challenge or require them to obey? (Study Guide Q30)", "Source A allows Christians to challenge serfdom and to demand release unless the gospel shows they are serfs, while obeying authorities in proper things according to God's law. Source B requires Christians to obey their rulers, citing sworn oaths and Romans 13, and condemns resistance."],
  [T.sources, "What does the ellipsis in Source B tell you?", "It marks omitted material; the excerpt is selected from the longer pamphlet, so check the full passage in 003D before interpreting."],
  [T.paragraph, "What is a good structure for the Question 30 source paragraph?", "State a claim comparing the sources; use a short quotation from each; say what each lets Christians challenge or requires them to obey; then choose one source and add a different unit example that supports or complicates the argument; finish with an although-clause."],
  [T.paragraph, "What does 'a different unit example' mean?", "An example from the unit that is not one of the two printed excerpts, such as Augsburg, royal supremacy, Calvin's consistory or presbyteries, or Trent."],
  [T.paragraph, "How can you check a developed paragraph?", "Each example must be explained, not just named, and the claim should answer the question. A qualification states a real limit or complication in your judgment."],
  [T.examples, "Which unit example supports Luther's view in Source B?", "Augsburg's cuius regio: rulers, not individuals, decided religion, and subjects had to follow. Also the Lutheran princes who suppressed the revolt and received church property."],
  [T.examples, "Which unit example supports the peasants' view in Source A?", "Calvinist presbyteries gave lay people a share in church government, and Calvinists refused to subordinate the church to the state. These show claims that authority should answer to Scripture and the community."],
  [T.examples, "Which unit example complicates both A and B?", "Thomas More: his loyalty to the king was limited by a higher loyalty to God, which fits neither the peasants' conditional obedience nor Luther's unconditional submission. Henry's royal supremacy complicates Luther's deference."],
  [T.examples, "Which unit example complicates the peasants' appeal to Scripture?", "The fate of the revolt: Luther's call for suppression and the princes' victory show the limits of Scripture as a weapon against rulers. Augsburg also gave individuals no right to choose."],
  [T.claim, "State the Question 31 prompt.", "Did the Reformation mainly expand individual religious judgment, or did it mainly transfer religious authority to new institutions and governments? Write one developed paragraph with a clear claim, two explained historical examples, and a qualification, using at least one source and one different example."],
  [T.claim, "Examples that show expanded individual judgment", "Luther's stand at Worms (Scripture or right reason, conscience); sola scriptura and the priesthood of all believers; the Bible in German and in English; the peasants' appeal to the gospel; lay participation in Calvinist presbyteries."],
  [T.claim, "Examples that show authority transferred to new institutions and governments", "Augsburg's cuius regio; royal supremacy and the Church of England; Lutheran princes confiscating church property; Calvin's consistory in Geneva; Elizabeth's required conformity; High Commission."],
  [T.claim, "What does the Flippity answer say the Question 31 paragraph needs?", "Either judgment may be defended: use the peasants' appeal to Scripture, Luther's defense of rulers, Augsburg, royal supremacy, Calvinist institutions, or Trent. Explain two different examples and a limit; at least one must use an assigned primary source."],
  [T.claim, "Model claim: the Reformation mainly transferred authority", "Although Luther's appeal to Scripture at Worms seemed to place judgment in each conscience, the Reformation mainly moved authority from the pope to rulers and new institutions: Augsburg let princes decide religion, and Henry VIII's Act of Supremacy made the king head of the English church."],
  [T.claim, "Model claim: the Reformation mainly expanded individual judgment", "Although rulers controlled most settlements, the Reformation mainly expanded individual judgment: Luther said each person could read Scripture by conscience, and the Twelve Articles show ordinary peasants measuring lords and customs by the gospel."],
  [T.qualify, "What is a qualification?", "A statement of a real limit or complication in your judgment, such as 'although Augsburg strengthened rulers, subjects who disagreed could emigrate' or 'although Luther championed conscience, he urged the princes to crush the peasants.'"],
  [T.qualify, "How do you build an although-sentence?", "Begin with 'Although' and the point that cuts against your claim, then state your claim in the main clause. Example: Although Luther urged conscience, he told rulers to crush the revolt, so the Reformation mainly transferred authority."],
  [T.qualify, "Qualification for the 'authority transferred' claim", "Although rulers and churches took authority, Protestants kept alive the idea of private judgment (P&C p. 85), and Calvinist presbyteries gave laymen a share in governing the church."],
  [T.qualify, "Qualification for the 'individual judgment expanded' claim", "Although individuals gained the Bible and the idea of conscience, every established Protestant church insisted on conformity, and Augsburg gave no individual freedom of religion."],
  [T.chart, "Luther at a glance", "Justification by faith alone; Scripture alone; two sacraments (baptism, Communion); real presence but not transubstantiation; princes protect and organize the church; Lutheranism came to hold the state in religious awe."],
  [T.chart, "Calvin at a glance", "Predestination and election; Scripture as the sure rule; Lord's Supper tended to be symbolic; presbyteries and a consistory; church not subordinate to state, and Christians should Christianize society."],
  [T.chart, "The Church of England at a glance", "Monarch as head (Supreme Governor under Elizabeth) acting through Parliament; bishops and church courts kept; English worship and Book of Common Prayer; Thirty-Nine Articles; required conformity enforced by the High Commission."],
  [T.chart, "Trent and the Catholic Church at a glance", "Faith and works within grace; Scripture and apostolic tradition; seven sacraments; transubstantiation; papal authority protected by Holy See acceptance; seminaries; Jesuits; the Index and Inquisitions."],
  [T.chart, "Which two sacraments did Luther keep, and how many did Trent reaffirm?", "Luther kept baptism and Communion; Trent reaffirmed all seven."],
  [T.timeline, "1517 to 1521", "1517 Ninety-Five Theses; 1520 papal bull, burned by Luther, and To the Christian Nobility; 1521 excommunication and Diet of Worms."],
  [T.timeline, "1524 to 1555", "1524-25 Peasants' Revolt and the Twelve Articles; 1525 East Prussia secularized; 1534 Münster; 1546 Schmalkaldic War; 1548 Interim; 1555 Peace of Augsburg."],
  [T.timeline, "England: key dates", "1509 Henry VIII becomes king; 1534 Act of Supremacy; 1539 Six Articles and the closing of Binham; 1547-53 Edward VI; 1553-58 Mary I; 1558-1603 Elizabeth I; 1559 Injunctions and settlement; 1563 Thirty-Nine Articles."],
  [T.timeline, "Catholic reform: key dates", "1534-49 Paul III; 1540 Jesuits approved; 1542 Roman Inquisition; 1545-63 Council of Trent."],
  [T.timeline, "Calvin: key dates", "1509 born; 1536 Institutes of the Christian Religion; Geneva as the model community; John Knox brings Calvinism to Scotland in the 1550s."],
];

const quizRows: Row[] = [
  [T.sources, "In Source A, what do the peasants expect in return for their obedience?", "Release from serfdom, unless the gospel shows they are serfs", ["A guarantee of their lords' lands in perpetuity", "The right to elect the emperor of the Holy Roman Empire", "Immediate forgiveness of all their sins by a bishop"], "The Third Article ties obedience to God's law and asks that serfdom be justified from the gospel."],
  [T.sources, "In Source B, Luther says the peasants first sinned by:", "breaking sworn obedience to their rulers", ["refusing to pay for indulgences from Rome", "rejecting the authority of the pope in matters of faith", "burning the Bible in the public squares of the villages"], "He cites Matthew 22:21 and Romans 13 against the peasants."],
  [T.paragraph, "In a source paragraph, which is the best use of a quotation?", "A short quotation followed by an explanation of what it shows", ["A long quotation with no comment, so the source speaks for itself", "A paraphrase of the quotation with no reference to the claim", "A quotation from a source that is not part of the assignment"], "Evidence must be explained to support a claim."],
  [T.examples, "Which unit example best complicates Luther's call for unconditional obedience?", "Thomas More's loyalty to God above the king", ["Luther's own burning of the papal bull", "The Peace of Augsburg's recognition of Lutheran states", "The Jesuits' vow of obedience to the pope"], "More's refusal shows a higher loyalty to God could limit obedience to a ruler."],
  [T.claim, "Which of these is evidence that the Reformation transferred authority to governments?", "Henry VIII became supreme head of the Church of England", ["Luther stood before the emperor at Worms and refused to recant any of his writings", "The peasants asked that each community should choose and appoint its own pastor", "Calvin published the Institutes of the Christian Religion in Latin in 1536"], "The Act of Supremacy moved headship from the pope to the Crown."],
  [T.claim, "Which of these is evidence for expanded individual judgment?", "Luther's claim that each person may read the Bible and judge by conscience", ["Cuius regio, eius religio, as set out at Augsburg in 1555 by the imperial states", "The oath of supremacy, which Henry VIII required of his officials after 1534", "The Index of Prohibited Books, which the pope published for Catholic readers"], "Sola scriptura and the priesthood of all believers widened the role of individuals."],
  [T.qualify, "A qualification in an essay should:", "state a real limit or complication in your judgment", ["repeat the claim in different words", "introduce a new topic unrelated to the claim", "list every example you remember from the unit"], "It shows the judgment is careful and not too simple."],
  [T.chart, "Which church put Scripture and apostolic tradition on an equal footing?", "The Catholic Church at Trent", ["The Lutheran churches of northern Germany and Scandinavia", "The Calvinist churches of Geneva, Scotland, and the Netherlands", "The Church of England under Queen Elizabeth I"], "Protestants held Scripture alone as the source."],
  [T.chart, "Which church was governed by presbyteries of ministers and laymen?", "Calvinist churches", ["The Church of England", "The Catholic Church", "The Lutheran churches"], "Calvinists rejected bishops."],
  [T.timeline, "Which came first?", "The Diet of Worms (1521)", ["The Peace of Augsburg (1555)", "The Act of Supremacy (1534)", "The Council of Trent's first session (1545)"], "Worms in 1521 preceded the others."],
];

export const unit06SourceParagraph: Unit = {
  id: ID,
  number: 6,
  title: 'Source Paragraph and Synthesis',
  description: 'The two printed primary sources, how to write the source paragraph and the practice paragraph, choosing a different unit example, qualifications, a church comparison chart, and a timeline (Study Guide Questions 30-31).',
  notes: [
    {
      heading: T.sources,
      content: "The test includes a source paragraph (Question 30). It uses two printed excerpts from the 003D packet and a different example from the material studied through Monday, November 9. Review the full passages in the packet when checking your interpretation.\n\nSource A, Twelve Articles of the Swabian Peasants (1525), Third Article: \"We are thus ready to yield obedience according to God's law to our elected and regular authorities in all proper things becoming to a Christian. We therefore take it for granted that you will release us from serfdom as true Christians, unless it should be shown from the gospel that we are serfs.\"\n\nSource B, Luther, Against the Murdering and Robbing Bands of the Peasants (1525): \"First, they have sworn to their true and gracious rulers to be submissive and obedient, in accord with God's command ... 'Let every soul be subject unto the higher powers.'\" The ellipsis marks omitted material.\n\nWhat each allows Christians to challenge or requires them to obey: A lets Christians challenge serfdom and requires obedience in proper things according to God's law; B requires obedience to rulers on the authority of oaths and Romans 13.",
      bullets: [
        "A: obedience conditional on God's law; serfdom must be justified from the gospel",
        "B: obedience required; oath-breaking and resisting the higher powers is sin",
        "Both appeal to Scripture; they reach different conclusions",
        "Notice the ellipsis in B",
      ],
    },
    {
      heading: T.paragraph,
      content: "Question 30 asks you to compare the sources in brief notes, choose one source, and identify a different unit example that could support or complicate the same argument. A reliable pattern: (1) a claim that compares A and B; (2) a short quotation from each, explained; (3) one different unit example, explained as supporting or complicating the argument of the source you chose; (4) an although-clause that states a limit.\n\nModel answer: Although the peasants and Luther both turn to Scripture, the peasants use it to make obedience conditional (\"unless it should be shown from the gospel that we are serfs\"), while Luther uses Romans 13 to require submission (\"Let every soul be subject unto the higher powers\"). Augsburg supports Luther's side: it let rulers decide religion and gave no individual freedom, which shows how authority settled at the level of princes.",
      bullets: [
        "Claim that compares A and B",
        "Short quotation from each, then explain",
        "A different unit example that supports or complicates",
        "An although-clause to state a limit",
      ],
    },
    {
      heading: T.examples,
      content: "A different unit example can support or complicate the source you chose. Some options: Augsburg's cuius regio supports Luther's deference to rulers (rulers decide religion; subjects follow) and complicates the peasants' hope that Scripture could protect them. Thomas More complicates both sources: his loyalty to the king was limited by a higher loyalty to God, which is neither the peasants' conditional obedience nor Luther's submission. Henry's royal supremacy shows a ruler claiming religious authority for himself. Calvin's presbyteries support the peasants' idea that lay people share authority in the church, but Calvin's consistory shows strict discipline that no individual could refuse. Trent shows authority returning to the pope and councils.\n\nWhichever example you choose, explain how it connects to the argument. Naming it is not enough.",
      bullets: [
        "Augsburg: supports B, complicates A",
        "More: complicates both (higher loyalty to God)",
        "Royal supremacy: complicates B (rulers claim church headship)",
        "Presbyteries: supports A's idea of shared authority",
        "Consistory: complicates individual freedom",
      ],
    },
    {
      heading: T.claim,
      content: "Question 31 (practice paragraph): Did the Reformation mainly expand individual religious judgment, or did it mainly transfer religious authority to new institutions and governments? Write one developed paragraph with a clear claim, two explained historical examples, and a qualification. Use at least one source and one different example from this unit. You may defend either judgment (the Flippity answer says so).\n\nEvidence for expanded individual judgment: Luther at Worms (Scripture or right reason, conscience); sola scriptura and the priesthood of all believers; the Bible in German and English; the peasants' appeal to the gospel; lay participation in Calvinist presbyteries. Evidence for authority transferred to new institutions and governments: Augsburg's cuius regio; the Act of Supremacy; Lutheran princes confiscating church property; Calvin's consistory; Elizabeth's required conformity and the High Commission; even Trent, which strengthened papal authority.",
      bullets: [
        "Judgment A: individual judgment expanded",
        "Judgment B: authority moved to new institutions and governments",
        "Two explained examples + one qualification",
        "At least one assigned primary source",
        "No canceled supplement evidence needed",
      ],
    },
    {
      heading: T.qualify,
      content: "A complete answer explains how each example supports the claim. A qualification identifies a real limit or complication in your judgment. An although-clause can help: begin with the point that cuts against you, then state your claim.\n\nModel (authority transferred): Although Luther's stand at Worms, where he refused to recant unless Scripture or right reason convinced him, seemed to place judgment in each conscience, the Reformation mainly transferred authority to governments, because the Peace of Augsburg gave imperial states, not individuals, the right to choose Catholicism or Lutheranism and Henry VIII's Act of Supremacy made the king head of the English church. A qualification: subjects at Augsburg could emigrate, and Calvinist laymen shared in governing their churches, so individuals were not left without any role.\n\nModel (individual judgment expanded): Although rulers controlled the settlements, the Reformation mainly expanded individual judgment, because Luther taught that each person could read Scripture and judge by conscience (sola scriptura), and the Twelve Articles show peasants testing serfdom against the gospel. A qualification: every established Protestant church still demanded conformity, and Luther himself told princes to crush the revolt.",
      bullets: [
        "Explain each example; do not just name it",
        "Qualification = a real limit, not a restatement",
        "Although-clause: counter-point first, claim second",
        "Either judgment can earn full credit if well supported",
      ],
    },
    {
      heading: T.chart,
      content: "Use this comparison to place any example quickly.\n\nLuther: justification by faith alone; Scripture alone; two sacraments (baptism, Communion); rejects transubstantiation but affirms real presence; princes protect and organize the church; Lutheran thought held the state in religious awe.\n\nCalvin: predestination and election; Scripture as the sure rule; the Lord's Supper tended toward the symbolic; presbyteries of ministers and laymen; consistory discipline in Geneva; church not subordinate to state.\n\nChurch of England: monarch as head (Supreme Head under Henry, Supreme Governor under Elizabeth), acting through Parliament; bishops and church courts kept; English worship and the Book of Common Prayer; Thirty-Nine Articles; conformity required, enforced by bishops' courts and the High Commission.\n\nCatholic Church after Trent: justification by faith and works within grace; Scripture and apostolic tradition; seven sacraments; transubstantiation; papal authority protected by the Holy See's approval; seminaries; Jesuits and missions; Index and Inquisitions.",
      bullets: [
        "Luther: faith alone, Scripture alone, 2 sacraments, princes",
        "Calvin: predestination, presbyteries, consistory",
        "England: monarch through Parliament, bishops kept, conformity",
        "Trent: faith + works, Scripture + tradition, 7 sacraments, pope",
      ],
    },
    {
      heading: T.timeline,
      content: "1517 Ninety-Five Theses. 1520 papal bull burned; To the Christian Nobility. 1521 excommunication; Diet of Worms. 1524-25 Peasants' Revolt and Twelve Articles. 1525 East Prussia secularized. 1534 Act of Supremacy; Münster. 1536 Calvin's Institutes. 1539 Six Articles; Binham closed. 1540 Jesuits approved. 1542 Roman Inquisition. 1545-1563 Council of Trent. 1546 Schmalkaldic War. 1547-1553 Edward VI. 1548 Interim. 1553-1558 Mary I. 1555 Peace of Augsburg. 1558-1603 Elizabeth I. 1559 Injunctions and settlement. 1563 Thirty-Nine Articles and Trent's Session XXV on images.",
      bullets: [
        "1517 Theses -> 1521 Worms",
        "1525 Twelve Articles -> 1555 Augsburg",
        "1534 Supremacy -> 1559 Elizabethan settlement",
        "1540 Jesuits -> 1545-63 Trent",
      ],
    },
  ],
  flashcards: buildCards(ID, unit06CardRows),
  quiz: buildQuestions(ID, 'q', quizRows),
};
