import { formatMoney } from "../../_helpers";

export const getPricing = (product, option) => {
  const pricing = {
    planName: "",
    amountPerMonth: "",
    amountDue: "",
    amountNoDiscount: "",
    receive: "",
    interval: "",
    savings: "",
  };

  if (option === "1") {
    pricing.planName = "Monthly Plan";
    pricing.amountPerMonth = formatMoney(product.monthly / 100, 0);
    pricing.amountDue = pricing.amountPerMonth;
    pricing.amountNoDiscount = "";
    pricing.receive = "monthly";
    pricing.interval = "monthly";
    pricing.savings = "Pay full price";
    return pricing;
  }

  if (option === "2") {
    pricing.planName = "2 Month Plan";
    pricing.amountPerMonth = formatMoney(product.twoMonth / 100, 0);
    pricing.amountDue = formatMoney((product.twoMonth * 2) / 100, 0);
    pricing.amountNoDiscount = formatMoney((product.monthly * 2) / 100, 0);
    pricing.savings = `Save ${formatMoney(
      ((product.monthly - product.twoMonth) * 12) / 100,
      0
    )} a year!`;
    pricing.receive = "2-month (60 day)";
    pricing.interval = "every two months";
    return pricing;
  }

  if (option === "3") {
    pricing.planName = "3 Month Plan";
    pricing.amountPerMonth = formatMoney(product.threeMonth / 100, 0);
    pricing.amountDue = formatMoney((product.threeMonth * 3) / 100, 0);
    pricing.amountNoDiscount = formatMoney((product.monthly * 3) / 100, 0);
    pricing.savings = `Save ${formatMoney(
      ((product.monthly - product.threeMonth) * 12) / 100,
      0
    )} a year!`;
    pricing.receive = "3-month (90 day)";
    pricing.interval = "every three months";
    return pricing;
  }
};
