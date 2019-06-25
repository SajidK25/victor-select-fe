import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Field } from 'react-final-form'
import { StandardPage, RenderSelect } from '../../_components'
import { RenderCheckbox } from '../../_components/RenderCheckbox'
import { TimePicker } from '../../_components/TimePicker'

const validateSleepBehavior = values => {
  const errors = { sleepBehavior: {} }
  const s = values.sleepBehavior

  if (!s.bedtimeWeekend || s.bedtimeWeekend === '') {
    errors.sleepBehavior.bedtimeWeekend = 'Time is required'
  }

  if (!s.bedtimeWeekday) {
    errors.sleepBehavior.bedtimeWeekday = 'Time is required'
  }

  console.log('Errors:', errors)

  return errors
}

const napOptions = [
  { value: 0, label: 'No Naps' },
  { value: 1, label: 'One' },
  { value: 2, label: 'Two' },
  { value: 3, label: 'Three' },
  { value: 4, label: 'Four' },
  { value: 5, label: 'Five' },
  { value: 6, label: 'Six' },
  { value: 7, label: 'Seven' },
  { value: 8, label: 'Eight' },
  { value: 9, label: 'Nine' },
  { value: 10, label: 'Ten' }
]

const TimeField = props => {
  const { question, name, autoFocus } = props
  return (
    <Box display="flex">
      <Box width="65%" pt={1} pl={1}>
        <Typography>{question}</Typography>
      </Box>
      <Box width="35%">
        <Field name={name} autoFocus={autoFocus} component={TimePicker} />
      </Box>
    </Box>
  )
}

const questionText =
  'In order to get an idea of what your normal sleeping behavior is, please answer the following questions'
const additionalText = ''

const SleepBehaviorPage = props => {
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <TimeField
        question="What time do you go to bed on weekdays?"
        name="sleepBehavior.bedtimeWeekday"
      />
      <TimeField
        question="What time do you go to bed on weekends?"
        name="sleepBehavior.bedtimeWeekend"
      />
      <Box display="flex">
        <Box component="div" width="65%" pt={1} pl={1}>
          <Typography>How often do you nap? (times per week) </Typography>
        </Box>
        <Box component="div" width="35%">
          <Field
            name="sleepBehavior.naps"
            options={napOptions}
            component={RenderSelect}
          />
        </Box>
      </Box>
      <Field
        name="sleepBehavior.awakenRefreshed"
        component={RenderCheckbox}
        label="Do you normally wake up refreshed from a nap?"
      />
    </StandardPage>
  )
}

export { SleepBehaviorPage, validateSleepBehavior }
