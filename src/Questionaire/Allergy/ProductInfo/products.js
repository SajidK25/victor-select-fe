const MAX_AMOUNT = 40;

const drugIds = {
  RELEVIUM: "RELEVIUM",
  RELEVIUM_AM: "RELEVIUM_AM",
  RELEVIUM_PM: "RELEVIUM_PM",
  CBD_ADDON: "ADDON",
  NO_ADDON: "NO_ADDON",
};

const drugSelections = [
  {
    id: drugIds.RELEVIUM,
    category: "D",
    labelOptions: {
      label: "Relevium",
      description: `Combines the two most 
                    potent non-sedating antihistamines 
                    on the market. 
                    In addition, we’ve combined highly bioactive 
                    nutraceuticals and vitamins that enhance the efficacy 
                    of the antihistamines.`,
      price: 44,
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          label: "Relevium",
          display: "Relevium",
          subTitle: `This is the description of Relevium.`,
        },
        pricing: {
          threeMonth: 37.4,
          twoMonth: 39.6,
          monthly: 44,
        },
      },
    ],
  },
  {
    id: drugIds.RELEVIUM_AM,
    category: "T",
    labelOptions: {
      label: "Relevium AM",
      description: `We have added a decongestant in addition to all the 
               other ingredients of Relevium to create a powerful morning 
               cocktail to soothe your allergy symptoms.`,
      price: 46,
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          label: "Relevium AM",
          display: "Relevium AM",
          subTitle: `Description for Relevium AM.`,
        },
        pricing: {
          threeMonth: 39.1,
          twoMonth: 41.4,
          monthly: 46,
        },
      },
    ],
  },
  {
    id: drugIds.RELEVIUM_PM,
    category: "T",
    labelOptions: {
      label: "Relevium PM",
      description: `Strikeout your allergies with our 
        nighttime formula.  A third sedating antihistamine is 
        added to Relevium to provide maximum relief.`,
      price: 42,
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          label: "",
          subTile: "",
          display: "Relevium PM",
        },
        pricing: {
          threeMonth: 35.7,
          twoMonth: 37.8,
          monthly: 42,
        },
      },
    ],
  },
];

const addOns = [
  {
    id: drugIds.CBD_ADDON,
    category: "",
    labelOptions: {
      label: "CBD Addon",
      description: `Yes! I want this supplement to enhance my results!`,
      price: 80.5,
    },
    pricing: {
      threeMonth: 70,
      twoMonth: 73,
      monthly: 80.5,
    },
  },
  {
    id: drugIds.NO_ADDON,
    category: "",
    labelOptions: {
      label: "No Addon",
      description: "No thanks!",
      price: 0,
    },
    pricing: {
      sixMonth: 0,
      threeMonth: 0,
      monthly: 0,
    },
  },
];

export const allergyProducts = {
  type: "ALLERGY",
  drugIds: drugIds,
  drugSelections: drugSelections,
  addOns: addOns,
  maxAmount: MAX_AMOUNT,
};
