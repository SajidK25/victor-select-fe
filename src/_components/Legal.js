import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { PrivacyPolicy, Terms, Telehealth } from "../_documents";
import { ShowDocument } from "./ShowDocument";

const useStyles = makeStyles({
  container: {
    marginTop: 16,
    fontSize: 13
  },
  text: {
    fontSize: 13
  }
});

export const Legal = ({ textLocation }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      By clicking, I agree to the{" "}
      <ShowDocument
        btnText="privacy policy"
        title="Privacy Policy"
        document={<PrivacyPolicy />}
      />
      {", "}
      <ShowDocument
        btnText="terms of use"
        title="Terms of Use"
        document={<Terms />}
      />
      {", and "}
      <ShowDocument
        btnText="consent to Telehealth."
        title="Consent to Telehealth"
        document={<Telehealth />}
      />
      .
    </div>
  );
};
