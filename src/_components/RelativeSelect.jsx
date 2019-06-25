import React from "react";
import { Field } from "react-final-form";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import { makeStyles } from "@material-ui/core/styles";
import { standardStyles } from "../_assets/styles";

const useStyles = makeStyles({
  ...standardStyles,
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

const CheckboxWrapper = props => {
  const {
    input: { checked, name, onChange, ...restInput },
    meta,
    ...rest
  } = props;

  return (
    <Checkbox
      {...rest}
      name={name}
      inputProps={restInput}
      onChange={onChange}
      checked={checked}
    />
  );
};

const relatives = [
  "Parent",
  "Child",
  "Sibling",
  "Grandparent",
  "Aunt/Uncle",
  "Neice/Nephew",
  "Other"
];

export const RelativeSelect = props => {
  const { input, label } = props;
  const classes = useStyles();

  return (
    <Box className={classes.contain}>
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
    </Box>
  );
};
