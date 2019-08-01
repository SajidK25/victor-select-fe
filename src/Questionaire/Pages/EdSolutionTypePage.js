/* eslint-disable import/order */
import React from 'react'
import { Field } from 'react-final-form'
import { EdSolutionTypeDisplay } from '../../_components/EdSolutionTypeDisplay'
import { StandardPage } from '../../_components/StandardPage'
import { DetailedRadioGroup } from '../../_components/DetailedRadioGroup'
import { RadioSubmit } from '../../_components/RadioSubmit'

const validateEdSolutionType = values => {
  const errors = {}

  return errors
}

const displayOptions = () => {
  let options = [
    {
      id: 'A',
      labelOptions: {
        title: '4 - 6 Hours',
        subTitle: ''
      }
    },
    {
      id: 'B',
      labelOptions: {
        title: '36 Hours',
        subTitle: ''
      }
    },
    {
      id: 'C',
      labelOptions: {
        title: 'Daily Option',
        subTitle: ''
      }
    }
  ]

  return options
}

const EdSolutionTypePage = props => {
  const { handleSubmit } = props

  const fieldName = 'subscription.drugType'

  const questionText = 'Type of solution'
  const additionalText = ''

  const options = displayOptions()

  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <Field
        component={DetailedRadioGroup}
        options={options}
        displayComponent={EdSolutionTypeDisplay}
        name={fieldName}
        type="div"
      />
      <RadioSubmit name={fieldName} handleSubmit={handleSubmit} />
    </StandardPage>
  )
}

export { EdSolutionTypePage, validateEdSolutionType }
