import type { Unit } from '@/types/study';
import { buildCards, buildQuestions, type CardRow, type Row } from '../helpers';

const ID = 'unit-01-luther-and-justification';

export const unit01Topics = {
  sacraments: 'The Seven Sacraments and Transubstantiation (Medieval Baseline)',
  indulgences: 'Indulgences, Temporal Punishment, and Purgatory',
  abuses: 'Church Abuses: Simony, Nepotism, and Tetzel',
  support: 'Why Rulers, Cities, and Printing Backed Luther',
  timeline: 'From the Ninety-Five Theses to Worms (1517-1521)',
  faith: 'Justification by Faith Alone and Good Works',
  scripture: 'Sola Scriptura and the Priesthood of All Believers',
  walls: 'Luther\'s Three Walls',
  luthersSacraments: 'Luther\'s Sacraments: Two Kept, Transubstantiation Rejected',
} as const;
const T = unit01Topics;

export const unit01CardRows: CardRow[] = [
  [T.sacraments, "Name the seven sacraments. (Study Guide Q25; 001A)", "Baptism; confirmation; Eucharist (Communion); penance (reconciliation, confession); anointing of the sick (extreme unction); holy orders; matrimony (marriage). Trent reaffirmed all seven; Luther kept only baptism and Communion."],
  [T.sacraments, "Sacrament", "A sacred rite through which the Church taught that God gives grace. By the High Middle Ages the Latin Church recognized seven. Pilgrimage, relics, and prayers to saints were devotions, not sacraments."],
  [T.sacraments, "Transubstantiation", "The Catholic teaching that the substance of the consecrated bread and wine becomes Christ's body and blood while their outward appearances remain."],
  [T.sacraments, "Which sacrament is celebrated at Mass?", "The Eucharist, also called Communion."],
  [T.indulgences, "Indulgence", "Catholic remission of temporal punishment after a sin's guilt has already been forgiven. It was not, in doctrine, the purchase of forgiveness. Fundraising campaigns blurred this distinction."],
  [T.indulgences, "Temporal punishment", "Punishment or purification that remains after a sin's guilt has been forgiven."],
  [T.indulgences, "Purgatory", "In Catholic teaching, a state of purification after death for souls ultimately destined for heaven but not yet fully purified."],
  [T.indulgences, "How does remission of temporal punishment differ from forgiveness of a sin's guilt? What was an indulgence supposed to do? (Study Guide Q8)", "Guilt is forgiven through penance: confession, absolution, and satisfaction. Temporal punishment is the purification still owed afterward. An indulgence was supposed to remit that remaining temporal punishment only; it did not forgive guilt and was not the purchase of forgiveness. Donation-linked campaigns made people blur the two."],
  [T.indulgences, "How are penance, purgatory, and indulgence connected? (Flippity)", "Penance reconciles the sinner. Purgatory is the remaining purification after death. Indulgences remit temporal punishment after guilt is forgiven."],
  [T.abuses, "Simony", "Buying or selling Church offices."],
  [T.abuses, "Nepotism", "Favoring relatives when making appointments to Church offices."],
  [T.abuses, "Johann Tetzel", "The friar and indulgence preacher whose fundraising campaign helped provoke Luther's protest. His indulgences were authorized by the pope to help finance the building of St. Peter's in Rome."],
  [T.abuses, "What abuses did reformers criticize, and what problem did Luther see in the indulgence campaign? (Study Guide Q1)", "Reformers criticized simony (buying or selling Church offices) and nepotism (favoring relatives for offices). Luther saw that the faithful were paying set sums for indulgences and were deluded into thinking they could obtain grace, or ease the pains of relatives in purgatory, that way. Fundraising tied payment to spiritual benefit."],
  [T.abuses, "Why did indulgence fundraising become a flashpoint? (Flippity)", "Fundraising linked donations to a promised spiritual benefit, making it easy to blur remission of temporal punishment with buying forgiveness."],
  [T.support, "Why did German rulers and city communities want more control of religion? (Study Guide Q2)", "Rulers had long disputed with the Church over property, taxes, legal jurisdiction, and political influence, and each wanted to be master in his own territory. Middle-class cities wanted to manage their religious affairs as they managed their other business. There was also wide German resentment against Rome."],
  [T.support, "How did printing help Luther reach rulers and townspeople?", "In 1519 and 1520 he rallied public opinion in a series of tracts setting out his main beliefs. Printing multiplied those tracts, so his arguments spread quickly to princes, towns, and ordinary readers."],
  [T.timeline, "Ninety-Five Theses", "Luther's 1517 challenge to the indulgence campaign, posted at Wittenberg in the usual academic manner. It began his public dispute with Church authorities."],
  [T.timeline, "Excommunication", "Formal exclusion from Church communion. The pope excommunicated Luther in 1521, after Luther burned the papal bull that threatened it."],
  [T.timeline, "Diet of Worms and imperial ban", "At the 1521 imperial assembly Luther refused to recant, saying it was neither right nor safe to act against conscience. He was placed under the ban of the Empire, but the Elector of Saxony and other north German princes protected him."],
  [T.timeline, "What happened between 1517 and Worms in 1521, and why did the ban fail? (Study Guide Q3)", "1517: Luther protests indulgences. He appeals to Pope Leo X, who refuses. He urges a council, then admits councils can err. 1519-20: tracts. Pope's bull; Luther burns it. 1521: excommunication, then Worms, where he will not recant. The ban failed because the Elector of Saxony and other princes protected him while he translated the Bible into German."],
  [T.faith, "Justification", "Being accepted as righteous before God. Luther and Trent disagreed over how faith and works relate to it."],
  [T.faith, "Sola fide (justification by faith alone)", "Luther's teaching that faith alone, an inward bent of spirit given by God, justifies a person. Good works result from grace; they do not earn it."],
  [T.faith, "Grace and good works", "Grace is God's freely given favor. For Luther good deeds are the consequence and external evidence of grace, never its cause. (P&C p. 76)"],
  [T.faith, "What does justification by faith alone mean, and why do good works still matter? (Study Guide Q4)", "What justifies is faith alone, not the works the Church stressed (prayer, alms, sacraments, holy living). A person does not earn grace by doing good; he does good because he already has God's grace. Works still matter as the fruits and evidence of that grace and as service to God and neighbor."],
  [T.faith, "Why did 'faith alone' not mean 'do whatever you want'? (Flippity)", "For Luther genuine faith produces obedience and good works as fruits of grace. They do not justify, but they remain morally necessary as service to God and neighbor."],
  [T.scripture, "Sola scriptura", "Scripture alone is the final authority for Christian doctrine. Luther argued popes and councils could err and must be judged by Scripture."],
  [T.scripture, "Priesthood of all believers", "Luther's claim that all baptized Christians belong to one spiritual estate, although their offices differ. Laypeople and rulers therefore have a part in reform."],
  [T.scripture, "What does sola scriptura mean, and how did it challenge pope and councils? (Study Guide Q5)", "Scripture is the final norm for doctrine. Luther said even a general council could err (Constance erred in condemning Huss), so neither pope nor council could settle Christian belief. Each person could read the Bible and interpret it by conscience, which removed the binding authority of pope and council."],
  [T.walls, "Luther's Three Walls", "The Romanists' claims that (1) spiritual authority stands above temporal authority, (2) only the pope may interpret Scripture, and (3) only the pope may call a council. Luther attacked all three as barriers to reform in To the Christian Nobility of the German Nation (1520)."],
  [T.walls, "How did Luther answer the first wall (spiritual over temporal)?", "All Christians are truly of the spiritual estate; baptism, gospel, and faith make them so. Rulers are members of the Christian body, so their office may punish guilty clergy too."],
  [T.walls, "How did Luther answer the second wall (only the pope interprets Scripture)?", "The pope has erred many times, and an obscure person with a right understanding of Scripture should be followed. The keys were given to the whole community, not to Peter alone."],
  [T.walls, "How did Luther answer the third wall (only the pope calls a council)?", "Acts 15 shows the apostles and elders calling the first council, and Constantine called Nicaea. When the pope is an offense to Christendom, temporal authorities, as fellow Christians, should work for a truly free council."],
  [T.walls, "Explain how each wall blocked reform and why laypeople and rulers could act. (Study Guide Q6)", "Wall 1 put clergy beyond the reach of secular law; wall 2 meant no one could correct the pope with Scripture; wall 3 meant no council could correct him either. Luther answered with the priesthood of all believers: laypeople and rulers share the spiritual estate and so may act when reform is needed."],
  [T.luthersSacraments, "Which two sacraments did Luther keep? (Study Guide Q7; P&C p. 77)", "Baptism and Communion."],
  [T.luthersSacraments, "How does rejecting transubstantiation differ from denying Christ's real presence? (Study Guide Q7)", "Luther rejected transubstantiation, the Catholic explanation that bread and wine change in substance, as a 'modern' doctrine. But he affirmed that God is still somehow mysteriously present in the bread and wine, so he did not deny the real presence."],
  [T.luthersSacraments, "Why is 'Luther abolished all sacraments' wrong? (Flippity)", "Luther retained baptism and Communion (the Eucharist) and continued sacramental worship in altered form."],
  [T.luthersSacraments, "What else did Luther reject or demand beyond reducing the sacraments? (P&C p. 77)", "He rejected purgatory and reliance on fasts, pilgrimages, saints, and Masses; said the clergy should marry; and demanded that monasticism be eliminated."],
];

