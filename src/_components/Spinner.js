import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    position: "fixed",
    top: "50%",
    left: "50%",
    zIndex: 1500
  }
}));

export const Spinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.progress}>
      <CircularProgress />
    </div>
  );
};
