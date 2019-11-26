import React from "react";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import { makeStyles } from "@material-ui/core/styles";
import { CheckboxWrapper, RenderStdTextField } from "./";

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
      borderColor: "#2196f3"
    }
  },
  root: {
    marginLeft: 0,
    marginRight: 0
  },
  label: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "20px",
    paddingTop: 6,
    paddingBottom: 6,
    marginLeft: 0
  },
  textLabel: {
    marginRight: 8,
    //  width: "25%",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: "15px"
  },
  fieldDiv: {
    width: "25%",
    display: "inline-flex"
  },
  textBox: {
    margin: 0,
    fontSize: 13,
    paddingBottom: 4,
    paddingTop: 0
  },
  textRoot: {
    marginLeft: -38,
    backgroundColor: "white"
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
    width: "100%",
    paddingLeft: 8
  }
});

export const CheckboxMulti = props => {
  const { input, label, options } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.contain}>
      <FormControl component="fieldset" className={classes.formControl}>
        <Typography className={classes.label}>{label}</Typography>
        <FormGroup row>
          {options.map(o => (
            <div key={o} className={classes.fieldDiv}>
              <FormControlLabel
                classes={{
                  root: classes.root, // class name, e.g. `classes-nesting-root-x`
                  label: classes.textLabel // class name, e.g. `classes-nesting-label-x`
                }}
                label={o}
                key={`${input.name}${o}`}
                control={
                  <Field
                    name={input.name}
                    component={CheckboxWrapper}
                    classes={{
                      root: classes.input
                    }}
                    type="checkbox"
                    color="primary"
                    value={o}
                  />
                }
              />
              {o === "Other" && input.value.includes("Other") ? (
                <Field
                  name={`${input.name}other`}
                  component={RenderStdTextField}
                  InputProps={{
                    classes: { root: classes.textRoot, input: classes.textBox }
                  }}
                  margin="dense"
                  autoFocus={true}
                  type="text"
                />
              ) : null}
            </div>
          ))}
        </FormGroup>
      </FormControl>
    </Paper>
  );
};
