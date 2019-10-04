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

const NoOption = ({ options, noOptionFieldName }) => (
  <>
    {options.map(i => (
      <React.Fragment key={i.name}>
        {/* When the 'None Above' field gets set to true
            set all of the other fields in the group to false*/}
        <WhenFieldChanges
          field={noOptionFieldName}
          becomes={true}
          set={i.name}
          to={false}
        />
        {/* When any of the non-'None Above' fields gets set to true
            set the 'Non Above' field to false */}
        <WhenFieldChanges
          field={i.name}
          becomes={true}
          set={noOptionFieldName}
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
          warning={i.warning}
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
