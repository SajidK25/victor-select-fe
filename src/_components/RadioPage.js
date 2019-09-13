import React from "react";
import { Field } from "react-final-form";
import { RadioSubmit } from './RadioSubmit'
import { StandardPage, RadioGroup } from "./";

// RadioPage
export const RadioPage = props => {
  const { name, options, handleSubmit, ...rest } = props;

  return (
    <StandardPage handleSubmit={handleSubmit} {...rest}>
      <Field component={RadioGroup} name={name} options={options} type="div" />
      <RadioSubmit 
        name={name} 
        handleSubmit={handleSubmit} 
        options={options}
      />
    </StandardPage>
  );
};
