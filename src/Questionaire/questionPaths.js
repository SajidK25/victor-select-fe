import { edQuestionaire } from "./ED";
import { sleepQuestionaire } from "./Sleep/questionPaths";
import { hairQuestionaire } from "./Hair/questionPaths";
import { allergyQuestionaire } from "./Allergy/questionPaths";
import { joyQuestionaire } from "./Joy/questionPaths";

const visitTypes = {
  SLEEP: "sleep",
  ED: "ed",
  HAIR: "hair",
  ALLERGY: "allergy",
  JOY: "joy"
};

const questionaires = [
  { id: visitTypes.SLEEP, questionaire: sleepQuestionaire },
  { id: visitTypes.ED, questionaire: edQuestionaire },
  { id: visitTypes.HAIR, questionaire: hairQuestionaire },
  { id: visitTypes.ALLERGY, questionaire: allergyQuestionaire },
  { id: visitTypes.JOY, questionaire: joyQuestionaire }
];

export const getQuestionaire = id => {
  const que = questionaires.find(q => q.id === id.toLowerCase());
  if (que) {
    return que.questionaire;
  }
  return null;
};

function nextPage(direction, currPage, pages) {
  if (direction === 1 && currPage === pages.length - 1) {
    return currPage;
  }
  if (direction === -1 && currPage === 0) {
    return currPage;
  }

  currPage += direction;
  return currPage;
}

function getNextPage(values, currPage, direction, questionaire) {
  let i = currPage;

  do {
    i = nextPage(direction, i, questionaire.pages);
  } while (questionaire.skipPage(questionaire.pages[i].key, values));

  return {
    pageIndex: i,
    path: `${questionaire.pathBase}/${questionaire.pages[i].key}`,
    page: questionaire.pages[i]
  };
}

function getCurrentPage(key, questionaire) {
  function keyMatch(q) {
    return q.key.toString().toLowerCase() === key.toString().toLowerCase();
  }

  const i = questionaire.pages.findIndex(keyMatch);

  if (i === -1) {
    return null;
  }

  return {
    pageIndex: i,
    path: `${questionaire.pathBase}/${questionaire.pages[i].key}`,
    page: questionaire.pages[i]
  };
}

export { getNextPage, getCurrentPage, visitTypes };
