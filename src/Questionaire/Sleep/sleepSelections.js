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
  NO_ADDON: "NO_ADDON"
};

export const drugSelections = [
  {
    id: drugIds.SLEEP_D,
    category: "D",
    labelOptions: {
      label: "Sleep D",
      description: `This is the description for Sleep D.`,
      price: 50
    },
    doseOptions: [
      {
        id: "REG",
        default: true,
        labelOptions: {
          label: "Regular",
          subTile: "SubTitle",
          display: "Sleep D Regular"
        },
        pricing: {
          threeMonth: 42.5,
          twoMonth: 45,
          monthly: 50
        }
      },
      {
        id: "FORTE",
        default: false,
        labelOptions: {
          label: "Forte",
          subTile: "Subtitle",
          display: "Sleep D Forte"
        },
        pricing: {
          threeMonth: 51,
          twoMonth: 54,
          monthly: 60
        }
      }
    ]
  },
  {
    id: drugIds.SLEEP_T,
    category: "T",
    labelOptions: {
      label: "Sleep T",
      description: `This is the description for Sleep T.`,
      price: 50
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          label: "Regular",
          subTile: "",
          display: "Sleep T Regular"
        },
        pricing: {
          threeMonth: 42.5,
          twoMonth: 45,
          monthly: 50
        }
      },
      {
        id: "FORTE",
        default: true,
        labelOptions: {
          label: "Forte",
          subTile: "",
          display: "Sleep T Forte"
        },
        pricing: {
          threeMonth: 50,
          twoMonth: 54,
          monthly: 60
        }
      }
    ]
  },
  {
    id: drugIds.SLEEP_N,
    category: "T",
    labelOptions: {
      label: "Sleep Natural",
      description: `This is the description for Sleep N.`,
      price: 50
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          label: "",
          subTile: "",
          display: "Sleep N"
        },
        pricing: {
          threeMonth: 39,
          twoMonth: 45,
          monthly: 50
        }
      }
    ]
  }
];

const addOns = [
  {
    id: drugIds.CBD_ADDON,
    category: "",
    labelOptions: {
      label: "Sleep Addon",
      description: "Yes! I want this supplement to enhance my results!",
      price: 1.2
    },
    pricing: {
      threeMonth: 30,
      twoMonth: 40,
      monthly: 50
    }
  },
  {
    id: drugIds.NO_ADDON,
    category: "",
    labelOptions: {
      label: "No Addon",
      description: "No thanks!",
      price: 0
    },
    pricing: {
      sixMonth: 0,
      threeMonth: 0,
      monthly: 0
    }
  }
];

export const getAddonList = () => {
  return addOns;
};

const getAddon = addOnId => {
  if (!addOnId || addOnId === drugIds.HAIR_NO_ADDON) return null;

  return addOns.find(d => d.id === addOnId);
};

const getAddonPricing = addOnId => {
  const pricing = {
    threeMonth: 0,
    twoMonth: 0,
    monthly: 0
  };

  const addOn = getAddon(addOnId);
  if (!addOn) return pricing;

  return addOn.pricing;
};

const getAddonName = addOnId => {
  const addOn = getAddon(addOnId);
  if (!addOn) return "";

  return addOn.labelOptions.label;
};

// Get a list of drugs filtered by category
export const getDrugList = () => {
  return drugSelections;
};

const getDrug = drugId => {
  let drug = drugSelections.find(d => d.id === drugId);

  return drug;
};

export const getDrugName = drugId => {
  const drug = getDrug(drugId);

  return drug ? drug.labelOptions.label : "";
};

export const getDoseOptions = drugId => {
  const drug = getDrug(drugId);
  if (!drug) return null;

  return drug.doseOptions;
};

const getDoseOption = (drugId, dose) => {
  const options = getDoseOptions(drugId);

  if (!options) return null;

  return options.find(o => o.id === dose);
};

// export const validDoseOption = (drugId, dose) => {
//   const option = getDoseOption(drugId, dose);
//   if (!option) return false;

//   return true;
// };

export const defaultDose = drugId => {
  const options = getDoseOptions(drugId);
  if (!options) return "";

  const opt = options.find(o => o.default === true);
  if (!opt) return "";

  return opt.id;
};

export const getPrices = (drugId, dose, addOn) => {
  const pricing = {
    display: `${drugId} not found`,
    monthly: 0,
    twoMonth: 0,
    twoTotal: 0,
    threeMonth: 0,
    threeTotal: 0
  };

  const drugOption = getDoseOption(drugId, dose);
  if (!drugOption) return pricing;

  const addOnPricing = getAddonPricing(addOn);
  const addOnDisplay = getAddonName(addOn);

  pricing.display = drugOption.labelOptions.display;
  pricing.addOnDisplay = addOnDisplay;
  pricing.monthly = drugOption.pricing.monthly + addOnPricing.monthly;
  pricing.twoMonth = drugOption.pricing.twoMonth + addOnPricing.twoMonth;
  pricing.twoTotal = pricing.twoMonth * 2;
  pricing.threeMonth = drugOption.pricing.threeMonth + addOnPricing.threeMonth;
  pricing.threeTotal = pricing.threeMonth * 3;

  return pricing;
};

export const drugDisplaySetup = subscription => {
  const pricing = getPrices(subscription.drugId);
  const options = {
    display: "",
    title: "",
    total: 0,
    per: "",
    interval: "",
    noDiscount: 0
  };

  options.display = pricing.display;

  switch (subscription.shippingInterval) {
    case "everyThree":
      options.title = "3 Month Delivery";
      options.total = pricing.three;
      options.per = "3 mo";
      options.interval = "every 3 months";
      options.noDiscount = pricing.monthly * 3;
      break;

    case "everyTwo":
      options.title = "2 Month Delivery";
      options.total = pricing.twoTotal;
      options.per = "2 mo";
      options.interval = "every 2 months";
      options.noDiscount = pricing.monthly * 2;
      break;

    case "monthly":
      options.title = "Monthly Delivery";
      options.total = pricing.monthly;
      options.per = "mo";
      options.interval = "monthly";
      options.noDiscount = 0;
      break;

    default:
  }
  return options;
};
