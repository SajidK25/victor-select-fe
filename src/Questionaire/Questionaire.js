import React, { useState, useEffect } from 'react'
import { Form } from 'react-final-form'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import {
  withRouter,
  Redirect,
  Route,
  Switch,
  pathMatch
} from 'react-router-dom'
import { getNextPage, getCurrentPage } from './questionPaths'
import { QuestionaireLayout } from '../_components/QuestionaireLayout'
import { makeStyles } from '@material-ui/core/styles'
import User from '../_components/User'

const useStyles = makeStyles({
  appContainer: {
    overflowY: 'auto',
    paddingTop: 70
  }
})

const CREATE_VISIT_MUTATION = gql`
  mutation CREATE_VISIT_MUTATION($token: String!) {
    createVisit(token: $token) {
      message
    }
  }
`

const Questionaire = props => {
  const { history, location, questionaire, match } = props
  const [pageIndex, setPageIndex] = useState(0)
  const [transDir, setTransDir] = useState('left')
  const [page, setPage] = useState(questionaire.pages[0])

  const classes = useStyles()

  useEffect(() => {
    const pathArray = location.pathname.split('/')
    if (pathArray.length >= 4) {
      const testKey = pathArray[3]
      if (testKey.toString().toLowerCase() !== page.key.toString()) {
        const currPage = getCurrentPage(testKey, questionaire)
        if (currPage) {
          setPageIndex(currPage.pageIndex)
          setPage(currPage.page)
        }
      }
    }
  }, [location, page.key, questionaire])

  const next = values => {
    const nextPage = getNextPage(values, pageIndex, 1, questionaire)
    setPageIndex(nextPage.pageIndex)
    setPage(nextPage.page)
    setTransDir('left')
    history.push(nextPage.path)
  }

  const previous = values => {
    const prevPage = getNextPage(values, pageIndex, -1, questionaire)
    setPageIndex(prevPage.pageIndex)
    setPage(prevPage.page)
    setTransDir('right')
    history.push(prevPage.path)
  }

  const isLastPage = () => {
    return pageIndex === questionaire.pages.length - 1
  }

  const validate = values => {
    const activePage = page
    return activePage.validate ? activePage.validate(values) : {}
  }

  return (
    <Form
      initialValues={questionaire.initialValues}
      validate={validate}
      onSubmit={values => {
        if (isLastPage()) {
          console.log('Finished!')
        } else {
          console.log('Next!')
          next(values)
        }
      }}
    >
      {({ handleSubmit, submitting, values, validating }) => (
        <QuestionaireLayout
          handlePrevious={previous}
          values={values}
          page={pageIndex}
        >
          <Route
            render={({ location }) => (
              <>
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
                      render={() => (
                        <C
                          key={key}
                          direction={transDir}
                          handleSubmit={handleSubmit}
                          values={values}
                          validating={validating}
                          heading={questionaire.heading}
                        />
                      )}
                    />
                  ))}
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </>
            )}
          />
        </QuestionaireLayout>
      )}
    </Form>
  )
}

const connectedQuestionaire = withRouter(Questionaire)
export { connectedQuestionaire as Questionaire }
