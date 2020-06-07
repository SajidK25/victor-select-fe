import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PrivacyPolicy, Terms } from "../../_documents";
import { ShowDocument } from "../../_components/ShowDocument";

const useStyles = makeStyles({
  container: {
    marginTop: 0,
    fontSize: 13,
  },
  text: {
    fontSize: 13,
  },
});

export const Legal = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      I agree to{" "}
      <ShowDocument
        btnText="privacy policy"
        title="Privacy Policy"
        document={<PrivacyPolicy />}
      />
      {" and "}
      <ShowDocument
        btnText="terms of use."
        title="Terms of Use"
        document={<Terms />}
      />
    </div>
  );
};
