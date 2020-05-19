import { personal, payment, subscription } from "../../Shared/ProductInfo";

export const initialValues = {
  type: "WEIGHT",
  personal,
  payment,
  subscription,
  measurement: {
    feet: "5",
    inches: "0",
    currentWeight: 0,
    goalWeight: 0,
    heaviestWeight: 0,
    heaviestWeightAge: 0,
    lowestWeight: 0,
    lowestWeightAge: 0,
  },
  medicalHistory: {
    hypertension: false,
    hypertensionExplain: "",
    heartFailure: false,
    heartFailureExplain: "",
    heartAttack: false,
    heartAttackExplain: "",
    cardiacArrhythmias: false,
    cardiacArrhythmiasExplain: "",
    stroke: false,
    strokeExplain: "",
    thyroidDisease: false,
    thyroidDiseaseExplain: "",
    lungProblems: false,
    lungProblemsExplain: "",
    pulmonaryHypertension: false,
    pulmonaryHypertensionExplain: "",
    diabetes: false,
    diabetesExplain: "",
    parkinsons: false,
    parkinsonsExplain: "",
    anemia: false,
    anemiaExplain: "",
    heartburn: false,
    heartburnExplain: "",
    arthritis: false,
    arthritisExplain: "",
    sexualDysfunction: false,
    sexualDysfunctionExplain: "",
    fibromyalgia: false,
    fibromyalgiaExplain: "",
    depression: false,
    depressionExplain: "",
    seizures: false,
    seizuresExplain: "",
    menopause: false,
    menopauseExplain: "",
    bloodDonations: false,
    bloodDonationsExplain: "",
    lupus: false,
    lupusExplain: "",
    cancer: false,
    cancerExplain: "",
    congestion: false,
    congestionExplain: "",
    kidneyDisease: false,
    kidneyDiseaseExplain: "",
  },
  surgeries: {
    answer: "",
    explain: "",
  },
  familyHistory: {
    heartDisease: false,
    diabetes: false,
    cholesterol: false,
    thyroid: false,
    none: false,
  },
  lowestWeight: {
    diet: false,
    exercise: false,
    prescription: false,
    surgery: false,
    counseling: false,
    none: false,
  },
  tryingToLose: {
    answer: "",
  },
  stayedSame: {
    answer: "",
  },
  generalHealth: {
    answer: "",
  },
  motivation: {
    answer: [],
  },
  household: {
    spouse: "N/A",
    child1: "N/A",
    child2: "N/A",
    child3: "N/A",
    child4: "N/A",
    other: "N/A",
  },
  importance: {
    answer: "",
  },
  dietaryProblem: {
    answer: [],
  },
  compensate: {
    answer: "",
  },
  hide: {
    answer: "",
  },
  sleep: {
    hours: "",
    problems: "",
    rested: "",
  },
  scale: {
    important: "",
    changes: "",
    support: "",
    sabotage: "",
    confident: "",
  },
  caffeinated: {
    answer: "",
  },
  smoke: {
    answer: "",
    explain: "",
  },
  mental: {
    depressesd: "",
    stress: "",
    manage: [],
  },
  describes: {
    answer: "",
  },
  plans: {
    weightwatchers: false,
    weightwatchersExplain: "",
    jennycraig: false,
    jennycraigExplain: "",
    slimfast: false,
    slimfastExplain: "",
    atkins: false,
    atkinsExplain: "",
    ornish: false,
    ornishExplain: "",
    southbeach: false,
    southbeachExplain: "",
    laweightloss: false,
    laweightlossExplain: "",
    nutrisystems: false,
    nutrisystemsExplain: "",
    lindora: false,
    lindoraExplain: "",
    overeatersanonymous: false,
    overeatersanonymousExplain: "",
    liquiddiets: false,
    liquiddietsExplain: "",
    meridial: false,
    meridialExplain: "",
    phenfen: false,
    phenfenExplain: "",
    otcdietpills: false,
    otcdietpillsExplain: "",
    surgery: false,
    surgeryExplain: "",
    other: false,
    otherExplain: "",
    none: false,
    notWork: "",
    oneYear: "No",
  },
  medications: {
    answer: "",
    explain: "",
  },
  supplements: {
    answer: "",
    explain: "",
  },
  diet: {
    rating: "3",
    alcoholCount: 0,
    alcoholInterval: "day",
    crave: "",
  },
  exercise: {
    level: "light",
    reason: "",
    reasonExplain: "",
  },
  anythingElse: {
    answer: "",
    explain: "",
  },
};