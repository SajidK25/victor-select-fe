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
        title: '"Intimate Rendezvous" (4-6 hours)',
        subTitle: `Romeo (Sildenafil*/Viagra + Apomorphine) our specialty combination drug can last up to 6 hours and is likely to have an onset of action in as little as 30 minutes.
                  Due to extreme Generic Sildenafil`,
      }
    },
    {
      id: 'B',
      labelOptions: {
        title: '"Weekend Getaway" (36-42 hours)',
        subTitle: `Choose from options ranging from generic traditional ED drugs to our exclusive
        super compounds, providing performance ranging from 36-42 hours.`
      }
    },
    {
      id: 'C',
      labelOptions: {
        title: '"Always Ready" (Daily)',
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

  const questionText = 'Choose a Duration of Action'
  const additionalText =
    'Please select the option that best meets your desired window of readiness for intercourse.'

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
}

export { EdSolutionTypePage, validateEdSolutionType }
