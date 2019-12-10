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
  PicturesPage,
  validatePictures,
  VisitStartPage,
  validateVisitStart,
  PhysicalExamPage,
  validatePhysicalExam
} from "../Pages/Shared";

import {
  HairIntervalPage,
  validateHairInterval,
  HairDrugPreferencePage,
  validateHairDrugPreference,
  HairLossTimeSpanPage,
  validateHairLossTimeSpan,
  HairLossDegreePage,
  validateHairLossDegree,
  HairLossChangePage,
  validateHairLossChange,
  HairLossWherePage,
  validateHairLossWhere,
  HairLossRatePage,
  validateHairLossRate,
  HairLossSheddingPage,
  validateHairLossShedding,
  HairLossThinningPage,
  validateHairLossThinning,
  HairLossTypePage,
  validateHairLossType,
  HairSixMonthPage,
  validateHairSixMonth,
  HairSignificantPage,
  validateHairSignificant,
  HairHistoryPage,
  validateHairHistory,
  HairDietingPage,
  validateHairDieting,
  HairLabWorkPage,
  validateHairLabWork,
  HairGetAttachmentPage,
  validateHairGetAttachment,
  HairScalpPage,
  validateHairScalp,
  HairRelativesPage,
  validateHairRelatives,
  HairTreatmentsPage,
  validateHairTreatments,
  HairSupplementsPage,
  validateHairSupplements,
  HairColoredPage,
  validateHairColored,
  HairPeriodPage,
  validateHairPeriod,
  HairWomenHistoryPage,
  validateHairWomenHistory,
  HairLossReasonPage,
  validateHairLossReason,
  HairExamPage,
  validateHairExam,
  HairLifestylePage,
  validateHairLifestyle,
  HairConditionsPage,
  validateHairConditions,
  HairAnemiaThyroidPage,
  validateHairAnemiaThyroid,
  HairAllergiesPage,
  validateHairAllergies
} from "../Pages/Hair";

import { getAge } from "../../_helpers";

