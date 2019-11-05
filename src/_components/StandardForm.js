import React from "react";
import { NextButton } from "./ButtonGroup";

export const StandardForm = props => {
  const {
    handleSubmit,
    buttonText,
    buttonVariant,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      {props.children}
      <NextButton variant={buttonVariant} buttonText={buttonText} />
    </form>
  );
};
