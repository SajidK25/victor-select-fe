import React from "react";
import { Field } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import { RenderStdTextField, SubmitButton } from "../components";
import Grid from "@material-ui/core/Grid";
import {
  normalizeZip,
  normalizeState,
  normalizePhone,
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  validCardNumber,
  validCardExpiry,
  validCardCVC,
} from "../../_helpers";
import { getPricing } from "../_util";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiTextField-root": {
      backgroundColor: "white",
    },
  },
  shippingAddress: {
    marginTop: 25,
  },
  shippingTitle: {
    fontSize: 21,
    fontWeight: 500,
    marginBottom: 12,
  },
  paymentInfo: {
    marginTop: 20,
  },
  paymentTitle: {
    fontSize: 21,
    fontWeight: 500,
    marginBottom: 12,
  },
  chargeSummary: {
    marginTop: 25,
    marginBottom: 25,
    fontSize: 15,
    fontWeight: 300,
  },
}));

export const validateCheckout = async (values) => {
  const errors = { personal: {}, payment: {} };
  if (!values.personal.addressOne) {
    errors.personal.addressOne = "Address is required";
  }
  if (!values.personal.city) {
    errors.personal.city = "City is required";
  }
  if (!values.personal.state) {
    errors.personal.zipCode = "State is required";
  }
  if (!values.personal.telephone) {
    errors.personal.telephone = "Telephone is required";
  } else if (values.personal.telephone.length !== 14) {
    errors.personal.telephone = "Please enter a valid telephone number.";
  }
  if (!values.personal.zipCode) {
    errors.personal.zipCode = "Zipcode is required";
  } else if (values.personal.zipCode.length !== 5) {
    errors.personal.zipCode = "Please enter a valid zip code.";
  }

  if (!values.payment.cardNumber) {
    errors.payment.cardNumber = "Card number is required";
  } else if (!validCardNumber(values.payment.cardNumber)) {
    errors.payment.cardNumber = "Card Number is not valid.";
  }

  if (!values.payment.cardExpiry) {
    errors.payment.cardExpiry = "Expiration Date is required";
  } else if (!validCardExpiry(values.payment.cardExpiry)) {
    errors.payment.cardExpiry = "Expiration Date is not valid.";
  }

  if (!values.payment.cardCVC) {
    errors.payment.cardCVC = "CVC is required";
  } else if (!validCardCVC(values.payment.cardCVC, values.payment.cardNumber)) {
    errors.payment.cardCVC = "CVC is not valid.";
  }

  return errors;
};

export const CheckoutPage = (props) => {
  const classes = useStyles();
  const { values, product } = props;

  const pricing = getPricing(product, values.subscription.shippingInterval);
  const btnText = `PAY ${pricing.amountDue} TODAY`;

  return (
    <div className={classes.root}>
      <div className={classes.shippingAddress}>
        <div className={classes.shippingTitle}>Shipping Address</div>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Field
              required
              component={RenderStdTextField}
              id="address1"
              name="personal.addressOne"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              component={RenderStdTextField}
              id="address2"
              name="personal.addressTwo"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Field
              component={RenderStdTextField}
              required
              id="city"
              name="personal.city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Field
              component={RenderStdTextField}
              required
              parse={normalizeState}
              id="state"
              name="personal.state"
              label="State"
              autoComplete="shipping address-level1"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={RenderStdTextField}
              required
              parse={normalizeZip}
              id="zip"
              name="personal.zipCode"
              label="Zip code"
              fullWidth
              autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={RenderStdTextField}
              required
              parse={normalizePhone}
              id="zip"
              name="personal.telephone"
              label="Telephone"
              fullWidth
              autoComplete="tel"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.paymentInfo}>
        <div className={classes.paymentTitle}>Credit or Debit Card</div>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Field
              required
              component={RenderStdTextField}
              name="payment.cardNumber"
              label="Card Number"
              pattern="[\d| ]{16,22}"
              fullWidth
              format={formatCreditCardNumber}
              autoComplete="cc-number"
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              component={RenderStdTextField}
              required
              id="city"
              name="payment.cardExpiry"
              label="MM/DD"
              pattern="\d\d/\d\d"
              placeholder="Valid Thru"
              format={formatExpirationDate}
              fullWidth
              autoComplete="cc-exp"
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              component={RenderStdTextField}
              required
              id="state"
              name="payment.cardCVC"
              pattern="\d{3,4}"
              format={formatCVC}
              label="CVC"
              autoComplete="cc-csc"
              fullWidth
            />
          </Grid>
          <Grid item className={classes.chargeSummary}>
            By clicking {btnText} you agree that you will be charged{" "}
            {pricing.amountDue} for your first shipment and {pricing.amountDue}{" "}
            {pricing.interval} thereafter until you cancel. You can cancel your
            plan anytime by logging into your account.
          </Grid>
        </Grid>
      </div>
      <SubmitButton text={btnText} />
    </div>
  );
};
