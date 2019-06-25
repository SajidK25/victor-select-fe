import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  button: {
    fontSize: 10,
    margin: 0,
    padding: 0
  }
});

export const ShowDocument = ({ text, document }) => {
  const classes = useStyles();

  return (
    <Button className={classes.button} color="primary">
      {text}
    </Button>
  );
};
