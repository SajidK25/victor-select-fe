import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Transition } from "./Transition";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    margin: "0 auto",
    width: 500,
    maxWidth: "100%",
    minHeight: "100%",
    padding: "15px 0 35px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: "25px 15px"
    }
  }
}));

export const QuestionContainer = props => {
  const { direction } = props;
  const classes = useStyles();
  return (
    <Transition direction={direction}>
      <div className={classes.container}>{props.children}</div>
    </Transition>
  );
};
