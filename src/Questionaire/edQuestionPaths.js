import { initialValues } from './edData'

import {
  CreateAccountPage,
  validateCreateAccount,
  ZipcodePage,
  validateZipcode,
  GenderPage,
  validateEitherGender,
  FemaleEdPage,
  validateFemaleEd,
  BirthdatePage,
  validateBirthdate,
  TimesPerMonthPage,
  validateTimesPerMonth,
  DrugPreferencePage,
  validateDrugPreference,
  HowOftenPage,
  validateHowOften,
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
  PreBPPage,
  validatePreBP,
  SystolicPage,
  validateSystolic,
  DiastolicPage,
  validateDiastolic,
  PostBPPage,
  validatePostBP,
  PhysicalExamPage,
  validatePhysicalExam,
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
  EdMedsPage,
  validateEdMeds,
  EdMedsViagraExplainPage,
  validateEdMedsViagraExplain,
  EdMedsAvanafilExplainPage,
  validateEdMedsAvanafilExplain,
  EdMedsLevitraExplainPage,
  validateEdMedsLevitraExplain,
  EdMedsCialisExplainPage,
  validateEdMedsCialisExplain,
  OtherMedicinesPage,
  validateOtherMedicines,
  AllergiesPage,
  validateAllergies,
  AnythingElsePage,
  validateAnythingElse,
  PicturesPage,
  validatePictures,
  SummaryPage,
  validateSummary,
  ShippingPage,
  validateShipping
} from './Pages/index'

const pathConstants = {
  CREATEACCOUNT: 'start',
  ZIPCODE: 'zipcode',
  GENDER: 'gender',
  FEMALE_ED: 'genderf',
  BIRTHDATE: 'birthdate',
  TIMESPERMONTH: 5,
  DRUGPREFERENCE: 4,
  HOWOFTEN: 6,
  ERECTION: 7,
  PROBLEMSBEGAN: 8,
  NEWPARTNER: 9,
  ERECTIONSWHEN: 10,
  WHILEMASTURBATING: '11',
  ONWAKING: 12,
  PRE_BP: 13,
  SYSTOLIC: 14,
  DIASTOLIC: 15,
  POST_BP: 16,
  PHYSICAL_EXAM: 17,
  GENITAL_EXAM: 18,
  LIBIDO: 19,
  DEPRESSION: 20,
  DEPRESSION_FREQUENCY: 21,
  LIFESTYLE: 22,
  CONDITIONS: 23,
  GENITALISSUES: 24,
  SERIOUSHISTORY: 25,
  SERIOUSCONDITIONS: 26,
  // //  HEARTDISEASE: 50,
  OTHERCONDITIONS: 27,
  OTHERMEDICATIONS: 28,
  EDMEDS: 29,
  EXPLAIN_CIALIS: 30,
  EXPLAIN_VIAGRA: 31,
  EXPLAIN_LEVITRA: 32,
  EXPLAIN_AVANAFIL: 33,
  OTHERMEDICINES: 34,
  ALLERGIES: 35,
  ANYTHINGELSE: 36,
  PICTURES: 'photos',
  SUMMARY: 'summary',
  SHIPPING: 'shipping'
}

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
    key: pathConstants.FEMALE_ED,
    component: FemaleEdPage,
    validate: validateFemaleEd
  },
  {
    key: pathConstants.BIRTHDATE,
    component: BirthdatePage,
    validate: validateBirthdate
  },
  {
    key: pathConstants.DRUGPREFERENCE,
    component: DrugPreferencePage,
    validate: validateDrugPreference
  },
  {
    key: pathConstants.TIMESPERMONTH,
    component: TimesPerMonthPage,
    validate: validateTimesPerMonth
  },
  {
    key: pathConstants.HOWOFTEN,
    component: HowOftenPage,
    validate: validateHowOften
  },
  {
    key: pathConstants.ERECTION,
    component: ErectionPage,
    validate: validateErection
  },
  {
    key: pathConstants.PROBLEMSBEGAN,
    component: ProblemsBeganPage,
    validate: validateProblemsBegan
  },
  {
    key: pathConstants.NEWPARTNER,
    component: NewPartnerPage,
    validate: validateNewPartner
  },
  {
    key: pathConstants.ERECTIONSWHEN,
    component: ErectionWhenPage,
    validate: validateErectionWhen
  },
  {
    key: pathConstants.WHILEMASTURBATING,
    component: MasturbatingPage,
    validate: validateMasturbating
  },
  {
    key: pathConstants.ONWAKING,
    component: WakeUpPage,
    validate: validateWakeUp
  },
  {
    key: pathConstants.PRE_BP,
    component: PreBPPage,
    validate: validatePreBP
  },
  {
    key: pathConstants.SYSTOLIC,
    component: SystolicPage,
    validate: validateSystolic
  },
  {
    key: pathConstants.DIASTOLIC,
    component: DiastolicPage,
    validate: validateDiastolic
  },
  {
    key: pathConstants.POST_BP,
    component: PostBPPage,
    validate: validatePostBP
  },
  {
    key: pathConstants.PHYSICAL_EXAM,
    component: PhysicalExamPage,
    validate: validatePhysicalExam
  },
  {
    key: pathConstants.GENITAL_EXAM,
    component: GenitalExamPage,
    validate: validateGenitalExam
  },
  {
    key: pathConstants.LIBIDO,
    component: LibidoPage,
    validate: validateLibido
  },
  {
    key: pathConstants.DEPRESSION,
    component: DepressionPage,
    validate: validateDepression
  },
  {
    key: pathConstants.DEPRESSION_FREQUENCY,
    component: DepressionFrequencyPage,
    validate: validateDepressionFrequency
  },
  {
    key: pathConstants.LIFESTYLE,
    component: LifestylePage,
    validate: validateLifestyle
  },
  {
    key: pathConstants.CONDITIONS,
    component: ConditionsPage,
    validate: validateConditions
  },
  {
    key: pathConstants.GENITALISSUES,
    component: GenitalIssuesPage,
    validate: validateGenitalIssues
  },
  {
    key: pathConstants.SERIOUSHISTORY,
    component: SeriousHistoryPage,
    validate: validateSeriousHistory
  },
  {
    key: pathConstants.SERIOUSCONDITIONS,
    component: SeriousConditionsPage,
    validate: validateSeriousConditions
  },
  {
    key: pathConstants.OTHERCONDITIONS,
    component: OtherConditionsPage,
    validate: validateOtherConditions
  },
  {
    key: pathConstants.OTHERMEDICATIONS,
    component: OtherMedicationsPage,
    validate: validateOtherMedications
  },
  {
    key: pathConstants.EDMEDS,
    component: EdMedsPage,
    validate: validateEdMeds
  },
  {
    key: pathConstants.EXPLAIN_CIALIS,
    component: EdMedsCialisExplainPage,
    validate: validateEdMedsCialisExplain
  },
  {
    key: pathConstants.EXPLAIN_VIAGRA,
    component: EdMedsViagraExplainPage,
    validate: validateEdMedsViagraExplain
  },
  {
    key: pathConstants.EXPLAIN_LEVITRA,
    component: EdMedsLevitraExplainPage,
    validate: validateEdMedsLevitraExplain
  },
  {
    key: pathConstants.EXPLAIN_AVANAFIL,
    component: EdMedsAvanafilExplainPage,
    validate: validateEdMedsAvanafilExplain
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
  },
  {
    key: pathConstants.SUMMARY,
    component: SummaryPage,
    validate: validateSummary
  },
  {
    key: pathConstants.SHIPPING,
    component: ShippingPage,
    validate: validateShipping
  }
]

