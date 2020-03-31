import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  updateButton: {
    position: "relative",
    marginTop: theme.spacing(2),
    width: "100%",
    fontSize: 18,
    padding: 8
  }
}));

// Next Button
export const UpdateButton = props => {
  const { buttonText, submitting, validating } = props;
  const classes = useStyles();

  return (
    <Button
      disabled={submitting || validating}
      variant="contained"
      color="primary"
      type="submit"
      className={classes.updateButton}
    >
      {buttonText}
    </Button>
  );
};

// Previous Button
export const ExitButton = props => {
  const { input, handleClick, ...custom } = props;

  return (
    <IconButton {...input} {...custom} onClick={handleClick} color="primary">
      <Close />
    </IconButton>
  );
};
