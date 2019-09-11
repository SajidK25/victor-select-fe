import { initialValues } from "./hairData";

import {
  validateStartVisit,
  ZipcodePage,
  validateZipcode,
  GenderPage,
  validateEitherGender,
  BirthdatePage,
  validateBirthdate,
  HairLossTimePage,
  validateHairLossTime,
  HairDegreePage,
  validateHairDegree,
  HairLossRatePage,
  validateHairLossRate,
  OtherMedicinesPage,
  validateOtherMedicines,
  AllergiesPage,
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
  HAIRLOSSTIME: 5,
  HAIRDEGREE: 6,
  HAIRLOSSRATE: 8,
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
    key: pathConstants.HAIRLOSSTIME,
    component: HairLossTimePage,
    validate: validateHairLossTime
  },
  {
    key: pathConstants.HAIRDEGREE,
    component: HairDegreePage,
    validate: validateHairDegree
  },
  {
    key: pathConstants.HAIRLOSSRATE,
    component: HairLossRatePage,
    validate: validateHairLossRate
  },
  {
    key: pathConstants.OTHERMEDICINES,
    component: OtherMedicinesPage,
    validate: validateOtherMedicines
  },
  {
    key: pathConstants.ALLERGIES,
    component: AllergiesPage,
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

const hairQuestionaire = {
  pages: pages,
  skipPage: SkipPage,
  pathBase: "/visit/hair",
  startPath: "/hairstart",
  heading: " growing new hair ",
  initialValues: initialValues
};

export default hairQuestionaire;
