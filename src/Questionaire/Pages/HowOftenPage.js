/* eslint-disable import/order */
import React from 'react'
import { Field } from 'react-final-form'
import { EdSelectionDetail } from '../../_components/EdSelectionDetail'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { EdPriceOption } from '../../_components/EdPriceOption'
import { StandardPage } from '../../_components/StandardPage'
import { getPrices } from '../../_constants'
import { formatMoney, MAX_AMOUNT } from '../../_constants/drugSelections'
import { DetailedRadioGroup } from '../../_components/DetailedRadioGroup'

const useStyles = makeStyles(theme => ({
  description: {
    marginTop: 16,
    padding: 16
  },
  container: {
    margin: 0,
    padding: 0
  },
  title: {
    fontSize: 28,
    fontWeight: 500,
    marginBottom: 24
  },
  root: {
    margin: 0
  },
  controlRoot: {
    margin: 0,
    width: '100%',
    verticalAlign: 'top'
  },
  labelRoot: {
    width: '100%'
  },
  subHead: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(1.5)
  },
  radioRoot: {
    alignSelf: 'self-start',
    padding: 0
  },
  outer: {
    display: 'flex',
    minHeight: '100%',
    padding: '0 !important',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  pricingGroup: {
    display: 'flex',
    margin: 0,
    flexDirection: 'column'
  }
}))

const validateHowOften = values => {
  const errors = {}

  return errors
}

const displayOptions = pricing => {
  let options = [
    {
      id: 'everySix',
      labelOptions: {
        title: 'Ship every 6 months',
        subTitle: `You will be billed ${formatMoney(
          pricing.sixTotal,
          0
        )} and your products shipped every six months. In each delivery you will be sent ${pricing.monthlyDoses *
          6} 
                doses of ${
                  pricing.display
                }. You may cancel or modify your plan whenever you wish.`,
        pricing: pricing.sixMonth,
        totalPrice: pricing.sixMonth * 6,
        savings: (pricing.monthly - pricing.sixMonth) * 12
      }
    }
  ]

  if (pricing.threeMonth * 3 >= MAX_AMOUNT) {
    options.push({
      id: 'everyThree',
      labelOptions: {
        title: 'Ship every 3 months',
        subTitle: `You will be billed ${formatMoney(
          pricing.threeTotal,
          0
        )} and your products shipped every three months. In each delivery you will be sent ${pricing.monthlyDoses *
          3} 
                doses of ${
                  pricing.display
                }. You may cancel or modify your plan whenever you wish.`,
        pricing: pricing.threeMonth,
        totalPrice: pricing.threeMonth * 3,
        savings: (pricing.monthly - pricing.threeMonth) * 12
      }
    })
  }

  if (pricing.monthly > MAX_AMOUNT) {
    options.push({
      id: 'monthly',
      labelOptions: {
        title: 'Ship monthly',
        subTitle: `You will be billed ${formatMoney(
          pricing.monthly,
          0
        )} and your products shipped monthly. In each delivery you will be sent ${
          pricing.monthlyDoses
        } 
                doses of ${
                  pricing.display
                }. You may cancel or modify your plan whenever you wish.`,
        pricing: pricing.monthly,
        totalPrice: pricing.monthly,
        savings: 0
      }
    })
  }

  return options
}

const HowOftenPage = props => {
  const { values, direction, handleSubmit, ...rest } = props

  const classes = useStyles()

  const pricing = getPrices(values.subscription)
  const options = displayOptions(pricing)

  return (
    <StandardPage {...props}>
      <div className={classes.pricingBox}>
        <Typography className={classes.title}>{pricing.display}</Typography>
        <Field
          component={DetailedRadioGroup}
          options={options}
          displayComponent={EdPriceOption}
          name="subscription.shippingInterval"
          type="div"
        />
      </div>
    </StandardPage>
  )
}

export { HowOftenPage, validateHowOften }
