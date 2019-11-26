import React from "react";
import { Field } from "react-final-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { standardStyles } from "../_assets/styles";
import { RadioInline } from "./";

const useStyles = makeStyles({
  ...standardStyles
});

//renderCheckbox
export const CheckboxWithOptions = props => {
  const { input, label, options } = props;

  console.log("With Options:", options);
  const classes = useStyles();

  return (
    <Paper className={classes.contain}>
      <FormControlLabel
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label // class name, e.g. `classes-nesting-label-x`
        }}
        control={
          <Checkbox
            name={input.name}
            checked={input.value ? true : false}
            onChange={input.onChange}
            color="primary"
            type="checkbox"
          />
        }
        label={label}
      />
      {input.value && options
        ? options.map(o => (
            <Field
              name={o.name}
              key={o.name}
              label={o.label}
              options={o.options}
              component={o.component}
              type="div"
            />
          ))
        : null}
    </Paper>
  );
};
