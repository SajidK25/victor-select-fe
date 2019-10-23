import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import { QuestionContainer } from "./QuestionContainer";
import { StandardForm } from "./StandardForm";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
    width: "100%"
  }
}));

export const InfoPage = props => {
  const { direction, fullWidth } = props;
  const classes = useStyles();

  return (
    <QuestionContainer direction={direction} fullWidth={fullWidth}>
      <StandardForm {...props}>
        <Paper className={classes.container}>{props.children}</Paper>
      </StandardForm>
    </QuestionContainer>
  );
};
