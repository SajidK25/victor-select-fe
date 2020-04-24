import gql from "graphql-tag";

export const MAX_AMOUNT = 50;

export const GET_SLEEP_TYPE = gql`
  {
    sleepType @client
  }
`;

export const drugIds = {
  SLEEP_D: "SLEEP_D",
  SLEEP_T: "SLEEP_T",
  SLEEP_N: "SLEEP_N",
  CBD_ADDON: "ADDON",
  NO_ADDON: "NO_ADDON",
};

export const drugSelections = [
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

export const getAddonList = () => {
  return addOns;
};

const getAddon = (addOnId) => {
  if (!addOnId || addOnId === drugIds.HAIR_NO_ADDON) return null;

  return addOns.find((d) => d.id === addOnId);
};

const getAddonPricing = (addOnId) => {
  const pricing = {
    threeMonth: 0,
    twoMonth: 0,
    monthly: 0,
  };

  const addOn = getAddon(addOnId);
  if (!addOn) return pricing;

  return addOn.pricing;
};

const getAddonName = (addOnId) => {
  const addOn = getAddon(addOnId);
  if (!addOn) return "";

  return addOn.labelOptions.label;
};

// Get a list of drugs filtered by category
export const getDrugList = () => {
  return drugSelections;
};

const getDrug = (drugId) => {
  let drug = drugSelections.find((d) => d.id === drugId);

  return drug;
};

export const getDrugName = (drugId) => {
  const drug = getDrug(drugId);

  return drug ? drug.labelOptions.label : "";
};

export const getDoseOptions = (drugId) => {
  const drug = getDrug(drugId);
  if (!drug) return null;

  return drug.doseOptions;
};

const getDoseOption = (drugId, dose) => {
  const options = getDoseOptions(drugId);

  if (!options) return null;

  return options.find((o) => o.id === dose);
};

export const validDoseOption = (drugId, dose) => {
  const option = getDoseOption(drugId, dose);
  if (!option) return false;
  return true;
};

export const defaultDose = (drugId) => {
  const options = getDoseOptions(drugId);
  if (!options) return "";

  const opt = options.find((o) => o.default === true);
  if (!opt) return "";

  return opt.id;
};

export const getPrices = (drugId, dose, count, addOn) => {
  const pricing = {
    display: `${drugId} not found`,
    addOnDisplay: "",
    monthly: 0,
    monthlyDoses: 0,
    addOnMonthlyDoses: 0,
    twoMonth: 0,
    twoTotal: 0,
    twoDoses: 0,
    addOnTwoDoses: 0,
    threeMonth: 0,
    threeTotal: 0,
    threeDoses: 0,
    addOnThreeDoses: 0,
  };

  const doseOption = getDoseOption(drugId, dose);
  if (!doseOption) return pricing;

  const addOnPricing = getAddonPricing(addOn);
  const addOnDisplay = getAddonName(addOn);

  pricing.display = doseOption.labelOptions.display;
  pricing.addOnDisplay = addOnDisplay;
  pricing.monthly =
    doseOption.pricing.monthly * count + addOnPricing.monthly * 30;
  pricing.monthlyDoses = count;
  pricing.addOnMonthlyDoses = 30;
  pricing.twoMonth =
    doseOption.pricing.twoMonth * count + addOnPricing.twoMonth * 30;
  pricing.twoTotal = pricing.twoMonth * 2;
  pricing.twoDoses = count * 2;
  pricing.addOnTwoDoses = 60;
  pricing.threeMonth =
    doseOption.pricing.threeMonth * count + addOnPricing.threeMonth * 30;
  pricing.threeTotal = pricing.threeMonth * 3;
  pricing.threeDoses = count * 3;
  pricing.addOnThreeDoses = 90;

  return pricing;
};

export const drugDisplaySetup = (subscription) => {
  const pricing = getPrices(
    subscription.drugId,
    subscription.doseOption,
    1,
    subscription.addOnId
  );
  const options = {
    display: "",
    addOnDisplay: "",
    monthlyDoses: 0,

    title: "",
    total: 0,
    doses: 0,
    per: "",
    interval: "",
    noDiscount: 0,
  };

  options.display = pricing.display;
  options.addOnDisplay = pricing.addOnDisplay;
  options.monthlyDoses = pricing.monthlyDoses;
  options.addOnMonthlyDoses = pricing.addOnMonthlyDoses;

  switch (subscription.shippingInterval) {
    case "everyThree":
      options.title = "3 Month Delivery";
      options.total = pricing.threeTotal;
      options.doses = pricing.threeDoses;
      options.addOnDoses = pricing.addOnThreeDoses;
      options.per = "3 mo";
      options.interval = "every 3 months";
      options.noDiscount = pricing.monthly * 3;
      break;

    case "everyTwo":
      options.title = "2 Month Delivery";
      options.total = pricing.twoTotal;
      options.doses = pricing.twoDoses;
      options.addOnDoses = pricing.addOnTwoDoses;
      options.per = "2 mo";
      options.interval = "every 2 months";
      options.noDiscount = pricing.monthly * 2;
      break;

    case "monthly":
      options.title = "Monthly Delivery";
      options.total = pricing.monthly;
      options.doses = pricing.monthlyDoses;
      options.addOnDoses = pricing.addOnMonthlyDoses;
      options.per = "mo";
      options.interval = "monthly";
      options.noDiscount = 0;
      break;

    default:
  }
  return options;
};
