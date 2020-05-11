import { edQuestionaire } from "./ED/ProductInfo";
import { sleepQuestionaire } from "./Sleep/ProductInfo";
import { hairQuestionaire } from "./Hair/ProductInfo";
import { allergyQuestionaire } from "./Allergy/ProductInfo";
import { joyQuestionaire } from "./Joy/ProductInfo";
import { weightQuestionaire } from "./Weight/ProductInfo";

const visitTypes = {
  SLEEP: "sleep",
  ED: "ed",
  HAIR: "hair",
  ALLERGY: "allergy",
  JOY: "joy",
  WEIGHT: "weight",
};

const questionaires = [
  { id: visitTypes.SLEEP, questionaire: sleepQuestionaire },
  { id: visitTypes.ED, questionaire: edQuestionaire },
  { id: visitTypes.HAIR, questionaire: hairQuestionaire },
  { id: visitTypes.ALLERGY, questionaire: allergyQuestionaire },
  { id: visitTypes.JOY, questionaire: joyQuestionaire },
  { id: visitTypes.WEIGHT, questionaire: weightQuestionaire },
];

export const getQuestionaire = (id) => {
  const que = questionaires.find((q) => q.id === id.toLowerCase());
  if (que) {
    return que.questionaire;
  }
  return null;
};

const nextPage = (direction, currPage, pages) => {
  if (direction === 1 && currPage === pages.length - 1) {
    return currPage;
  }
  if (direction === -1 && currPage === 0) {
    return currPage;
  }

  currPage += direction;
  return currPage;
};

const getNextPage = (values, currPage, direction, questionaire) => {
  let i = currPage;

  do {
    i = nextPage(direction, i, questionaire.pages);
  } while (questionaire.skipPage(questionaire.pages[i].key, values));

  return {
    pageIndex: i,
    path: `${questionaire.pathBase}/${questionaire.pages[i].key}`,
    page: questionaire.pages[i],
  };
};

const getCurrentPage = (key, questionaire) => {
  const keyMatch = (q) =>
    q.key.toString().toLowerCase() === key.toString().toLowerCase();

  const i = questionaire.pages.findIndex(keyMatch);

  if (i === -1) {
    return null;
  }

  return {
    pageIndex: i,
    path: `${questionaire.pathBase}/${questionaire.pages[i].key}`,
    page: questionaire.pages[i],
  };
};

const getFirstPage = (questionaire) => {
  return {
    pageIndex: 0,
    path: `${questionaire.pathBase}/${questionaire.pages[0].key}`,
    page: questionaire.pages[0],
  };
};

export { getNextPage, getCurrentPage, visitTypes, getFirstPage };
