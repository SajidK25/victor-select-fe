import React from "react";
import { Field } from "react-final-form";
import Grid from "@material-ui/core/Grid";
import { UpdatePage, RenderStdTextField } from "../../../_components";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from "../../../_helpers";

const FormHeader = () => <div>PreForm</div>;

export const UpdateCreditCard = () => {
  const initialValues = {
    ccNumber: "",
    ccExpire: "",
    ccCVC: ""
  };

  const validate = values => {
    console.log("Validation", values);
  };

  const onSubmit = async values => {
    console.log("Submit", values);
  };

  return (
    <UpdatePage
      headerText="Update payment method"
      PreFormInfo={FormHeader}
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <div>Credit or Debit Card</div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Field
            required
            component={RenderStdTextField}
            name="ccNumber"
            label="Card Number"
            pattern="[\d| ]{16,22}"
            fullWidth
            format={formatCreditCardNumber}
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Field
            component={RenderStdTextField}
            required
            id="city"
            name="ccExpire"
            label="MM/DD"
            pattern="\d\d/\d\d"
            placeholder="Valid Thru"
            format={formatExpirationDate}
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Field
            component={RenderStdTextField}
            required
            id="state"
            name="ccCVC"
            pattern="\d{3,4}"
            format={formatCVC}
            label="CVC"
            autoComplete="cc-csc"
            fullWidth
          />
        </Grid>
      </Grid>
    </UpdatePage>
  );
};
