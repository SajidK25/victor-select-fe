import React from 'react'
import { Field } from 'react-final-form'
import Typography from '@material-ui/core/Typography'
import { RenderCheckbox } from '../../_components/RenderCheckbox'
import { RadioGroup, RenderNoteField, StandardPage } from '../../_components'

const EdMedsExplainPage = props => {
  const {
    dosageName,
    dosageOptions,
    workedName,
    sideEffectsName,
    ...rest
  } = props

  return (
    <StandardPage {...rest}>
      <Field component={RadioGroup} name={dosageName} options={dosageOptions} />
      <Field
        name={workedName}
        component={RenderCheckbox}
        label="Yes, this treatment was effective."
      />
      <Typography style={{ marginTop: 20 }} variant="body1" align="left">
        Did you experience any troublesome side effects?
        <br />
        Please explain.
      </Typography>
      <Field
        name={sideEffectsName}
        component={RenderNoteField}
        autoFocus={true}
        type="text"
      />
    </StandardPage>
  )
}

export { EdMedsExplainPage }
