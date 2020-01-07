import { personal, payment, subscription } from "../../Shared/ProductInfo";

export const initialValues = {
  personal,
  payment,
  subscription,
  getErections: "",
  problemsBegan: "",
  explainSuddenly: "",
  newPartner: "",
  erectionsWhen: {
    whenMasturbating: false,
    masturbatingErection: "",
    onWaking: false,
    wakingErection: "",
    none: false
  },
  bloodPressure: {
    preBP: "",
    systolic: "",
    diastolic: "",
    confirmBP: false
  },
  physicalExam: "",
  genitalExam: "",
  explainExam: "",
  libido: "",
  depression: {
    noInterest: false,
    feelingDown: false,
    worrying: false,
    anxious: false,
    none: false,
    frequency: ""
  },
  lifestyle: {
    overweight: false,
    smoke: false,
    alcohol: false,
    poppers: false,
    poppersExplain: "",
    none: false
  },
  conditions: {
    noSex: false,
    noSexExplain: "",
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
  genitalIssues: {
    scarring: false,
    scarringExplain: "",
    curved: false,
    curvedExplain: "",
    pain: false,
    painExplain: "",
    tight: false,
    tightExplain: "",
    none: false
  },
  seriousHistory: {
    lowBP: false,
    heartAttack: false,
    heartAttackExplain: "",
    stroke: false,
    strokeExplain: "",
    angina: false,
    anginaExplain: "",
    claudation: false,
    claudationExplain: "",
    arrhythmia: false,
    arrhythmiaExplain: "",
    valve: false,
    valveExplain: "",
    qtProlongation: false,
    qtProlongationExplain: "",
    hcm: false,
    hcmExplain: "",
    none: false
  },
  seriousConditions: {
    chestPain: false,
    chestPainExplain: "",
    chestPainWithSex: false,
    chestPainWithSexExplain: "",
    dizziness: false,
    dizzinessExplain: "",
    cramping: false,
    crampingExplain: "",
    abnormalHeartBeats: false,
    abnormalHeartBeatsExplain: "",
    none: false
  },
  otherConditions: {
    priapism: false,
    priapismExplain: "",
    retinitisPigmentosa: false,
    sickleCell: false,
    clotting: false,
    clottingExplain: "",
    myeloma: false,
    none: false
  },
  otherMeds: {
    nitrates: false,
    nitroglycerin: false,
    isosorbide: false,
    none: false
  },
  hypertensionMeds: {
    sildenafil: false,
    sildenafilExplain: "",
    riociguat: false,
    riociguatExplain: "",
    alphaBlockers: false,
    alphaBlockersExplain: "",
    none: false
  },
  edMeds: {
    viagra: false,
    viagraDose: "",
    viagraWorked: false,
    viagraSideEffects: "",
    cialis: false,
    cialisDose: "",
    cialisWorked: false,
    cialisSideEffects: "",
    levitra: false,
    levitraDose: "",
    levitraWorked: false,
    levitraSideEffects: "",
    avanafil: false,
    avanafilDose: "",
    avanafilWorked: false,
    avanafilSideEffects: "",
    other: false,
    otherExplain: "",
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
