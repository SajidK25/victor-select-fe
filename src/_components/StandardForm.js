import React from "react";
import { NextButton } from "./ButtonGroup";

export const StandardForm = props => {
  const { handleSubmit, values } = props;

  return (
    <form onSubmit={handleSubmit}>
      {props.children}
      <NextButton />
    </form>
  );
};