const pathConstants = {
  ZIPCODE: "Zipcode",
  GENDER: "Gender",
  BIRTHDATE: "Birthdate",
  HAIRDRUGPREFERENCE: 1,
  HAIRADDON: 2,
  HAIRINTERVAL: 3,
  HAIRSTART: 4,
  HAIRLOSSTIMESPAN: 5,
  HAIRLOSSDEGREE: 6,
  HAIRLOSSCHANGE: 7,
  HAIRLOSSWHERE: 8,
  HAIRLOSSRATE: 9,
  HAIRLOSSSHEDDING: 10,
  HAIRLOSSTHINNING: 11,
  HAIRLOSSTYPE: 12,
  HAIRSIXMONTH: 13,
  HAIRSIGNIFICANT: 14,
  HAIRHISTORY: 15,
  HAIRDIETING: 16,
  HAIRLABWORK: 17,
  HAIRGETATTACHMENT: 18,
  HAIRSCALP: 19,
  HAIRRELATIVES: 20,
  HAIRTREATMENTS: 21,
  HAIRCURRENTMEDS: 22,
  HAIRSUPPLEMENTS: 23,
  HAIRCOLORED: 24,
  HAIRPERIOD: 25,
  HAIRWOMENHISTORY: 27,
  HAIRLOSSREASON: 28,
  PHYSICALEXAM: 29,
  HAIREXAM: 30,
  HAIRLIFESTYLE: 31,
  HAIRCONDITIONS: 32,
  HAIRANEMIATHYROID: 33,
  HAIRALLERGIES: 35,
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
    key: pathConstants.HAIRDRUGPREFERENCE,
    component: HairDrugPreferencePage,
    validate: validateHairDrugPreference
  },
  //{
  //  key: pathConstants.HAIRADDON,
  //  component: HairAddonPage,
  //  validate: validateHairAddon
  //},
  {
    key: pathConstants.HAIRINTERVAL,
    component: HairIntervalPage,
    validate: validateHairInterval
  },
  {
    key: pathConstants.HAIRSTART,
    component: VisitStartPage,
    validate: validateVisitStart
  },
  {
    key: pathConstants.HAIRLOSSTIMESPAN,
    component: HairLossTimeSpanPage,
    validate: validateHairLossTimeSpan
  },
  {
    key: pathConstants.HAIRLOSSDEGREE,
    component: HairLossDegreePage,
    validate: validateHairLossDegree
  },
  {
    key: pathConstants.HAIRLOSSCHANGE,
    component: HairLossChangePage,
    validate: validateHairLossChange
  },
  {
    key: pathConstants.HAIRLOSSWHERE,
    component: HairLossWherePage,
    validate: validateHairLossWhere
  },
  {
    key: pathConstants.HAIRLOSSRATE,
    component: HairLossRatePage,
    validate: validateHairLossRate
  },
  {
    key: pathConstants.HAIRLOSSSHEDDING,
    component: HairLossSheddingPage,
    validate: validateHairLossShedding
  },
  {
    key: pathConstants.HAIRLOSSTHINNING,
    component: HairLossThinningPage,
    validate: validateHairLossThinning
  },
  {
    key: pathConstants.HAIRLOSSTYPE,
    component: HairLossTypePage,
    validate: validateHairLossType
  },
  {
    key: pathConstants.HAIRSIXMONTH,
    component: HairSixMonthPage,
    validate: validateHairSixMonth
  },
  {
    key: pathConstants.HAIRSIGNIFICANT,
    component: HairSignificantPage,
    validate: validateHairSignificant
  },
  {
    key: pathConstants.HAIRHISTORY,
    component: HairHistoryPage,
    validate: validateHairHistory
  },
  {
    key: pathConstants.HAIRDIETING,
    component: HairDietingPage,
    validate: validateHairDieting
  },
  {
    key: pathConstants.HAIRLABWORK,
    component: HairLabWorkPage,
    validate: validateHairLabWork
  },
  {
    key: pathConstants.HAIRGETATTACHMENT,
    component: HairGetAttachmentPage,
    validate: validateHairGetAttachment
  },
  {
    key: pathConstants.HAIRSCALP,
    component: HairScalpPage,
    validate: validateHairScalp
  },
  {
    key: pathConstants.HAIRRELATIVES,
    component: HairRelativesPage,
    validate: validateHairRelatives
  },
  {
    key: pathConstants.HAIRTREATMENTS,
    component: HairTreatmentsPage,
    validate: validateHairTreatments
  },
  {
    key: pathConstants.HAIRSUPPLEMENTS,
    component: HairSupplementsPage,
    validate: validateHairSupplements
  },
  {
    key: pathConstants.HAIRCOLORED,
    component: HairColoredPage,
    validate: validateHairColored
  },
  {
    key: pathConstants.HAIRPERIOD,
    component: HairPeriodPage,
    validate: validateHairPeriod
  },
  {
    key: pathConstants.HAIRWOMENHISTORY,
    component: HairWomenHistoryPage,
    validate: validateHairWomenHistory
  },
  {
    key: pathConstants.HAIRLOSSREASON,
    component: HairLossReasonPage,
    validate: validateHairLossReason
  },
  {
    key: pathConstants.PHYSICALEXAM,
    component: PhysicalExamPage,
    validate: validatePhysicalExam
  },
  {
    key: pathConstants.HAIREXAM,
    component: HairExamPage,
    validate: validateHairExam
  },
  {
    key: pathConstants.HAIRLIFESTYLE,
    component: HairLifestylePage,
    validate: validateHairLifestyle
  },
  {
    key: pathConstants.HAIRCONDITIONS,
    component: HairConditionsPage,
    validate: validateHairConditions
  },
  {
    key: pathConstants.HAIRANEMIATHYROID,
    component: HairAnemiaThyroidPage,
    validate: validateHairAnemiaThyroid
  },
  {
    key: pathConstants.HAIRALLERGIES,
    component: HairAllergiesPage,
    validate: validateHairAllergies
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
    case pathConstants.HAIRLOSSTHINNING:
      skip = values.hairLoss.shedding === "yes";
      break;

    case pathConstants.HAIRADDON:
      skip =
        values.personal.gender === "male" ||
        getAge(values.personal.birthDate) < 40;
      break;

    case pathConstants.HAIRPERIOD:
    case pathConstants.HAIREXCESSHAIR:
    case pathConstants.HAIRWOMENHISTORY:
      skip = values.personal.gender === "male";
      break;

    case pathConstants.HAIRGETATTACHMENT:
      skip = values.labWork.answer === "no";
      break;

    case pathConstants.HAIREXAM:
      skip = values.physicalExam === "no";
      break;

    default:
      skip = false;
  }

  return skip;
};

const hairQuestionaire = {
  type: "Hair",
  pages: pages,
  skipPage: SkipPage,
  pathBase: "/visit/Hair",
  startPath: "/hairstart",
  heading: " growing new hair ",
  initialValues: initialValues
};

export { hairQuestionaire };
