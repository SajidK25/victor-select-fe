import React from "react";
import { Field } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import { StandardPage, RenderCheckError } from "../../../../_components";
import { OptionsGroup } from "./OptionsGroup";

const useStyles = makeStyles({
  group: {
    marginTop: 0,
    marginBottom: 0
  }
});

// CheckboxPage
export const OptionsPage = props => {
  const { options, component, ...rest } = props;
  const classes = useStyles();

  return (
    <StandardPage {...rest}>
      <div className={classes.group}>
        <OptionsGroup options={options} component={component} />
      </div>
    </StandardPage>
  );
};
