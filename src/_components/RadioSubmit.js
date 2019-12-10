import React from "react";
import { OnChange } from "react-final-form-listeners";

const RadioSubmit = props => {
  const { name, options, handleSubmit } = props;

  const okOption = (value, options) => {
    let ret = true;
    console.log("okOptions:", options);
    if (options) {
      options.forEach(o => {
        if (o.id === value && o.warning) {
          console.log("Values are equal!!");
          ret = false;
        }
      });
    }

    return ret;
  };

  console.log("Radio Options:", options);

  return (
    <OnChange name={name}>
      {(value, previous) => {
        console.log("OnChange:", value);
        if (okOption(value, options)) {
          handleSubmit();
        }
      }}
    </OnChange>
  );
};

export { RadioSubmit };
