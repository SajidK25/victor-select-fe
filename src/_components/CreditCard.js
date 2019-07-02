import React, { Component } from 'react'
import { Elements, CardElement, injectStripe } from 'react-stripe-elements'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const CreditCardForm = props => {
  console.log(props)

  const submit = () => {
    alert('Submit')
  }

  return (
    <form onSubmit={submit}>
      <Grid container spacing={3}>
        <CardElement />
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </form>
  )
}

export const CreditCard = injectStripe(CreditCardForm)
