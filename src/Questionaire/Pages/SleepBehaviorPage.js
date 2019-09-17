import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Field } from "react-final-form";
import { StandardPage, SelectField, ConditionIsNot } from "../../_components";
import { TimePicker } from "../../_components/TimePicker";

const validateSleepBehavior = values => {
  const errors = { sleepBehavior: {} };
  const s = values.sleepBehavior;

  if (!s.bedtimeWeekend || s.bedtimeWeekend === "") {
    errors.sleepBehavior.bedtimeWeekend = "Time is required";
  }

  if (!s.bedtimeWeekday) {
    errors.sleepBehavior.bedtimeWeekday = "Time is required";
  }

  console.log("Errors:", errors);

  return errors;
};

const napOptions = [
  { value: 0, label: "No Naps" },
  { value: 1, label: "One" },
  { value: 2, label: "Two" },
  { value: 3, label: "Three" },
  { value: 4, label: "Four" },
  { value: 5, label: "Five" },
  { value: 6, label: "Six" },
  { value: 7, label: "Seven" },
  { value: 8, label: "Eight" },
  { value: 9, label: "Nine" },
  { value: 10, label: "Ten" }
];

const awakenOptions = [
  { value: "always", label: "Always" },
  { value: "frequently", label: "Frequently" },
  { value: "rarely", label: "Rarely" },
  { value: "never", label: "Never" },
  { value: "no", label: "Don't Nap" }
];

const TimeField = props => {
  const { question, name, autoFocus } = props;
  return (
    <Box display="flex" alignItems="center" pl={1} mb={1}>
      <Box width="65%">
        <Typography variant="body2">{question}</Typography>
      </Box>
      <Box width="35%">
        <Field name={name} autoFocus={autoFocus} component={TimePicker} />
      </Box>
    </Box>
  );
};

const questionText =
  "In order to get an idea of what your normal sleeping behavior is, please answer the following questions";
const additionalText = "";

const SleepBehaviorPage = props => {
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    >
      <TimeField
        question="What time do you go to bed on weekdays?"
        name="sleepBehavior.bedtimeWeekday"
      />
      <TimeField
        question="What time do you go to bed on weekends?"
        name="sleepBehavior.bedtimeWeekend"
      />
      <SelectField
        name="sleepBehavior.naps"
        options={napOptions}
        label="How often do you nap? (times per week)"
      />
      <ConditionIsNot when="sleepBehavior.naps" isnot="0">
        <SelectField
          name="sleepBehavior.awakenRefreshed"
          options={awakenOptions}
          label="Do you wake up from naps feeling refreshed?"
        />
      </ConditionIsNot>
    </StandardPage>
  );
};

export { SleepBehaviorPage, validateSleepBehavior };
