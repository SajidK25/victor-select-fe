import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ArrowForward from '@material-ui/icons/ArrowForward'
import ArrowBack from '@material-ui/icons/ArrowBack'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  nextButton: {
    position: 'relative',
    marginTop: theme.spacing(1),
    width: '100%',
    fontSize: 18,
    padding: 8
  },
  prevButton: {
    margin: 4
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: 'gray',
    backgroundColor: 'gray',
    marginTop: 10,
    width: '100%'
  }
}))

// Next Button
export const NextButton = props => {
  const { input, buttonText, validating, submitting, variant } = props
  const classes = useStyles()

  return (
    <Button
      disabled={submitting || validating}
      variant={!variant ? 'contained' : variant}
      color="primary"
      type="submit"
      className={classes.nextButton}
    >
      {buttonText ? (
        buttonText
      ) : (
        <>
          Next <ArrowForward />
        </>
      )}
    </Button>
  )
}

// Previous Button
export const PrevButton = props => {
  const { input, handleClick, ...custom } = props
  const classes = useStyles()

  return (
    <IconButton
      {...input}
      {...custom}
      onClick={handleClick}
      color="primary"
      className={classes.prevButton}
    >
      <ArrowBack />
    </IconButton>
  )
}
