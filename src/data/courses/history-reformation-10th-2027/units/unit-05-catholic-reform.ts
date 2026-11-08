import type { Unit } from '@/types/study';
import { buildCards, buildQuestions, type CardRow, type Row } from '../helpers';

const ID = 'unit-05-catholic-reform';

export const unit05Topics = {
  road: 'Catholic Reformation or Counter Reformation? The Road to Trent',
  holySee: 'The Holy See and Papal Authority at Trent',
  doctrine: 'Doctrine Reaffirmed at Trent',
  compare: 'Trent and Luther: Justification, Scripture, and Tradition',
  practice: 'Reforming Clerical Practice: Bishops, Pluralism, and Seminaries',
  images: 'Trent and Elizabeth on Religious Images',
  jesuits: 'The Jesuits and Catholic Missions',
  enforcing: 'Enforcing Belief: The Index, Inquisitions, and State Power',
} as const;
const T = unit05Topics;

export const unit05CardRows: CardRow[] = [
  [T.road, "Catholic Reformation or Counter Reformation", "Catholic renewal that addressed longstanding abuses and answered the Protestant challenge through doctrinal reaffirmation, institutional reform, education, and missions. 'Catholic Reformation' is the term Catholics prefer; 'Counter Reformation' is the term Protestants prefer; both apply."],
  [T.road, "Council of Trent", "The Catholic council that met between 1545 and 1563 (sessions 1545-47, 1551-52, 1562-63) at Trent, on the Alpine border of Germany and Italy. It reaffirmed Catholic doctrine while reforming clerical practice and discipline."],
  [T.road, "Why was the council delayed for years?", "War, political rivalry, and fear of a council's power. The popes feared a council might get out of control and demand reform; Francis I of France used his influence in Rome against a council because he wanted Germany to stay divided."],
  [T.road, "Reforming popes", "After the Renaissance popes came a line of reforming popes, the first being Paul III (1534-1549), who regarded the papal office as a moral and religious force and insisted on its primacy."],
  [T.holySee, "Holy See", "The pope's central authority at Rome. Trent's acts required its acceptance, preserving papal authority over the council's decisions."],
  [T.holySee, "How did the final rule about the Holy See preserve papal authority? What differs from a council above the pope? (Study Guide Q26)", "Trent voted that no act of the council would be valid unless accepted by the Holy See. That made the pope's acceptance necessary, so the council's decisions depended on him. A council claiming authority above the pope (the conciliar or 'episcopal' view held by some bishops) would instead make the pope subject to the assembled bishops. The rule helped prevent division into national churches."],
  [T.holySee, "What conciliar claim did some bishops make at Trent?", "That the bishops of the Catholic Church, assembled in council, collectively held an authority superior to the pope's. The cardinal legates presiding for the pope worked to stop this 'episcopal' movement."],
  [T.holySee, "Why does P&C say the papal victory at Trent mattered?", "It preserved the papacy as the center of unity for the Church and helped prevent the Church from dissolving into state churches. P&C notes it was a step toward the definition of papal infallibility in 1870."],
  [T.doctrine, "Doctrine and disciplinary reform", "Doctrine concerns what the Church teaches. Disciplinary reform changes how clergy and institutions perform their duties. Trent pursued both."],
  [T.doctrine, "How did Trent's reaffirmation of doctrine differ from its reform of clerical practice? (Study Guide Q24)", "Doctrine reaffirmed: the teachings Protestants rejected, such as seven sacraments, transubstantiation, purgatory, indulgences (retained, abuses condemned), clerical celibacy, and Scripture plus tradition. Practice reformed: bishops must reside in their dioceses, pluralism is checked, monasteries are reformed, and each diocese sets up a seminary. Different kinds of action: one defines what the Church teaches and makes no concession; the other changes what clergy actually do."],
  [T.doctrine, "Name two teachings Trent reaffirmed and two changes in clerical practice. (Study Guide Q24)", "Reaffirmed: transubstantiation; seven sacraments (also: purgatory, indulgences, celibacy, Latin Mass, Scripture and tradition). Changed practice: bishops required to live in their dioceses; seminaries to train priests (also: pluralism checked, monastic discipline reformed)."],
  [T.doctrine, "Seven sacraments", "Baptism; confirmation; Eucharist or Communion; penance or reconciliation; anointing of the sick or extreme unction; holy orders; matrimony. Trent reaffirmed all seven as vehicles of grace; their efficacy did not depend on the minister's personal holiness. Luther retained baptism and Communion."],
  [T.doctrine, "Eucharist and real presence", "Eucharist is another name for Communion. Both Catholic teaching and Luther affirmed Christ's real presence, although they differed over its explanation."],
  [T.doctrine, "Transubstantiation at Trent", "Reaffirmed: the substance of bread and wine becomes Christ's body and blood while their outward appearances remain. Luther also affirmed real presence but rejected this explanation."],
  [T.doctrine, "Other Catholic teachings reaffirmed (003H07 A)", "Indulgences (principle kept, abuses condemned); priesthood set apart by holy orders; clerical celibacy; monasticism; the Latin Mass; the Vulgate as authoritative for teaching; confession and absolution; pilgrimages; purgatory and prayers for the dead; images and relics; devotion to Mary; the invocation of saints."],
  [T.doctrine, "Clerical celibacy and pluralism", "Celibacy: the Latin Church required priests to remain unmarried. Pluralism: one person holding several church offices; Trent acted to check it."],
  [T.doctrine, "Orthodoxy and heresy", "Orthodoxy is teaching accepted as correct by a religious authority; heresy is teaching it condemns as contrary to the faith."],
  [T.compare, "Trent on justification", "Trent upheld faith and good works within a life made possible by God's grace. P&C summarizes this as faith and works combined, rather than works alone. Trent also said that none of the things preceding justification, whether faith or works, merit the grace of justification itself."],
  [T.compare, "Apostolic tradition", "Teachings handed down from the apostles. Trent treated Scripture and apostolic tradition as equally authoritative and affirmed the Church's authority to interpret them, rejecting sola scriptura and private judgment against Church teaching."],
  [T.compare, "Name the seven sacraments, explain transubstantiation, and compare Trent with Luther on justification and on Scripture and tradition. Why is 'Catholics taught works alone' inaccurate? (Study Guide Q25)", "Seven sacraments: baptism, confirmation, Eucharist, penance, anointing of the sick, holy orders, matrimony. Transubstantiation: the substance of bread and wine becomes Christ's body and blood while appearances remain. Justification: Luther says faith alone; Trent says faith and works within grace. Authority: Luther says Scripture alone; Trent puts Scripture and apostolic tradition on an equal footing and denies that private judgment can override the Church. 'Works alone' is inaccurate because Trent held that works come within a life made possible by God's grace, and that neither faith nor works merit the grace of justification."],
  [T.compare, "How did Trent's position on justification differ from Luther's? (Flippity)", "Trent: works and faith combined, in P&C's summary. Luther: faith alone justifies; good works follow as its fruits. Neither should be reduced to works alone or to no moral duties."],
  [T.practice, "Diocese and seminary", "A diocese is a bishop's district. Trent required a seminary in each diocese to educate and train priests, and required bishops to reside in their dioceses."],
  [T.practice, "Why did Trent require a seminary in each diocese? (Study Guide Q29)", "To educate and train priests. The problem was clerical incompetence: better instruction and closer supervision were intended to produce competent clergy."],
  [T.practice, "What other abuses did Trent act on?", "It decreed a drastic reform of monastic orders, acted against the abuse of indulgences while upholding the principle, gave bishops more control over exempt clergy such as mendicant friars, and checked pluralism."],
  [T.practice, "Why was reforming abuses harder than defining doctrine?", "Abuses were the rooted habits of thousands of people's lives, whereas a council could define doctrine by decree. Rulers also accepted Trent's decrees only selectively at first."],
  [T.images, "How do Trent's instructions on images differ from Elizabeth's? (003H07 Q2)", "Trent (1563): images of Christ, Mary, and the saints are to be kept in churches and honored, since the honor goes to the persons represented (the 'prototypes'), not the objects; no unusual image may be placed in a church unless the bishop approves. Elizabeth (1559, Injunction XXIII): shrines, pictures, and paintings connected with pilgrimages and idolatry are to be destroyed. Under Trent the bishop approves unusual images."],
  [T.jesuits, "Ignatius of Loyola and the Jesuits", "Ignatius founded the Society of Jesus, approved in 1540 by Paul III. Jesuits strengthened Catholicism through schools, missions, and work at rulers' courts."],
  [T.jesuits, "Missions", "Efforts to spread a religion. Catholic missionaries sought to reconvert Protestants in Europe and to convert non-Christians in Asia and the Americas."],
  [T.jesuits, "What did the Jesuits and other new orders do? (Study Guide Q28)", "Jesuits ran schools (about 500 for boys of the upper and middle classes, teaching Latin classics), served as missionaries and as confessors to rulers, and took a special vow of obedience to the pope. Oratorians (men) and Ursulines (women) did educational and charitable work; St. Vincent de Paul worked among the poor in Paris. P&C contrasts this with the more limited activity of established Protestant churches."],
  [T.jesuits, "How did Jesuit work in schools, missions, and rulers' courts strengthen the Church?", "Schools trained leaders and kept Latin classics at the center of education; missions reconverted Protestants and spread Catholicism abroad; confessors to rulers gained political influence. As an international order loyal to the pope, they supported Rome against national tendencies, including at Trent."],
  [T.jesuits, "What is distinctive about Catholic unity in this period?", "It was increasingly defended through an international Church under the pope, while many Protestant churches operated within national or territorial states."],
  [T.enforcing, "Index of Prohibited Books", "The papal list restricting Catholic reading as a means of preventing the spread of condemned teaching. Catholics could read listed books only with special permission."],
  [T.enforcing, "Roman and Spanish Inquisitions", "Institutions investigating heresy. The Roman Inquisition (1542, Holy Office) operated under papal authority, principally in Italy. The separate Spanish Inquisition (about 1480) was closely controlled by the Spanish monarchy and targeted converts suspected of Jewish or Muslim practices and later Protestants."],
  [T.enforcing, "Compare a Catholic and an English or Calvinist means of enforcing belief. (Study Guide Q27)", "Roman Inquisition: authorized by the pope; investigated heresy and could impose severe penalties, including torture, with executions carried out by secular authorities. High Commission: authorized by the Crown (Elizabeth); brought recusants into the Church of England and could impose fines and other penalties. Consistory: ministers and elders in Geneva who disciplined conduct, with civil magistrates imposing civil penalties. Index: papal authority; restricted reading."],
  [T.enforcing, "What is the most powerful 'machinery' of enforcement according to P&C?", "The apparatus of the state. Where Protestants won control of government, people became Protestant; where Catholics kept control, Protestants became small minorities. Church rulings depended heavily on political authorities that could censor, fine, imprison, or punish."],
  [T.enforcing, "Which side was stronger around 1560?", "Catholic powers: Spain, France, and Austria were stronger than most individual Protestant states. Rivalries among Catholic rulers hindered a united campaign against Protestantism."],
];

