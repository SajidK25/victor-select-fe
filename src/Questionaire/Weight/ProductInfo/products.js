const MAX_AMOUNT = 40;

const drugIds = {
  SVELTIQUE: "SVELTIQUE",
  SVELTIQUE_LITE: "SVELTIQUE_LITE",
};

const drugSelections = [
  {
    id: drugIds.SVELTIQUE,
    category: "D",
    labelOptions: {
      label: "Sveltique",
      description: `Our recommended solution is a proprietary blend of three superior weight loss medications. 
      Each alone has been scientifically proven to help you achieve weight loss.  
      This combination, when taken in conjunction with following a healthy diet and 
      exercise program, will offer you optimal results.  Our custom blend contains topiramate, 
      bupropion, and naloxone which will kick start your weight loss journey and get you the body you desire.`,
      price: 71,
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
          threeMonth: 60,
          twoMonth: 67.5,
          monthly: 71,
        },
      },
    ],
  },
  {
    id: drugIds.SVELTIQUE_LITE,
    category: "D",
    labelOptions: {
      label: "Sveltique Lite",
      description: `Our lite blend offers the benefits of weight loss without topiramate, 
      which can be hard to tolerate for some individuals. Each medication contained in this 
      formula has been scientifically proven to promote weight loss. If you are looking for 
      an option with fewer side effects which sometimes occur with the topiramate, we suggest 
      this lite alternative. If you do not readily get the results you are hoping for, we recommend 
      upgrading to the Sveltique.`,
      price: 65,
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          label: "Sveltique Lite",
          display: "Sveltique Lite",
          subTitle: `This is the description of Sveltique.`,
        },
        pricing: {
          threeMonth: 55,
          twoMonth: 62,
          monthly: 65,
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
