import React from "react";
import { StandardHeading } from "./";
import { QuestionContainer } from "./QuestionContainer";
import { StandardForm } from "./StandardForm";
import Box from "@material-ui/core/Box";

export const StandardPage = props => {
  const { direction, fullWidth, pageNo } = props;
  console.log("StdPage:", props);

  return (
    <QuestionContainer direction={direction} fullWidth={fullWidth}>
      <Box width="100%">
        page: {pageNo}
        <StandardHeading {...props} />
        <StandardForm {...props}>{props.children}</StandardForm>
      </Box>
    </QuestionContainer>
  );
};
