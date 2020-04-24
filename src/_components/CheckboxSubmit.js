import React from "react";
import { OnChange } from "react-final-form-listeners";

const CheckboxSubmit = (props) => {
  const { name, handleSubmit } = props;
  return (
    <OnChange name={name}>
      {(value) => {
        if (value) {
          handleSubmit();
        }
      }}
    </OnChange>
  );
};

export { CheckboxSubmit };
