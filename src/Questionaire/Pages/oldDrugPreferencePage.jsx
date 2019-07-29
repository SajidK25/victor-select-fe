import React from 'react'
import { Field } from 'react-final-form'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { RadioGroup } from '../../_components'
import { StandardPage } from '../../_components/StandardPage'
import { drugSelections, validDrugOption } from '../../_constants'

const styles = theme => ({
  root: {
    padding: theme.spacing(1),
    marginLeft: 4,
    marginRight: 4
  }
})

const options = drugSelections

const validateDrugPreference = values => {
  const errors = { subscription: {} }
  const s = values.subscription

  if (!s.drugSelection) {
    errors.subscription.drugSelection = 'Please select an option.'
  } else if (!validDrugOption(s)) {
    errors.subscription.drugSelection = 'Please make a dose selection'
  }

  return errors
}

const questionText = 'Do you have a drug preference?'
const additionalText =
  'Your preference will be shared with a physician, who will use their medical judgement to determine the best treatment plan. Their decision may or may not match your preference.'

let DrugPreferencePage = props => {
  const { classes, ...rest } = props

  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      alignTitles="left"
      {...rest}
    >
      <Field
        component={RadioGroup}
        name="subscription.drugSelection"
        options={options}
        type="div"
      />
      <Paper className={classes.root} elevation={3}>
        <Typography variant="body2" gutterBottom>
          Victory Select is a specialized line of supermeds created by
          passionate physicians and nurses with decades of experience. These
          customized medications are formulated using only pharmaceutical grade
          ingredients and compounded under the strictest safety standards. The
          special synergy between the proprietary ingredients creates a
          medication vastly more powerful than any single medication alone.
        </Typography>
        <Typography variant="h6" color="primary">
          EROS
        </Typography>
        <Typography variant="body2" gutterBottom>
          Eros is a cutting edge formulation unlike any other medication
          currently available anywhere for the treatment of Erectile
          Dysfunction. Prescription strength Tadalafil (Cialis) and apomorphine
          are combined with pharmaceutical-grade nutraceuticals to create a
          super drug with a duration of action up to <b>36 hours</b>.
        </Typography>
        <Typography variant="h6" color="primary">
          ROMEO
        </Typography>
        <Typography>
          Like Eros, Romeo is a combination product utilizing prescription
          strength Sildenafil (Viagra) as the primary component in conjunction
          with pharmaceutical grade neutraceuticals (Apomorphine). Romeo is
          enhanced to be more effective than Viagra alone with a duration of
          action up to 6 hours.
        </Typography>
      </Paper>
    </StandardPage>
  )
}

DrugPreferencePage = withStyles(styles)(DrugPreferencePage)

export { DrugPreferencePage, validateDrugPreference }
