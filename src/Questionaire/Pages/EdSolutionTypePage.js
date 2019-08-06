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
        title: 'The "Night"',
        subTitle: `Choose from options ranging from generic traditional ED drugs to our exclusive
        super compounds, providing performance ranging from 4-6 hours.`
      }
    },
    {
      id: 'B',
      labelOptions: {
        title: 'The "Weekend"',
        subTitle: `Choose from options ranging from generic traditional ED drugs to our exclusive
        super compounds, providing performance ranging from 36-42 hours.`
      }
    },
    {
      id: 'C',
      labelOptions: {
        title: '"Enrichment"',
        subTitle: `Choose from pharmaceutical and nutraceutical options to create a daily regimen 
        that will greatly enhance your current experience.`
      }
    }
  ]

  return options
}

const EdSolutionTypePage = props => {
  const { handleSubmit } = props

  const fieldName = 'subscription.drugType'

  const questionText = 'Type of solution'
  const additionalText =
    'We have a variety of solutions for every level of ED that can meet your specific needs. Choose the option that most reflects your needs.'

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
