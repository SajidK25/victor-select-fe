import React from 'react'
import { Elements } from 'react-stripe-elements'
import { StripeProvider } from 'react-stripe-elements'
import Typography from '@material-ui/core/Typography'
import { CreditCard } from '../_components/CreditCard'

export const PaymentForm = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <StripeProvider apiKey="pk_test_f8k84yZmKjo7FyKavbE34FjD">
        <Elements>
          <CreditCard />
        </Elements>
      </StripeProvider>
    </>
  )
}
