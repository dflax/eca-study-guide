import type { Unit } from '@/types/study';
import { buildCards, buildQuestions, type CardRow, type Row } from '../helpers';

const ID = 'unit-04-england';

export const unit04Topics = {
  annulment: 'Henry VIII, the Succession, and the Annulment',
  supremacy: 'The Act of Supremacy (1534) and Thomas More',
  monasteries: 'Closing the Monasteries and the Secularization of East Prussia',
  doctrine: 'Henry\'s Break with Rome: Authority Changed, Doctrine Kept',
  reigns: 'Edward VI, Mary I, and Elizabeth I',
  church: 'The Elizabethan Church of England',
  conformity: 'Conformity, Recusants, and the High Commission',
  images: 'Church Images: Binham, Ely, and Elizabeth\'s Injunctions',
} as const;
const T = unit04Topics;

export const unit04CardRows: CardRow[] = [
  [T.annulment, "Henry VIII and the royal succession", "Henry (ruled 1509-1547, Tudor dynasty) wanted a male heir to secure the dynasty. His marriage dispute led him to reject papal authority while initially retaining major Catholic doctrines."],
  [T.annulment, "Annulment", "A declaration that a marriage was not valid. Henry sought an annulment of his marriage to Catherine of Aragon so he could remarry."],
  [T.annulment, "Charles V and the pope's reluctance", "Charles V, Holy Roman Emperor, was Catherine of Aragon's nephew. His power in Germany and Italy made the pope reluctant to grant Henry's request."],
  [T.annulment, "Why did Henry seek an annulment, and why did the pope refuse? How is this connected to the break with Rome? (Study Guide Q19)", "England had known civil war, and Henry wanted a male heir to continue the Tudor dynasty. Catherine had borne only a surviving daughter, Mary. The pope refused because Catherine's nephew, Emperor Charles V, held great power and the pope could not offend him. Henry decided he needed control of religion in England, so the succession dispute became his break with Rome."],
  [T.annulment, "What was Henry VIII's title from the pope before the break?", "Defender of the Faith. He earned it by writing a Defense of the Seven Sacraments against Luther's ideas."],
  [T.supremacy, "Act of Supremacy and royal supremacy", "The 1534 law made the English king supreme head of the Church of England, transferring church headship from the pope to the Crown. Subjects could be required to take an oath of supremacy."],
  [T.supremacy, "Thomas More", "Humanist author of Utopia who refused to accept royal supremacy and was executed for treason. His case shows the limits placed on religious disagreement."],
  [T.supremacy, "What authority did the Act of Supremacy give the Crown, and what does More's execution show? (Study Guide Q20)", "It declared the king 'Protector and Only Supreme Head of the Church and Clergy of England,' replacing the pope, and officials could be made to swear allegiance. More held that his loyalty to the king was limited by a higher loyalty to God; his execution for treason shows that dissent from the royal religious settlement was not tolerated."],
  [T.supremacy, "Through whom did Henry act, and why?", "Through Parliament. Henry believed a king was never stronger than when united with representatives of his kingdom."],
  [T.monasteries, "Dissolution of the monasteries", "Henry closed the monasteries and seized their lands. Distributing property to followers strengthened royal power and created supporters of the new settlement."],
  [T.monasteries, "Landed gentry", "Landowners whose new monastic property gave them a material reason to support the Tudors and the national church."],
  [T.monasteries, "Secularization of East Prussia", "In 1525 Albert of Brandenburg turned the Teutonic Order's territory into a hereditary secular duchy. As in England, religious change transferred property and strengthened rulers."],
  [T.monasteries, "How did closing the monasteries strengthen the Crown and create supporters? Compare East Prussia. (Study Guide Q21)", "The king seized monastic lands and gave them to followers, rebuilding a landed aristocracy weakened in the Wars of the Roses; the new owners had a material reason to defend the Tudors and the national church. In East Prussia (P&C p. 79) Albert converted a church-state into his own hereditary duchy. In both, religious change moved property out of the Church and strengthened a ruler; but in England the king distributed lands to supporters, while in East Prussia the head of the order made the territory hereditary for his family."],
  [T.monasteries, "Why did monastic land matter to the Reformation's success?", "Whoever received church lands (rulers, nobles, gentry) gained wealth and a strong interest in keeping the new arrangement. P&C notes that governments confiscated church properties before and after the Reformation, but Protestant governments did so with special alacrity."],
  [T.doctrine, "Six Articles (1539)", "Henry's law that required belief in transubstantiation, clerical celibacy, and confession, among other tests of Catholic faith and practice."],
  [T.doctrine, "Why was Henry's rejection of papal authority not an immediate rejection of Catholic doctrine? (Study Guide Q22)", "Henry prided himself on his orthodoxy and wanted to be supreme head of an English Catholic church, so he changed authority first. In 1539 the Six Articles required transubstantiation, clerical celibacy, and confession. The later Protestant settlement changed worship and doctrine."],
  [T.reigns, "Edward VI", "Henry's son, ruled 1547-1553 as a boy with adult advisers, who advanced Protestant reform, including the English Book of Common Prayer."],
  [T.reigns, "Mary I", "Henry and Catherine's daughter, ruled 1553-1558. She restored Catholicism and papal authority, married Philip of Spain, and burned nearly 300 Protestants as heretics ('Bloody Mary')."],
  [T.reigns, "Elizabeth I", "Henry and Anne Boleyn's daughter, ruled 1558-1603. She restored royal supremacy and established a Protestant national church. Her settlement required conformity rather than granting religious freedom to everyone."],
  [T.reigns, "Order and direction of change under Edward VI, Mary I, and Elizabeth I (Study Guide Q22)", "Edward VI (1547-1553): toward Protestantism, with the English Book of Common Prayer. Mary I (1553-1558): back to Catholicism and papal authority, with persecution of Protestants. Elizabeth I (1558-1603): a Protestant settlement of royal supremacy and a common form of worship, broad enough to avoid unnecessary divisions."],
  [T.reigns, "Why did Mary's reign make Catholicism more unpopular?", "She married Philip of Spain, whom the English disliked, and some three hundred persons were burned at the stake as heretics in public mass executions, which set off a wave of horror."],
  [T.reigns, "Why did Catholics dispute Elizabeth's right to be queen?", "Catholics rejected Henry's annulment of his marriage to Catherine, so for them Elizabeth, the daughter of Anne Boleyn, was illegitimate."],
  [T.church, "Church of England (Anglican Church)", "The established national church, controlled by the monarch through Parliament. It combined Protestant teaching and English worship with bishops and much of the older hierarchy."],
  [T.church, "Book of Common Prayer", "The English book prescribing the order of Anglican worship, introduced under Edward VI and used in the Elizabethan settlement."],
  [T.church, "Puritans", "Protestants who wanted further changes in English church ceremonies and government."],
  [T.church, "What were two features of the Church of England under Elizabeth, and who controlled it? (Study Guide Q23)", "Features: English replaced Latin in worship and the clergy could marry; it kept bishops and archbishops, church courts, parishes, and tithes; the Thirty-Nine Articles (1563) stated its broad, Protestant-toned doctrine. The monarch, acting through Parliament, controlled it, with Elizabeth as Supreme Governor."],
  [T.church, "How was Elizabeth's title different from Henry's?", "Henry was 'Supreme Head' of the Church; Elizabeth took the title Supreme Governor."],
  [T.church, "High Church and Low Church", "Later Anglican labels (not formal parties Elizabeth established): High Church stressed ritual and hierarchy; Low Church stressed a stronger Protestant emphasis with less ritual."],
  [T.conformity, "Recusants and conformity", "Recusants refused to attend required Church of England services. Conformity meant obeying the established church's rules; Catholics and Protestant dissenters faced restrictions."],
  [T.conformity, "High Commission", "An English institution enforcing Anglican conformity under royal authority. Compare it with Geneva's consistory and Catholic religious courts."],
  [T.conformity, "How did required conformity limit Catholics and other Protestants? (Study Guide Q23)", "All English subjects were required to belong to the Church of England and attend its services. Those who refused (recusants, including Catholics and more advanced Calvinists) faced fines and legal disadvantages. Bishops' courts and the High Commission enforced conformity under royal authority."],
  [T.conformity, "What happened to the Church of Ireland and to the Irish?", "A replica of the Church of England was established, taking over Roman Catholic properties, but most Irish remained Catholic. Catholic identity became closely tied to resistance to English rule."],
  [T.images, "Elizabeth's Injunction XXIII (1559)", "Ordered to 'take away, utterly extinct, and destroy all shrines ... pictures, paintings, and all other monuments of feigned miracles, pilgrimages, idolatry, and superstition,' while preserving or repairing the walls and glass windows."],
  [T.images, "How do the Binham screen and Elizabeth's Injunctions show change in religious practice?", "At Binham, saints' faces were scratched out and the paintings covered with white paint and English Scripture; the Injunctions ordered shrines and pictures destroyed and an English Bible set up in every church (VI). Both replaced the cult of saints with English Scripture."],
  [T.images, "Why was England's Reformation both a religious change and a transfer of power? (Final explanation)", "Because Henry's break first transferred authority and property to the Crown (Act of Supremacy, monasteries), and because later reigns changed worship (English Bible and prayer book, images removed). Although worship became Protestant, much survived: bishops, church courts, parishes, and tithes."],
];

