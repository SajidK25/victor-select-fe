import React from "react";
import { Field } from "react-final-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { standardStyles } from "../_assets/styles";
import { RenderNoteField } from ".";

const useStyles = makeStyles({
  ...standardStyles
});

//renderCheckbox
export const RenderCheckbox = props => {
  const { input, label, explain, explainText, warning } = props;
  const classes = useStyles();

  return (
    <div className={classes.contain}>
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
      {input.value && explain ? (
        <Field
          name={explain}
          component={RenderNoteField}
          placeholder={explainText}
          autoFocus={true}
          type="text"
        />
      ) : null}
      {input.value && warning ? (
        <div>{warning}</div>
      ) : null  }
    </div>
  );
};
