import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { standardStyles } from "../_assets/styles";

const useStyles = makeStyles({
  ...standardStyles
});

//renderCheckbox
export const FieldContainer = props => {
  const classes = useStyles();

  return <Paper className={classes.contain}>{props.children}</Paper>;
};
