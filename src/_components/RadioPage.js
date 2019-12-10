import React from "react";
import { Field } from "react-final-form";
import { StandardPage, RadioGroup, RadioSubmit } from "./";

// RadioPage
export const RadioPage = props => {
  const { name, options, handleSubmit, component, ...rest } = props;

  return (
    <StandardPage handleSubmit={handleSubmit} {...rest}>
      <Field component={RadioGroup} name={name} options={options} type="div" />
      <RadioSubmit name={name} handleSubmit={handleSubmit} options={options} />
    </StandardPage>
  );
};
