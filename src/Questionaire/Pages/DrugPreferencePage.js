/* eslint-disable import/order */
import React from 'react'
import { Field } from 'react-final-form'
import { DrugSelectionDisplay } from '../../_components/DrugSelectionDisplay'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { StandardPage } from '../../_components/StandardPage'
import { DetailedRadioGroup } from '../../_components/DetailedRadioGroup'
import { RadioSubmit } from '../../_components/RadioSubmit'
import { drugSelections } from '../../_constants'

const useStyles = makeStyles(theme => ({
  moreText: {
    marginBottom: theme.spacing(2)
  }
}))

const validateDrugPreference = values => {
  const errors = {}

  return errors
}

const questionText = 'Do you have a drug preference?'
const additionalText =
  'Your preference will be shared with a physician, who will use their medical judgement to determine the best treatment plan. Their decision may or may not match your preference.'

const DrugPreferencePage = props => {
  const { values, direction, handleSubmit, ...rest } = props

  const classes = useStyles()
  const name = 'subscription.drugSelection'

  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      alignTitles="left"
      handleSubmit={handleSubmit}
      {...rest}
    >
      <Typography variant="body2" gutterBottom>
        We offer a customized formulation delivered via a unique lozenge which
        dissolves between the cheek and gum for a very fast onset of action and
        absolutely the most potent method of erection possible. Unlike other
        products, you can eat or drink alcohol without diluting the efficacy of
        the medication.
      </Typography>
      <Typography variant="body2" className={classes.moreText}>
        The pricing shown is for the recommended starting dose for an average,
        healthy person. We offer discounts for ordering in quantity.
      </Typography>
      <Field
        component={DetailedRadioGroup}
        options={drugSelections}
        displayComponent={DrugSelectionDisplay}
        name={name}
        type="div"
      />

      <RadioSubmit name={name} handleSubmit={handleSubmit} />
    </StandardPage>
  )
}

export { DrugPreferencePage, validateDrugPreference }