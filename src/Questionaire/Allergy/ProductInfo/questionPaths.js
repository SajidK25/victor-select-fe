import { initialValues } from "./data";

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
} from "../../Shared/Pages";

import {
  PaymentInfoPage,
  validatePaymentInfo,
} from "../../Shared/Pages/PaymentPage";

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
  validateSummary,
  PreBPPage,
  validatePreBP,
  SystolicPage,
  validateSystolic,
  DiastolicPage,
  validateDiastolic,
  PostBPPage,
  validatePostBP,
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
  VISITSTART: 5,

  PRE_BP: 6,
  SYSTOLIC: 7,
  DIASTOLIC: 8,
  POST_BP: 9,

  NOSEISSUES: 10,
  EARISSUES: 11,
  EYEISSUES: 12,
  THROATISSUES: 13,
  HEADISSUES: 14,
  SYMPTOMSBEGAN: 15,
  SYMPTOMMONTHS: 16,
  //  HAVESYMPTOMS: 14,
  //  SEVERESYMPTOMS: 15,
  INFECTIONSPERYEAR: 17,
  MAKEWORSE: 18,
  SMOKING: 19,
  DWELLING: 20,
  OTHERMEDICINES: 21,
  ALLERGYMEDICATIONS: 22,
  PROBLEMS: 23,
  SKINTESTING: 24,
  ALLERGYSHOTS: 25,
  ENVIRONMENTAL: 26,
  DUSTANDMOLD: 27,
  ANYTHINGELSE: 28,
  PICTURES: "photos",
  SUMMARY: "summary",
  SHIPPING: "shipping",
  PAYMENT: "payment",
};

const pages = [
  {
    key: pathConstants.ZIPCODE,
    component: ZipcodePage,
    validate: validateZipcode,
  },

  {
    key: pathConstants.GENDER,
    component: GenderPage,
    validate: validateEitherGender,
  },
  {
    key: pathConstants.BIRTHDATE,
    component: BirthdatePage,
    validate: validateBirthdate,
  },

  {
    key: pathConstants.DRUGPREFERENCE,
    component: AllergyDrugPreferencePage,
    validate: validateAllergyDrugPreference,
  },
  // {
  //   key: pathConstants.DRUGDOSE,
  //   component: DrugDosePage,
  //   validate: validateDrugDose
  // },
  {
    key: pathConstants.TIMESPERMONTH,
    component: AllergyIntervalPage,
    validate: validateAllergyInterval,
  },
  {
    key: pathConstants.VISITSTART,
    component: VisitStartPage,
    validate: validateVisitStart,
  },
  {
    key: pathConstants.PRE_BP,
    component: PreBPPage,
    validate: validatePreBP,
  },
  {
    key: pathConstants.SYSTOLIC,
    component: SystolicPage,
    validate: validateSystolic,
  },
  {
    key: pathConstants.DIASTOLIC,
    component: DiastolicPage,
    validate: validateDiastolic,
  },
  {
    key: pathConstants.POST_BP,
    component: PostBPPage,
    validate: validatePostBP,
  },
  {
    key: pathConstants.NOSEISSUES,
    component: NoseIssuesPage,
    validate: validateNoseIssues,
  },
  {
    key: pathConstants.EARISSUES,
    component: EarIssuesPage,
    validate: validateEarIssues,
  },
  {
    key: pathConstants.EYEISSUES,
    component: EyeIssuesPage,
    validate: validateEyeIssues,
  },
  {
    key: pathConstants.THROATISSUES,
    component: ThroatIssuesPage,
    validate: validateThroatIssues,
  },
  {
    key: pathConstants.HEADISSUES,
    component: HeadIssuesPage,
    validate: validateHeadIssues,
  },
  {
    key: pathConstants.SYMPTOMSBEGAN,
    component: SymptomsBeganPage,
    validate: validateSymptomsBegan,
  },
  {
    key: pathConstants.SYMPTOMMONTHS,
    component: SymptomMonthsPage,
    validate: validateSymptomMonths,
  },
  {
    key: pathConstants.INFECTIONSPERYEAR,
    component: InfectionsPerYearPage,
    validate: validateInfectionsPerYear,
  },
  {
    key: pathConstants.MAKEWORSE,
    component: MakeWorsePage,
    validate: validateMakeWorse,
  },
  {
    key: pathConstants.SMOKING,
    component: SmokingPage,
    validate: validateSmoking,
  },
  {
    key: pathConstants.DWELLING,
    component: DwellingPage,
    validate: validateDwelling,
  },
  {
    key: pathConstants.OTHERMEDICINES,
    component: OtherMedicinesPage,
    validate: validateOtherMedicines,
  },
  {
    key: pathConstants.ALLERGYMEDICATIONS,
    component: AllergyMedicationsPage,
    validate: validateAllergyMedications,
  },
  {
    key: pathConstants.PROBLEMS,
    component: ProblemsPage,
    validate: validateProblems,
  },
  {
    key: pathConstants.SKINTESTING,
    component: SkinTestingPage,
    validate: validateSkinTesting,
  },
  {
    key: pathConstants.ALLERGYSHOTS,
    component: AllergyShotsPage,
    validate: validateAllergyShots,
  },
  {
    key: pathConstants.ENVIRONMENTAL,
    component: EnvironmentalPage,
    validate: validateEnvironmental,
  },
  {
    key: pathConstants.DUSTANDMOLD,
    component: DustAndMoldPage,
    validate: validateDustAndMold,
  },
  {
    key: pathConstants.ANYTHINGELSE,
    component: AnythingElsePage,
    validate: validateAnythingElse,
  },
  {
    key: pathConstants.PICTURES,
    component: PicturesPage,
    validate: validatePictures,
  },
  {
    key: pathConstants.SUMMARY,
    component: SummaryPage,
    validate: validateSummary,
  },
  {
    key: pathConstants.SHIPPING,
    component: ShippingPage,
    validate: validateShipping,
  },
  {
    key: pathConstants.PAYMENT,
    component: PaymentInfoPage,
    validate: validatePaymentInfo,
  },
];

const SkipPage = (key, values) => {
  let skip = false;

  switch (key) {
    case pathConstants.SYSTOLIC:
    case pathConstants.DIASTOLIC:
    case pathConstants.POST_BP:
      skip = values.bloodPressure.preBP === "no";
      break;

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
  initialValues: initialValues,
};
