import React from "react";
import { Field } from "react-final-form";
import FormGroup from "@material-ui/core/FormGroup";

export const OptionsGroup = props => {
  const { options, component } = props;

  return (
    <FormGroup>
      {options.map(i => (
        <Field
          name={i.name}
          key={i.name}
          label={i.label}
          options={i.options}
          component={component}
          type="checkbox"
        />
      ))}
    </FormGroup>
  );
};
