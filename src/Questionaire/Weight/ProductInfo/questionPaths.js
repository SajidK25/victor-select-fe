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
  TryingToLosePage,
  validateTryingToLose,
  HeaviestPage,
  validateHeaviest,
  LowestPage,
  validateLowest,
  LowestWeightHowPage,
  validateLowestWeightHow,
  StayedSamePage,
  validateStayedSame,
  GeneralHealthPage,
  validateGeneralHealth,
  MotivationPage,
  validateMotivation,
  HouseholdPage,
  validateHousehold,
  ImportancePage,
  validateImportance,
  DietaryProblemPage,
  validateDietaryProblem,
  CompensatePage,
  validateCompensate,
  HidePage,
  validateHide,
  SleepPage,
  validateSleep,
  ScalePage,
  validateScale,
  CaffeinatedPage,
  validateCaffeinated,
  SmokePage,
  validateSmoke,
  StressPage,
  validateStress,
  DescribesPage,
  validateDescribes,
  PlansPage,
  validatePlans,
  PlanExplainPage,
  validatePlanExplain,
  DietPage,
  validateDiet,
  ExerciseLevelPage,
  validateExerciseLevel,
  ExerciseReasonPage,
  validateExerciseReason,
  MedicationsPage,
  validateMedications,
  SupplementsPage,
  validateSupplements,
  WeightIntervalPage,
  validateWeightInterval,
  WeightDrugPreferencePage,
  validateWeightDrugPreference,
} from "../Pages";

const pathConstants = {
  ZIPCODE: "zipcode",
  GENDER: "gender",
  BIRTHDATE: "birthdate",
  DRUGPREFERENCE: 1,
  TIMESPERMONTH: 2,
  //  HOWOFTEN: 5,
  //  ADDON: 6,
  VISITSTART: 5,
  CURRENT_STATE: 6,
  MEDICAL_HISTORY: 7,
  SURGERIES: 8,
  FAMILY_HISTORY: 9,
  TRYING_TO_LOSE: 10,
  HEAVIEST: 11,
  LOWEST: 12,
  LOWEST_HOW: 13,
  STAYED: 14,
  GENERAL_HEALTH: 15,
  HOUSEHOLD: 16,
  MOTIVATION: 17,
  IMPORTANCE: 18,
  PROBLEMS: 19,
  COMPENSATE: 20,
  HIDE: 21,
  SLEEP: 22,
  SCALE: 23,
  CAFFEINATED: 24,
  SMOKE: 25,
  MANAGE_STRESS: 26,
  DESCRIBE: 27,
  PLANS: 28,
  MEDICATIONS: 29,
  SUPPLEMENTS: 30,
  PLAN_EXPLAIN: 31,
  DIET: 32,
  EXERCISE_LEVEL: 33,
  EXERCISE_REASON: 34,

  ANYTHINGELSE: 35,
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
    component: WeightDrugPreferencePage,
    validate: validateWeightDrugPreference,
  },
  /* {
    key: pathConstants.TIMESPERMONTH,
    component: WeightIntervalPage,
    validate: validateWeightInterval,
  },
  {
    key: pathConstants.VISITSTART,
    component: VisitStartPage,
    validate: validateVisitStart,
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
  {
    key: pathConstants.TRYING_TO_LOSE,
    component: TryingToLosePage,
    validate: validateTryingToLose,
  },
  {
    key: pathConstants.HEAVIEST,
    component: HeaviestPage,
    validate: validateHeaviest,
  },
  {
    key: pathConstants.LOWEST,
    component: LowestPage,
    validate: validateLowest,
  },
  {
    key: pathConstants.LOWEST_HOW,
    component: LowestWeightHowPage,
    validate: validateLowestWeightHow,
  },
  {
    key: pathConstants.STAYED,
    component: StayedSamePage,
    validate: validateStayedSame,
  },
  {
    key: pathConstants.GENERAL_HEALTH,
    component: GeneralHealthPage,
    validate: validateGeneralHealth,
  },
  {
    key: pathConstants.HOUSEHOLD,
    component: HouseholdPage,
    validate: validateHousehold,
  },
  {
    key: pathConstants.MOTIVATION,
    component: MotivationPage,
    validate: validateMotivation,
  },
  {
    key: pathConstants.IMPORTANCE,
    component: ImportancePage,
    validate: validateImportance,
  },
  {
    key: pathConstants.PROBLEMS,
    component: DietaryProblemPage,
    validate: validateDietaryProblem,
  },
  {
    key: pathConstants.COMPENSATE,
    component: CompensatePage,
    validate: validateCompensate,
  },
  {
    key: pathConstants.HIDE,
    component: HidePage,
    validate: validateHide,
  },
  {
    key: pathConstants.SLEEP,
    component: SleepPage,
    validate: validateSleep,
  },
  {
    key: pathConstants.SCALE,
    component: ScalePage,
    validate: validateScale,
  },
  {
    key: pathConstants.CAFFEINATED,
    component: CaffeinatedPage,
    validate: validateCaffeinated,
  },
  {
    key: pathConstants.SMOKE,
    component: SmokePage,
    validate: validateSmoke,
  },
  {
    key: pathConstants.MANAGE_STRESS,
    component: StressPage,
    validate: validateStress,
  },
  {
    key: pathConstants.DESCRIBE,
    component: DescribesPage,
    validate: validateDescribes,
  },
  */
  {
    key: pathConstants.PLANS,
    component: PlansPage,
    validate: validatePlans,
  },
  {
    key: pathConstants.PLAN_EXPLAIN,
    component: PlanExplainPage,
    validate: validatePlanExplain,
  },
  {
    key: pathConstants.MEDICATIONS,
    component: MedicationsPage,
    validate: validateMedications,
  },
  {
    key: pathConstants.SUPPLEMENTS,
    component: SupplementsPage,
    validate: validateSupplements,
  },
  {
    key: pathConstants.DIET,
    component: DietPage,
    validate: validateDiet,
  },
  {
    key: pathConstants.EXERCISE_LEVEL,
    component: ExerciseLevelPage,
    validate: validateExerciseLevel,
  },
  {
    key: pathConstants.EXERCISE_REASON,
    component: ExerciseReasonPage,
    validate: validateExerciseReason,
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
    case pathConstants.PLAN_EXPLAIN:
      skip = values.plans.none;
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