const quizRows: Row[] = [
  [T.road, "Over what years did the Council of Trent meet?", "1545 to 1563", ["1517 to 1521", "1534 to 1547", "1555 to 1603"], "It met in separate sessions between 1545 and 1563."],
  [T.holySee, "Trent's final rule said no act of the council was valid unless:", "the Holy See accepted it", ["the emperor signed it", "a majority of kings agreed", "Luther approved it"], "This preserved papal authority over the council and helped prevent national churches."],
  [T.doctrine, "Which two teachings did Trent reaffirm?", "Seven sacraments and transubstantiation", ["Predestination and the consistory", "Sola scriptura and the priesthood of all believers", "Cuius regio and the ecclesiastical reservation"], "Trent made no concessions on these teachings."],
  [T.compare, "How did Trent describe justification, according to P&C?", "By works and faith combined", ["By faith alone", "By works alone", "By predestination alone"], "Trent also said no preceding faith or works merit the grace of justification."],
  [T.compare, "On the sources of Catholic faith, Trent placed:", "Scripture and tradition on an equal footing", ["Scripture above tradition, as the Protestant reformers had demanded", "Tradition above Scripture, so that Scripture could be read only by priests", "Private judgment above both, so that each believer decided for himself"], "This rejected sola scriptura."],
  [T.practice, "Why did Trent require a seminary in every diocese?", "To educate and train priests", ["To print books for the Index", "To shelter reformed monks", "To train soldiers for the pope"], "Better instruction was meant to produce competent clergy."],
  [T.images, "Under Trent's rule, who must approve an unusual image placed in a church?", "The bishop", ["The emperor", "Parliament", "The consistory"], "Trent said no unusual image could be placed unless approved by the bishop."],
  [T.jesuits, "Who founded the Society of Jesus, approved in 1540?", "Ignatius of Loyola, a Spanish soldier", ["John Knox, who brought Calvinism to Scotland", "Thomas More, the English humanist and author of Utopia", "Erasmus of Rotterdam, the leading Christian humanist"], "Pope Paul III approved the Jesuits in 1540."],
  [T.enforcing, "Which institution was closely controlled by the Spanish monarchy?", "The Spanish Inquisition", ["The Roman Inquisition", "The consistory of Geneva", "The Index of Prohibited Books"], "The Roman Inquisition operated under papal authority."],
  [T.enforcing, "P&C emphasizes that the most powerful engine for enforcing religion was:", "the power of the state", ["the printing press", "the Jesuit schools", "the monasteries"], "Church rulings depended on political authorities that could censor, fine, imprison, or punish."],
];

