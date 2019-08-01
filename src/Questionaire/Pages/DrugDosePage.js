/* eslint-disable import/order */
import React from 'react'
import { Field } from 'react-final-form'
import { DrugDoseOption } from '../../_components/DrugDoseOption'
import { StandardPage } from '../../_components/StandardPage'
import { DetailedRadioGroup } from '../../_components/DetailedRadioGroup'
import { RadioSubmit } from '../../_components/RadioSubmit'
import { getDoseOptions, getDrugName } from '../../_constants/drugSelections'

const validateDrugDose = values => {
  const errors = {}

  return errors
}

const DrugDosePage = props => {
  const { values, handleSubmit } = props

  let options = {}
  let drugName = ''

  const drugId = values.subscription.drugId
  if (drugId) {
    console.log('In Page drugId: ', drugId)
    drugName = getDrugName(drugId)
    options = getDoseOptions(drugId)
  }

  const fieldName = 'subscription.doseOption'

  const questionText = `Do you have a preference for ${drugName} dosage?`
  const additionalText = `If you have previously used this medication at a dosage and you have had good results you should choose that.`

  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <Field
        component={DetailedRadioGroup}
        options={options}
        displayComponent={DrugDoseOption}
        name={fieldName}
        type="div"
      />
      <RadioSubmit name={fieldName} handleSubmit={handleSubmit} />
    </StandardPage>
  )
}

export { DrugDosePage, validateDrugDose }
