import React from "react";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {
  RadioInline,
  RenderNoteField,
  StandardPage,
} from "../../../_components";

const validatePlanExplain = () => {
  const errors = {};

  return errors;
};

const PlanExplainPage = (props) => {
  return (
    <StandardPage {...props}>
      <Paper style={{ padding: 8 }}>
        <Field
          name="plans.oneYear"
          component={RadioInline}
          label="Have you maintained any weight loss for up to one year on any of these programs?"
          columns={4}
          options={["Yes", "No"]}
        />
        <Typography
          style={{
            marginTop: 20,
            fontWeight: 400,
            marginLeft: 16,
            fontSize: 16,
          }}
          variant="body1"
          align="left"
        >
          Why did these programs not meet your expectations?
          <br />
          What did not work? Please explain.
        </Typography>
        <Field
          name="plans.notWork"
          component={RenderNoteField}
          autoFocus={true}
          type="text"
        />
      </Paper>
    </StandardPage>
  );
};

export { PlanExplainPage, validatePlanExplain };
