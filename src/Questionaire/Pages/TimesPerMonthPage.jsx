import React from 'react'
import { RadioPage } from '../../_components/RadioPage'

const options = [
  { id: '4', label: '4 uses per month' },
  { id: '8', label: '8 uses per month' },
  { id: '12', label: '12 uses per month' }
]

const validateTimesPerMonth = values => {
  const errors = { subscription: {} }
  const s = values.subscription

  if (!s.timesPerMonth) {
    errors.subscription.timesPerMonth = 'Please select an option.'
  }

  return errors
}

const questionText =
  'How many times per month do you anticipate using your medication, if prescribed?'

let TimesPerMonthPage = props => {
  const { values } = props
  let additionalText = ''
  if (values.subscription.drugSelection === 'EROS') {
    additionalText = 'Remember a single dose of EROS lasts a least 36 hours.'
  }
  return (
    <RadioPage
      name="subscription.timesPerMonth"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  )
}

export { TimesPerMonthPage, validateTimesPerMonth }
