import type { CourseTopicData } from '@/types/study';

// flashcards: unit id -> note heading -> ids of the flashcards that cover that heading.
// questionTopics: id of an existing question (unit quiz or summary pool) -> the note heading it tests.
export const topicData: CourseTopicData = {
  flashcards: {
    "unit-01-people": {
      "Greek Thinkers and Writers": [
        "unit-01-people-fc-04",
        "unit-01-people-fc-05",
        "unit-01-people-fc-06",
        "unit-01-people-fc-11",
        "unit-01-people-fc-13"
      ],
      "Roman Figures": [
        "unit-01-people-fc-09",
        "unit-01-people-fc-14",
        "unit-01-people-fc-15",
        "unit-01-people-fc-12"
      ],
      "Religious and Historical Figures": [
        "unit-01-people-fc-01",
        "unit-01-people-fc-02",
        "unit-01-people-fc-03",
        "unit-01-people-fc-07",
        "unit-01-people-fc-08",
        "unit-01-people-fc-10"
      ]
    },
    "unit-02-politics": {
      "Forms of Government": [
        "unit-02-politics-fc-01",
        "unit-02-politics-fc-04",
        "unit-02-politics-fc-07",
        "unit-02-politics-fc-12",
        "unit-02-politics-fc-15"
      ],
      "Roman Political Life": [
        "unit-02-politics-fc-05",
        "unit-02-politics-fc-08",
        "unit-02-politics-fc-09",
        "unit-02-politics-fc-10",
        "unit-02-politics-fc-11",
        "unit-02-politics-fc-13",
        "unit-02-politics-fc-14"
      ],
      "Empires and Their Ends": [
        "unit-02-politics-fc-02",
        "unit-02-politics-fc-03",
        "unit-02-politics-fc-06",
        "unit-02-politics-fc-16",
        "unit-02-politics-fc-17"
      ]
    },
    "unit-03-ideas": {
      "Political Philosophy Concepts": [
        "unit-03-ideas-fc-05",
        "unit-03-ideas-fc-11",
        "unit-03-ideas-fc-12",
        "unit-03-ideas-fc-15"
      ],
      "Religious Concepts": [
        "unit-03-ideas-fc-01",
        "unit-03-ideas-fc-03",
        "unit-03-ideas-fc-08",
        "unit-03-ideas-fc-09",
        "unit-03-ideas-fc-10"
      ],
      "Cultures and Ideas": [
        "unit-03-ideas-fc-02",
        "unit-03-ideas-fc-04",
        "unit-03-ideas-fc-06",
        "unit-03-ideas-fc-07",
        "unit-03-ideas-fc-13",
        "unit-03-ideas-fc-14"
      ]
    },
    "unit-04-theme-a": {
      "The Theme": [
        "unit-04-theme-a-fc-07"
      ],
      "Plato's Republic — Justice and the Ideal State": [
        "unit-04-theme-a-fc-01",
        "unit-04-theme-a-fc-02",
        "unit-04-theme-a-fc-03",
        "unit-04-theme-a-fc-04"
      ],
      "Plato's Apology — The Individual Against the State": [
        "unit-04-theme-a-fc-05",
        "unit-04-theme-a-fc-06",
        "unit-04-theme-a-fc-07"
      ],
      "Aristotle's Politics — Man as a Political Animal": [
        "unit-04-theme-a-fc-08",
        "unit-04-theme-a-fc-09",
        "unit-04-theme-a-fc-10"
      ]
    },
    "unit-05-theme-b": {
      "The Theme": [
        "unit-05-theme-b-fc-05",
        "unit-05-theme-b-fc-10"
      ],
      "Livy — Roman Virtues and Roman Identity": [
        "unit-05-theme-b-fc-01",
        "unit-05-theme-b-fc-02",
        "unit-05-theme-b-fc-03"
      ],
      "Hadas Essay — Aeneas as Roman Moses": [
        "unit-05-theme-b-fc-04",
        "unit-05-theme-b-fc-05"
      ],
      "Tacitus on the Jews": [
        "unit-05-theme-b-fc-06",
        "unit-05-theme-b-fc-07"
      ],
      "Josephus — A Jewish Perspective on Rome": [
        "unit-05-theme-b-fc-08",
        "unit-05-theme-b-fc-09"
      ]
    },
    "unit-06-theme-c": {
      "The Theme": [
        "unit-06-theme-c-fc-10"
      ],
      "Book of Numbers, Chapter 35 — Divine Justice and the Covenant": [
        "unit-06-theme-c-fc-01",
        "unit-06-theme-c-fc-02"
      ],
      "The Code of Hammurabi — Divine Authority and Human Law": [
        "unit-06-theme-c-fc-03",
        "unit-06-theme-c-fc-04"
      ],
      "Memphite Theology — G-d as Logos": [
        "unit-06-theme-c-fc-05"
      ],
      "The Epic of Gilgamesh — Mortality, Friendship, and the Divine": [
        "unit-06-theme-c-fc-06",
        "unit-06-theme-c-fc-07"
      ],
      "Homer's Iliad and Odyssey — Gods and Heroes": [
        "unit-06-theme-c-fc-08",
        "unit-06-theme-c-fc-09",
        "unit-06-theme-c-fc-10"
      ]
    }
  },
  questionTopics: {
    "unit-01-people-q-01": "Greek Thinkers and Writers",
    "unit-01-people-q-02": "Greek Thinkers and Writers",
    "unit-01-people-q-03": "Greek Thinkers and Writers",
    "unit-01-people-q-04": "Greek Thinkers and Writers",
    "unit-01-people-q-05": "Roman Figures",
    "unit-01-people-q-06": "Religious and Historical Figures",
    "unit-01-people-q-07": "Religious and Historical Figures",
    "unit-01-people-q-08": "Roman Figures",
    "unit-01-people-q-09": "Religious and Historical Figures",
    "unit-01-people-q-10": "Religious and Historical Figures",
    "unit-01-people-q-11": "Roman Figures",
    "unit-01-people-q-12": "Roman Figures",
    "unit-02-politics-q-01": "Forms of Government",
    "unit-02-politics-q-02": "Roman Political Life",
    "unit-02-politics-q-03": "Forms of Government",
    "unit-02-politics-q-04": "Roman Political Life",
    "unit-02-politics-q-05": "Empires and Their Ends",
    "unit-02-politics-q-06": "Roman Political Life",
    "unit-02-politics-q-07": "Forms of Government",
    "unit-02-politics-q-08": "Empires and Their Ends",
    "unit-02-politics-q-09": "Empires and Their Ends",
    "unit-02-politics-q-10": "Roman Political Life",
    "unit-02-politics-q-11": "Empires and Their Ends",
    "unit-02-politics-q-12": "Forms of Government",
    "unit-03-ideas-q-01": "Political Philosophy Concepts",
    "unit-03-ideas-q-02": "Political Philosophy Concepts",
    "unit-03-ideas-q-03": "Religious Concepts",
    "unit-03-ideas-q-04": "Cultures and Ideas",
    "unit-03-ideas-q-05": "Religious Concepts",
    "unit-03-ideas-q-06": "Religious Concepts",
    "unit-03-ideas-q-07": "Cultures and Ideas",
    "unit-03-ideas-q-08": "Political Philosophy Concepts",
    "unit-03-ideas-q-09": "Cultures and Ideas",
    "unit-03-ideas-q-10": "Cultures and Ideas",
    "unit-03-ideas-q-11": "Cultures and Ideas",
    "unit-03-ideas-q-12": "Religious Concepts",
    "unit-04-theme-a-q-01": "Plato's Republic — Justice and the Ideal State",
    "unit-04-theme-a-q-02": "Plato's Republic — Justice and the Ideal State",
    "unit-04-theme-a-q-03": "Plato's Apology — The Individual Against the State",
    "unit-04-theme-a-q-04": "Aristotle's Politics — Man as a Political Animal",
    "unit-04-theme-a-q-05": "Aristotle's Politics — Man as a Political Animal",
    "unit-04-theme-a-q-06": "The Theme",
    "unit-04-theme-a-q-07": "The Theme",
    "unit-04-theme-a-q-08": "Plato's Apology — The Individual Against the State",
    "unit-04-theme-a-q-09": "Aristotle's Politics — Man as a Political Animal",
    "unit-04-theme-a-q-10": "Aristotle's Politics — Man as a Political Animal",
    "unit-05-theme-b-q-01": "Livy — Roman Virtues and Roman Identity",
    "unit-05-theme-b-q-02": "Livy — Roman Virtues and Roman Identity",
    "unit-05-theme-b-q-03": "Hadas Essay — Aeneas as Roman Moses",
    "unit-05-theme-b-q-04": "Tacitus on the Jews",
    "unit-05-theme-b-q-05": "Josephus — A Jewish Perspective on Rome",
    "unit-05-theme-b-q-06": "Josephus — A Jewish Perspective on Rome",
    "unit-05-theme-b-q-07": "Livy — Roman Virtues and Roman Identity",
    "unit-05-theme-b-q-08": "The Theme",
    "unit-05-theme-b-q-09": "Hadas Essay — Aeneas as Roman Moses",
    "unit-05-theme-b-q-10": "Livy — Roman Virtues and Roman Identity",
    "unit-06-theme-c-q-01": "Book of Numbers, Chapter 35 — Divine Justice and the Covenant",
    "unit-06-theme-c-q-02": "The Code of Hammurabi — Divine Authority and Human Law",
    "unit-06-theme-c-q-03": "The Code of Hammurabi — Divine Authority and Human Law",
    "unit-06-theme-c-q-04": "Memphite Theology — G-d as Logos",
    "unit-06-theme-c-q-05": "The Epic of Gilgamesh — Mortality, Friendship, and the Divine",
    "unit-06-theme-c-q-06": "Homer's Iliad and Odyssey — Gods and Heroes",
    "unit-06-theme-c-q-07": "Homer's Iliad and Odyssey — Gods and Heroes",
    "unit-06-theme-c-q-08": "The Theme",
    "unit-06-theme-c-q-09": "The Epic of Gilgamesh — Mortality, Friendship, and the Divine",
    "unit-06-theme-c-q-10": "Homer's Iliad and Odyssey — Gods and Heroes"
  },
};
