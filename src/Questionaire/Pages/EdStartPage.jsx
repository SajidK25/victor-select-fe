import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import docWithClipboard from "../../images/DocWithClipboard.png";
import { InfoPage, StandardHeading } from "../../_components";

const useStyles = makeStyles(theme => ({
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 16
  }
}));

const validateEdStart = values => {
  const errors = {};

  return errors;
};

const questionText = "Lets Get Started";
const additionalText = `Because the medication you selected contains prescription or compounded drugs, 
                      Victory Select needs to review some medical questions wih you to ensure success`;

const EdStartPage = props => {
  const classes = useStyles();

  return (
    <InfoPage {...props}>
      <StandardHeading
        questionText={questionText}
        additionalText={additionalText}
        alignTitles="center"
      />
      <img
        src={docWithClipboard}
        alt="doc-with-clipboard"
        className={classes.image}
      />
    </InfoPage>
  );
};

export { EdStartPage, validateEdStart };
