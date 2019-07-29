import React from 'react'

export const drugPricing = [
  { id: "EROS", label: "EROS", perDosePrice: [15, 16.5, 18.75] },
  { id: "ROMEO", label: "ROMEO", perDosePrice: [8, 8.75, 10] },
  { id: "Tadalafil5", label: "Tadalafil 5mg", perDosePrice: [3, 3.25, 3.75] },
  { id: "Tadalafil10", label: "Tadalafil 10mg", perDosePrice: [6, 6.5, 7.5] },
  { id: "Tadalafil20", label: "Tadalafil 20mg", perDosePrice: [12, 13.25, 15] },
  { id: "Sildenafil25", label: "Sildenafil 25mg", perDosePrice: [4, 4.5, 5] },
  {
    id: "Sildenafil50",
    label: "Sildenafil 50mg",
    perDosePrice: [7, 7.75, 8.75]
  }
];

export const MAX_AMOUNT = 50;

export const drugSelections = [
  {
    id: "EROS",
    labelOptions: {
      label: "EROS",
    description: `Eros is a cutting edge formulation unlike any other medication currently available anywhere 
                    for the treatment of Erectile Dysfunction. 
                    Prescription strength Tadalafil (Cialis) and Apomorphine
                    are combined to create a super drug with a duration 
                    of action up to 42 hours.`,
      price: 18.75
    }
  },
  {
    id: "ROMEO",
    labelOptions: {
      label: "ROMEO",
      description: `Romeo is a combination product utilizing prescription 
                    strength Sildenafil (Viagra) as the primary component 
                    in conjunction with Apomorphine. Romeo is enhanced to 
                    be more effective than Viagra alone with a duration of 
                    action up to 6 hours.`,
      price: 10
    }
  },
  {
    id: "Tadalafil",
    labelOptions: {
      label: "Tadalafil",
      description: "Generic form of Cialis used to treat Erectile Dysfunction",
      price: 15
    }
  },
  {
    id: "Sildenafil",
    labelOptions: {
      label: "Sildenafil",
      description: "Generic form of Viagra used to treat Erectile Dysfunction",
      price: 8.75
    }
  }
];

function drugName(subscription) {
  let drug = subscription.drugSelection;
  switch (subscription.drugSelection) {
    case "EROS":
    case "ROMEO":
      break;

    default:
      drug = subscription.drugSelection + subscription.doseOption;
  }

  return drug;
}

export function validDrugOption(subscription) {
  const drug = drugName(subscription);

  const obj = drugPricing.find(x => x.id === drug);
  return obj;
}

export function getPrices(subscription) {
  const drug = subscription.drugSelection + subscription.doseOption;
  const doses = subscription.timesPerMonth;
  let obj = drugPricing.find(x => x.id === drug);
  if (!obj) {
    return {
      display: `${drug} not found`,
      monthly: 0,
      sixmonth: 0,
      monthlyDoses: 0,
      threeMonth: 0,
      threeTotal: 0,
      sixMonth: 0,
      sixTotal: 0
    };
  }
  const monthly = obj.perDosePrice[2] * doses;
  const threeMonth = obj.perDosePrice[1] * doses;

  const sixMonth = obj.perDosePrice[0] * doses;
  return {
    display: obj.label,
    monthlyDoses: doses,
    monthly: monthly,
    threeMonth: threeMonth,
    threeTotal: threeMonth * 3,
    sixMonth: sixMonth,
    sixTotal: sixMonth * 6
  };
}

export function formatMoney(
  amount,
  decimalCount = 2,
  decimal = ".",
  thousands = ","
) {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      "$" +
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    );
  } catch (e) {
    console.log(e);
  }
}

export const drugDisplaySetup = subscription => {
  const pricing = getPrices(subscription);
  const options = {
    display: "",
    monthlyDoses: 0,
    title: "",
    total: 0,
    doses: 0,
    per: "",
    interval: "",
    noDiscount: 0
  };

  options.display = pricing.display;
  options.monthlyDoses = pricing.monthlyDoses;

  switch (subscription.shippingInterval) {
    case "everySix":
      options.title = "6 Month Delivery";
      options.total = pricing.sixTotal;
      options.doses = pricing.monthlyDoses * 6;
      options.per = "6 mo";
      options.interval = "every 6 months";
      options.noDiscount = pricing.monthly * 6;
      break;

    case "everyThree":
      options.title = "3 Month Delivery";
      options.total = pricing.threeTotal;
      options.doses = pricing.monthlyDoses * 3;
      options.per = "3 mo";
      options.interval = "every 3 months";
      options.noDiscount = pricing.monthly * 3;
      break;

    case "monthly":
      options.title = "Monthly Delivery";
      options.total = pricing.monthly;
      options.doses = pricing.monthlyDoses;
      options.per = "mo";
      options.interval = "monthly";
      options.noDiscount = 0;
      break;

    default:
  }
  return options;
};
