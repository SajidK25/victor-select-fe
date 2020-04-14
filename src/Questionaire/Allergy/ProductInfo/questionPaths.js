import { initialValues } from "./data";
import { drugIds } from "./allergySelections";

import {
  ZipcodePage,
  validateZipcode,
  GenderPage,
  validateEitherGender,
  BirthdatePage,
  validateBirthdate,
  VisitStartPage,
  validateVisitStart,
  PicturesPage,
  validatePictures,
  ShippingPage,
  validateShipping,
  PaymentInfoPage,
  validatePaymentInfo
} from "../../Shared/Pages";

import {
  NoseIssuesPage,
  validateNoseIssues,
  EyeIssuesPage,
  validateEyeIssues,
  EarIssuesPage,
  validateEarIssues,
  ThroatIssuesPage,
  validateThroatIssues,
  HeadIssuesPage,
  validateHeadIssues,
  SymptomsBeganPage,
  validateSymptomsBegan,
  HaveSymptomsPage,
  validateHaveSymptoms,
  SevereSymptomsPage,
  validateSevereSymptoms,
  InfectionsPerYearPage,
  validateInfectionsPerYear,
  MakeWorsePage,
  validateMakeWorse,
  SmokingPage,
  validateSmoking,
  DwellingPage,
  validateDwelling,
  OtherMedicinesPage,
  validateOtherMedicines,
  AllergyMedicationsPage,
  validateAllergyMedications,
  ProblemsPage,
  validateProblems,
  AnythingElsePage,
  validateAnythingElse,
  SymptomMonthsPage,
  validateSymptomMonths,
  SkinTestingPage,
  validateSkinTesting,
  AllergyShotsPage,
  validateAllergyShots,
  EnvironmentalPage,
  validateEnvironmental,
  DustAndMoldPage,
  validateDustAndMold,
  AllergyDrugPreferencePage,
  validateAllergyDrugPreference,
  AllergyIntervalPage,
  validateAllergyInterval,
  SummaryPage,
  validateSummary
} from "../Pages";

