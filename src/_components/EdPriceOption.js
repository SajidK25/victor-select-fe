import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { formatMoney } from '../_constants/drugSelections'

const useStyles = makeStyles(theme => ({
  container: {
    margin: 0,
    padding: 0
  },
  paperRoot: {
    margin: 0,
    paddingLeft: 4,
    paddingRight: 4
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    marginTop: 3
  },
  subTitle: {
    fontSize: 12,
    fontWeight: 300,
    marginTop: 3
  },
  priceLine: {
    marginTop: 16,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceBox: {
    display: 'flex',
    alignSelf: 'flex-end'
  },
  perMonth: {
    fontSize: 24,
    fontWeight: 400
  },
  savings: {
    display: 'flex',
    alignSelf: 'flex-end',
    color: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: 500
  },
  fullPrice: {
    display: 'flex',
    alignSelf: 'flex-end',
    fontWeight: 400
  },
  small: {
    fontSize: 12
  }
}))

export const EdPriceOption = props => {
  const { options, checked } = props
  const classes = useStyles()

  if (options.totalPrice < 50) {
    return null
  }

  const savings =
    options.savings > 0
      ? `Save ${formatMoney(options.savings, 0)}/year!`
      : 'Pay full price.'

  return (
    <Paper
      classes={{
        root: classes.paperRoot
      }}
      square
      elevation={0}
    >
      <div className={classes.container}>
        <Typography className={classes.title} variant="body2">
          {options.title}
        </Typography>
        <Typography className={classes.subTitle}>{options.subTitle}</Typography>
        <div className={classes.priceLine}>
          <div className={classes.priceBox}>
            <Typography className={classes.perMonth} variant="body2">
              {`${formatMoney(options.pricing, 0)}`}
              <span className={classes.small}>/mo</span>
            </Typography>
          </div>
          <Typography
            className={
              options.savings > 0 ? classes.savings : classes.fullPrice
            }
            variant="body2"
          >
            {savings}
          </Typography>
        </div>
      </div>
    </Paper>
  )
}
