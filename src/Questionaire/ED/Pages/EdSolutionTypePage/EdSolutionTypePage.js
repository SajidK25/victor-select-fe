import React from "react";
import { Field } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { EdSolutionTypeDisplay } from "./EdSolutionTypeDisplay";
import {
  StandardPage,
  DetailedRadioGroup,
  RadioSubmit,
} from "../../../../_components";

const useStyles = makeStyles({
  hilight: {
    fontWeight: 500,
  },
});

const validateEdSolutionType = (values) => {
  const errors = { subscription: {} };

  if (!values.subscription.drugType) {
    errors.subscription.drugType = "Please make a selection.";
  }

  return errors;
};

const displayOptions = () => {
  let options = [
    {
      id: "B",
      labelOptions: {
        title: '"Weekend Getaway" (36-48 hours)',
        product: [
          {
            title: "EROS (Tadalafil*/Cialis + Apomorphine)",
            description: ` our specialty combination drug can last up to 48 hours and takes effect within 45 minutes.`,
          },
          {
            title: "Generic Cialis",
            description: ` can take an hour or more to achieve maximum benefits. Because of the 
              longer duration of action, EROS and Tadalafil do not have any restrictions on eating prior to intercourse.`,
          },
        ],
        footnote: "*Same active ingredient as Cialis in generic form.",
      },
    },
    {
      id: "A",
      labelOptions: {
        title: '"Intimate Rendezvous" (4-6 hours)',
        product: [
          {
            title: "Romeo (Sildenafil*/Viagra + Apomorphine)",
            description: ` our specialty combination drug can last up to 6 hours and is likely to 
              have an onset of action in as little as 30 minutes.`,
          },
          {
            title: "Generic Viagra",
            description: ` requires an hour to achieve full potency as well as an empty stomach to be effective for up to 4 hours.`,
          },
        ],
        footnote: "*Same active ingredient as Viagra in generic form.",
      },
    },
    {
      id: "C",
      labelOptions: {
        title: '"Always Ready" (Daily)',
        product: [
          {
            title: "Tadalafil*/Cialis 5mg",
            description: ` can be taken on a daily basis to treat erectile dysfunction. Daily administration has the advantage 
              of using a lower dose medication to minimize side effects such as headaches. Tadalafil 5mg daily is also a treatment for an enlarged prostate.`,
          },
        ],
        footnote: "*Same active ingredient as Cialis in generic form.",
      },
    },
    {
      id: "D",
      labelOptions: {
        title: '"Be Empowered" (Daily Non-Prescriptive Testosterone Booster)',
        product: [
          {
            title: "Male Daily",
            description: ` can be used alone to improve testosterone deficiencies helping to improve mood, sleep, exercise tolerance, strength, sexuality, confidence, as well as promoting weight loss.`,
          },
        ],
        footnote: "",
      },
    },
  ];

  return options;
};

const EdSolutionTypePage = (props) => {
  const { handleSubmit } = props;
  const classes = useStyles();

  const fieldName = "subscription.drugType";

  const questionText = "Choose a Duration of Action";

  const options = displayOptions();

  return (
    <StandardPage questionText={questionText} {...props}>
      <Typography variant="body2">
        <span role="img" aria-label="rocket">
          🚀
        </span>{" "}
        Please select the option that best meets your{" "}
        <span className={classes.hilight}>desired window of readiness</span> for
        intercourse.
      </Typography>
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
