import { personal, payment, subscription } from "../Shared/data";

export const initialValues = {
  personal,
  payment,
  subscription,
  hairLoss: {
    timeSpan: "",
    degree: "",
    change: "",
    where: "",
    rapid: "",
    type: "",
    shedding: "",
    thinning: "",
    reason: ""
  },
  sixMonth: {
    medications: false,
    medicationsExplain: "",
    hormones: false,
    hormonesExplain: "",
    none: false
  },
  significant: {
    medical: false,
    medicalExplain: "",
    stress: false,
    stressExplain: "",
    diet: false,
    dietExplain: "",
    none: false
  },
  history: {
    anemia: false,
    anemiaExplain: "",
    thyroid: false,
    thyroidExplain: "",
    none: false
  },
  dieting: {
    actively: false,
    activelyExplain: "",
    vegan: false,
    none: false
  },
  labWork: {
    answer: "",
    fileName: ""
  },
  scalp: {
    itch: false,
    burn: false,
    hurt: false,
    rash: false,
    flaking: false,
    none: false
  },
  relatives: {
    grandfather: false,
    grandmother: false,
    father: false,
    mother: false,
    brother: false,
    sister: false,
    none: false
  },
  treatments: {
    answer: "",
    explain: ""
  },
  currentMeds: {
    answer: "",
    explain: ""
  },
  supplements: {
    answer: "",
    explain: ""
  },
  colored: {
    answer: ""
  },
  women: {
    period: "",
    pregnant: false,
    postmenopausal: false,
    postmenopausalExplain: "",
    hysterectomy: false,
    hysterectomyExplain: "",
    ovaries: false,
    ovariesExplain: ""
  },
  excessHair: {
    chin: false,
    face: false,
    abdomen: false,
    nipples: false,
    none: false
  },
  physicalExam: "",
  hairExam: "",
  explainExam: "",
  lifestyle: {
    overweight: false,
    smoke: false,
    alcohol: false,
    drugs: false,
    none: false
  },
  conditions: {
    noTreatment: false,
    noTreatmentExplain: "",
    kidney: false,
    kidneyExplain: "",
    liver: false,
    liverExplain: "",
    neurological: false,
    neurologicalExplain: "",
    spinal: false,
    spinalExplain: "",
    pelvis: false,
    pelvisExplain: "",
    stomach: false,
    stomachExplain: "",
    hiv: false,
    hivExplain: "",
    none: false
  },
  anemiaThyroid: {
    lowIron: false,
    brittleNails: false,
    lowThyroid: false,
    coldIntolerance: false,
    fatigue: false,
    weighthGain: false,
    depression: false,
    breathing: false,
    none: false
  },
  otherMedicines: {
    taking: "",
    explain: ""
  },
  allergies: {
    have: "",
    explain: ""
  },
  anythingElse: {
    answer: "",
    explain: ""
  }
};
