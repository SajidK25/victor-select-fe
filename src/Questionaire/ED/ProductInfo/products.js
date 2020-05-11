const MAX_AMOUNT = 50;

export const drugIds = {
  EROS: "EROS",
  ROMEO: "ROMEO",
  TADALAFIL: "TADALAFIL",
  SILDENAFIL: "SILDENAFIL",
  TADALAFIL_DAILY: "TADALAFIL_DAILY",
  MALE_DAILY: "MALE_DAILY",
  DAILY_PLUS: "DAILY_PLUS",
  NO_ADDON: "NO_ADDON",
};

const drugSelections = [
  {
    id: drugIds.EROS,
    category: "B",
    labelOptions: {
      label: "EROS",
      description: `Eros is a cutting edge formulation unlike any other medication currently available anywhere 
                    for the treatment of Erectile Dysfunction. 
                    Prescription strength Tadalafil (Cialis) and Apomorphine
                    are combined to create a super drug with a duration 
                    of action up to 48 hours.`,
      price: 18.75,
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          label: "",
          subTile: "",
          display: "EROS",
        },
        pricing: {
          threeMonth: 16.25,
          twoMonth: 17.25,
          monthly: 18.75,
        },
      },
    ],
  },
  {
    id: drugIds.TADALAFIL_DAILY,
    category: "C",
    labelOptions: {
      label: "Tadalafil Daily (5mg)",
      description: "",
      price: 3.75,
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          title: "5mg",
          subTile: "",
          display: "Tadalafil Daily",
        },
        pricing: {
          threeMonth: 3.25,
          twoMonth: 3.5,
          monthly: 3.75,
        },
      },
    ],
  },
  {
    id: drugIds.MALE_DAILY,
    category: "D",
    labelOptions: {
      label: "Male Daily",
      description: "",
      price: 1.4,
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          title: "",
          subTile: "",
          display: "Male Daily",
        },
        pricing: {
          threeMonth: 1.25,
          twoMonth: 1.35,
          monthly: 1.5,
        },
      },
    ],
  },
  {
    id: drugIds.TADALAFIL,
    category: "B",
    labelOptions: {
      label: "Tadalafil",
      description: "Generic form of Cialis used to treat Erectile Dysfunction",
      price: 15,
    },
    doseOptions: [
      {
        id: "20",
        default: true,
        labelOptions: {
          label: "20mg",
          subTitle:
            "A starting dose of 20mg is most common for people who are new to medication.",
          display: "Tadalafil 20mg",
        },
        pricing: {
          threeMonth: 13,
          twoMonth: 13.75,
          monthly: 15,
        },
      },
      {
        id: "10",
        default: false,
        labelOptions: {
          label: "10mg",
          subTitle: "",
          display: "Tadalafil 10mg",
        },
        pricing: {
          threeMonth: 6.5,
          twoMonth: 7.0,
          monthly: 7.5,
        },
      },
    ],
  },
  {
    id: drugIds.ROMEO,
    category: "A",
    labelOptions: {
      label: "ROMEO",
      description: `Romeo is a combination product utilizing prescription 
                    strength Sildenafil (Viagra) as the primary component 
                    in conjunction with Apomorphine. Romeo is enhanced to 
                    be more effective than Viagra alone with a duration of 
                    action up to 6 hours.`,
      price: 10,
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          label: "",
          subTile: "",
          display: "ROMEO",
        },
        pricing: {
          threeMonth: 8.5,
          twoMonth: 9,
          monthly: 10,
        },
      },
    ],
  },
  {
    id: drugIds.SILDENAFIL,
    category: "A",
    labelOptions: {
      label: "Sildenafil",
      description: "Generic form of Viagra used to treat Erectile Dysfunction",
      price: 8.75,
    },
    doseOptions: [
      {
        id: "100",
        default: false,
        labelOptions: {
          label: "100mg",
          subTitle: "",
          display: "Sildenafil 100mg",
        },
        pricing: {
          threeMonth: 14.0,
          twoMonth: 14.75,
          monthly: 16.25,
        },
      },
      {
        id: "50",
        default: true,
        labelOptions: {
          label: "50mg",
          subTitle:
            "A starting dose of 50mg is most common for people who are new to medication.",
          display: "Sildenafil 50mg",
        },
        pricing: {
          threeMonth: 7.5,
          twoMonth: 8,
          monthly: 8.75,
        },
      },
      {
        id: "20",
        default: false,
        labelOptions: {
          label: "20mg",
          subTitle: "",
          display: "Sildenafil 20mg",
        },
        pricing: {
          threeMonth: 4.5,
          twoMonth: 4.75,
          monthly: 5,
        },
      },
    ],
  },
];

const addOns = [
  {
    id: drugIds.MALE_DAILY,
    category: "",
    labelOptions: {
      label: "Male Daily",
      description: "Yes! I want this supplement to enhance my results!",
      price: 1.2,
    },
    pricing: {
      threeMonth: 1,
      twoMonth: 1.1,
      monthly: 1.2,
    },
  },
  {
    id: drugIds.NO_ADDON,
    category: "",
    labelOptions: {
      label: "No Addon",
      description: "No thanks! I don't want to supercharge my treatment.",
      price: 0,
    },
    pricing: {
      threeMonth: 0,
      twoMonth: 0,
      monthly: 0,
    },
  },
];

export const edProducts = {
  type: "ED",
  drugIds: drugIds,
  drugSelections: drugSelections,
  addOns: addOns,
  maxAmount: MAX_AMOUNT,
};