const quizRows: Row[] = [
  [T.sacraments, "Which of these is NOT one of the seven sacraments of the medieval Church?", "Pilgrimage", ["Penance", "Holy orders", "Anointing of the sick"], "Pilgrimage was a devotion, like relics and prayers to saints. The seven sacraments are baptism, confirmation, Eucharist, penance, anointing of the sick, holy orders, and matrimony."],
  [T.indulgences, "In Catholic teaching, an indulgence was supposed to remit:", "temporal punishment after a sin's guilt had been forgiven", ["the guilt of any sin, in return for a donation to the Church", "the need for baptism for a person who could afford it", "all future sins that the buyer might later commit"], "An indulgence concerned temporal punishment, not the forgiveness of guilt. It was never doctrinally the purchase of forgiveness."],
  [T.abuses, "What is simony?", "Buying or selling Church offices", ["Favoring one's relatives when filling Church offices", "Selling relics to pilgrims at a cathedral", "Collecting a tenth of a farmer's yearly produce"], "Simony is buying or selling Church offices; favoring relatives is nepotism."],
  [T.abuses, "Johann Tetzel's indulgence campaign was authorized by the pope to help pay for:", "the building of St. Peter's in Rome", ["a new crusade against the Turks at Vienna", "the ransom of Charles V from a French prison", "the printing of Luther's German Bible"], "P&C says Tetzel distributed indulgences authorized by the pope to finance the building of St. Peter's in Rome."],
  [T.support, "Why were many German rulers glad to see Luther challenge Rome?", "They wanted to be master in their own territory, Church included", ["They had all converted to Luther's teaching as soon as the Ninety-Five Theses appeared", "They hoped that the pope would reward them with a larger share of Church taxes", "They wanted the peasants to gain political power over the great landowners"], "Rulers had long disputed with the Church over property, taxes, jurisdiction, and influence, and Luther's call to the princes invited them to take control of religion."],
  [T.timeline, "What did Luther do when Pope Leo X refused to correct the abuse of indulgences?", "He urged a general council, then admitted councils could err", ["He apologized to the pope and withdrew the Ninety-Five Theses from circulation", "He asked Emperor Charles V to depose the pope and call a new election at once", "He left Germany for Switzerland to found a church there with John Calvin"], "Luther first appealed to the pope, then to a council, and then said even a council might be mistaken, as Constance was in condemning Huss."],
  [T.timeline, "At the Diet of Worms in 1521 Luther:", "refused to recant unless Scripture or right reason convinced him", ["agreed to recant after a long debate with the emperor and his theologians", "was arrested at the diet and imprisoned until the end of his life", "was declared innocent of heresy by the vote of the imperial assembly"], "He said he could be convinced only by Scripture or right reason and that it was neither right nor safe to act against conscience. He was put under the ban of the Empire."],
  [T.faith, "In Luther's teaching, good works are:", "the result and evidence of grace, not its cause", ["the main way that a person earns grace from God over the course of a life", "unnecessary, so a believer owes God no service of any kind to others", "valuable only when they are performed at a church or before a priest"], "P&C p. 76: good works are the consequence and external evidence of inner grace, but in no way its cause."],
  [T.scripture, "Sola scriptura means that:", "Scripture is the final authority for doctrine", ["only ordained priests are allowed to read the Bible in any language", "tradition and Scripture are equally authoritative for Christians", "the pope alone explains what Scripture means for the whole Church"], "Sola scriptura makes Scripture the final norm. The second and third options describe the Catholic position Luther challenged."],
  [T.walls, "Which is one of Luther's Three Walls?", "Only the pope may call a council", ["Only kings may appoint bishops", "Only monks may read the Latin Bible", "Only peasants may choose their pastors"], "The walls were: spiritual authority above temporal, only the pope interprets Scripture, and only the pope calls a council."],
  [T.luthersSacraments, "Which two sacraments did Luther keep?", "Baptism and Communion", ["Penance and holy orders", "Confirmation and matrimony", "Baptism and anointing of the sick"], "P&C p. 77 says Luther reduced the seven sacraments to two: baptism and communion."],
];

