import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  warning: {
    fontSize: 14,
    marginLeft: 42,
    fontWeight: 400,
    marginTop: 0,
    lineHeight: '18px'
  }
})

export const Warning = ({ warning }) => {
  const classes = useStyles()

  return (
    <Typography color="error" className={classes.warning}>
      {warning}
    </Typography>
  )
}
