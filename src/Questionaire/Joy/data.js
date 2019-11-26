import { personal, payment, subscription } from "../Shared/data";

export const initialValues = {
  personal,
  payment,
  subscription,

  anythingElse: {
    answer: "",
    explain: ""
  },
  treatment: {
    answer: ""
  },
  socialFactors: {
    lgbqt: false,
    alcohol: false,
    relationship: false,
    financial: false,
    job: false,
    divorce: false,
    death: false,
    children: false,
    postpartum: false,
    other: false,
    otherExplain: ""
  }
};
