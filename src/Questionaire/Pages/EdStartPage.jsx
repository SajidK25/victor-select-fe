import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { InfoPage, StandardHeading } from "../../_components";

const useStyles = makeStyles(theme => ({
  disclaimer: {
    fontSize: 14,
    fontWeight: 500,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(0.25)
  },
  disclaimerText: {
    fontWeight: 300,
    fontSize: 12,
    fontStyle: "italic"
  }
}));

const validateEdStart = values => {
  const errors = {};

  return errors;
};

const questionText = "Lets Get Started";
const additionalText = `Because the medication you selected contains prescription or compound drugs, you are required to complete 
   the following medical questionnaire.`;

const EdStartPage = props => {
  const classes = useStyles();

  return (
    <InfoPage {...props}>
      <StandardHeading
        questionText={questionText}
        additionalText={additionalText}
        alignTitles="center"
      />
      <Typography align="center" className={classes.disclaimer}>
        * Disclaimer for ED Meds *
      </Typography>
      <Typography align="center" className={classes.disclaimerText}>
        In certain conditions our medications may not be effective in treating
        erectile dysfunction. In those circomstances, more invasive medical or
        surgical intervention may be required.
      </Typography>
    </InfoPage>
  );
};

export { EdStartPage, validateEdStart };
