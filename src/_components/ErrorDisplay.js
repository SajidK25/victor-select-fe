import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  error: {
    fontSize: 14,
    fontWeight: 400
  }
});

export const ErrorDisplay = props => {
  const { errorText } = props;
  const classes = useStyles();

  return (
    <Typography align="center" color="error" className={classes.error}>
      {errorText}
    </Typography>
  );
};
