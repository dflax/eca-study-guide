import type { Unit } from '@/types/study';
import { buildCards, buildQuestions, type CardRow, type Row } from '../helpers';

const ID = 'unit-03-calvin';

export const unit03Topics = {
  geneva: 'John Calvin, Geneva, and the Institutes',
  predestination: 'Predestination and Election (Institutes III.21)',
  humility: 'Humility and Confidence',
  limits: 'Limits on Inquiry: Back to Scripture',
  discipline: 'Presbyteries, the Consistory, and Discipline in Geneva',
  compare: 'Luther and Calvin Compared',
  beyond: 'Calvinism Beyond Geneva',
} as const;
const T = unit03Topics;

export const unit03CardRows: CardRow[] = [
  [T.geneva, "John Calvin and Geneva", "Protestant reformer associated with Geneva, predestination, and a strictly disciplined religious community. A Frenchman born in 1509, trained as a priest and a lawyer, he published the Institutes of the Christian Religion in Latin in 1536."],
  [T.geneva, "Institutes of the Christian Religion", "Calvin's 1536 work in Latin, addressed to all the world rather than to German rulers. Written in the clear, logical style of a trained lawyer, it gave people in many countries a reasoned statement of doctrine and a method of organization."],
  [T.geneva, "What did Calvin share with Luther?", "Calvin agreed with Luther's criticisms of the Roman church and with most of his fundamental ideas, such as justification by faith and not by works. Both drew on St. Augustine in holding that grace comes from God's free action alone."],
  [T.geneva, "What was worship like in Calvin's Geneva?", "Severe and intellectual: long sermons explaining doctrine, with color, music, and incense rigidly subdued. The black gown replaced bright vestments; images of saints, Mary, and Christ were taken down; chanting gave way to hymns. Calvin regulated his church by the Bible."],
  [T.geneva, "Why can the Delft painting of the Oude Kerk (c. 1650) not tell us what Geneva was like?", "It is a later Dutch church painted about 1650, in a different place and period. It may show how a Reformed church space was arranged, but it cannot show whether all Reformed churches looked alike or what Geneva itself was like."],
  [T.predestination, "Predestination", "In Calvin's account, God's eternal decree determining each person's final end: eternal life for some and eternal damnation for others."],
  [T.predestination, "Election and the elect", "God's choice of those who will receive salvation. Calvin says election rests on freely given mercy rather than human worth."],
  [T.predestination, "How does Calvin define predestination? Who decides, and what role does human worth play? (Study Guide Q14)", "\"God's eternal decree, by which he compacted with himself what he willed to become of each man\": eternal life is foreordained for some, eternal damnation for others. God alone decides. For the elect the plan was \"founded upon his freely given mercy, without regard to human worth.\""],
  [T.predestination, "How does Calvin define predestination in 003H05? (Flippity)", "God's eternal decree foreordains some to eternal life and others to death. It is not founded on human worth. (Institutes III.21)"],
  [T.predestination, "What does Calvin say about the call and justification among the elect?", "He regards the call as a testimony of election, and justification as another sign of its manifestation, until the elect come into the glory in which that election is fulfilled."],
  [T.predestination, "Why does Calvin say the gospel is not preached equally to all?", "This diversity shows 'the wonderful depth of God's judgment.' Salvation is freely offered to some while others are barred from it, and Calvin says it serves the decision of God's eternal election."],
  [T.humility, "Humility and confidence", "Election should produce humility because salvation depends on God's mercy, and confidence because those entrusted to Christ will be kept safe."],
  [T.humility, "Why does Calvin think election should produce both humility and confidence? (Study Guide Q15)", "Humility: salvation \"flows from the wellspring of God's free mercy,\" so no one can claim credit, and ignorance of this 'takes away from true humility.' Confidence: Christ promises that \"whatever the Father has entrusted to his keeping will be safe\" (John 10:28-29), \"our only ground for firmness and confidence.\""],
  [T.humility, "Which phrase from Calvin supports confidence?", "\"Whatever the Father has entrusted to his keeping will be safe\" (John 10:28-29). Calvin adds that those who do not know that they are God's own \"will be miserable through constant fear.\""],
  [T.humility, "Which phrase from Calvin supports humility?", "\"Our salvation flows from the wellspring of God's free mercy.\" Ignorance of election 'takes away from true humility' and detracts from God's glory."],
  [T.limits, "What limits does Calvin place on inquiry into predestination? Why does he direct believers back to Scripture? (Study Guide Q16)", "Believers should not seek knowledge of predestination beyond what the Word of God discloses; going beyond the bounds of the Word is like walking in a pathless waste or seeing in darkness, a foolish and dangerous desire. He directs them to Scripture because it is 'the school of the Holy Spirit,' where nothing necessary or useful is omitted."],
  [T.limits, "What is Calvin's 'learned ignorance'?", "Being willing not to know what Scripture does not disclose. Calvin says believers should not be ashamed to be ignorant of something in this matter, and should refrain from a kind of knowledge whose ardent pursuit is 'foolish and dangerous.'"],
  [T.limits, "Why does Calvin say believers should not be deprived of what Scripture says about predestination?", "Scripture contains what is useful to know; hiding it would defraud believers of the blessing of God or accuse the Holy Spirit of publishing what is profitable to suppress."],
  [T.discipline, "Presbytery", "A body of ministers and devout laymen sharing authority over church government. Calvinists rejected bishops in favor of presbyteries."],
  [T.discipline, "Consistory", "Geneva's body of ministers and elders that enforced religious discipline. Strict conduct did not mean that people could earn election."],
  [T.discipline, "How did ministers and laymen share authority in Calvinist church government? (Study Guide Q17)", "Calvinists governed churches through presbyteries, elected bodies of ministers and devout laymen. This gave lay people authority over church governance and broke the monopoly of priestly power. In Geneva the ministers ruled the church and a consistory of ministers and elders ruled the town."],
  [T.discipline, "Give an example of discipline in Geneva and say why it does not mean people could earn election. (Study Guide Q17; 003H05 C3)", "Example: the consistory suppressed 'loose, light, or frivolous living' and drove disaffected people into exile (and Servetus was burned as a heretic). Election, however, rests on God's eternal decree and free mercy 'without regard to human worth,' so discipline and effort are a response to, and a sign of, election and not a way to earn it."],
  [T.discipline, "Why does communal discipline not mean Calvinists could earn election? (Flippity)", "Calvin's text grounds election in God's free mercy without regard to human worth; P&C describes strict communal discipline. Discipline and effort coexist with election rather than purchase it."],
  [T.discipline, "Who participated in Calvinist presbyteries, according to P&C pp. 81-82? (Flippity)", "Ministers and devout laymen; this gave lay people a share in church governance but not unrestricted religious freedom."],
  [T.compare, "What shared belief about salvation do Luther (P&C p. 76) and Calvin (003H05) show? (Study Guide Q18)", "Both hold that salvation depends on God's grace and not on human works or worth. P&C: a man did not 'earn' grace by doing good. Calvin: election is founded on God's freely given mercy, without regard to human worth."],
  [T.compare, "What difference of emphasis appears between Luther (P&C p. 76) and Calvin (003H05)? (Study Guide Q18)", "Luther, as P&C presents him, stresses faith and grace and that good works are their consequence and evidence. Calvin stresses God's eternal decree of election, with humility and confidence flowing from it. Both treat works as a result, not a cause."],
  [T.compare, "How do Luther and Calvin differ on the Lord's Supper? (P&C p. 81)", "Both rejected transubstantiation. Luther insisted that God is somehow actually present in the bread and wine; Calvin and his followers tended more to treat it as a symbolic or commemorative act."],
  [T.compare, "How do Calvinists differ from Lutherans on church and state? (P&C p. 81)", "Calvinists refused to accept the subordination of church to state and wanted true Christians to Christianize the state; Lutheranism came to hold the state in religious awe. Calvinists also rejected bishops, which Lutherans and Anglicans kept."],
  [T.beyond, "Why was Geneva called the 'Protestant Rome'?", "Reformers of many nationalities came to study a 'true scriptural community' so they could copy it at home. It became the one great international center of Reformed doctrine."],
  [T.beyond, "Name places where Calvinism took root.", "Geneva, the Dutch Netherlands, Scotland (through John Knox in the 1550s, where Presbyterianism became established), France (Huguenots), parts of Hungary, Bohemia, and Poland, and later England and New England."],
  [T.beyond, "What was the Calvinist doctrine of the 'calling'?", "A man's labor has religious dignity, and any honest work is pleasing in the sight of God."],
  [T.beyond, "Why did Calvinism spread more widely as an international movement than Lutheranism or Anglicanism?", "Lutheranism and Anglicanism were too closely tied to particular states. Calvinism offered a Latin, logical statement of doctrine and a method of church organization that groups in any country could adopt."],
];