const SkipPage = (key, values) => {
  let skip = false

  switch (key) {
    case pathConstants.TIMESPERMONTH:
      if (
        values.subscription.drugSelection === 'Tadalafil' &&
        values.subscription.doseOption === '5'
      ) {
        skip = true
        values.subscription.timesPerMonth = '30'
      }
      break

    case pathConstants.WHILEMASTURBATING:
      // ErectionWhen
      skip =
        !values.erectionsWhen.whenMasturbating ||
        values.personal.gender === 'female'
      break

    case pathConstants.ONWAKING:
      skip =
        !values.erectionsWhen.onWaking || values.personal.gender === 'female'
      break

    case pathConstants.DEPRESSION_FREQUENCY:
      skip = values.depression.none
      break

    case pathConstants.EXPLAIN_CIALIS:
      skip = !values.edMeds.cialis
      break

    case pathConstants.EXPLAIN_VIAGRA:
      skip = !values.edMeds.viagra
      break

    case pathConstants.EXPLAIN_LEVITRA:
      skip = !values.edMeds.levitra
      break

    case pathConstants.EXPLAIN_AVANAFIL:
      skip = !values.edMeds.avanafil
      break

    case pathConstants.SYSTOLIC:
    case pathConstants.DIASTOLIC:
    case pathConstants.POST_BP:
      skip = values.bloodPressure.preBP === 'no'
      break

    case pathConstants.GENITAL_EXAM:
      skip = values.physicalExam === 'no' || values.personal.gender === 'female'
      break

    case pathConstants.FEMALE_ED:
      skip = values.personal.gender === 'male'
      break

    case pathConstants.ERECTION:
    case pathConstants.PROBLEMSBEGAN:
    case pathConstants.NEWPARTNER:
    case pathConstants.ERECTIONSWHEN:
    case pathConstants.GENITALISSUES:
    case pathConstants.EDMEDS:
      skip = values.personal.gender === 'female'
      break

    default:
      skip = false
  }

  return skip
}

const edQuestionaire = {
  pages: pages,
  skipPage: SkipPage,
  pathBase: '/visit/ed',
  startPath: '/edstart',
  heading: ' a solution for your ED ',
  initialValues: initialValues
}

export default edQuestionaire