const pathConstants = {
  ZIPCODE: "zipcode",
  GENDER: "gender",
  FEMALE_ED: "genderf",
  BIRTHDATE: "birthdate",
  // EDSOLUTIONTYPE: 1,
  DRUGPREFERENCE: 1,
  //  DRUGDOSE: 3,
  TIMESPERMONTH: 2,
  //  HOWOFTEN: 5,
  //  ADDON: 6,
  VISITSTART: 7,
  NOSEISSUES: 8,
  EARISSUES: 9,
  EYEISSUES: 10,
  THROATISSUES: 11,
  HEADISSUES: 12,
  SYMPTOMSBEGAN: 13,
  SYMPTOMMONTHS: 14,
  //  HAVESYMPTOMS: 14,
  //  SEVERESYMPTOMS: 15,
  INFECTIONSPERYEAR: 16,
  MAKEWORSE: 17,
  SMOKING: 18,
  DWELLING: 19,
  OTHERMEDICINES: 20,
  ALLERGYMEDICATIONS: 21,
  PROBLEMS: 22,
  SKINTESTING: 23,
  ALLERGYSHOTS: 24,
  ENVIRONMENTAL: 25,
  DUSTANDMOLD: 26,
  ANYTHINGELSE: 40,
  PICTURES: "photos",
  SUMMARY: "summary",
  SHIPPING: "shipping",
  PAYMENT: "payment"
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
    key: pathConstants.DRUGPREFERENCE,
    component: AllergyDrugPreferencePage,
    validate: validateAllergyDrugPreference
  },
  // {
  //   key: pathConstants.DRUGDOSE,
  //   component: DrugDosePage,
  //   validate: validateDrugDose
  // },
  {
    key: pathConstants.TIMESPERMONTH,
    component: AllergyIntervalPage,
    validate: validateAllergyInterval
  },
  // {
  //   key: pathConstants.ADDON,
  //   component: EdAddonPage,
  //   validate: validateEdAddon
  // },
  // {
  //   key: pathConstants.HOWOFTEN,
  //   component: HowOftenPage,
  //   validate: validateHowOften
  // },
  {
    key: pathConstants.VISITSTART,
    component: VisitStartPage,
    validate: validateVisitStart
  },
  {
    key: pathConstants.NOSEISSUES,
    component: NoseIssuesPage,
    validate: validateNoseIssues
  },
  {
    key: pathConstants.EARISSUES,
    component: EarIssuesPage,
    validate: validateEarIssues
  },
  {
    key: pathConstants.EYEISSUES,
    component: EyeIssuesPage,
    validate: validateEyeIssues
  },
  {
    key: pathConstants.THROATISSUES,
    component: ThroatIssuesPage,
    validate: validateThroatIssues
  },
  {
    key: pathConstants.HEADISSUES,
    component: HeadIssuesPage,
    validate: validateHeadIssues
  },
  {
    key: pathConstants.SYMPTOMSBEGAN,
    component: SymptomsBeganPage,
    validate: validateSymptomsBegan
  },
  {
    key: pathConstants.SYMPTOMMONTHS,
    component: SymptomMonthsPage,
    validate: validateSymptomMonths
  },
  // {
  //   key: pathConstants.SEVERESYMPTOMS,
  //   component: SevereSymptomsPage,
  //   validate: validateSevereSymptoms
  // },
  {
    key: pathConstants.INFECTIONSPERYEAR,
    component: InfectionsPerYearPage,
    validate: validateInfectionsPerYear
  },
  {
    key: pathConstants.MAKEWORSE,
    component: MakeWorsePage,
    validate: validateMakeWorse
  },
  {
    key: pathConstants.SMOKING,
    component: SmokingPage,
    validate: validateSmoking
  },
  {
    key: pathConstants.DWELLING,
    component: DwellingPage,
    validate: validateDwelling
  },
  {
    key: pathConstants.OTHERMEDICINES,
    component: OtherMedicinesPage,
    validate: validateOtherMedicines
  },
  {
    key: pathConstants.ALLERGYMEDICATIONS,
    component: AllergyMedicationsPage,
    validate: validateAllergyMedications
  },
  {
    key: pathConstants.PROBLEMS,
    component: ProblemsPage,
    validate: validateProblems
  },
  {
    key: pathConstants.SKINTESTING,
    component: SkinTestingPage,
    validate: validateSkinTesting
  },
  {
    key: pathConstants.ALLERGYSHOTS,
    component: AllergyShotsPage,
    validate: validateAllergyShots
  },
  {
    key: pathConstants.ENVIRONMENTAL,
    component: EnvironmentalPage,
    validate: validateEnvironmental
  },
  // {
  //   key: pathConstants.DUSTANDMOLD,
  //   component: DustAndMoldPage,
  //   validate: validateDustAndMold
  // },
  {
    key: pathConstants.ANYTHINGELSE,
    component: AnythingElsePage,
    validate: validateAnythingElse
  },
  {
    key: pathConstants.PICTURES,
    component: PicturesPage,
    validate: validatePictures
  },
  {
    key: pathConstants.SUMMARY,
    component: SummaryPage,
    validate: validateSummary
  },
  {
    key: pathConstants.SHIPPING,
    component: ShippingPage,
    validate: validateShipping
  },
  {
    key: pathConstants.PAYMENT,
    component: PaymentInfoPage,
    validate: validatePaymentInfo
  }
];

const SkipPage = (key, values) => {
  let skip = false;

  switch (key) {
    default:
      skip = false;
  }

  return skip;
};

export const allergyQuestionaire = {
  type: "ALLERGY",
  pages: pages,
  skipPage: SkipPage,
  pathBase: "/visit/Allergy",
  startPath: "/allergystart",
  heading: " a solution for your allergies ",
  initialValues: initialValues
};
