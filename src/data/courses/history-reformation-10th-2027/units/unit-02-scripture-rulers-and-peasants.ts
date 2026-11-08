import type { Unit } from '@/types/study';
import { buildCards, buildQuestions, type CardRow, type Row } from '../helpers';

const ID = 'unit-02-scripture-rulers-and-peasants';

export const unit02Topics = {
  articles: 'The Peasants\' Revolt and the Twelve Articles',
  third: 'The Third Article: Conditional Obedience',
  luther: 'Luther\'s Against the Murdering and Robbing Bands of the Peasants',
  compare: 'Comparing the Peasants and Luther on Scripture and Authority',
  road: 'Charles V, the Council That Never Met, and the Road to Augsburg',
  augsburg: 'The Peace of Augsburg (1555): Who Decides?',
  emigrate: 'Emigration and the Limits of Religious Freedom',
  reservation: 'The Ecclesiastical Reservation and the Territorial State',
} as const;
const T = unit02Topics;

export const unit02CardRows: CardRow[] = [
  [T.articles, "Peasants' Revolt and the Twelve Articles", "In 1525 (the revolt began in 1524) German peasants appealed to Scripture to demand reforms, including choosing their own pastors and release from serfdom. Their Third Article made obedience conditional on God's law."],
  [T.articles, "Serfdom", "A condition of unfreedom in which peasants owed obligations to lords. The peasants demanded release unless the Gospel could justify keeping them as serfs."],
  [T.articles, "Name two demands of the Twelve Articles and the justification for each. (Study Guide Q9)", "First Article: each community chooses and may depose its pastor, who must teach the gospel pure and simple (justified by the gospel and community choice). Third Article: release from serfdom, because it is consistent with Scripture that Christians be free (justified by the gospel, unless it can be shown from the gospel that they are serfs). Also: tithes for the pastor and the poor (Second), and fair use of game and fish because God gave man dominion over the animals (Fourth)."],
  [T.articles, "What was the peasants' stated attitude to the gospel and to revolt in the Twelve Articles' preface?", "They said the gospel is not the cause of revolt and disorder but teaches love, peace, patience, and concord. They claimed to act as Christians who accept the gospel and live by it."],
  [T.articles, "What did the Conclusion of the Twelve Articles promise?", "They would willingly retract any article proved really to be against the word of God by a clear explanation of Scripture, and they reserved the right to present more complaints based on Scripture. The tone is assertive but conditional."],
  [T.articles, "What were the peasants' real aims, according to P&C?", "Mainly social and economic: regulation of rents, security of common village rights, and relief from exorbitant exactions and oppressive rule by manorial overlords. Preachers had stirred them by saying anyone could see for himself what was right."],
  [T.third, "How did the peasants qualify their obedience in the Third Article? (Flippity)", "They would obey according to God's law, in all proper things becoming to a Christian, and expected release from serfdom unless the gospel showed they were serfs."],
  [T.third, "Which authority do the Twelve Articles invoke against serfdom? (Flippity)", "Scripture and the gospel. This is sola scriptura applied to social life, an idea associated in this course especially with Luther."],
  [T.third, "Is the tone of the Twelve Articles reformist or revolutionary?", "Mostly reformist: the peasants ask for change within the order, remain ready to obey authorities in proper things, and offer to retract anything shown to contradict Scripture. Yet their appeal to Scripture against lords also challenges existing authority."],
  [T.luther, "Against the Murdering and Robbing Bands of the Peasants", "Luther's 1525 attack on the revolt. He appealed to Scripture, especially Romans 13, to defend obedience to rulers and condemned the peasants' rebellion."],
  [T.luther, "What are Luther's three charges against the peasants?", "(1) They broke the oath of obedience they swore to their rulers; (2) they cause uproar and rob and pillage monasteries and castles, like highwaymen and murderers; (3) they cloak their sins with the gospel, calling themselves Christian brethren, which blasphemes God's name."],
  [T.luther, "Which Bible verses does Luther use against the peasants?", "Matthew 22:21, \"Render therefore unto Caesar the things which are Caesar's,\" and Romans 13:1-2, \"Let every soul be subject unto the higher powers ... they that resist shall receive to themselves damnation.\""],
  [T.luther, "Why does Luther say rebellion is worse than ordinary murder?", "Rebellion is like a great fire that kindles and devastates a whole country, filling it with murder and bloodshed and making widows and orphans. Rebels are like mad dogs: if you do not fight them, they will fight you and the whole country with you. The images urge readers to act swiftly and without mercy."],
  [T.luther, "How did Luther defend obedience to rulers against the peasants? (Flippity)", "He accused them of breaking sworn allegiance and cited Romans 13, the higher powers. This is the assigned 1525 response."],
  [T.luther, "How did Luther's tone change from his earlier pamphlet on the Twelve Articles?", "Earlier he did not condemn the peasants because they promised to yield to law and better instruction. When they resorted to force, he wrote differently and told those in authority how to act: the pamphlet brands the uprising devilish rebellion."],
  [T.luther, "What did Luther do after the revolt, according to P&C?", "He repudiated all connection with the peasants, urged the princes to suppress them by the sword, and moved into closer alliance with rulers; Lutheranism took on a character of submissiveness to the state."],
  [T.compare, "Compare the Third Article with Luther's argument about obedience. (Study Guide Q10)", "Both appeal to Scripture. The peasants use the gospel to say Christians should be free and that obedience is owed 'according to God's law,' so serfdom must be justified from the gospel. Luther uses Romans 13 and Matthew 22:21 to say Christians owe rulers obedience and that resisters are damned. Scripture is used to limit authority in one case and to uphold it in the other."],
  [T.compare, "Write an 'although' sentence on the peasants and Luther. (003D)", "Although the peasants and Luther both appealed to Scripture, the peasants used the gospel to challenge serfdom and make obedience conditional on God's law, while Luther used Romans 13 to demand obedience and to call on princes to crush the revolt."],
  [T.compare, "Peasants vs. Luther: what did Source A and Source B allow Christians to challenge or require them to obey? (Study Guide Q30)", "Source A (Third Article) allows Christians to challenge serfdom when the gospel does not support it, while still promising obedience in proper things. Source B (Luther) requires obedience to rulers and allows no challenge by force. A different unit example that complicates this: Calvinist or Anglican state-church arrangements, or Augsburg's cuius regio, where rulers decide religion."],
  [T.road, "Charles V asked the pope for help with what? Why didn't the papacy give it? (003D Q2)", "He wanted a Europe-wide council to hear the Protestants and restore church and German unity. The papacy delayed because it feared a council of all Latin Christendom might get out of control, remembering Constance; the French king also schemed against a council."],
  [T.road, "Interim (1548)", "Charles V's attempt to guide religion in Germany until a council could finish its work. It upheld the main Catholic doctrines but allowed clergy marriage and minor concessions. Neither side accepted it."],
  [T.road, "League of Schmalkald", "The alliance of Lutheran princes and free cities against the emperor. It went to war with Charles V in 1546, supported by Catholic France whose king, Francis I, wanted to keep Germany divided. The war ended with the Peace of Augsburg."],
  [T.augsburg, "Peace of Augsburg (1555)", "The settlement allowing imperial states to choose Catholicism or Lutheranism as their public religion. Calvinists and Anabaptists were excluded."],
  [T.augsburg, "Territorial rulers and imperial states", "The princes and other political estates of the Holy Roman Empire whose religious authority Augsburg recognized."],
  [T.augsburg, "What did Augsburg allow rulers to decide? Name the two recognized religions and an excluded group. (Study Guide Q11)", "Territorial rulers (imperial states) could choose Catholicism or Lutheranism for their territory (cuius regio, eius religio: whose the region, his the religion). Catholics and Lutherans were recognized; Calvinists and Anabaptists were excluded. It was not individual freedom of religion."],
  [T.augsburg, "Cuius regio, eius religio", "\"Whose the region, his the religion\": each state of the Empire could be Lutheran or Catholic, and subjects followed their ruler's choice. No individual freedom of religion was permitted."],
  [T.augsburg, "Who benefited most from Augsburg, and why was it not religious freedom for individuals? (003D Q1)", "Territorial rulers and states benefited most: it was a victory for Lutheranism and states' rights. Individuals had no right to choose, because if the ruler or city chose Lutheranism, all persons had to be Lutheran, and in Catholic states all had to be Catholic."],
  [T.augsburg, "Which groups were left outside Augsburg? (Flippity)", "The settlement recognized Catholics and Lutherans only. Calvinists and Anabaptists were excluded (§17)."],
  [T.emigrate, "Right to emigrate", "Augsburg let subjects who changed religion leave and sell property, subject to obligations and fees. It did not generally allow them to stay and worship freely."],
  [T.emigrate, "Why was the right to emigrate different from the right to worship freely at home? (Study Guide Q12)", "Emigration (§24) let a subject who did not want the ruler's religion move away, sell goods, and pay a reasonable sum for release from servile obligations and arrears. But the settlement did not allow individuals to keep a different religion where they lived; the ruler's choice governed the territory, and §23 forbade one estate from taking another's subjects under its protection."],
  [T.reservation, "Ecclesiastical reservation", "A Catholic bishop or other church ruler who converted had to leave his office and its property. He could not take the church territory into Lutheranism."],
  [T.reservation, "What was the ecclesiastical reservation, and how did Augsburg both strengthen territorial states and protect Catholic church lands? (Study Guide Q13)", "Under §18, an archbishop, bishop, or prelate who left the old religion had to give up his office, and the chapter elected a Catholic successor. Rulers gained religious authority over their territories, but church territories stayed Catholic when their ruler converted. P&C notes the proviso was often disregarded later."],
  [T.reservation, "What was the long-term political effect of Augsburg? (P&C p. 80)", "It was a step in the disintegration of Germany into a mosaic of increasingly separate states, while the Germans became the one large European people almost evenly divided between Catholics and Protestants."],
];