export const unit05CatholicReform: Unit = {
  id: ID,
  number: 5,
  title: 'Catholic Reform',
  description: 'The Catholic Reformation and the Council of Trent: papal authority, doctrine reaffirmed, comparison with Luther, clerical reform and seminaries, images, the Jesuits and missions, and the enforcement of belief (Study Guide Questions 24-29).',
  notes: [
    {
      heading: T.road,
      content: "The Catholic movement corresponding to the rise of Protestantism is called the Catholic Reformation or the Counter Reformation, the former term being preferred by Catholics and the latter by Protestants. Both apply. On one hand, the Church underwent genuine reform that might have occurred anyway; on the other, the character of the reform was shaped by the need to respond to the Protestant challenge, and some activity was purely counter-Protestant (P&C p. 87). It answered longstanding complaints about abuses and responded to the Protestant challenge through doctrinal reaffirmation, institutional reform, education, and missions.\n\nThe demand for reform was as old as the abuses, and it had often taken the form of a demand for a general council. But popes feared councils, and war and politics delayed one for years. Finally the Council of Trent met in separate sessions between 1545 and 1563 (1545-47, 1551-52, 1562-63) at Trent, on the Alpine border of Germany and Italy. A line of reforming popes began with Paul III (1534-1549).",
      bullets: [
        "Two names: Catholic Reformation / Counter Reformation",
        "Aims: answer abuses and the Protestant challenge",
        "Council delayed by war, politics, and papal fear of councils",
        "Trent: 1545-1563 in three sets of sessions",
        "Reforming popes began with Paul III",
      ],
    },
    {
      heading: T.holySee,
      content: "Attendance at Trent was poor, sometimes falling to twenty or thirty prelates, and the decree on justification was passed with only sixty present. Even so, the old conciliar issue arose: a party of bishops believed that bishops assembled in council collectively held authority superior to the pope. Cardinal legates deputed by the pope presided and worked to stave off this movement.\n\nThe popes triumphed through a final ruling, voted by the council, that no act of the council should be valid unless accepted by the Holy See (the pope's central authority at Rome). This preserved papal authority and helped prevent division into national churches; P&C notes the bishops tended to view matters in the light of their own national problems and to be influenced by their kings. A council above the pope would have made the pope answerable to the bishops; Trent's rule made the council's decisions depend on the pope. The council's influence was gradual, because Catholic rulers at first accepted only what they chose of its work.",
      bullets: [
        "Poor attendance; justification decree passed with about 60 prelates",
        "Conciliar claim: bishops in council above the pope",
        "Final rule: acts valid only if accepted by the Holy See",
        "Effect: papal authority preserved; national churches avoided",
        "Rulers accepted Trent selectively at first",
      ],
    },
    {
      heading: T.doctrine,
      content: "Trent had two tasks: to clarify and reaffirm Catholic doctrine and to reform abuses (P&C pp. 89-90; 003H07). Doctrine is what the Church teaches; disciplinary reform changes how its clergy and institutions carry out their duties. When the council began, reconciliation with Protestants was probably impossible, and Trent made no concessions.\n\nCatholic doctrine reaffirmed: justification within grace through faith and good works; indulgences (retained, abuses condemned); all seven sacraments as means by which God gives grace regardless of the minister's holiness; the priesthood as a special estate set apart by holy orders; clerical celibacy; monasticism; the Latin Mass; the authority of Church teaching over private judgment; Scripture and apostolic tradition as authoritative together; the Vulgate for public teaching; confession and priestly absolution; pilgrimages; purgatory and prayers for the dead; transubstantiation; images and relics; devotion to Mary; and the invocation of saints.",
      bullets: [
        "Seven sacraments: baptism, confirmation, Eucharist, penance, anointing of the sick, holy orders, matrimony",
        "Transubstantiation: substance changes, appearances remain",
        "Purgatory, indulgences (principle), pilgrimages, relics, images, saints, Mary",
        "Clerical celibacy; monasticism; Latin Mass; Vulgate",
        "Scripture + apostolic tradition; private judgment cannot override the Church",
      ],
    },
    {
      heading: T.compare,
      content: "On justification, Trent upheld faith and good works within a life made possible by God's grace; P&C summarizes this as justification by works and faith combined. Trent's own words (Session VI, 1547): \"none of those things which precede justification, whether faith or works, merit the grace itself of justification.\" It did not teach that people could save themselves without grace, so \"Catholics taught works alone\" is inaccurate. Luther held that faith alone justifies and that good works follow as its fruits.\n\nOn sources of authority, Trent put Scripture and apostolic tradition on an equal footing and rejected the Protestant claim that the Bible alone is the test of doctrine. It denied that individuals' private interpretation of Scripture could override the Church. Luther's sola scriptura held that popes and councils could err and must be judged by Scripture. On the sacraments, Trent reaffirmed all seven; Luther kept two.",
      bullets: [
        "Luther: faith alone; works are fruits",
        "Trent: faith and works within grace; neither merits justification itself",
        "Luther: Scripture alone. Trent: Scripture and apostolic tradition",
        "Luther: two sacraments. Trent: seven",
        "'Works alone' is not Trent's teaching",
      ],
    },
    {
      heading: T.practice,
      content: "It was easier for a council to define doctrines than to reform abuses, since abuses were the rooted habits of thousands of people's lives. Trent nevertheless acted: it decreed a drastic reform of the monastic orders, acted against the abuse of indulgences while upholding the principle, and ruled that bishops should live habitually in their dioceses and attend more carefully to their duties. It gave bishops more administrative control over clergy in their dioceses, such as mendicant friars who had previously been exempt from episcopal jurisdiction. It checked pluralism, the holding of several church offices by one person, and took steps to assure that church officials were competent.\n\nTo provide an educated clergy, the council ordered a seminary in each diocese for training priests. The problem the requirement addressed was poorly trained and poorly supervised clergy; better instruction and closer supervision were meant to produce competent priests. Reform of practice was a different kind of action from doctrine: it changed behavior and institutions without changing teaching.",
      bullets: [
        "Bishops must reside in their dioceses",
        "Pluralism checked",
        "Monastic discipline reformed",
        "Indulgence abuses condemned; principle kept",
        "Seminary in each diocese to train priests",
      ],
    },
    {
      heading: T.images,
      content: "003H07 sets two instructions side by side. Trent, Session XXV (1563): \"the images of Christ, of the Virgin Mother of God, and of the other saints, are to be had and retained particularly in temples ... not that any divinity, or virtue, is believed to be in them ... but because the honour which is shown them is referred to the prototypes which those images represent.\" And \"no one [shall] be allowed to place, or cause to be placed, any unusual image, in any place, or church ... except that image have been approved of by the bishop.\"\n\nElizabeth's Injunction XXIII (1559): \"take away, utterly extinct, and destroy all shrines ... pictures, paintings, and all other monuments of feigned miracles, pilgrimages, idolatry, and superstition.\" The difference: Trent keeps and regulates images under the bishop's approval, distinguishing honoring the persons represented from worshipping objects; Elizabeth orders images connected with pilgrimage and idolatry destroyed.",
      bullets: [
        "Trent: keep images; honor goes to the person represented (prototype)",
        "Trent: bishop approves any unusual image",
        "Elizabeth: destroy shrines and pictures of pilgrimage and idolatry",
        "Same century, opposite policies on church art",
      ],
    },
    {
      heading: T.jesuits,
      content: "Catholic renewal included reforming popes, stricter bishops, and renewed devotion to the sacraments. Catholic unity was increasingly defended through an international Church under the pope, while many Protestant churches operated within national or territorial states. New orders devoted themselves to education, charity, and missions: the Jesuits, the Oratorians for men, and the Ursulines for women; St. Vincent de Paul worked among the poor in Paris (P&C pp. 90-92).\n\nIgnatius of Loyola (1491-1556), a soldier in youth, founded the Society of Jesus, approved by Pope Paul III in 1540. Jesuits underwent rigorous spiritual training (the Spiritual Exercises) and iron discipline, and fully professed members took a special vow of obedience to the pope concerning missions. They taught in about five hundred schools for boys of the ruling and middle classes, preserved the Latin classics, served as missionaries (reconverting Protestants in Europe and converting non-Christians in Asia and the Americas), and acted as confessors to rulers, with political influence. P&C contrasts Catholic missionary effort and work among the poor with the more limited activity of established Protestant churches.",
      bullets: [
        "Orders: Jesuits, Oratorians (men), Ursulines (women); Vincent de Paul",
        "Ignatius of Loyola; Society of Jesus approved 1540",
        "Schools: Latin classics for upper and middle-class boys",
        "Missions: Protestants in Europe; Asia and the Americas",
        "Confessors to kings = political influence",
      ],
    },
    {
      heading: T.enforcing,
      content: "Book censorship and religious courts enforced conformity in both Catholic and Protestant territories (P&C pp. 92-93; 003H07 8A-C). The papal Index of Prohibited Books restricted Catholic reading. The Roman Inquisition, established in 1542 under the Holy Office, investigated heresy principally in Italy under papal authority. The Spanish Inquisition (about 1480) was a separate institution closely controlled by the Spanish monarchy, aimed first at converts suspected of continuing Jewish or Muslim practices and later at Protestants. Proceedings could involve torture and severe penalties; executions were carried out by secular authorities.\n\nIn England, Elizabeth's High Commission and bishops' courts enforced Anglican conformity under royal authority. Geneva's consistory (ministers and elders) disciplined religious conduct, with civil magistrates imposing civil penalties. P&C emphasizes that the apparatus of the state was the most powerful engine: where Protestants controlled governments, people became Protestant, and where Catholics controlled governments Protestants became small minorities. By about 1560, Catholic powers (Spain, France, Austria) were stronger than most Protestant states, but rivalries among Catholic rulers prevented a united crusade.",
      bullets: [
        "Index: papal authority (reading)",
        "Roman Inquisition: papal authority, Holy Office, mainly Italy",
        "Spanish Inquisition: Spanish crown",
        "High Commission: royal authority (England)",
        "Consistory: ministers and elders; magistrates impose civil penalties",
        "State power was the decisive means of enforcement",
      ],
    },
  ],
  flashcards: buildCards(ID, unit05CardRows),
  quiz: buildQuestions(ID, 'q', quizRows),
};
