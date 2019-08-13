/* eslint-disable import/order */
import React from "react";
import { Field } from "react-final-form";
import { EdSolutionTypeDisplay } from "./EdSolutionTypeDisplay";
import {
  StandardPage,
  DetailedRadioGroup,
  RadioSubmit
} from "../../../_components";

const validateEdSolutionType = values => {
  const errors = { subscription: {} };

  if (!values.subscription.drugType) {
    errors.subscription.drugType = "Please make a selection.";
  }

  return errors;
};

const displayOptions = () => {
  let options = [
    {
      id: "A",
      labelOptions: {
        title: '"Intimate Rendezvous" (4-6 hours)',
        product: [
          {
            title: "Romeo (Sildenafil*/Viagra + Apomorphine)",
            description: ` our specialty combination drug can last up to 6 hours and is likely to 
              have an onset of action in as little as 30 minutes. Due to the extreme potency of our product, headaches can result 
              but are easily treated with Ibuprofen or other NSAIDs (e.g. Naprosyn).`
          },
          {
            title: "Generic Sildenafil",
            description: `, like Viagra, requires 
              an hour to achieve full potency as well as an empty stomach to be effective for up to 4 hours.`
          }
        ],
        footnote: "*Exact same product as name brand Viagra in generic form."
      }
    },
    {
      id: "B",
      labelOptions: {
        title: '"Weekend Getaway" (36-42 hours)',
        product: [
          {
            title: "EROS (Tadalafil*/Cialis + Apomorphine)",
            description: ` our specialty combination drug can last up to 42 hours and takes effect within 45 minutes. 
              Due to the extreme potency of our product, headaches can result but are easily treated with 
              Ibuprofen or other NSAIDs (e.g. Naprosyn).`
          },
          {
            title: "Generic Tadalafil",
            description: `, like Cialis, can take an hour or more to achieve maximum benefits. Because of the 
              longer duration of action, EROS and Tadalafil do not have any restrictions on eating prior to intercourse.`
          }
        ],
        footnote: "*Exact same product as name brand Cialis in generic form."
      }
    },
    {
      id: "C",
      labelOptions: {
        title: '"Always Ready" (Daily)',
        product: [
          {
            title: "Tadalafil*/Cialis 5mg",
            description: ` can be taken on a daily basis to treat erectile dysfunction. Daily administration has the advantage 
              of using a lower dose medication to minimize side effects such as headaches. The disadvantage being it is more 
              work and higher cost to take a pill every day. Tadalafil 5mg daily is also a treatment for BPH (Benign Prostatic Hypertrophy).`
          }
        ],
        footnote: "*Exact same product as name brand Cialis in generic form."
      }
    }
  ];

  return options;
};

const EdSolutionTypePage = props => {
  const { handleSubmit } = props;

  const fieldName = "subscription.drugType";

  const questionText = "Choose a Duration of Action";
  const additionalText =
    "Please select the option that best meets your desired window of readiness for intercourse.";

  const options = displayOptions();

  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <Field
        component={DetailedRadioGroup}
        options={options}
        displayComponent={EdSolutionTypeDisplay}
        name={fieldName}
        type="div"
      />
      <RadioSubmit name={fieldName} handleSubmit={handleSubmit} />
    </StandardPage>
  );
};

export { EdSolutionTypePage, validateEdSolutionType };
