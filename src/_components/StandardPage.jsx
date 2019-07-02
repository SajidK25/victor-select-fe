import React from "react";
import { StandardHeading } from "./";
import { QuestionContainer } from "./QuestionContainer";
import { StandardForm } from "./StandardForm";
import Box from "@material-ui/core/Box";

export const StandardPage = props => {
  const { direction, fullWidth, handleSubmit, ...rest } = props;

  return (
    <QuestionContainer direction={direction} fullWidth={fullWidth}>
      <Box width="100%">
        <StandardHeading {...rest} />
        <StandardForm handleSubmit={handleSubmit} {...rest} >
          {props.children}
        </StandardForm>
      </Box>
    </QuestionContainer>
  );
};
