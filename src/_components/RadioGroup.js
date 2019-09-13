import React from "react";
import Box from "@material-ui/core/Box";
import { MyRadioControl, ErrorDisplay } from "./";

export const RadioGroup = props => {
  const {
    name,
    options,
    input,
    meta: { touched, error },
    ...rest
  } = props;

  return (
    <Box>
      {options.map(i => (
        <MyRadioControl
          id={i.id}
          name={name}
          key={i.id}
          label={i.label}
          explain={i.explain}
          explainText={i.explainText}
          extraOptions={i.extraOptions}
          extraOptionsName={i.extraOptionsName}
          warning={i.warning}
          input={input}
          type="radio"
          {...rest}
        />
      ))}
      {touched && error && <ErrorDisplay errorText={error} />}
    </Box>
  );
};
