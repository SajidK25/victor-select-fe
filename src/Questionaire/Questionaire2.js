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
import { QHeader } from '../_components'
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
  const [variables, setVariables] = useState({})

  const classes = useStyles()

  useEffect(() => {
    const pathArray = location.pathname.split('/')
    if (pathArray.length >= 4) {
      const testKey = pathArray[3]
      if (testKey.toString().toLowerCase() !== page.key.toString()) {
        const currPage = getCurrentPage(testKey, questionaire)
        console.log('CurrPage:', currPage)
        if (currPage) {
          setPageIndex(currPage.pageIndex)
          setPage(currPage.page)
        }
      }
    }
  }, [location, page.key, questionaire])

  const next = values => {
    console.log('PreNext', pageIndex, page)
    const nextPage = getNextPage(values, pageIndex, 1, questionaire)
    console.log('NextPage:', nextPage)
    setPageIndex(nextPage.pageIndex)
    setPage(nextPage.page)
    setTransDir('left')
    console.log('PostNext', pageIndex, page)
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
    <User>
      {({ data: { me } }) => (
        <Mutation mutation={CREATE_VISIT_MUTATION} variables={variables}>
          {(createVisit, { error, loading }) => (
            <Form
              initialValues={questionaire.initialValues}
              validate={validate}
              onSubmit={async values => {
                if (isLastPage()) {
                  await createVisit()
                  console.log('Finished!')
                } else {
                  console.log('Next!')
                  next(values)
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
                  <div className={classes.appContainer}>
                    <Route
                      render={({ location }) => (
                        <>
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
                                render={() => (
                                  <C
                                    key={key}
                                    direction={transDir}
                                    handleSubmit={handleSubmit}
                                    values={values}
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
                  </div>
                  <pre>{JSON.stringify(values, 0, 2)}</pre>
                </>
              )}
            </Form>
          )}
        </Mutation>
      )}
    </User>
  )
}

const connectedQuestionaire = withRouter(Questionaire)
export { connectedQuestionaire as Questionaire }
