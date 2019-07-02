import React from 'react'
import { RadioPage } from '../../_components'

const options = [
  { id: 'yes', label: 'Yes' },
  {
    id: 'no',
    label: 'No',
    warning:
      "We suggest that you visit your physician's office to discuss taking this medication."
  }
]

const validatePhysicalExam = values => {
  const errors = {}

  if (!values.physicalExam) {
    errors.physicalExam = 'Please select an option.'
  }

  return errors
}

const questionText =
  'Within the past five years have you had a physical exam by a doctor?'
const additionalText = ''

const PhysicalExamPage = props => {
  return (
    <RadioPage
      name="physicalExam"
      options={options}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  )
}

export { PhysicalExamPage, validatePhysicalExam }
