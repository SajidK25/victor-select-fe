import React from "react";
import { Field } from "react-final-form";
import { OnChange } from "react-final-form-listeners";
import FormGroup from "@material-ui/core/FormGroup";
import { RenderCheckbox } from "./RenderCheckbox";

const WhenFieldChanges = ({ field, becomes, set, to }) => (
  <Field name={set} subscription={{}}>
    {(
      // No subscription. We only use Field to get to the change function
      { input: { onChange } }
    ) => (
      <OnChange name={field}>
        {value => {
          if (value === becomes) {
            onChange(to);
          }
        }}
      </OnChange>
    )}
  </Field>
);

const NoOption = ({ options, fieldName }) => (
  <>
    {options.map(i => (
      <React.Fragment key={i.name}>
        <WhenFieldChanges
          field={fieldName}
          becomes={true}
          set={i.name}
          to={false}
        />
        <WhenFieldChanges
          field={i.name}
          becomes={true}
          set={fieldName}
          to={false}
        />
      </React.Fragment>
    ))}
  </>
);

export const CheckboxGroup = props => {
  const { options, noOptionField, noOptionText } = props;

  return (
    <FormGroup>
      {noOptionField ? (
        <NoOption options={options} fieldName={noOptionField} />
      ) : null}
      {options.map(i => (
        <Field
          name={i.name}
          key={i.name}
          explain={i.explain}
          explainText={i.explainText}
          component={RenderCheckbox}
          type="checkbox"
          label={i.label}
        />
      ))}
      {noOptionField ? (
        <Field
          name={noOptionField}
          component={RenderCheckbox}
          label={noOptionText}
          type="checkbox"
        />
      ) : null}
    </FormGroup>
  );
};
