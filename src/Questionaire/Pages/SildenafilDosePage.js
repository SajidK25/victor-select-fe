/* eslint-disable import/order */
import React from 'react'
import { Field } from 'react-final-form'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SildenafilDoseOption } from '../../_components/SildenafilDoseOption'
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

const validateSildenafilDose = values => {
  const errors = {}

  return errors
}

const displayOptions = () => {
  let options = [
    {
      id: '50',
      labelOptions: {
        title: '50mg',
        price: 8.75,
        subTitle:
          'A starting dose of 50mg is most common for people who are new to medication.'
      }
    },
    {
      id: '25',
      labelOptions: {
        title: '25mg',
        price: 5,
        subTitle: ''
      }
    }
  ]

  return options
}

const SildenafilDosePage = props => {
  const { values, direction, handleSubmit, ...rest } = props

  const classes = useStyles()
  if (values.subscription.doseOption === '') {
    values.subscription.doseOption = '50'
  }

  const questionText = 'Do you have a preference for Sildenafil dosage?'
  const additionalText =
    'If you have previously used this medication at a dosage and you have had good results you should choose that.'

  const pricing = getPrices(values.subscription)
  const options = displayOptions()

  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <div className={classes.pricingBox}>
        <Field
          component={DetailedRadioGroup}
          options={options}
          displayComponent={SildenafilDoseOption}
          name="subscription.doseOption"
          type="div"
        />
      </div>
    </StandardPage>
  )
}

export { SildenafilDosePage, validateSildenafilDose }
