import { edProducts } from "../../ED/ProductInfo";
import { allergyProducts } from "../../Allergy/ProductInfo";
import { sleepProducts } from "../../Sleep/ProductInfo";
import { hairProducts } from "../../Hair/ProductInfo";
import { joyProducts } from "../../Joy/ProductInfo";
import { weightProducts } from "../../Weight/ProductInfo";

const products = [
  edProducts,
  sleepProducts,
  hairProducts,
  allergyProducts,
  joyProducts,
  weightProducts,
];

let drugIds = null;
let drugSelections = null;
let addOns = null;
let maxAmount = 0;

export const setCurrentProducts = (type) => {
  console.log("Type:", type);
  const product = products.filter((d) => d.type === type);
  console.log("Product:", product);
  if (product) {
    drugIds = product[0].drugIds;
    drugSelections = product[0].drugSelections;
    addOns = product[0].addOns;
    maxAmount = product[0].maxAmount;
  }
  console.log("DrugSelections", drugSelections);
};

export const getDrugIds = () => {
  return drugIds;
};

export const getMaxAmount = () => {
  return maxAmount;
};

export const getAddonList = () => {
  return addOns;
};

const getAddon = (addOnId) => {
  if (!addOns || !addOnId || addOnId === drugIds.NO_ADDON) return null;

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
export const getDrugList = (category = "") => {
  if (!category) return drugSelections;

  return drugSelections.filter((d) => d.category === category);
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

  console.log("Dose", dose);

  const ret = options.find((o) => o.id === dose);

  console.log("option", ret);
  return ret;
};

export const validDoseOption = (drugId, dose = "") => {
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

export const getPrices = ({ drugId, addOnId = "", dose = "", count = 0 }) => {
  console.log("Get prices:", drugId);
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

  console.log("Dose options:", doseOption);

  const addOnPricing = getAddonPricing(addOnId);
  const addOnDisplay = getAddonName(addOnId);

  if (count === 0) count = 1;

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
  const pricing = getPrices({
    drugId: subscription.drugId,
    dose: subscription.doseOption,
    count: subscription.dosesPerMonth,
    addOnId: subscription.addOnId,
  });
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
