/* eslint-disable import/order */
import React from "react";
import { Field } from "react-final-form";
import { getPrices, MAX_AMOUNT } from "../../../_constants";
import { formatMoney } from "../../../_helpers";
import {
  StandardPage,
  DetailedRadioGroup,
  RadioSubmit
} from "../../../_components";
import { EdPriceOption } from "./EdPriceOption";

const validateHowOften = values => {
  const errors = {};

  return errors;
};

const displayOptions = pricing => {
  let options = [
    {
      id: "everySix",
      labelOptions: {
        title: "Ship every 6 months",
        subTitle: `You will be billed ${formatMoney(
          pricing.sixTotal,
          2
        )} and your products shipped every six months.`,
        moreText: `In each delivery you will be sent ${pricing.sixDoses} 
        doses of ${
          pricing.display
        }. You may cancel or modify your plan whenever you wish.`,
        pricing: pricing.sixMonth,
        totalPrice: pricing.sixTotal,
        savings: (pricing.monthly - pricing.sixMonth) * 12
      }
    }
  ];

  if (pricing.threeTotal >= MAX_AMOUNT) {
    options.push({
      id: "everyThree",
      labelOptions: {
        title: "Ship every 3 months",
        subTitle: `You will be billed ${formatMoney(
          pricing.threeTotal,
          2
        )} and your products shipped every three months.`,
        moreText: `In each delivery you will be sent ${pricing.threeDoses} 
        doses of ${
          pricing.display
        }. You may cancel or modify your plan whenever you wish.`,
        pricing: pricing.threeMonth,
        totalPrice: pricing.threeTotal,
        savings: (pricing.monthly - pricing.threeMonth) * 12
      }
    });
  }

  if (pricing.monthly > MAX_AMOUNT) {
    options.push({
      id: "monthly",
      labelOptions: {
        title: "Ship monthly",
        subTitle: `You will be billed ${formatMoney(
          pricing.monthly,
          2
        )} and your products shipped monthly.`,
        moreText: `In each delivery you will be sent ${pricing.monthlyDoses} 
        doses of ${
          pricing.display
        }. You may cancel or modify your plan whenever you wish.`,
        pricing: pricing.monthly,
        totalPrice: pricing.monthly,
        savings: 0
      }
    });
  }

  return options;
};

const questionText = `How often should we ship your treatment?`;
const additionalText = `By choosing to have your treatment delivered every 3 or 6 months you will save money.`;

const HowOftenPage = props => {
  const { values, handleSubmit } = props;

  const fieldName = "subscription.shippingInterval";

  console.log("How Often Start:", values.subscription);

  const pricing = getPrices(
    values.subscription.drugId,
    values.subscription.doseOption,
    values.subscription.timesPerMonth
  );

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
        displayComponent={EdPriceOption}
        name={fieldName}
        type="div"
      />
      <RadioSubmit name={fieldName} handleSubmit={handleSubmit} />
    </StandardPage>
  );
};

export { HowOftenPage, validateHowOften };
