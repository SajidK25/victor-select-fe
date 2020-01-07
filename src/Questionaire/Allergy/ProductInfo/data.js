import { personal, payment, subscription } from "../../Shared/ProductInfo";

export const initialValues = {
  personal,
  payment,
  subscription,
  noseIssues: {
    none: false
  },
  noseCongested: {
    selected: false,
    side: "",
    frequency: "",
    occurs: ""
  },
  noseClearMucus: {
    selected: false,
    side: "",
    frequency: "",
    occurs: ""
  },
  noseColoredMucus: {
    selected: false,
    side: "",
    frequency: "",
    occurs: ""
  },
  noseItchy: {
    selected: false,
    side: "",
    frequency: "",
    occurs: ""
  },
  noseSmell: {
    selected: false,
    side: "",
    frequency: "",
    occurs: ""
  },
  noseSnoring: {
    selected: false,
    side: "",
    frequency: "",
    occurs: ""
  },
  noseSneezing: {
    selected: false,
    side: "",
    frequency: "",
    occurs: ""
  },
  eyeIssues: {
    none: false
  },
  eyeWatery: {
    selected: false,
    side: "",
    frequency: "",
    occurs: ""
  },
  eyeItchy: {
    selected: false,
    side: "",
    frequency: "",
    occurs: ""
  },
  eyeRed: {
    selected: false,
    frequency: "",
    side: ""
  },
  eyeDry: {
    selected: false,
    side: "",
    frequency: "frequency",
    occurs: "occurs"
  },
  eyeSwollen: {
    selected: false,
    side: "",
    frequency: "",
    occurs: ""
  },
  eyeDischarge: {
    selected: false,
    side: "",
    frequency: "",
    occurs: ""
  },
  earIssues: {
    none: false
  },
  earClogged: {
    selected: false,
    side: "",
    frequency: "",
    occurs: ""
  },
  earItchy: {
    selected: false,
    side: "",
    frequency: "",
    occurs: ""
  },
  earRinging: {
    selected: false,
    frequency: "",
    side: ""
  },
  earHearingLoss: {
    selected: false,
    side: "",
    frequency: ""
  },
  throatIssues: {
    none: false
  },
  throatSore: {
    selected: false,
    frequency: "",
    occurs: ""
  },
  throatCough: {
    selected: false,
    frequency: "",
    occurs: ""
  },
  throatItchy: {
    selected: false,
    frequency: "",
    occurs: ""
  },
  throatClearing: {
    selected: false,
    frequency: "",
    occurs: ""
  },
  throatHoarse: {
    selected: false,
    frequency: "",
    occurs: ""
  },
  throatPostNasal: {
    selected: false,
    frequency: "",
    occurs: ""
  },
  headIssues: {
    none: false
  },
  headAche: {
    selected: false,
    frequency: ""
  },
  headPressure: {
    frequency: ""
  },
  otherMedicines: {
    taking: "",
    explain: ""
  },
  symptomsBegan: {
    answer: ""
  },
  symptomMonths: {
    have: "",
    severe: ""
  },
  infectionsPerYear: {
    answer: ""
  },
  makeWorse: {
    irritants: [],
    medicine: [],
    allergens: [],
    location: []
  },
  dwelling: {
    location: "",
    locationother: "",
    type: "",
    typeother: ""
  },
  hasSmoked: {
    selected: false,
    howMuch: "",
    hasQuit: ""
  },
  hasPets: {
    selected: false
  },
  allergyMeds: {
    allegra: false,
    benedryl: false,
    claritin: false,
    flonase: false,
    phenylephrine: false,
    sudafed: false,
    zyrtec: false,
    other: false,
    none: false
  },
  problems: {
    earInfections: false,
    sinus: false,
    brokenNose: false,
    earTubes: false,
    nasalSurgery: false,
    nasalPolyps: false,
    deviatedSeptum: false,
    none: false
  },
  skinTesting: {
    answer: "",
    explain: ""
  },
  shots: {
    answer: "",
    range1: {
      from: "",
      to: ""
    },
    range2: {
      from: "",
      to: ""
    },
    range3: {
      from: "",
      to: ""
    }
  },
  environment: {
    occupation: "",
    heating: "",
    airConditioning: "",
    bedroomFloor: "",
    familyRoomFloor: "",
    mattress: "",
    pillow: "",
    comforter: ""
  },
  dustCover: {
    selected: "",
    covered: []
  },
  mold: {
    selected: "",
    problem: "",
    where: []
  },
  anythingElse: {
    answer: "",
    explain: ""
  }
};