const quizRows: Row[] = [
  [T.annulment, "Why did Henry VIII seek an annulment of his marriage to Catherine of Aragon?", "He wanted a male heir to continue the Tudor dynasty", ["He wanted to marry into the Habsburg family", "He had been excommunicated by the pope", "He had converted to Lutheranism"], "England had known civil war, and Henry wanted a son to secure the dynasty; Catherine had borne only a surviving daughter."],
  [T.annulment, "Why did the pope refuse to grant the annulment?", "Catherine was Emperor Charles V's aunt, and the pope could not offend him", ["The pope had already agreed to it in private but was afraid to announce the decision", "The pope believed that Henry was a Lutheran and would not recognize his second marriage", "The pope wanted Anne Boleyn to become queen of England and had promised her the throne"], "Charles V held great power in Germany and Italy."],
  [T.supremacy, "The Act of Supremacy of 1534 made the English king:", "supreme head of the Church of England", ["a cardinal of the Roman Church", "the ruler of the Holy Roman Empire", "the head of the Society of Jesus"], "Church headship passed from the pope to the Crown."],
  [T.supremacy, "Why was Thomas More executed?", "He refused to accept royal supremacy, which was treated as treason", ["He tried to seize the throne from Henry and to put a Catholic ruler in his place", "He wrote a book against indulgences that was read throughout all of Germany", "He married Catherine of Aragon in secret after her marriage was annulled"], "More held that his loyalty to the king was limited by a higher loyalty to God."],
  [T.monasteries, "What did Henry VIII do with the monastic lands he seized?", "He distributed them to followers, creating supporters of the new settlement", ["He returned them to the pope in Rome as a gift to atone for the break with the Church", "He divided them among the peasants who had farmed them for the monks", "He kept them empty and untouched so that the buildings would be preserved"], "The new landed gentry had a material interest in defending the Tudors and the national church."],
  [T.doctrine, "In 1539 the Six Articles required belief in:", "transubstantiation, clerical celibacy, and confession", ["justification by faith alone and the real presence", "predestination and the priesthood of all believers", "salvation by works and marriage of clergy"], "Henry changed authority without immediately changing Catholic doctrine."],
  [T.reigns, "Which is the correct order of rulers?", "Edward VI, Mary I, Elizabeth I", ["Mary I, Edward VI, Elizabeth I", "Elizabeth I, Mary I, Edward VI", "Edward VI, Elizabeth I, Mary I"], "Edward 1547-1553, Mary 1553-1558, Elizabeth 1558-1603."],
  [T.church, "Who controlled the Church of England under Elizabeth?", "The monarch, acting through Parliament", ["The pope, acting through English bishops", "A consistory of ministers and elders", "The Society of Jesus, from Rome"], "The Church of England was a state church; Elizabeth took the title Supreme Governor."],
  [T.conformity, "People who refused to attend Church of England services were called:", "recusants", ["Puritans", "Huguenots", "Jesuits"], "Recusants included Catholics and more advanced Calvinists."],
  [T.images, "Elizabeth's Injunction XXIII ordered churches to:", "destroy shrines and pictures connected with pilgrimages and superstition", ["preserve every medieval painting on the church walls as a record of the English past", "paint the faces of saints on the new rood screens in the English style", "collect indulgences from the faithful for the Queen's own treasury"], "It ordered images removed but walls and glass windows preserved or repaired."],
];

