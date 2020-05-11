const MAX_AMOUNT = 35;

const drugIds = {
  JOY: "JOYOUS",
};

const drugSelections = [
  {
    id: drugIds.JOY,
    category: "",
    labelOptions: {
      label: "Joy",
      description: `Joy`,
      price: 44,
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          label: "Joy",
          display: "Joy",
          subTitle: `This is the description of Joy`,
        },
        pricing: {
          threeMonth: 34,
          twoMonth: 36,
          monthly: 40,
        },
      },
    ],
  },
];

const addOns = [];

export const joyProducts = {
  type: "JOY",
  drugIds: drugIds,
  drugSelections: drugSelections,
  addOns: addOns,
  maxAmount: MAX_AMOUNT,
};
