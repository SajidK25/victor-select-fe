import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form } from "react-final-form";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { withRouter, Redirect, Route, Switch } from "react-router-dom";
import { getNextPage } from "./questionPaths";
import { NextButton, QuestionContainer, QHeader } from "../_components";
import User from "../_components/User";

const CREATE_VISIT_MUTATION = gql`
  mutation CREATE_VISIT_MUTATION($token: String!) {
    createVisit(token: $token) {
      message
    }
  }
`;

const Questionaire = props => {
  const { history, questionaire } = props;
  const [pageIndex, setPageIndex] = useState(0);
  const [transDir, setTransDir] = useState("left");
  const [page, setPage] = useState(questionaire.pages[0]);
  const [variables, setVariables] = useState({});

  const next = values => {
    const nextPage = getNextPage(values, 1, questionaire);
    setPageIndex(nextPage.pageIndex);
    setPage(nextPage.page);
    setTransDir("left");
    history.push(nextPage.path);
  };

  const previous = values => {
    const prevPage = getNextPage(values, -1, questionaire);
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
    return activePage.validate ? activePage.validate(values) : {};
  };

  return (
    <User>
      {({ data: { me } }) => (
        <Mutation mutation={CREATE_VISIT_MUTATION} variables={variables}>
          {(createVisit, { error, loading }) => (
            <Form
              initialValues={questionaire.initialValues}
              validate={validate}
              onSubmit={async values => {
                if (isLastPage()) {
                  await createVisit();
                  console.log("Finished!");
                } else {
                  next(values);
                }
              }}
            >
              {({ handleSubmit, submitting, values }) => (
                <>
                  <QHeader
                    handlePrevious={previous}
                    values={values}
                    page={pageIndex}
                  />
                  <Route
                    render={({ location }) => (
                      <QuestionContainer
                        key={location.key}
                        direction={transDir}
                        fullWidth={true}
                      >
                        <form onSubmit={handleSubmit}>
                          {me === null ? (
                            <Redirect to={questionaire.startPath} />
                          ) : null}

                          <Switch location={location}>
                            <Redirect
                              from={questionaire.pathBase}
                              exact
                              to={`${questionaire.pathBase}/zipcode`}
                            />
                            {questionaire.pages.map(({ key, component: C }) => (
                              <Route
                                key={key}
                                path={`${questionaire.pathBase}/${key}`}
                                exact
                                render={() => <C key={key} values={values} />}
                              />
                            ))}
                          </Switch>

                          <NextButton />
                          <pre>{JSON.stringify(variables, 0, 2)}</pre>
                          <pre>{JSON.stringify(values, 0, 2)}</pre>
                        </form>
                      </QuestionContainer>
                    )}
                  />
                </>
              )}
            </Form>
          )}
        </Mutation>
      )}
    </User>
  );
};

let connectedQuestionaire = withRouter(Questionaire);
export { connectedQuestionaire as Questionaire };
