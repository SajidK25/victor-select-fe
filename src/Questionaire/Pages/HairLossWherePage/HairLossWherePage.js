/* eslint-disable import/order */
import React from "react";
import { Field } from "react-final-form";
import { HairLossWhereDisplay } from "./HairLossWhereDisplay";
import {
  StandardPage,
  DetailedRadioGroup,
  RadioSubmit
} from "../../../_components";

const options = [
  //{ id: "1", labelOptions: { id: "1" } },
  { id: "1", labelOptions: { id: "1" } },
  // { id: "3", labelOptions: { id: "3" } },
  { id: "2", labelOptions: { id: "2" } },
  // { id: "5", labelOptions: { id: "5" } },
  { id: "3", labelOptions: { id: "3" } },
  // { id: "7", labelOptions: { id: "7" } },
  {
    id: "4",
    labelOptions: { id: "4" },
    warning:
      "If you experience hair loss this extensive, our products are not likely to benefit you."
  }
];

const validateHairLossWhere = values => {
  const errors = { hairLoss: {} };

  if (!values.hairLoss.where) {
    errors.hairLoss.where = "Please make a selection";
  }

  if (values.hairLoss.where === "4") {
    errors.hairLoss.where = "We are unable to provide this service for you.";
  }

  console.log("Errors:", errors);
  return errors;
};

const HairLossWherePage = props => {
  const { handleSubmit, values } = props;

  const fieldName = "hairLoss.where";

  const questionText = `Which part of your head has hair loss?`;
  const additionalText = ``;

  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <Field
        component={DetailedRadioGroup}
        options={options}
        option={values.personal.gender}
        displayComponent={HairLossWhereDisplay}
        name={fieldName}
        type="div"
      />
      <RadioSubmit name={fieldName} handleSubmit={handleSubmit} />
    </StandardPage>
  );
};

export { HairLossWherePage, validateHairLossWhere };
