import React, { useState, useEffect } from "react";
import { Form } from "react-final-form";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import { getNextPage, getCurrentPage } from "./questionPaths";
import { QuestionaireLayout } from "../_components/QuestionaireLayout";
import { getQuestionaire } from "./questionPaths";
import User from "../_components/User";
import { useApolloClient } from "@apollo/react-hooks";

const Questionaire = () => {
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const client = useApolloClient();

  console.log("Params:", id);
  const questionaire = getQuestionaire(id);

  const [pageIndex, setPageIndex] = useState(0);
  const [transDir, setTransDir] = useState("left");
  const [page, setPage] = useState(questionaire.pages[0]);

  useEffect(() => {
    const pathArray = location.pathname.split("/");
    if (pathArray.length >= 4) {
      const testKey = pathArray[3];
      if (testKey.toString().toLowerCase() !== page.key.toString()) {
        const currPage = getCurrentPage(testKey, questionaire);
        if (currPage) {
          setPageIndex(currPage.pageIndex);
          setPage(currPage.page);
        }
      }
    }
  }, [location, page.key, questionaire]);

  const next = values => {
    const nextPage = getNextPage(values, pageIndex, 1, questionaire);
    setPageIndex(nextPage.pageIndex);
    setPage(nextPage.page);
    setTransDir("left");
    history.push(nextPage.path);
  };

  const previous = values => {
    const prevPage = getNextPage(values, pageIndex, -1, questionaire);
    setPageIndex(prevPage.pageIndex);
    setPage(prevPage.page);
    setTransDir("right");
    history.push(prevPage.path);
  };

  const isLastPage = () => {
    return pageIndex === questionaire.pages.length - 1;
  };

  const validate = values => {
    const activePage = page;
    return activePage.validate ? activePage.validate(values, client) : {};
  };

  return (
    <Form
      initialValues={questionaire.initialValues}
      validate={validate}
      onSubmit={values => {
        if (isLastPage()) {
          alert("Saving...");
        } else {
          next(values);
        }
      }}
    >
      {({ handleSubmit, values, validating }) => (
        <QuestionaireLayout
          handlePrevious={previous}
          values={values}
          page={pageIndex}
        >
          <Switch location={location}>
            <Redirect
              from={questionaire.pathBase}
              exact
              to={`${questionaire.pathBase}/zipcode`}
            />
            {questionaire.pages.map(({ key, component: C }) => (
              <Route key={key} path={`${questionaire.pathBase}/${key}`} exact>
                <C
                  key={key}
                  direction={transDir}
                  handleSubmit={handleSubmit}
                  values={values}
                  validating={validating}
                  heading={questionaire.heading}
                />
              </Route>
            ))}
            <Route>
              <div>Page not found</div>
            </Route>
          </Switch>
        </QuestionaireLayout>
      )}
    </Form>
  );
};

export { Questionaire };