export const unit04England: Unit = {
  id: ID,
  number: 4,
  title: 'England',
  description: 'Henry VIII\'s annulment and break with Rome, the Act of Supremacy, the monasteries and East Prussia, Edward, Mary and Elizabeth, the Elizabethan Church of England, and conformity (Study Guide Questions 19-23).',
  notes: [
    {
      heading: T.annulment,
      content: "England was peculiar in that its government broke with the Roman church before adopting any Protestant principles. Henry VIII (ruled 1509-1547), of the Tudor dynasty, prided himself on his orthodoxy. When Luther's ideas reached England about 1520, Henry wrote a Defense of the Seven Sacraments, for which a grateful pope gave him the title Defender of the Faith (P&C p. 83).\n\nBut England had known civil war and instability, and Henry wanted a male heir to continue the dynasty and prevent rival families from fighting for the throne. His marriage to Catherine of Aragon had produced a surviving daughter, Mary, but no surviving son, and the Church did not permit divorce. An annulment declares that a marriage was never valid, and Henry sought one from the pope. The pope was embarrassed because Catherine was the aunt of Emperor Charles V, who held great power in Germany and Italy and whom the pope was in no position to offend; Catherine herself also opposed losing her position. Henry decided he needed control of religion in England. He put in a new archbishop of Canterbury, repudiated the Roman connection, and in 1533 married Anne Boleyn. Anne bore Elizabeth; Henry later had Anne executed and married four more times, for six wives in all, and had a son, Edward VI.",
      bullets: [
        "Henry VIII (1509-1547): Tudor; Defender of the Faith",
        "Problem: no surviving male heir -> dynastic insecurity",
        "Annulment sought from the pope; Charles V was Catherine's nephew",
        "Henry took control of the English Church to obtain the marriage",
        "1533: marries Anne Boleyn; English church authorities annul the first marriage",
      ],
    },
    {
      heading: T.supremacy,
      content: "Henry acted through Parliament, believing a king was never stronger than when united with representatives of his kingdom. In 1534 Parliament passed the Act of Supremacy, which declared the English king the \"Protector and Only Supreme Head of the Church and Clergy of England.\" It moved church headship from the pope to the Crown. Subjects could be required, if asked, to take an oath of supremacy acknowledging Henry's religious headship and rejecting the pope's.\n\nSir Thomas More, a statesman and humanist best known as the author of Utopia, refused the oath. Henry had him executed for treason. More maintained that his loyalty to the king was limited by a higher loyalty to God. His case shows the limits placed on religious disagreement: under the new settlement the king's religious authority could not be openly refused. (The Roman Church pronounced More a saint four centuries later.) Henry also suppressed by force a predominantly Catholic rebellion in 1536.",
      bullets: [
        "1534 Act of Supremacy: king = supreme head of the Church of England",
        "Oath of supremacy could be demanded of subjects",
        "Thomas More (Utopia) refused; executed for treason",
        "Lesson: royal religious authority could not be openly refused",
        "1536: Catholic rebellion suppressed by force",
      ],
    },
    {
      heading: T.monasteries,
      content: "Henry dissolved England's monasteries, important centers of religious, intellectual, and economic life. He seized their lands, which had accumulated from gifts over centuries, and distributed property to followers. This strengthened royal power and reconstituted a landed aristocracy that had been weakened in the Wars of the Roses. The new landed gentry remained firm supporters of the Tudors and the national church, whatever its doctrines. At Binham, for example, Henry closed the priory in 1539 and granted it to Sir Thomas Paston (003H06).\n\nCompare East Prussia (P&C p. 79). The Teutonic Order was a Catholic organization whose grand commander was Albert of Brandenburg. In 1525 Albert declared for Luther and converted East Prussia into a secular duchy of which he and his descendants became hereditary dukes. In Lutheran German states generally, secularizing (confiscating) church property enriched princes and gave them a material interest in the movement. In both England and East Prussia, religious change transferred property out of the Church and strengthened rulers; the difference is that Henry gave the lands to followers, while Albert made a church-state his family's hereditary duchy.",
      bullets: [
        "Monastic lands seized and handed to followers",
        "Result: stronger Crown and a loyal landed gentry",
        "East Prussia, 1525: Albert of Brandenburg -> hereditary secular duchy",
        "Common point: religious change moved property to rulers",
        "Property gave supporters a stake in the new settlement",
      ],
    },
    {
      heading: T.doctrine,
      content: "It was Henry's intent not to change doctrine at all. He wished to be supreme head of an English Catholic church. In 1536 he forcibly suppressed a predominantly Catholic rebellion, and in 1539, through the Six Articles, required everybody to believe in transubstantiation, the celibacy of the clergy, the need of confession, and a few other test items of Catholic faith and practice (P&C p. 83).\n\nSo the initial break with Rome changed authority; the later Protestant settlement changed worship and doctrine. It proved impossible to hold this position, because many in England began to favor one or another of the Continental reformers' ideas, and a small minority accepted the whole Protestant position. For three decades the government veered about.",
      bullets: [
        "Henry wanted to be head of an English Catholic church",
        "Six Articles (1539): transubstantiation, celibacy, confession",
        "First change = authority; later change = worship and doctrine",
        "Unstable middle position -> three decades of veering",
      ],
    },
    {
      heading: T.reigns,
      content: "Edward VI ruled from 1547 to 1553 while still a boy (he was ten when his father died), with adult advisers governing the country. They advanced Protestant reforms in the Church of England, including the English Book of Common Prayer.\n\nMary I, the daughter of Henry and Catherine of Aragon, ruled from 1553 to 1558. A devout Catholic whose life had been embittered by the break with Rome, she restored Catholicism and papal authority. She married Philip of Spain in 1554, and the English disliked both him and the intense Spanish Catholicism he represented. Nearly three hundred people were burned as heretics, which earned her the name Bloody Mary; she actually made Catholicism more unpopular.\n\nElizabeth I, daughter of Henry and Anne Boleyn, ruled from 1558 to 1603. Catholics regarded her as illegitimate, so she could not be a Roman Catholic. She was Protestant, but she tried to avoid unnecessary divisions among Protestants. The settlement of 1559 restored royal supremacy and prescribed a common form of worship.",
      bullets: [
        "Edward VI (1547-1553): Protestant reform; Book of Common Prayer",
        "Mary I (1553-1558): restores Catholicism and the pope; burns nearly 300; 'Bloody Mary'",
        "Elizabeth I (1558-1603): royal supremacy restored; Protestant national church",
        "Direction: Protestant -> Catholic -> Protestant settlement with conformity",
      ],
    },
    {
      heading: T.church,
      content: "Under Elizabeth the English became Protestant, gradually and in their own way. The Church of England was an established national church. The monarch, acting through Parliament, determined its legal position and doctrine; Elizabeth took the title Supreme Governor. Organizationally it resembled a Lutheran church (P&C p. 84).\n\nIt kept the archbishop of Canterbury as the leading official, bishops, priests and deacons, church courts, parishes, tithes, buildings, and the universities. In religious practice it was Protestant: English replaced Latin in the liturgy, there was no cult of the saints, and clergy could marry. The Book of Common Prayer prescribed an order of services, and the Thirty-Nine Articles (1563) stated Anglican doctrine in broad and often ambiguous terms so that people of different beliefs could be accommodated. It retained a hierarchy rather than adopting Geneva's system of ministers and lay elders. Puritans wanted further changes in ceremonies and church government; later usage called the emphasis on ritual and hierarchy High Church and the stronger Protestant emphasis Low Church.",
      bullets: [
        "Controlled by the monarch through Parliament; Supreme Governor",
        "Kept: archbishops, bishops, courts, parishes, tithes",
        "Changed: English worship, no saints' cult, married clergy",
        "Thirty-Nine Articles (1563): broad doctrine",
        "Book of Common Prayer; Puritans wanted more change",
      ],
    },
    {
      heading: T.conformity,
      content: "The settlement required subjects to attend Church of England services. All English subjects were obliged to belong to the church, and laws were passed against recusants, a term used for both Roman Catholics and the more advanced Calvinists who refused to acknowledge it (P&C p. 84). Catholics faced fines and legal disadvantages; Protestant dissenters also faced restrictions. Bishops' courts and the High Commission enforced conformity under royal authority (P&C p. 92).\n\nOther groups were also limited: Jews had been expelled from England in 1290 and were not openly readmitted under the Tudors (open resettlement is conventionally dated to 1656). The English monarchy also established a Protestant Church of Ireland that took over the properties of the Roman church there. Most Irish people remained Catholic and resented church taxes and English rule, so Catholic identity became closely connected with resistance to English domination.",
      bullets: [
        "Everyone was required to belong and attend",
        "Recusants (Catholics and advanced Calvinists) fined and restricted",
        "Enforcers: bishops' courts and the High Commission (royal authority)",
        "Church of Ireland: most Irish stayed Catholic",
        "Conformity, not toleration",
      ],
    },
    {
      heading: T.images,
      content: "The 003H06 packet compares evidence of the Reformation in church buildings. At Binham Priory, the medieval screen separating the congregation from the altar area was altered: some saints' faces were scratched out and the paintings were covered with white paint and English Scripture, though the older figures now show through. Henry VIII closed Binham in 1539, but part of the church remained in parish use.\n\nElizabeth's Injunctions of 1559 gave the instruction. Injunction VI ordered a large English Bible set up in every church where parishioners could conveniently read it. Injunction XXIII ordered the removal and destruction of \"all shrines ... pictures, paintings, and all other monuments of feigned miracles, pilgrimages, idolatry, and superstition,\" while preserving or repairing the walls and glass windows. At Ely Cathedral's Lady Chapel the painted statues were removed and the lower carved figures defaced, leaving the Gothic walls and empty niches. Albi Cathedral in Catholic France, by contrast, kept its painted late-medieval figures. (The Council of Trent's contrasting instruction on images is in Unit 5.)",
      bullets: [
        "Binham: faces scratched out, painted over with white and English Scripture",
        "Injunction VI: English Bible in every church",
        "Injunction XXIII: remove shrines and pictures; keep walls and windows",
        "Ely (Anglican): statues removed; Albi (Catholic): figures kept",
        "Final explanation: change in worship, change in authority/property, one survival",
      ],
    },
  ],
  flashcards: buildCards(ID, unit04CardRows),
  quiz: buildQuestions(ID, 'q', quizRows),
};
