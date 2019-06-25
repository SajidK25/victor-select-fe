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
    console.log(q.key, key);
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

export { getNextPage, getCurrentPage };
