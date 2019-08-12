import React from "react";
import { StandardHeading } from "./";
import { QuestionContainer } from "./QuestionContainer";
import { StandardForm } from "./StandardForm";
import Box from "@material-ui/core/Box";

export const StandardPage = props => {
  const { direction, fullWidth } = props;

  return (
    <QuestionContainer direction={direction} fullWidth={fullWidth}>
      <Box width="100%">
        <StandardHeading {...props} />
        <StandardForm {...props}>{props.children}</StandardForm>
      </Box>
    </QuestionContainer>
  );
};
