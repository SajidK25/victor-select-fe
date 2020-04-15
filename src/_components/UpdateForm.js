import React from "react";
import { Form } from "react-final-form";
import { ErrorDisplay, UpdateButton, Spinner } from "./";

export const UpdateForm = (props) => {
  const {
    initialValues,
    validate,
    onSubmit,
    buttonText,
    disableButton,
  } = props;

  return (
    <Form
      initialValues={initialValues}
      validate={validate}
      onSubmit={async (values) => {
        await onSubmit(values);
      }}
    >
      {({ handleSubmit, validating, submitting, submitError }) => {
        return (
          <>
            {submitting || (validating && <Spinner />)}
            <form onSubmit={handleSubmit}>
              {props.children}
              {submitError && <ErrorDisplay errorText={submitError} />}
              <UpdateButton
                buttonText={buttonText}
                validating={validating}
                submitton={submitting}
                disabled={disableButton}
              />
            </form>
          </>
        );
      }}
    </Form>
  );
};
