export const MAX_AMOUNT = 50;

export const drugIds = {
  SYNERGY: "SYNERGY",
  SYNERGY_FORTE: "SYNERGY_FORTE"
};

export const drugSelections = [
  {
    id: drugIds.SYNERGY,
    category: "",
    labelOptions: {
      label: "Sleep Synergy",
      description: `This is the compelling description for Sleep Synergy`,
      price: 35
    },
    doseOptions: [
      {
        id: "2",
        default: true,
        labelOptions: {
          label: "2 per night",
          subTile: "",
          display: "Sleep Synergy (2)"
        },
        pricing: {
          threeMonth: 29.75,
          twoMonth: 31.5,
          monthly: 35
        }
      },
      {
        id: "3",
        default: true,
        labelOptions: {
          label: "3 per night",
          subTile: "",
          display: "Sleep Synergy (3)"
        },
        pricing: {
          threeMonth: 42.5,
          twoMonth: 45,
          monthly: 50
        }
      }
    ]
  },
  {
    id: drugIds.SYNERGY_FORTE,
    category: "",
    labelOptions: {
      label: "Sleep Synergy Forte",
      description: `This is the compelling description for Sleep Synergy Forte`,
      price: 40
    },
    doseOptions: [
      {
        id: "2",
        default: true,
        labelOptions: {
          label: "2 per night",
          subTile: "",
          display: "Sleep Synergy Forte (2)"
        },
        pricing: {
          threeMonth: 34,
          twoMonth: 36,
          monthly: 40
        }
      },
      {
        id: "3",
        default: true,
        labelOptions: {
          label: "3 per night",
          subTile: "",
          display: "Sleep Synergy Forte (3)"
        },
        pricing: {
          threeMonth: 51,
          twoMonth: 54,
          monthly: 60
        }
      }
    ]
  }
];

// Not used yet
const addOns = [
  {
    id: drugIds.HAIR_ADDON,
    category: "",
    labelOptions: {
      label: "Spironolactone 50mg",
      description: "Yes! I want this supplement to enhance my results!",
      price: 20
    },
    pricing: {
      threeMonth: 17,
      twoMonth: 18,
      monthly: 20
    }
  },
  {
    id: drugIds.HAIR_NO_ADDON,
    category: "",
    labelOptions: {
      label: "No Addon",
      description: "No thanks! I don't want to add this to my treatment.",
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
