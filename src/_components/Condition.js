import React from "react";
import { Field } from "react-final-form";

const ConditionIsNot = ({ when, isnot, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value !== isnot ? children : null)}
  </Field>
);

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

export { Condition, ConditionIsNot };