const quizRows: Row[] = [
  [T.articles, "In the Twelve Articles, which demand did the peasants make about church leaders?", "Each community should choose its own pastor and be able to depose him", ["Every pastor should be appointed by the pope and serve for life", "Pastors should be paid by the emperor and receive no tithe", "Pastors should be chosen only from noble families"], "The First Article asked for community choice of pastor, with the right to remove him if he behaved improperly."],
  [T.articles, "Which authority did the peasants use to justify their demands?", "Scripture and the gospel", ["The decrees of the Council of Trent", "The law of the Holy Roman Empire", "The will of the Elector of Saxony"], "They claimed their articles were consistent with the word of God and offered to retract any shown to contradict it."],
  [T.third, "The Third Article made the peasants' obedience:", "conditional on God's law", ["unconditional under every circumstance", "owed only to the pope", "unnecessary once serfdom ended"], "They were ready to obey according to God's law but expected release from serfdom unless the gospel showed they were serfs."],
  [T.luther, "Which Bible verse did Luther quote in Against the Murdering and Robbing Bands?", "Romans 13:1, \"Let every soul be subject unto the higher powers\"", ["Genesis 1:28, \"Be fruitful and multiply\"", "Acts 15:6, \"The apostles and elders came together\"", "Romans 1:17, \"The just shall live by faith\""], "Luther cited Romans 13 and Matthew 22:21 to argue that the peasants had broken their oath of obedience."],
  [T.luther, "Luther compared rebellion to a great fire and rebels to mad dogs in order to:", "urge swift and harsh action against the revolt", ["call for compromise with the peasants", "defend the peasants' right to choose pastors", "praise the peasants for following the gospel"], "The images present rebellion as devastating and encourage rulers and readers to suppress it."],
  [T.compare, "What do the Twelve Articles and Luther's pamphlet have in common?", "Both appeal to Scripture", ["Both reject the authority of Scripture", "Both argue for the right to rebel", "Both defend serfdom"], "They use Scripture to reach opposite conclusions about political authority."],
  [T.road, "Why did Charles V want the pope to assemble a council?", "To hear the Protestants and restore church and German unity", ["To approve the Peace of Augsburg and recognize the Lutheran princes' new rights", "To condemn John Calvin and the Swiss reformers, whose teaching was spreading in Europe", "To appoint Martin Luther as a bishop and so reconcile him with the Roman Church"], "Charles hoped compromise could heal the religious division, but the popes procrastinated."],
  [T.augsburg, "Which two religions did the Peace of Augsburg recognize?", "Catholicism and Lutheranism", ["Lutheranism and Calvinism", "Catholicism and Anabaptism", "Calvinism and Anglicanism"], "Calvinists and Anabaptists were excluded."],
  [T.emigrate, "What could a subject do under Augsburg if he did not want his ruler's religion?", "Emigrate, selling property and paying required fees", ["Remain in his home and worship freely according to his own conscience in private", "Appeal to the pope or the emperor, who would then protect him from his own ruler", "Appoint his own pastor and hold services in the village without the ruler's leave"], "The right to emigrate was not a right to stay and practice another religion."],
  [T.reservation, "Under the ecclesiastical reservation, a Catholic bishop who became Lutheran had to:", "give up his office and its territory", ["bring his territory with him into Lutheranism", "become a prince of the Empire", "be excommunicated and executed"], "He could convert as an individual but not carry church lands into Lutheranism."],
];

