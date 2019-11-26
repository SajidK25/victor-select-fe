import React from "react";
import { Field } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import { StandardPage, RenderCheckError } from "../../../../_components";
import { CheckboxGroup } from "./CheckboxGroup";

const useStyles = makeStyles({
  group: {
    marginTop: 0,
    marginBottom: 0
  }
});

// CheckboxPage
export const CheckboxPage = props => {
  const { options, noOptionField, noOptionText, component, ...rest } = props;
  const classes = useStyles();

  return (
    <StandardPage {...rest}>
      <div className={classes.group}>
        <CheckboxGroup
          options={options}
          noOptionField={noOptionField}
          noOptionText={noOptionText}
          component={component}
        />
        <Field name="checkError" component={RenderCheckError} />
      </div>
    </StandardPage>
  );
};
