const MAX_AMOUNT = 40;

const drugIds = {
  SVELTIQUE: "SVELTIQUE",
};

const drugSelections = [
  {
    id: drugIds.SVELTIQUE,
    category: "D",
    labelOptions: {
      label: "Sveltique",
      description: `Sveltique is a customized treatment plan that combines three scientifically
                    proven weight loss medications: naltrexone, bupropion, and topirimate, to support 
                    you on your journey to a better you.  
                    Optimal results will occur if taken in conjunction with eating a healthy diet 
                    and following an exercise program.`,
      price: 100,
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          label: "Sveltique",
          display: "Sveltique",
          subTitle: `This is the description of Sveltique.`,
        },
        pricing: {
          threeMonth: 75,
          twoMonth: 90,
          monthly: 100,
        },
      },
    ],
  },
];

const addOns = [];

export const weightProducts = {
  type: "WEIGHT",
  drugIds: drugIds,
  drugSelections: drugSelections,
  addOns: addOns,
  maxAmount: MAX_AMOUNT,
};
