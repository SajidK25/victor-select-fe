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
  AnythingElsePage,
  validateAnythingElse,
} from "../../Shared/Pages";

import { PaymentInfoPage, validatePaymentInfo } from "../../Shared/Pages/PaymentPage";

import {
  JoyIntervalPage,
  validateJoyInterval,
  HowOftenPage,
  validateHowOften,
  HowOften2Page,
  validateHowOften2,
  HowOften3Page,
  validateHowOften3,
  SeenPhysicianPage,
  validateSeenPhysician,
  SocialFactorsPage,
  validateSocialFactors,
  TreatmentTypePage,
  validateTreatmentType,
  VitaminDPage,
  validateVitaminD,
  ChildhoodPage,
  validateChildhood,
} from "../Pages";

const pathConstants = {
  ZIPCODE: "zipcode",
  GENDER: "gender",
  FEMALE_ED: "genderf",
  BIRTHDATE: "birthdate",
  DRUGPREFERENCE: 1,
  TIMESPERMONTH: 2,
  VISITSTART: 7,
  HOWOFTEN: 8,
  HOWOFTEN2: 9,
  HOWOFTEN3: 10,
  SEENPHYSICIAN: 11,
  TREATMENT_TYPE: 12,
  VITAMIN_D: 13,
  SOCIALFACTORS: 16,
  CHILDHOOD: 17,

  ANYTHINGELSE: 40,
  PICTURES: "photos",
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
    key: pathConstants.TIMESPERMONTH,
    component: JoyIntervalPage,
    validate: validateJoyInterval,
  },
  {
    key: pathConstants.VISITSTART,
    component: VisitStartPage,
    validate: validateVisitStart,
  },
  {
    key: pathConstants.HOWOFTEN,
    component: HowOftenPage,
    validate: validateHowOften,
  },
  {
    key: pathConstants.HOWOFTEN2,
    component: HowOften2Page,
    validate: validateHowOften2,
  },
  {
    key: pathConstants.HOWOFTEN3,
    component: HowOften3Page,
    validate: validateHowOften3,
  },
  {
    key: pathConstants.SEENPHYSICIAN,
    component: SeenPhysicianPage,
    validate: validateSeenPhysician,
  },
  {
    key: pathConstants.TREATMENT_TYPE,
    component: TreatmentTypePage,
    validate: validateTreatmentType,
  },
  {
    key: pathConstants.VITAMIN_D,
    component: VitaminDPage,
    validate: validateVitaminD,
  },
  {
    key: pathConstants.SOCIALFACTORS,
    component: SocialFactorsPage,
    validate: validateSocialFactors,
  },
  {
    key: pathConstants.CHILDHOOD,
    component: ChildhoodPage,
    validate: validateChildhood,
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
    case pathConstants.TREATMENT_TYPE:
      skip = values.treatment.answer !== "Yes";
      break;

    default:
      skip = false;
  }

  return skip;
};

export const joyQuestionaire = {
  type: "JOY",
  pages: pages,
  skipPage: SkipPage,
  pathBase: "/visit/Joy",
  startPath: "/joystart",
  heading: " getting rid of your blues ",
  initialValues: initialValues,
};
