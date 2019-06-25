import React from "react";
import { ErrorDisplay } from ".";

export const RenderCheckError = ({ meta: { touched, error } }) => (
  <>{touched && error && <ErrorDisplay errorText={error} />}</>
);
