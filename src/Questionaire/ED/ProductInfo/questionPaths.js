import { initialValues } from "./data";
import { drugIds } from "./products";

import {
  ZipcodePage,
  validateZipcode,
  GenderPage,
  validateEitherGender,
  BirthdatePage,
  validateBirthdate,
  PhysicalExamPage,
  validatePhysicalExam,
  VisitStartPage,
  validateVisitStart,
  OtherMedicinesPage,
  validateOtherMedicines,
  PicturesPage,
  validatePictures,
  AnythingElsePage,
  validateAnythingElse,
  ShippingPage,
  validateShipping,
} from "../../Shared/Pages";

import { PaymentInfoPage, validatePaymentInfo } from "../../Shared/Pages/PaymentPage";

import {
  TimesPerMonthPage,
  validateTimesPerMonth,
  DrugPreferencePage,
  validateDrugPreference,
  HowOftenPage,
  validateHowOften,
  FemaleEdPage,
  validateFemaleEd,
  ErectionPage,
  validateErection,
  ProblemsBeganPage,
  validateProblemsBegan,
  MasturbatingPage,
  validateMasturbating,
  WakeUpPage,
  validateWakeUp,
  ErectionWhenPage,
  validateErectionWhen,
  GenitalExamPage,
  validateGenitalExam,
  NewPartnerPage,
  validateNewPartner,
  LibidoPage,
  validateLibido,
  DepressionPage,
  validateDepression,
  DepressionFrequencyPage,
  validateDepressionFrequency,
  LifestylePage,
  validateLifestyle,
  OtherMedicationsPage,
  validateOtherMedications,
  HypertensionMedsPage,
  validateHypertensionMeds,
  ConditionsPage,
  validateConditions,
  GenitalIssuesPage,
  validateGenitalIssues,
  SeriousHistoryPage,
  validateSeriousHistory,
  SeriousConditionsPage,
  validateSeriousConditions,
  OtherConditionsPage,
  validateOtherConditions,
  EdMedsViagraExplainPage,
  validateEdMedsViagraExplain,
  EdMedsAvanafilExplainPage,
  validateEdMedsAvanafilExplain,
  EdMedsLevitraExplainPage,
  validateEdMedsLevitraExplain,
  EdMedsCialisExplainPage,
  validateEdMedsCialisExplain,
  AllergiesPage,
  validateAllergies,
  DrugDosePage,
  validateDrugDose,
  EdSolutionTypePage,
  validateEdSolutionType,
  EdAddonPage,
  validateEdAddon,
  EdMedsPage,
  validateEdMeds,
  //  SummaryPage,
  //  validateSummary,
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
  EDSOLUTIONTYPE: 1,
  DRUGPREFERENCE: 2,
  DRUGDOSE: 3,
  TIMESPERMONTH: 4,
  HOWOFTEN: 5,
  ADDON: 6,
  EDSTART: 7,
  ERECTION: 10,
  PROBLEMSBEGAN: 11,
  NEWPARTNER: 12,
  ERECTIONSWHEN: 13,
  WHILEMASTURBATING: 14,
  ONWAKING: 15,
  PRE_BP: 16,
  SYSTOLIC: 17,
  DIASTOLIC: 18,
  POST_BP: 19,
  PHYSICAL_EXAM: 20,
  GENITAL_EXAM: 21,
  LIBIDO: 22,
  DEPRESSION: 23,
  DEPRESSION_FREQUENCY: 24,
  LIFESTYLE: 25,
  CONDITIONS: 26,
  GENITALISSUES: 27,
  SERIOUSHISTORY: 28,
  SERIOUSCONDITIONS: 29,
  // //  HEARTDISEASE: 50,
  OTHERCONDITIONS: 30,
  OTHERMEDICATIONS: 31,
  HYPERTENSIONMEDS: 32,
  EDMEDS: 33,
  EXPLAIN_CIALIS: 34,
  EXPLAIN_VIAGRA: 35,
  EXPLAIN_LEVITRA: 36,
  EXPLAIN_AVANAFIL: 37,
  OTHERMEDICINES: 38,
  ALLERGIES: 39,
  ANYTHINGELSE: 40,
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
    key: pathConstants.FEMALE_ED,
    component: FemaleEdPage,
    validate: validateFemaleEd,
  },
  {
    key: pathConstants.BIRTHDATE,
    component: BirthdatePage,
    validate: validateBirthdate,
  },
  {
    key: pathConstants.EDSOLUTIONTYPE,
    component: EdSolutionTypePage,
    validate: validateEdSolutionType,
  },
  {
    key: pathConstants.DRUGPREFERENCE,
    component: DrugPreferencePage,
    validate: validateDrugPreference,
  },
  {
    key: pathConstants.DRUGDOSE,
    component: DrugDosePage,
    validate: validateDrugDose,
  },
  {
    key: pathConstants.TIMESPERMONTH,
    component: TimesPerMonthPage,
    validate: validateTimesPerMonth,
  },
  {
    key: pathConstants.ADDON,
    component: EdAddonPage,
    validate: validateEdAddon,
  },
  {
    key: pathConstants.HOWOFTEN,
    component: HowOftenPage,
    validate: validateHowOften,
  },
  {
    key: pathConstants.EDSTART,
    component: VisitStartPage,
    validate: validateVisitStart,
  },
  {
    key: pathConstants.ERECTION,
    component: ErectionPage,
    validate: validateErection,
  },
  {
    key: pathConstants.PROBLEMSBEGAN,
    component: ProblemsBeganPage,
    validate: validateProblemsBegan,
  },
  {
    key: pathConstants.NEWPARTNER,
    component: NewPartnerPage,
    validate: validateNewPartner,
  },
  {
    key: pathConstants.ERECTIONSWHEN,
    component: ErectionWhenPage,
    validate: validateErectionWhen,
  },
  {
    key: pathConstants.WHILEMASTURBATING,
    component: MasturbatingPage,
    validate: validateMasturbating,
  },
  {
    key: pathConstants.ONWAKING,
    component: WakeUpPage,
    validate: validateWakeUp,
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
    key: pathConstants.PHYSICAL_EXAM,
    component: PhysicalExamPage,
    validate: validatePhysicalExam,
  },
  {
    key: pathConstants.GENITAL_EXAM,
    component: GenitalExamPage,
    validate: validateGenitalExam,
  },
  {
    key: pathConstants.LIBIDO,
    component: LibidoPage,
    validate: validateLibido,
  },
  {
    key: pathConstants.DEPRESSION,
    component: DepressionPage,
    validate: validateDepression,
  },
  {
    key: pathConstants.DEPRESSION_FREQUENCY,
    component: DepressionFrequencyPage,
    validate: validateDepressionFrequency,
  },
  {
    key: pathConstants.LIFESTYLE,
    component: LifestylePage,
    validate: validateLifestyle,
  },
  {
    key: pathConstants.CONDITIONS,
    component: ConditionsPage,
    validate: validateConditions,
  },
  {
    key: pathConstants.GENITALISSUES,
    component: GenitalIssuesPage,
    validate: validateGenitalIssues,
  },
  {
    key: pathConstants.SERIOUSHISTORY,
    component: SeriousHistoryPage,
    validate: validateSeriousHistory,
  },
  {
    key: pathConstants.SERIOUSCONDITIONS,
    component: SeriousConditionsPage,
    validate: validateSeriousConditions,
  },
  {
    key: pathConstants.OTHERCONDITIONS,
    component: OtherConditionsPage,
    validate: validateOtherConditions,
  },
  {
    key: pathConstants.OTHERMEDICATIONS,
    component: OtherMedicationsPage,
    validate: validateOtherMedications,
  },
  {
    key: pathConstants.HYPERTENSIONMEDS,
    component: HypertensionMedsPage,
    validate: validateHypertensionMeds,
  },
  {
    key: pathConstants.EDMEDS,
    component: EdMedsPage,
    validate: validateEdMeds,
  },
  {
    key: pathConstants.EXPLAIN_CIALIS,
    component: EdMedsCialisExplainPage,
    validate: validateEdMedsCialisExplain,
  },
  {
    key: pathConstants.EXPLAIN_VIAGRA,
    component: EdMedsViagraExplainPage,
    validate: validateEdMedsViagraExplain,
  },
  {
    key: pathConstants.EXPLAIN_LEVITRA,
    component: EdMedsLevitraExplainPage,
    validate: validateEdMedsLevitraExplain,
  },
  {
    key: pathConstants.EXPLAIN_AVANAFIL,
    component: EdMedsAvanafilExplainPage,
    validate: validateEdMedsAvanafilExplain,
  },
  {
    key: pathConstants.OTHERMEDICINES,
    component: OtherMedicinesPage,
    validate: validateOtherMedicines,
  },
  {
    key: pathConstants.ALLERGIES,
    component: AllergiesPage,
    validate: validateAllergies,
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
  //  {
  //    key: pathConstants.SUMMARY,
  //    component: SummaryPage,
  //    validate: validateSummary,
  //  },
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
    case pathConstants.TIMESPERMONTH:
      var s = values.subscription;
      if (s.drugId === drugIds.MALE_DAILY || s.drugId === drugIds.TADALAFIL_DAILY || s.drugId === drugIds.DAILY_PLUS) {
        skip = true;
        s.dosesPerMonth = "30";
      }
      break;

    case pathConstants.ADDON:
      skip = values.subscription.drugId === drugIds.MALE_DAILY || values.subscription.drugId === drugIds.DAILY_PLUS;
      break;

    case pathConstants.WHILEMASTURBATING:
      // ErectionWhen
      skip = !values.erectionsWhen.whenMasturbating || values.personal.gender === "female";
      break;

    case pathConstants.ONWAKING:
      skip = !values.erectionsWhen.onWaking || values.personal.gender === "female";
      break;

    case pathConstants.DEPRESSION_FREQUENCY:
      skip = values.depression.none;
      break;

    case pathConstants.EXPLAIN_CIALIS:
      skip = !values.edMeds.cialis;
      break;

    case pathConstants.EXPLAIN_VIAGRA:
      skip = !values.edMeds.viagra;
      break;

    case pathConstants.EXPLAIN_LEVITRA:
      skip = !values.edMeds.levitra;
      break;

    case pathConstants.EXPLAIN_AVANAFIL:
      skip = !values.edMeds.avanafil;
      break;

    case pathConstants.DRUGDOSE:
      skip = values.subscription.drugId !== drugIds.SILDENAFIL && values.subscription.drugId !== drugIds.TADALAFIL;
      break;

    case pathConstants.SYSTOLIC:
    case pathConstants.DIASTOLIC:
    case pathConstants.POST_BP:
      skip = values.bloodPressure.preBP === "no";
      break;

    case pathConstants.GENITAL_EXAM:
      skip = values.physicalExam === "no" || values.personal.gender === "female";
      break;

    case pathConstants.FEMALE_ED:
      skip = values.personal.gender === "male";
      break;

    case pathConstants.ERECTION:
    case pathConstants.PROBLEMSBEGAN:
    case pathConstants.NEWPARTNER:
    case pathConstants.ERECTIONSWHEN:
    case pathConstants.GENITALISSUES:
    case pathConstants.EDMEDS:
      skip = values.personal.gender === "female";
      break;

    default:
      skip = false;
  }

  return skip;
};

export const edQuestionaire = {
  type: "ED",
  pages: pages,
  skipPage: SkipPage,
  pathBase: "/visit/ED",
  startPath: "/edstart",
  heading: " a solution for your ED ",
  initialValues: initialValues,
};
