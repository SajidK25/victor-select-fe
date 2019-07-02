import React from 'react'
import { QHeader } from '../_components'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  appContainer: {
    overflowY: 'auto',
    paddingTop: 70
  }
})

export const QuestionaireLayout = props => {
  const classes = useStyles()

  return (
    <>
      <QHeader {...props} />
      <div className={classes.appContainer}>{props.children}</div>
    </>
  )
}
