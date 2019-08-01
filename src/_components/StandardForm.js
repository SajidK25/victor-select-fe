import React from 'react'
import { NextButton } from './ButtonGroup'

export const StandardForm = props => {
  const {
    handleSubmit,
    buttonText,
    buttonVariant,
    validating,
    submitting
  } = props

  return (
    <form onSubmit={handleSubmit}>
      {props.children}
      <NextButton
        validating={validating}
        submitting={submitting}
        variant={buttonVariant}
        buttonText={buttonText}
      />
    </form>
  )
}
