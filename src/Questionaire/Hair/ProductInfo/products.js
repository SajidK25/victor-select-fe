export const MAX_AMOUNT = 50;

const drugIds = {
  HAIRGOOD: "HAIRGOOD",
  HAIRBEST: "HAIRBEST",
  HAIRSUPP: "HAIRSUPP",
  HAIR_ADDON: "HAIR_ADDON",
  NO_ADDON: "NO_ADDON",
};

const drugSelections = [
  {
    id: drugIds.HAIRGOOD,
    category: "A",
    labelOptions: {
      label: "Pelage",
      description: `Generate new hair growth!`,
      price: 98.0,
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          label: "",
          subTile: "",
          display: "Pelage",
        },
        pricing: {
          threeMonth: 83.3,
          twoMonth: 88.2,
          monthly: 98,
        },
      },
    ],
  },
  {
    id: drugIds.HAIRBEST,
    category: "A",
    labelOptions: {
      label: "Pelage + AM/PM Caps",
      description: "Ultimate Hair Restoration",
      price: 160,
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          title: "",
          subTile: "",
          display: "Pelage + AM/PM Caps",
        },
        pricing: {
          threeMonth: 136,
          twoMonth: 144,
          monthly: 160,
        },
      },
    ],
  },
  {
    id: drugIds.HAIRSUPP,
    category: "A",
    labelOptions: {
      label: "AM/PM Caps",
      description: "Faster Growth - Stronger Hair",
      price: 65,
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          title: "",
          subTile: "",
          display: "AM/PM Caps",
        },
        pricing: {
          threeMonth: 55.25,
          twoMonth: 58.5,
          monthly: 65,
        },
      },
    ],
  },
];

const addOns = [
  {
    id: drugIds.HAIR_ADDON,
    category: "",
    labelOptions: {
      label: "Spironolactone 50mg",
      description: "Yes! I want this supplement to enhance my results!",
      price: 20,
    },
    pricing: {
      threeMonth: 17,
      twoMonth: 18,
      monthly: 20,
    },
  },
  {
    id: drugIds.NO_ADDON,
    category: "",
    labelOptions: {
      label: "No Addon",
      description: "No thanks! I don't want to add this to my treatment.",
      price: 0,
    },
    pricing: {
      sixMonth: 0,
      threeMonth: 0,
      monthly: 0,
    },
  },
];

export const hairProducts = {
  type: "HAIR",
  drugIds: drugIds,
  drugSelections: drugSelections,
  addOns: addOns,
  maxAmount: MAX_AMOUNT,
};
