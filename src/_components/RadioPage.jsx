import React from "react";
import { Field } from "react-final-form";
import { StandardPage, RadioGroup } from "./";

// RadioPage
export const RadioPage = props => {
  const { name, options, ...rest } = props;

  return (
    <StandardPage {...rest}>
      <Field component={RadioGroup} name={name} options={options} type="div" />
    </StandardPage>
  );
};
