import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import { StandardPage } from "./";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
    width: "100%"
  }
}));

export const InfoPage = props => {
  const classes = useStyles();

  return (
    <StandardPage {...props}>
      <Paper className={classes.container}>{props.children}</Paper>
    </StandardPage>
  );
};
