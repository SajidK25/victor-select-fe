import React from 'react'
import { CheckboxPage } from '../../_components'
import { optionsAllFalse } from '../../_helpers'

const options = [
  { name: 'lifestyle.smoke', label: 'Smoke tobacco (or use tobacco products)' },
  { name: 'lifestyle.overweight', label: 'More than 50 lbs. overweight' },
  {
    name: 'lifestyle.alcohol',
    label: 'Have more than 2 acoholic drinks per day'
  },
  {
    name: 'lifestyle.poppers',
    label: 'Use Poppers or Rush',
    warning: `These products are very dangerous to use 
    with erectile dysfunction medications. We cannot provide this service 
    to you if you use these products.`
  }
]

const validateLifestyle = values => {
  const errors = {}
  if (optionsAllFalse(options, values) && !values.lifestyle.none) {
    errors.checkError = 'Please select an option'
  }

  if (values.lifestyle.poppers) {
    errors.checkError = 'We are unable to provide this service for you.'
  }

  return errors
}

const questionText =
  'ED can sometimes be related to lifestyle habits. Select all that apply to you.'
const additionalText = ''

const noOptionField = 'lifestyle.none'
const noOptionText = 'None of these apply'

const LifestylePage = props => {
  return (
    <CheckboxPage
      options={options}
      noOptionField={noOptionField}
      noOptionText={noOptionText}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  )
}

export { LifestylePage, validateLifestyle }
