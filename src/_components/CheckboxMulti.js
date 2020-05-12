import React from "react";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { CheckboxInline } from "./";

const useStyles = makeStyles({
  contain: {
    borderRadius: 2,
    border: 0,
    paddingTop: 3,
    paddingBottom: 8,
    paddingRight: 8,
    borderStyle: "solid",
    borderWidth: 0,
    marginBottom: 5,
    backgroundColor: "white",
    borderColor: "lightgrey",
    "&:hover": {
      borderWidth: 0.5,
      borderColor: "#2196f3",
    },
  },
  root: {
    marginLeft: 0,
    marginRight: 0,
  },
  label: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "20px",
    paddingTop: 6,
    paddingBottom: 6,
    marginLeft: 0,
  },
  textLabel: {
    marginRight: 8,
    //  width: "25%",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: "15px",
  },
  fieldDiv: {
    width: "25%",
    display: "inline-flex",
  },
  textBox: {
    margin: 0,
    fontSize: 13,
    paddingBottom: 4,
    paddingTop: 0,
  },
  textRoot: {
    marginLeft: -38,
    backgroundColor: "white",
  },
  control: {
    paddingTop: 2,
    paddingBottom: 2,
  },
  input: {
    padding: 2,
    fontSize: 12,
  },
  formControl: {
    width: "100%",
    paddingLeft: 8,
  },
});

export const CheckboxMulti = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.contain}>
      <FormControl component="fieldset" className={classes.formControl}>
        <CheckboxInline {...props} />
      </FormControl>
    </Paper>
  );
};