export const unit02ScriptureRulersAndPeasants: Unit = {
  id: ID,
  number: 2,
  title: 'Scripture, Rulers, and the Peasants',
  description: 'The Peasants\' Revolt and the Twelve Articles, Luther\'s response, Charles V and the failed council, and the Peace of Augsburg with its emigration rule and ecclesiastical reservation (Study Guide Questions 9-13).',
  notes: [
    {
      heading: T.articles,
      content: "In 1524 the peasants of a large part of Germany revolted. They were stirred by new religious ideas and by preachers who went beyond Luther in asserting that anyone could see for himself what was right. Their aims, however, were social and economic: regulation of rents, security of common village rights, and relief from oppressive rule by manorial overlords (P&C p. 78).\n\nThe Twelve Articles of the Swabian Peasants (early 1525, 003D Section A) set out concrete demands while insisting that the peasants sought reform in line with Scripture. The preface says the gospel is not the cause of revolt but teaches love, peace, patience, and concord. Each demand is justified by Scripture or by the rights of the community.",
      bullets: [
        "First Article: each community chooses its pastor and may depose him; he must teach the gospel pure and simple (gospel + community choice)",
        "Second Article: the large tithe pays a decent maintenance for the pastor and the remainder goes to the poor; small tithes refused because God created cattle for the free use of man",
        "Third Article: release from serfdom, since Scripture makes Christians free (gospel)",
        "Fourth Article: the poor may take game and fish, because God gave man dominion over the animals",
        "Seventh Article: lords may demand only what is just and agreed",
        "Conclusion: willing to retract anything proved against the word of God",
      ],
    },
    {
      heading: T.third,
      content: "The Third Article is the heart of the source. The peasants write that it is consistent with Scripture that they should be free, and then: \"We are thus ready to yield obedience according to God's law to our elected and regular authorities in all proper things becoming to a Christian. We therefore take it for granted that you will release us from serfdom as true Christians, unless it should be shown from the gospel that we are serfs.\"\n\nObedience is therefore conditional: it is owed according to God's law and in proper things. Serfdom is judged by Scripture, which invokes sola scriptura. The overall tone is assertive but conditional, closer to reformist (change within order) than revolutionary, though a ruler could still hear the demand as a challenge to the existing social order.",
      bullets: [
        "Obedience owed 'according to God's law' and 'in all proper things'",
        "Release from serfdom demanded unless the gospel shows they are serfs",
        "Scripture, not custom or lordly right, is the test",
      ],
    },
    {
      heading: T.luther,
      content: "Luther's Against the Murdering and Robbing Bands of the Peasants (1525, 003D Section B) reverses his earlier conciliatory tone. In his preceding pamphlet he had not condemned the peasants because they promised to yield to law and better instruction. When they appealed to force, he wrote differently and instructed those in authority how to act.\n\nHe lists three \"horrible sins\": (1) they broke their sworn obedience to rulers, citing Matthew 22:21 and Romans 13:1-2; (2) they cause uproar and rob and pillage monasteries and castles, and a rebel may be slain at the first opportunity; (3) they cloak their sins with the gospel and so blaspheme. Rebellion is worse than murder, he says, because it is like a great fire that devastates a country, and rebels are like mad dogs. Luther urged the princes to suppress them \"by the sword\" (P&C p. 78). Afterward Lutheranism took on a character of submissiveness to the state, and Luther described Christian liberty as an internal, spiritual freedom.",
      bullets: [
        "Sin 1: breaking the oath of obedience (Romans 13, Matthew 22:21)",
        "Sin 2: robbery, pillage, and violence",
        "Sin 3: cloaking sins with the gospel",
        "Images: a great fire, a mad dog",
        "Purpose: deter rebels, stiffen magistrates, defend order as a Christian duty",
      ],
    },
    {
      heading: T.compare,
      content: "Both sources appeal to Scripture, but they reach opposite conclusions about political authority. The peasants read the gospel as freeing Christians from serfdom and making obedience depend on God's law. Luther reads Romans 13 as commanding submission to the higher powers and condemning resistance. Where the peasants treat Scripture as a test of rulers and customs, Luther treats Scripture as a ground for obeying rulers.\n\nThis is the central tension of the unit: challenging Church authority did not automatically justify challenging a ruler. The in-class writing move is a one-sentence although-clause: \"Although the peasants and Luther both appealed to Scripture, the peasants used the gospel to make obedience conditional, while Luther used Romans 13 to demand obedience.\" On the test (Study Guide Questions 30-31), this comparison is the model for the source paragraph.",
      bullets: [
        "Similarity: both cite Scripture as authority",
        "Difference: peasants limit obedience; Luther requires it",
        "Peasants: Christian freedom, conditional obedience, reform within order",
        "Luther: oaths, Romans 13, rebellion is worse than murder",
        "Use an 'although' sentence to state the tension",
      ],
    },
    {
      heading: T.road,
      content: "Charles V, as Holy Roman Emperor, was bound to uphold Catholicism, but the states of the Empire feared losing local liberty and saw his efforts to repress Luther as a threat. Charles appealed to the pope to assemble a Europe-wide council where the Protestants could be heard and compromise reached. The papacy feared a council of all Latin Christendom might get out of control, since Catholics as much as Protestants demanded reform, and the French king schemed against a council. Pope after pope delayed (P&C p. 79).\n\nIn 1548 Charles tried to settle matters himself with the Interim, which upheld Catholic doctrine but allowed clergy marriage. Neither side accepted it. Meanwhile the Lutheran princes and free cities formed the League of Schmalkald; allied with France, it went to war with the emperor in 1546. The Peace of Augsburg ended the war.",
      bullets: [
        "Charles V asked the pope for a general council",
        "Popes delayed (fear of Constance, demands for reform, French pressure)",
        "1548 Interim: rejected by both sides",
        "1546: Schmalkaldic League at war with Charles",
        "1555: Peace of Augsburg",
      ],
    },
    {
      heading: T.augsburg,
      content: "The Religious Peace of Augsburg (September 25, 1555) signified a complete victory for Lutheranism and states' rights. Each state of the Empire received the liberty to be either Lutheran or Catholic as it chose: cuius regio, eius religio. No individual freedom of religion was permitted; if a ruler or free city chose Lutheranism, all persons had to be Lutheran, and likewise in Catholic states.\n\nThe imperial states had argued that the ius reformandi, the right to reform, belonged to member states and not to the Empire. Augsburg gave them that right, but only for two religions. Section 15 protected adherents of the Augsburg Confession, §16 protected Catholics, and §17 excluded everyone else. Calvinists and Anabaptists, whom neither Lutherans nor Catholics would tolerate, received no rights. Lutheranism prevailed in the north and Catholicism in the south and the Rhine valley.",
      bullets: [
        "Recognized: Catholics and Lutherans (§§15-16)",
        "Excluded: all others, notably Calvinists and Anabaptists (§17)",
        "Principle: cuius regio, eius religio",
        "Winners: territorial rulers and states' rights",
        "Not a charter of individual religious liberty; law for managing pluralism by territory",
        "Imperial cities with both religions could stay mixed (§27)",
      ],
    },
    {
      heading: T.emigrate,
      content: "Augsburg did give individuals one escape: a right to emigrate (§24). Subjects who wished to leave because of their religion were permitted to do so, to sell their goods, and to leave after paying a reasonable sum for release from servile obligations and arrears of taxes. Their lords kept their customary right to demand recompense.\n\nThis was different from freedom of worship. The right to leave did not generally let people stay and worship as they chose, because the ruler's choice governed the territory. Section 23 reinforced the limit by forbidding any estate to induce another's subjects to accept its religion or to take them under its protection. So individual freedom under Augsburg was limited to moving away, at a cost, and never to dissent at home.",
      bullets: [
        "§24: leave, sell property, pay fees and arrears",
        "§23: no estate may lure or protect another's subjects",
        "Emigration is not freedom to worship at home",
        "The ruler's religion binds the subject",
      ],
    },
    {
      heading: T.reservation,
      content: "The ecclesiastical reservation (§18) said that any archbishop, bishop, prelate, or other spiritual incumbent who left the old religion must immediately give up his office and benefices, and the chapter would elect a Catholic successor. In P&C's words, a churchman who turned Lutheran should not carry his territory with him but turn Lutheran as an individual and move away, leaving his land and its inhabitants Catholic.\n\nSo Augsburg strengthened territorial states (rulers decided the religion of their territory) while preserving Catholic church territories against a bishop's conversion. Because the issues in Germany were not yet stable, the proviso was often disregarded in later years. P&C sums up the political effect: a step in the disintegration of Germany into a mosaic of increasingly separate states, with the Germans emerging almost evenly divided between Catholic and Protestant.",
      bullets: [
        "Converting bishop must resign and leave",
        "Church territory stays Catholic",
        "Chapter elects a Catholic successor",
        "Often ignored later",
        "Compare East Prussia, where a church-state became a secular duchy (Unit 4)",
      ],
    },
  ],
  flashcards: buildCards(ID, unit02CardRows),
  quiz: buildQuestions(ID, 'q', quizRows),
};
