import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ShowDocument } from "./ShowDocument";

const useStyles = makeStyles({
  container: {
    marginTop: 30
  },
  text: {
    fontSize: 13
  }
});

export const Legal = ({ textLocation }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.text} align="center">
        {`By clicking ${textLocation}, you agree to our `}
        <ShowDocument text="privacy policy" document="Privacy" />
        {", "}
        <ShowDocument text="terms of use" document="Terms" />
        {", and "}
        <ShowDocument text="consent to Telehealth." document="Telehealth" />
        {"."}
      </Typography>
    </div>
  );
};
