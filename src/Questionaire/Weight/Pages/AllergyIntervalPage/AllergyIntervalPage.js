import React from "react";
import { Field } from "react-final-form";
import { formatMoney } from "../../../../_helpers";
import {
  StandardPage,
  DetailedRadioGroup,
  RadioSubmit,
} from "../../../../_components";
import { getPrices, getMaxAmount } from "../../../Shared/ProductInfo";
import { AllergyIntervalDisplay } from "./AllergyIntervalDisplay";

const validateAllergyInterval = () => {
  const errors = {};

  return errors;
};

const displayOptions = (pricing) => {
  let options = [
    {
      id: "everyThree",
      labelOptions: {
        title: "Ship every 3 months",
        subTitle: `You will be billed ${formatMoney(
          pricing.threeTotal,
          2
        )} and your products shipped every three months.`,
        moreText: `In each delivery you will be sent a three month supply of ${
          pricing.display
        }${
          pricing.addOnDisplay
            ? ` and a three month supply of ${pricing.addOnDisplay}`
            : ""
        }. You may cancel or modify your plan whenever you wish.`,
        pricing: pricing.threeMonth,
        totalPrice: pricing.threeTotal,
        savings: (pricing.monthly - pricing.threeMonth) * 12,
      },
    },
  ];

  if (pricing.twoTotal >= getMaxAmount()) {
    options.push({
      id: "everyTwo",
      labelOptions: {
        title: "Ship every 2 months",
        subTitle: `You will be billed ${formatMoney(
          pricing.twoTotal,
          2
        )} and your products shipped every two months.`,
        moreText: `In each delivery you will be sent a two month supply of ${
          pricing.display
        }${
          pricing.addOnDisplay
            ? ` and a two month supply of ${pricing.addOnDisplay}`
            : ""
        }. You may cancel or modify your plan whenever you wish.`,
        pricing: pricing.twoMonth,
        totalPrice: pricing.twoTotal,
        savings: (pricing.monthly - pricing.twoMonth) * 12,
      },
    });
  }

  if (pricing.monthly >= getMaxAmount()) {
    options.push({
      id: "monthly",
      labelOptions: {
        title: "Ship monthly",
        subTitle: `You will be billed ${formatMoney(
          pricing.monthly,
          2
        )} and your products shipped monthly.`,
        moreText: `In each delivery you will be sent a one month supply of ${
          pricing.display
        }${
          pricing.addOnDisplay
            ? ` and a one month supply of ${pricing.addOnDisplay}`
            : ""
        }. You may cancel or modify your plan whenever you wish.`,
        pricing: pricing.monthly,
        totalPrice: pricing.monthly,
        savings: 0,
      },
    });
  }

  return options;
};

const questionText = `How often should we ship your treatment?`;
const additionalText = `By choosing to have your treatment delivered every 2 or 3 months you will save money.`;

const AllergyIntervalPage = (props) => {
  const { values, handleSubmit } = props;

  const fieldName = "subscription.shippingInterval";

  const pricing = getPrices({
    drugId: values.subscription.drugId,
    dose: values.subscription.doseOption,
    addOnId: values.subscription.addOnId,
  });

  const options = displayOptions(pricing);

  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <Field
        component={DetailedRadioGroup}
        options={options}
        displayComponent={AllergyIntervalDisplay}
        name={fieldName}
        type="div"
      />
      <RadioSubmit name={fieldName} handleSubmit={handleSubmit} />
    </StandardPage>
  );
};

export { AllergyIntervalPage, validateAllergyInterval };
