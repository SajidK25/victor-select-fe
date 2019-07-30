import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { formatMoney } from '../_constants/drugSelections'

const useStyles = makeStyles(theme => ({
  container: {
    marginLeft: 8,
    marginRight: 8,
    marginTop: 32
  },
  title: {
    fontSize: 16,
    fontWeight: 400
  },
  headerBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 0 5px'
  },
  headerPrice: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontSize: 12,
    fontWeight: 300
  },
  priceNew: {
    margin: '0 2px',
    color: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: 600
  },
  priceOld: {
    margin: '0 2px',
    color: theme.palette.grey[500],
    fontSize: 16,
    fontWeight: 600,
    textDecoration: 'line-through'
  },
  description: {
    fontSize: 12,
    lineHeight: '20px',
    marginBottom: 25
  },
  priceSuffix: {
    fontSize: 12,
    fontWeight: 200
  }
}))

export const EdSelectionDetail = props => {
  const { pricing, value } = props
  const classes = useStyles()

  if (!value) return null
  const options = {
    title: '',
    total: 0,
    per: '',
    noDiscount: 0
  }

  switch (value) {
    case 'everySix':
      options.title = '6 Month Delivery'
      options.total = pricing.sixTotal
      options.doses = pricing.monthlyDoses * 6
      options.per = '6 mo'
      options.interval = 'every 6 months'
      options.noDiscount = pricing.monthly * 6
      break

    case 'everyThree':
      options.title = '3 Month Delivery'
      options.total = pricing.threeTotal
      options.doses = pricing.monthlyDoses * 3
      options.per = '3 mo'
      options.interval = 'every 3 months'
      options.noDiscount = pricing.monthly * 3
      break

    case 'monthly':
      options.title = 'Monthly Delivery'
      options.total = pricing.monthly
      options.doses = pricing.monthlyDoses
      options.per = 'mo'
      options.interval = 'monthly'
      options.noDiscount = 0
      break

    default:
  }

  return (
    <div className={classes.container}>
      <div className={classes.headerBlock}>
        <Typography className={classes.title}>{options.title}</Typography>
        <div className={classes.headerPrice}>
          {options.noDiscount > 0 ? (
            <Typography className={classes.priceOld}>
              {formatMoney(options.noDiscount, 0)}
            </Typography>
          ) : null}

          <Typography className={classes.priceNew}>
            {formatMoney(options.total, 0)}
          </Typography>
          <Typography className={classes.priceSuffix}>
            /{options.per}
          </Typography>
        </div>
      </div>
    </div>
  )
}
