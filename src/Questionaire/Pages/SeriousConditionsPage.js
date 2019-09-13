import React from "react";
import { CheckboxPage } from "../../_components";
import { optionsAllFalse } from "../../_helpers";

const options = [
  {
    name: "seriousConditions.chestPain",
    label:
      "Chest pain or shortness of breath while walking up 2 flights of stairs"
  },
  {
    name: "seriousConditions.chestPainWithSex",
    label: "Chest pain or shortness of breath with sexual activity"
  },
  {
    name: "seriousConditions.dizziness",
    label: "Episodes of unexplained fainting, lightheadedness, or dizziness",
    explain: "seriousConditions.dizzinessExplain",
    explainText:
      "Have you sought treatment for this? If so, what kind of treatment did you receive? Please explain more."
  },
  {
    name: "seriousConditions.cramping",
    label:
      "Cramping or pain in the calves or thighs, other than regular muscle soreness with exercise",
    explain: "seriousConditions.crampingExplain",
    explainText:
      "Where do you get pain and what type and intensity of activity (if any) causes the pain? What makes the pain better?"
  },
  {
    name: "seriousConditions.abnormalHeartBeats",
    label: "Abnormal heart beats or rhythms — rapid, irregular, unusually slow",
    explain: "seriousConditions.abnormalHeartBeatsExplain",
    explainText:
      "Have you sought treatment for this? If so, what kind of treatment did you receive?"
  }
];

const validateSeriousConditions = values => {
  const errors = { seriousConditions: {} };
  const s = values.seriousConditions;

  if (optionsAllFalse(options, values) && !s.none) {
    errors.checkError = "Please select an option";
  }

  if (s.dizziness && !s.dizzinessExplain) {
    errors.seriousConditions.dizzinessExplain = "Please provide details.";
  }
  if (s.cramping && !s.crampingExplain) {
    errors.seriousConditions.crampingExplain = "Please provide details.";
  }
  if (s.abnormalHeartBeats && !s.abnormalHeartBeatsExplain) {
    errors.seriousConditions.abnormalHeartBeatsExplain =
      "Please provide details.";
  }

  return errors;
};

const questionText =
  "Some symptoms can be an indication of more serious medical problems, you should see a doctor in person and not use our service. Combined with ED medicines, these can cause a life-threatening situation.";
const additionalText = "Check all that apply.";

const noOptionField = "seriousConditions.none";
const noOptionText = "None of these apply";

const SeriousConditionsPage = props => {
  return (
    <CheckboxPage
      options={options}
      noOptionField={noOptionField}
      noOptionText={noOptionText}
      questionText={questionText}
      additionalText={additionalText}
      {...props}
    />
  );
};

export { SeriousConditionsPage, validateSeriousConditions };
