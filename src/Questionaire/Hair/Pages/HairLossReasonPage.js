import React from "react";
import { Field } from "react-final-form";
import { RenderNoteField, StandardPage } from "../../../_components";
import Box from "@material-ui/core/Box";

const validateHairLossReason = values => {
  const errors = { hairLoss: {} };

  return errors;
};

const questionText = " What do you think is the cause of your hair loss?";
const additionalText = "Or, any possible contributing factors?";

const HairLossReasonPage = props => {
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <Box mx="auto">
        <Field
          name="hairLoss.reason"
          component={RenderNoteField}
          autoFocus={true}
        />
      </Box>
    </StandardPage>
  );
};

export { HairLossReasonPage, validateHairLossReason };
