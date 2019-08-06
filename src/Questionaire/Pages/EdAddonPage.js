/* eslint-disable import/order */
import React from 'react'
import { Field } from 'react-final-form'
import { EdAddonDisplay } from '../../_components/EdAddonDisplay'
import { makeStyles } from '@material-ui/core/styles'
import { StandardPage } from '../../_components/StandardPage'
import { DetailedRadioGroup } from '../../_components/DetailedRadioGroup'
import { RadioSubmit } from '../../_components/RadioSubmit'
import { getAddonList, validDoseOption, defaultDose } from '../../_constants'

const useStyles = makeStyles(theme => ({
  moreText: {
    marginBottom: theme.spacing(2)
  }
}))

const validateEdAddon = values => {
  const errors = { subscription: {} }
  const s = values.subscription

  if (!values.subscription.addOn) {
    errors.subscription.addOn = 'Please make a selection.'
  }

  return errors
}

const questionText = 'Do you want to enhance your results?'
const additionalText = 'Benefits, benefits, benefits, benefits, more benefits.'

const EdAddonPage = props => {
  const { values, handleSubmit } = props
  const name = 'subscription.addOn'
  let options = {}

  const drugType = values.subscription.drugType
  if (drugType) {
    options = getAddonList(drugType)
  }
  const howOften = values.subscription.shippingInterval
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <Field
        component={DetailedRadioGroup}
        options={options}
        howOften={howOften}
        displayComponent={EdAddonDisplay}
        name={name}
        type="div"
      />
      <RadioSubmit name={name} handleSubmit={handleSubmit} />
    </StandardPage>
  )
}

export { EdAddonPage, validateEdAddon }
