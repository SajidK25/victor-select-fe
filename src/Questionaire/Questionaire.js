import React, { useState, useEffect } from "react";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Form } from "react-final-form";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import { getNextPage, getCurrentPage, getFirstPage } from "./questionPaths";
import { QuestionaireLayout, ErrorMessage } from "../_components";
import { getQuestionaire } from "./questionPaths";
import User from "../_components/User";

const UPDATE_CURR_VISIT = gql`
  mutation UPDATE_CURR_VISIT($input: Json!) {
    updateCurrVisit(input: $input) {
      message
    }
  }
`;

const SAVE_NEW_VISIT = gql`
  mutation SAVE_NEW_VISIT($input: Json!) {
    saveNewVisit(input: $input) {
      message
    }
  }
`;

const Questionaire = () => {
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const client = useApolloClient();
  let transDir = "left";

  const questionaire = getQuestionaire(id);
  console.log("Questionaire:", questionaire);

  const [pageIndex, setPageIndex] = useState(0);
  const [page, setPage] = useState(questionaire.pages[0]);

  useEffect(() => {
    console.log("useEffect Location:", location);
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
    return () => console.log("unmounting...");
  }, [location, page.key, questionaire]);

  const next = values => {
    console.log("Next page called!");
    const nextPage = getNextPage(values, pageIndex, 1, questionaire);
    setPageIndex(nextPage.pageIndex);
    setPage(nextPage.page);
    transDir = "left";
    history.push(nextPage.path);
  };

  const previous = values => {
    const prevPage = getNextPage(values, pageIndex, -1, questionaire);
    setPageIndex(prevPage.pageIndex);
    setPage(prevPage.page);
    transDir = "right";
    history.push(prevPage.path);
  };

  const isLastPage = () => {
    return pageIndex === questionaire.pages.length - 1;
  };

  const validate = async values => {
    return page.validate ? page.validate(values, client) : {};
  };

  return (
    <Form
      initialValues={questionaire.initialValues}
      validate={validate}
      onSubmit={async values => {
        console.log("Saving currVisit");
        values.type = questionaire.type;
        values.page = page.key;
        // console.log("Copied Values:", q);
        //    delete q.personal;
        //    delete q.subscription;
        //    delete q.payment;
        if (!isLastPage()) {
          console.log("Saving currVisit!");
          client
            .mutate({
              mutation: UPDATE_CURR_VISIT,
              variables: {
                input: values
              }
            })
            .then(async ({ data }) => {
              console.log("Data!!!", data);
              await next(values);
            })
            .catch(mutationError => {
              console.log("Error:", mutationError);
            });
        } else {
          console.log("Saving currVisit!");
          client
            .mutate({
              mutation: SAVE_NEW_VISIT,
              variables: {
                input: values
              }
            })
            .then(async ({ data }) => {
              console.log("Data!!!", data);
              history.push("/confirmation");
            })
            .catch(mutationError => {
              console.log("Error:", mutationError);
            });
        }
      }}
    >
      {({ handleSubmit, values, validating, submitting, submitError }) => {
        return (
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
                    heading={questionaire.heading}
                    handleSubmit={handleSubmit}
                    values={values}
                    validating={validating}
                    submitting={submitting}
                    submitError={submitError}
                  />
                </Route>
              ))}
              <Route>
                <div>Page not found</div>
              </Route>
            </Switch>
            {/*      <pre>{JSON.stringify(values, 0, 2)}</pre> */}
          </QuestionaireLayout>
        );
      }}
    </Form>
  );
};

export { Questionaire };