const quizRows: Row[] = [
  [T.geneva, "Where did Calvin set up his model Christian community?", "Geneva", ["Wittenberg", "Worms", "Augsburg"], "Calvin was called in by reformers who had driven out their bishop and built a model community at Geneva in Switzerland."],
  [T.predestination, "Calvin defines predestination as:", "God's eternal decree about each person's end", ["a person's free choice to accept the gospel when it is preached to him in a church", "a reward that God gives to those who perform the greatest number of good works", "the pope's authority to decide which Christians will be saved and which will be damned"], "Eternal life is foreordained for some and eternal damnation for others, by God's decree."],
  [T.predestination, "According to Calvin, election of those who are saved is founded on:", "God's freely given mercy, without regard to human worth", ["the good works that a person performs before dying", "the strength of a person's faith over many years", "the sacraments received from a priest in good standing"], "The passage says the plan was \"founded upon his freely given mercy, without regard to human worth.\""],
  [T.humility, "Calvin says election should produce humility because:", "salvation depends on God's mercy, not on human merit", ["a person who is saved must be better than others", "a person can never know whether he is saved", "a person who is saved must join a monastery"], "If salvation flows from God's free mercy, no one has grounds for pride."],
  [T.humility, "Which source does Calvin cite for confidence that those entrusted to Christ are safe?", "John 10:28-29", ["Romans 13:1", "Acts 15:6", "Genesis 3:1"], "Christ promises that whatever the Father has entrusted to his keeping will be safe."],
  [T.limits, "Calvin says that to seek knowledge of predestination beyond Scripture is like:", "walking in a pathless waste or trying to see in the dark", ["entering a monastery without having first taken any vows of poverty or obedience", "sailing a ship across the sea without a captain, a pilot, or any map to guide it", "building a house with no roof in the middle of a long winter storm"], "He warns that exceeding the bounds of the Word leads into darkness, where we wander, slip, and stumble."],
  [T.discipline, "Calvinists rejected bishops in favor of:", "presbyteries of ministers and devout laymen", ["councils of cardinals chosen by the pope", "royal commissions appointed by the king", "monastic chapters led by abbots"], "Presbyteries gave lay people authority over church governance."],
  [T.discipline, "Geneva's consistory was made up of:", "ministers and elders", ["only bishops and archbishops", "only the town's magistrates", "Jesuit priests sent from Rome"], "A body of ministers ruled the church; a consistory of ministers and elders ruled the town."],
  [T.compare, "Which belief did Calvin share with Luther?", "Justification by faith and not by works", ["Transubstantiation in Communion", "The authority of the pope over councils", "The need for seven sacraments"], "P&C: with most of Luther's fundamental ideas, such as justification by faith and not by works, Calvin agreed."],
  [T.beyond, "Who brought Calvinism to Scotland in the 1550s?", "John Knox", ["Ignatius of Loyola", "Thomas More", "Albert of Brandenburg"], "In Scotland Presbyterianism became and remained the established religion."],
];

