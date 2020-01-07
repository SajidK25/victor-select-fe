import React from "react";
import { OnChange } from "react-final-form-listeners";

const RadioSubmit = props => {
  const { name, options, handleSubmit } = props;

  const okOption = (value, options) => {
    let ret = true;
    if (options) {
      options.forEach(o => {
        if (o.id === value && o.warning) {
          ret = false;
        }
      });
    }

    return ret;
  };


  return (
    <OnChange name={name}>
      {(value, previous) => {
        if (okOption(value, options)) {
          handleSubmit();
        }
      }}
    </OnChange>
  );
};

export { RadioSubmit };
