import React from "react";
import { Field } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import { StandardPage, CheckboxGroup, RenderCheckError } from "./";

const useStyles = makeStyles({
  group: {
    marginTop: 0,
    marginBottom: 0
  }
});

// CheckboxPage
export const CheckboxPage = props => {
  const { options, noOptionField, noOptionText, ...rest } = props;
  const classes = useStyles();

  return (
    <StandardPage {...rest}>
      <div className={classes.group}>
        <CheckboxGroup
          options={options}
          noOptionField={noOptionField}
          noOptionText={noOptionText}
        />
        <Field name="checkError" component={RenderCheckError} />
      </div>
    </StandardPage>
  );
};
