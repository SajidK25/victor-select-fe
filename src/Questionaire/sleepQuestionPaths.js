import { initialValues } from "./sleepData";

import {
  validateStartVisit,
  ZipcodePage,
  validateZipcode,
  GenderPage,
  validateEitherGender,
  BirthdatePage,
  validateBirthdate,
  SleepProblemsPage,
  validateSleepProblems,
  SleepIssuesPage,
  validateSleepIssues,
  SleepHealthPage,
  validateSleepHealth,
  SleepBehaviorPage,
  validateSleepBehavior,
  SleepHistoryPage,
  validateSleepHistory,
  SleepSymptomsPage,
  validateSleepSymptoms,
  SleepMedHistoryPage,
  validateSleepMedHistory,
  SleepHabitsPage,
  validateSleepHabits,
  SleepDozingPage,
  validateSleepDozing,
  SleepFamilyPage,
  validateSleepFamily,
  OtherMedicinesPage,
  validateOtherMedicines,
  SleepAllergiesPage,
  validateAllergies,
  AnythingElsePage,
  validateAnythingElse,
  PicturesPage,
  validatePictures
} from "./Pages/index";

const pathConstants = {
  ZIPCODE: "Zipcode",
  GENDER: "Gender",
  BIRTHDATE: "Birthdate",
  SLEEPPROBLEMS: 7,
  SLEEPISSUES: 8,
  SLEEPHEALTH: 9,
  SLEEPBEHAVIOR: 10,
  SLEEPHISTORY: 11,
  SLEEPSYMPTOMS: 12,
  SLEEPHABITS: 13,
  SLEEPDOZING: 14,
  SLEEPMEDHISTORY: 15,
  SLEEPFAMILY: 16,
  OTHERMEDICINES: 34,
  ALLERGIES: 35,
  ANYTHINGELSE: 36,
  PICTURES: 37
};

const pages = [
  {
    key: pathConstants.ZIPCODE,
    component: ZipcodePage,
    validate: validateZipcode
  },
  {
    key: pathConstants.GENDER,
    component: GenderPage,
    validate: validateEitherGender
  },
  {
    key: pathConstants.BIRTHDATE,
    component: BirthdatePage,
    validate: validateBirthdate
  },
  {
    key: pathConstants.SLEEPPROBLEMS,
    component: SleepProblemsPage,
    validate: validateSleepProblems
  },
  {
    key: pathConstants.SLEEPISSUES,
    component: SleepIssuesPage,
    validate: validateSleepIssues
  },
  {
    key: pathConstants.SLEEPHEALTH,
    component: SleepHealthPage,
    validate: validateSleepHealth
  },
  {
    key: pathConstants.SLEEPBEHAVIOR,
    component: SleepBehaviorPage,
    validate: validateSleepBehavior
  },
  {
    key: pathConstants.SLEEPHISTORY,
    component: SleepHistoryPage,
    validate: validateSleepHistory
  },
  {
    key: pathConstants.SLEEPSYMPTOMS,
    component: SleepSymptomsPage,
    validate: validateSleepSymptoms
  },
  {
    key: pathConstants.SLEEPHABITS,
    component: SleepHabitsPage,
    validate: validateSleepHabits
  },
  {
    key: pathConstants.SLEEPDOZING,
    component: SleepDozingPage,
    validate: validateSleepDozing
  },
  {
    key: pathConstants.SLEEPMEDHISTORY,
    component: SleepMedHistoryPage,
    validate: validateSleepMedHistory
  },
  {
    key: pathConstants.SLEEPFAMILY,
    component: SleepFamilyPage,
    validate: validateSleepFamily
  },
  {
    key: pathConstants.OTHERMEDICINES,
    component: OtherMedicinesPage,
    validate: validateOtherMedicines
  },
  {
    key: pathConstants.ALLERGIES,
    component: SleepAllergiesPage,
    validate: validateAllergies
  },
  {
    key: pathConstants.ANYTHINGELSE,
    component: AnythingElsePage,
    validate: validateAnythingElse
  },
  {
    key: pathConstants.PICTURES,
    component: PicturesPage,
    validate: validatePictures
  }
];

const SkipPage = (key, values) => {
  let skip = false;

  switch (key) {
    default: {
      skip = false;
    }
  }

  return skip;
};

const sleepQuestionaire = {
  pages: pages,
  skipPage: SkipPage,
  pathBase: "/visit/sleep",
  startPath: "/sleepstart",
  heading: " better sleep ",
  initialValues: initialValues
};

export default sleepQuestionaire;
