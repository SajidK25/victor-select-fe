import React, { useState, useEffect } from "react";
import { useApolloClient } from "@apollo/react-hooks";
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

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const Questionaire = () => {
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const client = useApolloClient();

  const questionaire = getQuestionaire(id);
  console.log("Questionaire:", questionaire);

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

  const next = async values => {
    await sleep(2000);
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

  const validate = async values => {
    const activePage = page;
    return activePage.validate ? activePage.validate(values, client) : {};
  };

  return (
    <Form
      initialValues={questionaire.initialValues}
      validate={validate}
      onSubmit={async values => {
        if (isLastPage()) {
          alert("Saving...");
        } else {
          await next(values);
        }
      }}
    >
      {({ handleSubmit, values, validating, submitting, submitError }) => (
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
                  pageNo={key}
                  direction={transDir}
                  handleSubmit={handleSubmit}
                  values={values}
                  validating={validating}
                  submitting={submitting}
                  submitError={submitError}
                  heading={questionaire.heading}
                />
              </Route>
            ))}
            <Route>
              <div>Page not found</div>
            </Route>
          </Switch>
          {/*      <pre>{JSON.stringify(values, 0, 2)}</pre> */}
        </QuestionaireLayout>
      )}
    </Form>
  );
};

export { Questionaire };
