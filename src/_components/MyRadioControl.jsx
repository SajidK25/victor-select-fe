/* eslint-disable import/no-cycle */
import React from "react";
import { Field } from "react-final-form";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { RenderNoteField, RadioGroup } from ".";
import { standardStyles } from "../_assets/styles";

const useStyles = makeStyles({
  ...standardStyles
});

export const MyRadioControl = props => {
  const {
    name,
    id,
    input,
    label,
    explain,
    explainText,
    extraOptions,
    extraOptionsName,
    indent
  } = props;
  const classes = useStyles();

  return (
    <div className={indent ? classes.indent : classes.contain}>
      <FormControlLabel
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label // class name, e.g. `classes-nesting-label-x`
        }}
        value={id}
        onChange={input.onChange}
        checked={input.value === id}
        control={<Radio name={name} color="primary" type="radio" />}
        label={label}
        type="radio"
      />
      {explain && input.value === id ? (
        <Field
          name={explain}
          component={RenderNoteField}
          placeholder={explainText}
          type="text"
        />
      ) : null}
      {extraOptionsName && input.value === id ? (
        <Field
          component={RadioGroup}
          name={extraOptionsName}
          options={extraOptions}
          indent={true}
          type="div"
        />
      ) : null}
    </div>
  );
};
