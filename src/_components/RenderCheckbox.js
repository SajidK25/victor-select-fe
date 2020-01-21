import React from "react";
import { Field } from "react-final-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { standardStyles } from "../_assets/styles";
import { Warning } from "./Warning";
import { RenderNoteField } from ".";

const useStyles = makeStyles({
  ...standardStyles
});

//renderCheckbox
export const RenderCheckbox = props => {
  const { input, label, explain, explainText, warning } = props;
  const classes = useStyles();

  console.log("Input", input);

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
            checked={input.checked}
            onChange={input.onChange}
            color="primary"
            type="checkbox"
          />
        }
        label={label}
      />
      {input.checked && explain ? (
        <Field
          name={explain}
          component={RenderNoteField}
          placeholder={explainText}
          autoFocus={true}
          type="text"
        />
      ) : null}
      {warning && input.checked ? <Warning warning={warning} /> : null}
    </Paper>
  );
};
