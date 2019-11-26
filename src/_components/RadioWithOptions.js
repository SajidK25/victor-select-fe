import React from "react";
import { Field } from "react-final-form";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { standardStyles } from "../_assets/styles";
import { RadioInline } from "./";

const useStyles = makeStyles({
  ...standardStyles
});

//renderCheckbox
export const RadioWithOptions = props => {
  const { name, label, options, input, ...rest } = props;

  const classes = useStyles();

  return (
    <Paper className={classes.contain}>
      <RadioInline
        {...rest}
        input={input}
        options={["Yes", "No"]}
        label={label}
      />

      {input.value === "Yes" && options
        ? options.map(o => (
            <Field
              name={o.name}
              key={o.name}
              label={o.label}
              options={o.options}
              component={o.component}
              type="div"
            />
          ))
        : null}
    </Paper>
  );
};
