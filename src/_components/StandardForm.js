import React from "react";
import { NextButton } from "./ButtonGroup";
import { ErrorDisplay } from "./";

export const StandardForm = props => {
  const { handleSubmit, submitError, buttonText, buttonVariant } = props;

  return (
    <form onSubmit={handleSubmit}>
      {props.children}
      {submitError && <ErrorDisplay errorText={submitError} />}
      <NextButton variant={buttonVariant} buttonText={buttonText} />
    </form>
  );
};
