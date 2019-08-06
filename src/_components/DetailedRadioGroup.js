import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DetailedRadio } from './DetailedRadio'
import { ErrorDisplay } from './ErrorDisplay'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    margin: 0,
    flexDirection: 'column'
  }
})

const DetailedRadioGroup = props => {
  const {
    input,
    meta: { touched, error },
    options,
    displayComponent,
    ...rest
  } = props
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {options.map(o => (
        <DetailedRadio
          input={input}
          LabelDisplay={displayComponent}
          options={o.labelOptions}
          pricing={o.pricing}
          id={o.id}
          key={o.id}
          {...rest}
        />
      ))}
      {touched && error && <ErrorDisplay errorText={error} />}
    </div>
  )
}

export { DetailedRadioGroup }
