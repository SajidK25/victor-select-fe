import React from "react";
import { useFormState } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  nextButton: {
    position: "relative",
    marginTop: 20,
    width: "100%",
    fontSize: 18,
    padding: 8,
  },
}));

export const SubmitButton = (props) => {
  const form = useFormState();
  let { text } = props;

  if (!text) text = "CONTINUE";
  const classes = useStyles();

  return (
    <Button
      disabled={form.submitting}
      variant="contained"
      color="primary"
      type="submit"
      className={classes.nextButton}
    >
      {text}
    </Button>
  );
};
