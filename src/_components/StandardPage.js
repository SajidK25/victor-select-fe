import React from "react";
import Box from "@material-ui/core/Box";
import { QuestionContainer, StandardForm, StandardHeading, Spinner } from "./";

export const StandardPage = (props) => {
  const { direction, fullWidth, pageNo, submitting, validating } = props;

  return (
    <QuestionContainer
      submitting={submitting}
      validating={validating}
      direction={direction}
      fullWidth={fullWidth}
    >
      <Box width="100%">
        {(submitting || validating) && <Spinner />}
        <StandardHeading {...props} />
        <StandardForm {...props}>{props.children}</StandardForm>
      </Box>
    </QuestionContainer>
  );
};
