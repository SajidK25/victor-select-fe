const MAX_AMOUNT = 50;

export const drugIds = {
  SLEEP_D: "SLEEP_D",
  SLEEP_T: "SLEEP_T",
  SLEEP_N: "SLEEP_N",
  CBD_ADDON: "ADDON",
  NO_ADDON: "NO_ADDON",
};

const drugSelections = [
  {
    id: drugIds.SLEEP_D,
    category: "D",
    labelOptions: {
      label: "Hypnos-D",
      description: `Our top recommendation for optimal sleep. This 
                    formula contains Doxepin which is widely prescribed 
                    for insomnia.`,
      price: 50,
    },
    doseOptions: [
      {
        id: "REG",
        default: true,
        labelOptions: {
          label: "Hypnos-D",
          display: "Hypnos-D",
          subTitle: `This is the recommended starting dose for those who suffer
                    with mild to moderate insomnia.`,
        },
        pricing: {
          threeMonth: 43.25,
          twoMonth: 45.5,
          monthly: 50,
        },
      },
      {
        id: "FORTE",
        default: false,
        labelOptions: {
          label: "Hypnos-D Forte (extra strength)",
          display: "Hypnos-D Forte",
          subTitle: `This is our most potent formulation recommended for 
                    those with severe insomnia.`,
        },
        pricing: {
          threeMonth: 52,
          twoMonth: 55,
          monthly: 60,
        },
      },
    ],
  },
  {
    id: drugIds.SLEEP_T,
    category: "T",
    labelOptions: {
      label: "Hypnos-T",
      description: `Our sleep formula containing Trazodone, a prescriptive 
                    also highly utilized in the treatment of sleep disorders.`,
      price: 50,
    },
    doseOptions: [
      {
        id: "REG",
        default: true,
        labelOptions: {
          label: "Hypnos-T",
          display: "Hypnos-T",
          subTitle: `This is the recommended starting dose for those who suffer
                    with mild to moderate insomnia.`,
        },
        pricing: {
          threeMonth: 43.25,
          twoMonth: 45.5,
          monthly: 50,
        },
      },
      {
        id: "FORTE",
        default: true,
        labelOptions: {
          label: "Hypnos-T Forte (extra strength)",
          display: "Hypnos-T Forte",
          subTitle: `Our extra strength formulation to treat 
                    severe insomnia.`,
        },
        pricing: {
          threeMonth: 52,
          twoMonth: 55,
          monthly: 60,
        },
      },
    ],
  },
  {
    id: drugIds.SLEEP_N,
    category: "T",
    labelOptions: {
      label: "Hypnos-N",
      description: `Our natural formula encompassing a variety of
                    supplements known to help achieve a more restful
                    nights sleep.`,
      price: 50,
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          label: "",
          subTile: "",
          display: "Sleep N",
        },
        pricing: {
          threeMonth: 43.25,
          twoMonth: 45.5,
          monthly: 50,
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

export const sleepProducts = {
  type: "SLEEP",
  drugIds: drugIds,
  drugSelections: drugSelections,
  addOns: addOns,
  maxAmount: MAX_AMOUNT,
};
