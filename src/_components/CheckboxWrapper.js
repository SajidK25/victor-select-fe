import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export const CheckboxWrapper = props => {
  const {
    input: { checked, name, onChange, ...restInput },
    meta,
    ...rest
  } = props;

  return (
    <Checkbox
      {...rest}
      name={name}
      inputProps={restInput}
      onChange={onChange}
      checked={checked}
    />
  );
};
