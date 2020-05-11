import { initialValues } from "./data";

import {
  ZipcodePage,
  validateZipcode,
  GenderPage,
  validateEitherGender,
  BirthdatePage,
  validateBirthdate,
  AnythingElsePage,
  validateAnythingElse,
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
  CurrentStatePage,
  validateCurrentState,
  MedicalHistoryPage,
  validateMedicalHistory,
  SurgeriesPage,
  validateSurgeries,
  FamilyHistoryPage,
  validateFamilyHistory,
} from "../Pages";

const pathConstants = {
  ZIPCODE: "zipcode",
  GENDER: "gender",
  BIRTHDATE: "birthdate",
  // DRUGPREFERENCE: 1,
  //TIMESPERMONTH: 2,
  //  HOWOFTEN: 5,
  //  ADDON: 6,
  VISITSTART: 5,
  CURRENT_STATE: 6,
  MEDICAL_HISTORY: 7,
  SURGERIES: 8,
  FAMILY_HISTORY: 9,
  HOW_LONG: 10,
  HEAVIEST: 11,
  LOWEST: 12,
  STAYED: 13,
  GENERAL_HEALTH: 14,
  HOUSEHOLD_OVERWEIGHT: 15,
  BEHAVIORS: 16,
  IMPORTANCE: 17,
  PROBLEMS: 18,
  COMPENSATE: 19,
  HIDE: 20,
  SLEEP: 21,
  ONE_TO_FIVE: 22,
  SMOKE: 23,
  MANAGE_STRESS: 24,
  DESCRIBE: 25,
  METHODS: 26,

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
    key: pathConstants.CURRENT_STATE,
    component: CurrentStatePage,
    validate: validateCurrentState,
  },
  {
    key: pathConstants.MEDICAL_HISTORY,
    component: MedicalHistoryPage,
    validate: validateMedicalHistory,
  },
  {
    key: pathConstants.SURGERIES,
    component: SurgeriesPage,
    validate: validateSurgeries,
  },
  {
    key: pathConstants.FAMILY_HISTORY,
    component: FamilyHistoryPage,
    validate: validateFamilyHistory,
  },
  // {
  //   key: pathConstants.DRUGDOSE,
  //   component: DrugDosePage,
  //   validate: validateDrugDose
  // },
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
  // {
  //   key: pathConstants.SUMMARY,
  //   component: SummaryPage,
  //   validate: validateSummary,
  // },
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

export const weightQuestionaire = {
  type: "WEIGHT",
  pages: pages,
  skipPage: SkipPage,
  pathBase: "/visit/Weight",
  startPath: "/weightstart",
  heading: " losing weight ",
  initialValues: initialValues,
};