export const unit03Calvin: Unit = {
  id: ID,
  number: 3,
  title: 'Calvin',
  description: 'John Calvin\'s Geneva, predestination and election in Institutes III.21, humility and confidence, the limits of inquiry, presbyteries and the consistory, and a comparison with Luther (Study Guide Questions 14-18).',
  notes: [
    {
      heading: T.geneva,
      content: "John Calvin was a Frenchman born Jean Cauvin in 1509, a full generation younger than Luther. Trained as both a priest and a lawyer, he had a humanist's knowledge of Latin, Greek, and Hebrew. After a sudden conversion at twenty-four he joined the religious revolutionaries, and in 1536 he published, in the international language of Latin, his Institutes of the Christian Religion. Where Luther had aimed much of his writing at German rulers and German national feeling against Rome, Calvin addressed all the world, in the severe, logical style of a lawyer (P&C pp. 80-81).\n\nCalvin was called in by reformers who had driven out their bishop and set up his model Christian community at Geneva. A body of ministers ruled the church; a consistory of ministers and elders ruled the town. Worship was severe and intellectual: long sermons, with color, music, and incense subdued, images taken down and destroyed, and hymns instead of chant. The Delft painting in the 003H05 handout (the Oude Kerk, c. 1650) is a later Dutch church and cannot establish what Geneva looked like.",
      bullets: [
        "Born 1509; trained as priest and lawyer; humanist learning",
        "1536: Institutes of the Christian Religion (Latin; for readers everywhere)",
        "Geneva: the model Christian community; the 'Protestant Rome'",
        "Worship: sermons, no incense or images, hymns, black gown",
        "Agreed with Luther on justification by faith, not works",
      ],
    },
    {
      heading: T.predestination,
      content: "The assigned source is Calvin's Institutes, Book III, chapter 21 (003H05). Calvin writes: \"We call predestination God's eternal decree, by which he compacted with himself what he willed to become of each man. For all are not created in equal condition; rather, eternal life is foreordained for some, eternal damnation for others.\" Each person is thus predestined \"to life or to death.\"\n\nGod, not the person, determines the outcome. For the elect, Calvin says, \"this plan was founded upon his freely given mercy, without regard to human worth\"; for those given over to damnation, God acts by a \"just and irreprehensible but incomprehensible judgment.\" Election is God's choice of those who will receive salvation, and the gospel is not preached or accepted equally by all, which reveals \"the wonderful depth of God's judgment.\" Among the elect, the call is a testimony of election and justification another sign of it.",
      bullets: [
        "Predestination: God's eternal decree, life for some and damnation for others",
        "Election: God's free choice of the saved, not based on human worth",
        "Source: Institutes III.21 (003H05)",
        "Call and justification are signs of election",
        "Calvin 'made far more of' predestination than Luther (P&C p. 81)",
      ],
    },
    {
      heading: T.humility,
      content: "Calvin argues that election should produce both humility and confidence. Humility: we shall never be persuaded that salvation \"flows from the wellspring of God's free mercy\" until we know God's eternal election, which \"illumines God's grace by this contrast: that he does not indiscriminately adopt all into the hope of salvation but gives to some what he denies to others.\" Ignorance of this principle \"takes away from true humility.\"\n\nConfidence: \"as Christ teaches, here is our only ground for firmness and confidence\": Christ promises that \"whatever the Father has entrusted to his keeping will be safe\" (John 10:28-29). This frees believers from fear in \"so many dangers, snares, and mortal struggles.\" Those who do not know that they are God's own \"will be miserable through constant fear.\" P&C adds that predestination did not lead to fatalism but became a challenge to unrelenting effort and a sense of burning conviction.",
      bullets: [
        "Humility: salvation depends on God's mercy, not on us",
        "Confidence: those entrusted to Christ will be kept safe",
        "Key phrases: 'wellspring of God's free mercy'; 'will be safe'",
        "Not fatalism: a spur to effort and conviction (P&C p. 81)",
      ],
    },
    {
      heading: T.limits,
      content: "Calvin sets limits on how far believers may inquire into predestination. The Word of the Lord is \"the sole way\" and \"the sole light\" for all that we may lawfully hold about God. If we exceed the bounds of the Word, \"our course is outside the pathway and in darkness.\" To seek knowledge of predestination other than what Scripture discloses is \"no less insane than if one should purpose to walk in a pathless waste.\" We should not be ashamed of a \"certain learned ignorance\" and should refrain from a kind of knowledge, the ardent desire for which is \"foolish and dangerous.\"\n\nTherefore he directs believers back to Scripture, which is \"the school of the Holy Spirit,\" where nothing necessary or useful is omitted and nothing is taught that is not expedient to know. He also insists that we must not deprive believers of what Scripture does disclose about predestination, lest we seem to defraud them of a blessing or to accuse the Holy Spirit of publishing something it would be profitable to suppress.",
      bullets: [
        "Limit: do not go beyond what the Word of God discloses",
        "Image: a pathless waste; seeing in darkness",
        "'Learned ignorance' is acceptable",
        "Scripture = 'the school of the Holy Spirit'",
        "But do not hide what Scripture reveals",
      ],
    },
    {
      heading: T.discipline,
      content: "Calvinists rejected the institution of bishops in favor of presbyteries, elected bodies made up of ministers and devout laymen. By bringing lay control into church affairs they broke the monopoly of priestly power. Yet this was part of an effort to make everyone more religious: they wished to Christianize the state and society (P&C p. 81; 003H05). In England, Congregationalist churches each managed their own affairs, while Presbyterians organized clergy and laymen in networks of churches.\n\nIn Geneva the rule was strict. The consistory of ministers and elders ruled the town, all \"loose, light, or frivolous living\" was suppressed, and disaffected persons were driven into exile; Calvin burned the heretic Michael Servetus, who denied the Trinity. Why does this strict discipline not mean people could earn election? Because for Calvin election is God's eternal decree, founded on free mercy without regard to human worth. Holy living is a response to election and a sign of it, as P&C says, not its cause. Confidence in salvation and strict discipline can therefore coexist: believers who feel secure in God's mercy are expected to live as the elect.",
      bullets: [
        "Presbyteries: ministers + devout laymen share authority; no bishops",
        "Consistory: ministers and elders; enforced discipline in Geneva",
        "Examples: frivolous living suppressed; exile; Servetus burned",
        "Discipline does not earn election; it follows from it",
        "Congregationalists vs. Presbyterians in England",
      ],
    },
    {
      heading: T.compare,
      content: "Study Guide Q18 asks you to compare P&C p. 76 on Luther with Calvin's own words. P&C: \"Good works, Luther thought, were the consequence and external evidence of this inner grace, but in no way its cause.\" Calvin: election was \"founded upon his freely given mercy, without regard to human worth.\"\n\nShared belief: salvation depends on God's grace and not on human works or worth, and works are a result rather than a cause. Difference of emphasis: Luther (in P&C's account) emphasizes faith and the place of good works as fruit of grace, while Calvin emphasizes God's eternal decree of election and the humility and confidence it produces. P&C names two chief differences between the men: Calvin made far more of predestination, and Calvinists refused to subordinate church to state. They also differed over the Lord's Supper: both rejected transubstantiation, but Luther held that God was somehow actually present in the bread and wine, whereas Calvin and his followers tended to regard it as symbolic or commemorative.",
      bullets: [
        "Shared: grace from God alone; works are a consequence, not a cause",
        "Luther's emphasis: faith, grace, and works as evidence",
        "Calvin's emphasis: God's eternal election; humility and confidence",
        "Lord's Supper: Luther = real presence; Calvin = more symbolic",
        "Church and state: Luther = submissive to state; Calvin = Christianize the state",
      ],
    },
    {
      heading: T.beyond,
      content: "Geneva became the Protestant Rome, the one great international center of Reformed doctrine. Reformers of many nationalities came to study it. Calvinism spread through the Dutch Netherlands, Scotland (John Knox in the 1550s; Presbyterianism became the established religion), France (the Huguenots), parts of Poland, Hungary, and Bohemia, and later England and New England, where it gave birth to the Presbyterian and Congregationalist churches. Calvinists were excluded from the Peace of Augsburg and disliked by Lutherans and Catholics alike.\n\nP&C says Calvinism was far from democratic in a modern sense but helped shape democracy: Calvinists never venerated the state, held public life subject to moral judgment, taught that honest work was a religious \"calling,\" formed covenants, elected presbyteries, and refused to accept that authority was transmitted downward through bishops or kings. Because they were often an unofficial minority, they tended to favor limits on established power.",
      bullets: [
        "Spread: Netherlands, Scotland (Knox), France (Huguenots), Poland, Hungary, England, New England",
        "Excluded from the Peace of Augsburg",
        "Doctrine of the 'calling': honest work pleases God",
        "Self-government: covenants and elected presbyteries",
        "Often minorities, so they favored limits on state power",
      ],
    },
  ],
  flashcards: buildCards(ID, unit03CardRows),
  quiz: buildQuestions(ID, 'q', quizRows),
};
