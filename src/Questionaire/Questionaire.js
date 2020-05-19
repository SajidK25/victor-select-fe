import React, { useState, useEffect } from "react";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { Form } from "react-final-form";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import { setCurrentProducts } from "./Shared/ProductInfo";
import { getNextPage, getCurrentPage } from "./questionPaths";
import { QuestionaireLayout } from "../_components";
import { getQuestionaire } from "./questionPaths";
import { SAVENEWVISIT_MUTATION, UPDATECURRVISIT_MUTATION } from "../Graphql";

const Questionaire = () => {
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const client = useApolloClient();

  const [saveNewVisit, { error: saveError }] = useMutation(
    SAVENEWVISIT_MUTATION
  );
  const [updateCurrVisit] = useMutation(UPDATECURRVISIT_MUTATION);

  let transDir = "left";

  const questionaire = getQuestionaire(id);
  setCurrentProducts(questionaire.type);

  const [pageIndex, setPageIndex] = useState(0);
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
    return () => {};
  }, [location, page.key, questionaire]);

  const next = (values) => {
    const nextPage = getNextPage(values, pageIndex, 1, questionaire);
    setPageIndex(nextPage.pageIndex);
    setPage(nextPage.page);
    transDir = "left";
    history.push(nextPage.path);
  };

  const previous = (values) => {
    const prevPage = getNextPage(values, pageIndex, -1, questionaire);
    setPageIndex(prevPage.pageIndex);
    setPage(prevPage.page);
    transDir = "right";
    history.push(prevPage.path);
  };

  const isLastPage = () => {
    return pageIndex === questionaire.pages.length - 1;
  };

  const validate = async (values) => {
    return page.validate ? page.validate(values, client) : {};
  };

  return (
    <Form
      initialValues={questionaire.initialValues}
      validate={validate}
      onSubmit={async (values) => {
        values.type = questionaire.type;
        values.page = page.key;
        let response = null;
        try {
          if (!isLastPage()) {
            response = await updateCurrVisit({
              variables: {
                input: values,
              },
            });
            if (response && response.data) {
              await next(values);
            }
          } else {
            response = await saveNewVisit({
              variables: {
                input: values,
              },
            });
            if (response && response.data) {
              history.push("/confirmation");
            }
          }
        } catch (err) {
          console.log(err);
        }
      }}
    >
      {({ handleSubmit, values, validating, submitting, submitError }) => {
        return (
          <QuestionaireLayout
            handlePrevious={previous}
            values={values}
            page={pageIndex}
            error={saveError}
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
