export const MAX_AMOUNT = 40;

export const drugIds = {
  RELEVIUM: "RELEVIUM",
  RELEVIUM_AM: "RELEVIUM_AM",
  RELEVIUM_PM: "RELEVIUM_PM",
  CBD_ADDON: "ADDON",
  NO_ADDON: "NO_ADDON"
};

export const drugSelections = [
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
      price: 44
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          label: "Relevium",
          display: "Relevium",
          subTitle: `This is the description of Relevium.`
        },
        pricing: {
          threeMonth: 37.4,
          twoMonth: 39.6,
          monthly: 44
        }
      }
    ]
  },
  {
    id: drugIds.RELEVIUM_AM,
    category: "T",
    labelOptions: {
      label: "Relevium AM",
      description: `We have added a decongestant in addition to all the 
               other ingredients of Relevium to create a powerful morning 
               cocktail to soothe your allergy symptoms.`,
      price: 46
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          label: "Relevium AM",
          display: "Relevium AM",
          subTitle: `Description for Relevium AM.`
        },
        pricing: {
          threeMonth: 39.1,
          twoMonth: 41.4,
          monthly: 46
        }
      }
    ]
  },
  {
    id: drugIds.RELEVIUM_PM,
    category: "T",
    labelOptions: {
      label: "Relevium PM",
      description: `Strikeout your allergies with our 
        nighttime formula.  A third sedating antihistamine is 
        added to Relevium to provide maximum relief.`,
      price: 42
    },
    doseOptions: [
      {
        id: "",
        default: true,
        labelOptions: {
          label: "",
          subTile: "",
          display: "Relevium PM"
        },
        pricing: {
          threeMonth: 35.7,
          twoMonth: 37.8,
          monthly: 42
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
      label: "CBD Addon",
      description: `Yes! I want this supplement to enhance my results!`,
      price: 80.5
    },
    pricing: {
      threeMonth: 70,
      twoMonth: 73,
      monthly: 80.5
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
  //  const addOn = getAddon(addOnId);
  //  if (!addOn) return "";

  //  return addOn.labelOptions.label;
  return "";
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

export const validDoseOption = (drugId, dose) => {
  const option = getDoseOption(drugId, dose);
  if (!option) return false;
  return true;
};

export const defaultDose = drugId => {
  const options = getDoseOptions(drugId);
  if (!options) return "";

  const opt = options.find(o => o.default === true);
  if (!opt) return "";

  return opt.id;
};

export const getPrices = (drugId, addOnId) => {
  const pricing = {
    display: `${drugId} not found`,
    monthly: 0,
    twoMonth: 0,
    twoTotal: 0,
    threeMonth: 0,
    threeTotal: 0
  };

  const drugOption = getDoseOption(drugId, "");
  console.log("Drug Option:", drugOption);
  if (!drugOption) return pricing;

  const addOnPricing = getAddonPricing(addOnId);
  const addOnDisplay = getAddonName(addOnId);

  pricing.display = getDrugName(drugId);
  pricing.addOnDisplay = addOnDisplay;
  pricing.monthly = drugOption.pricing.monthly + addOnPricing.monthly;
  pricing.twoMonth = drugOption.pricing.twoMonth + addOnPricing.twoMonth;
  pricing.twoTotal = pricing.twoMonth * 2;
  pricing.threeMonth = drugOption.pricing.threeMonth + addOnPricing.threeMonth;
  pricing.threeTotal = pricing.threeMonth * 3;

  return pricing;
};

export const drugDisplaySetup = subscription => {
  const pricing = getPrices(subscription.drugId, subscription.addOnId);
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
      options.total = pricing.threeTotal;
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