export const unit01LutherAndJustification: Unit = {
  id: ID,
  number: 1,
  title: 'Luther and Justification',
  description: 'The medieval Church baseline, the indulgence dispute, Luther\'s road from Wittenberg to Worms, justification by faith alone, sola scriptura, the Three Walls, and his sacramental teaching (Study Guide Questions 1-8).',
  notes: [
    {
      heading: T.sacraments,
      content: "Before the Reformation, the medieval Church taught that sacraments were sacred rites through which God gives grace. By the High Middle Ages the Latin Church recognized seven. They connected the major stages of life and recurring worship to the Church and its clergy, so the parish priest was important in everyday life. This is the baseline Luther and the Council of Trent later argued over (001A; P&C p. 38).\n\nThe Eucharist, also called Communion, is celebrated at Mass. Catholic teaching explained it with transubstantiation: the substance of the consecrated bread and wine becomes Christ's body and blood while their outward appearances remain. Sacraments are not the same as devotions. Pilgrimage, relics, prayers to saints, and fasting were important parts of medieval religious life, but they were not among the seven.",
      bullets: [
        "Baptism: water rite of initiation into the Church",
        "Confirmation: the baptized person is sealed and strengthened with the Holy Spirit",
        "Eucharist / Communion: consecrated bread and wine received at Mass",
        "Penance / Reconciliation / Confession: confession, priestly absolution, assigned satisfaction",
        "Anointing of the Sick (extreme unction): anointing with oil and prayer for the seriously ill",
        "Holy Orders: ordination of bishops, priests, and deacons",
        "Matrimony: Christian marriage",
      ],
    },
    {
      heading: T.indulgences,
      content: "Medieval Catholic teaching distinguished forgiveness of a sin's guilt from the temporal punishment still due for it. In penance the repentant Christian confesses, receives absolution, and performs satisfaction. Purgatory was understood as purification after death for souls destined for heaven but not yet fully purified.\n\nAn indulgence remitted temporal punishment after the guilt had already been forgiven. In doctrine it was not the purchase of forgiveness. But late-medieval fundraising tied indulgences closely to donations, which made it easy to blur remission of temporal punishment with buying forgiveness. That blurring is what Luther attacked.",
      bullets: [
        "Guilt of sin: forgiven through penance (confession, absolution, satisfaction)",
        "Temporal punishment: the purification that remains after guilt is forgiven",
        "Purgatory: purification after death for those destined for heaven",
        "Indulgence: remits temporal punishment only, after guilt is forgiven",
        "Penance -> purgatory -> indulgence is the chain to know",
      ],
    },
    {
      heading: T.abuses,
      content: "Reformers criticized abuses of Church offices and of indulgence fundraising. Simony meant buying or selling Church offices. Nepotism meant favoring relatives when making appointments to Church offices. Both treated a spiritual office as property or family privilege rather than a duty.\n\nThe flashpoint was the indulgence campaign of Johann Tetzel, a friar traveling through Germany distributing indulgences that the pope had authorized to finance the building of St. Peter's in Rome. The faithful paid certain stipulated sums in return. Luther thought people were being deluded: no one could obtain grace for himself, or ease the pains of relatives in purgatory, in this way, as was officially claimed. The problem he saw was that payment was being tied to a promised spiritual benefit.",
      bullets: [
        "Simony: buying or selling Church offices",
        "Nepotism: favoring relatives for Church offices",
        "Tetzel: indulgence preacher; money raised for St. Peter's",
        "Luther's objection: people were led to think money could win grace or release souls from purgatory",
      ],
    },
    {
      heading: T.support,
      content: "Luther won ardent supporters at once, because there was a good deal of resentment in Germany against Rome. P&C describes three streams behind the Reformation: the laboring poor, who resented a wealthy and oppressive Church; middle-class city dwellers, who wanted to run their own religious affairs; and kings and princes, who had long disputed with the Church over property, taxes, legal jurisdiction, and political influence. Each ruler wanted to be master in his own territory, and in the end the power of rulers determined which form of religion prevailed.\n\nLuther invited this. In 1519 and 1520 he rallied public opinion in a series of tracts, and he called on the princes of Germany to carry out reforms, an invitation to the state to take control of religion that many rulers were willing to accept. Printing spread those tracts to rulers and townspeople alike. Where a state turned Lutheran it usually confiscated church properties, which gave princes a material interest in the movement's success.",
      bullets: [
        "Three streams: laboring poor, city middle classes, kings and princes",
        "Rulers wanted control over Church property, taxes, and courts",
        "Cities wanted to manage their own religious affairs",
        "Tracts of 1519-1520 spread by printing reached a wide audience",
        "Confiscated church property gave princes a stake in the new religion",
      ],
    },
    {
      heading: T.timeline,
      content: "1517: Luther, a monk and professor at Wittenberg, protested Tetzel's campaign with the Ninety-Five Theses, written in the usual academic manner of the day. He first appealed to Pope Leo X to correct the abuse. When the pope refused, Luther urged a general council, but then admitted in public debate that even a council could err; Constance, he said, had erred in condemning John Huss.\n\n1519-1520: Luther issued tracts setting out his main beliefs. In June 1520 a papal bull (Exsurge Domine) threatened him with excommunication unless he recanted; he burned the bull, and excommunication followed in 1521. Emperor Charles V summoned him to a diet at Worms, where Luther said he could be convinced only by Scripture or right reason and would not recant. He was placed under the ban of the Empire. But the Elector of Saxony and other north German princes took him under their protection, and in safe seclusion he began translating the Bible into German. The ban failed because powerful rulers who resented Rome shielded him, and because Charles V was distracted by wars with France and the Turks.",
      bullets: [
        "1517: Ninety-Five Theses against indulgences",
        "Pope refuses -> Luther appeals to a council -> says councils can err too",
        "1520: papal bull; Luther burns it",
        "1521: excommunication; Diet of Worms; refuses to recant; imperial ban",
        "Princes (Elector of Saxony) protect him; he translates the Bible into German",
      ],
    },
    {
      heading: T.faith,
      content: "While reading St. Paul (Romans 1:17, \"the just shall live by faith\"), Luther found peace from the conviction that he was damned. He developed the doctrine of justification by faith alone (sola fide). What justifies a person is not the \"works\" the Church stressed, such as prayer, alms, the sacraments, and holy living, but faith alone, an inward bent of spirit given to each soul directly by God.\n\nGood works, Luther thought, were the consequence and external evidence of this inner grace, but in no way its cause. A man did not \"earn\" grace by doing good; he did the good because he possessed the grace of God (P&C p. 76). So works still matter: true faith should produce obedience and service to God and neighbor. They just do not earn justification.",
      bullets: [
        "Justification: being accepted as righteous before God",
        "Luther: by faith alone, a gift of God's grace",
        "Works = fruit and evidence of grace, never its cause",
        "'Faith alone' does not mean 'do whatever you want'",
        "Contrast: Trent taught faith and good works within a life made possible by grace (Unit 5)",
      ],
    },
    {
      heading: T.scripture,
      content: "If neither pope nor council had authority to define true Christian belief, where was it to be found? Luther's answer in effect: each individual might read the Bible and interpret it according to conscience. This was as revolutionary for the Church as saying today that no court may authoritatively interpret the Constitution and each citizen may read it his own way (P&C p. 77). This is sola scriptura: Scripture is the final authority for doctrine, and popes and councils can err and must be judged by it.\n\nLinked to this is the priesthood of all believers. Luther declared that the clergy's claim to be different from the laity was an imposture. All baptized Christians belong to one spiritual estate, although their offices differ. So laypeople and rulers have a part in reform. Later, frightened by peasant and Anabaptist uprisings, Luther restricted, but never denied, the right of private judgment and gave established clergy a larger place (P&C p. 78).",
      bullets: [
        "Sola scriptura: Scripture is the final norm",
        "Popes and councils can err (Constance condemned Huss)",
        "Each person may read the Bible and judge by conscience",
        "Priesthood of all believers: one spiritual estate, different offices",
        "Challenge: removes the pope's and councils' authority to settle belief",
      ],
    },
    {
      heading: T.walls,
      content: "In To the Christian Nobility of the German Nation (1520), Luther argued that the Church had made itself impervious to reform by building three walls around itself, and that political authorities should therefore take reform into their own hands. (Source: 003B1, printed pp. 98-101.)\n\nWall 1: Spiritual power is above temporal power. Clergy called themselves the \"spiritual estate\" and treated rulers as merely \"temporal.\" Luther replied that all are truly of the spiritual estate; baptism, gospel, and faith alone make a Christian. Rulers are members of the one body of Christ, so they may punish guilty clergy.\n\nWall 2: Only the pope may interpret Scripture. Luther replied that the pope has erred many times, that a person with a right understanding of Scripture should be followed even if obscure, and that the keys were given to the whole community, not Peter alone.\n\nWall 3: Only the pope may call a council. Luther replied that Acts 15 shows apostles and elders calling a council, that Constantine called Nicaea, and that when the pope is an offense to Christendom the temporal authorities, as fellow Christians and fellow priests, should work for a truly free council.",
      bullets: [
        "Wall 1: spiritual authority above temporal -> answered by the priesthood of all believers",
        "Wall 2: only the pope interprets Scripture -> answered by Scripture and the pope's errors",
        "Wall 3: only the pope calls a council -> answered by Acts 15 and Constantine",
        "Result: laypeople and rulers may act to reform the Church",
      ],
    },
    {
      heading: T.luthersSacraments,
      content: "Luther reduced the seven sacraments to two: baptism and communion (P&C p. 77). Of the Eucharist he repudiated transubstantiation, the \"new and modern\" doctrine, while affirming that God was still somehow mysteriously present in the bread and wine. Rejecting transubstantiation is therefore different from denying Christ's real presence: Luther rejected the Catholic explanation of how Christ is present, not the presence itself. (Calvin would later go further; see Unit 3.)\n\nThe change had social and political consequences. With fewer necessary sacramental acts and less priestly mediation, the role of ordained clergy and the hierarchy built around them weakened. Luther also rejected purgatory, fasts, pilgrimages, saints, and Masses, declared that the clergy should marry, and demanded that monasticism be eliminated. Rulers could then organize territorial churches and seize church or monastic property.",
      bullets: [
        "Kept: baptism and Communion",
        "Rejected: transubstantiation (the explanation), not the real presence",
        "Not abolished: sacramental worship continued in altered form",
        "Also rejected: purgatory, pilgrimages, saints, monasticism, clerical celibacy",
        "Effect: less priestly mediation, more room for rulers to control the Church",
      ],
    },
  ],
  flashcards: buildCards(ID, unit01CardRows),
  quiz: buildQuestions(ID, 'q', quizRows),
};
