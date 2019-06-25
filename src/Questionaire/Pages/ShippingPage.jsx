import React from "react";
import { Field } from "react-final-form";
import { RenderTextField, StandardPage } from "../../_components";
import { RenderStdTextField } from "../../_components/RenderStdTextField";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { normalizeZip, normalizeState, normalizePhone } from "../../_helpers";

const validZips = [
  { min: 73301, max: 73301 },
  { min: 75001, max: 75501 },
  { min: 75503, max: 79999 },
  { min: 88510, max: 88589 }
];

const checkZips = zipCode => {
  for (let i = 0; i < validZips.length; i++) {
    if (zipCode >= validZips[i].min && zipCode <= validZips[i].max) {
      return true;
    }
  }
  return false;
};

const validateShipping = values => {
  const errors = { personal: {} };
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
  } else if (values.personal.telephone.length !== 10) {
    errors.personal.telephone = "Please enter a valid telephone number.";
  }
  if (!values.personal.zipCode) {
    errors.personal.zipCode = "Zipcode is required";
  } else if (values.personal.zipCode.length !== 5) {
    errors.personal.zipCode = "Please enter a valid zip code.";
  } else if (!checkZips(parseInt(values.personal.zipCode))) {
    errors.personal.zipCode = "Sorry, we are unable to ship to your state.";
  }

  return errors;
};

const additionalText = "Where should we ship your medication? (if prescribed)";

const ShippingPage = props => {
  return (
    <StandardPage
      questionText="Shipping Address"
      additionalText={additionalText}
      {...props}
    >
      <Grid container spacing={3}>
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
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
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
    </StandardPage>
  );
};

export { ShippingPage, validateShipping };
