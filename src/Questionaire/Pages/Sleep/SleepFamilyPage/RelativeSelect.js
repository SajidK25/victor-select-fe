import React from "react";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import { makeStyles } from "@material-ui/core/styles";
import { CheckboxWrapper } from "../../../../_components";

const useStyles = makeStyles({
  contain: {
    borderRadius: 2,
    border: 0,
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 8,
    borderStyle: "solid",
    borderWidth: 0,
    marginBottom: 5,
    backgroundColor: "white",
    borderColor: "lightgrey",
    "&:hover": {
      borderWidth: 0.5,
      borderColor: "#2196f3"
    }
  },
  root: {
    marginLeft: 0,
    marginRight: 0
  },
  label: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "20px",
    paddingTop: 6,
    paddingBottom: 6,
    marginLeft: 0
  },
  textLabel: {
    marginRight: 8,
    width: 72,
    fontSize: 12
  },
  control: {
    paddingTop: 2,
    paddingBottom: 2
  },
  input: {
    padding: 2,
    fontSize: 12
  },
  formControl: {
    paddingLeft: 8
  }
});

const relatives = [
  "Parent",
  "Child",
  "Sibling",
  "Grandparent",
  "Aunt/Uncle",
  "Niece/Nephew",
  "Other"
];

export const RelativeSelect = props => {
  const { input, label } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.contain}>
      <FormControl component="fieldset" className={classes.formControl}>
        <Typography>{label}</Typography>
        <FormGroup row>
          {relatives.map(r => (
            <FormControlLabel
              classes={{
                root: classes.root, // class name, e.g. `classes-nesting-root-x`
                label: classes.textLabel // class name, e.g. `classes-nesting-label-x`
              }}
              label={r}
              key={`${input.name}${r}`}
              control={
                <Field
                  name={input.name}
                  component={CheckboxWrapper}
                  classes={{
                    root: classes.input
                  }}
                  type="checkbox"
                  color="primary"
                  value={r}
                />
              }
            />
          ))}
        </FormGroup>
      </FormControl>
    </Paper>
  );
};
