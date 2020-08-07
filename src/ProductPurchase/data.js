import { personal, payment, subscription } from "../Questionaire/Shared/ProductInfo";

export const initialProductValues = {
  type: "SUPPLEMENT",
  personal,
  payment,
  subscription,
  email: "",
  password: "",
  accept: false,
};

initialProductValues.subscription.shippingInterval = "1";

const currentProduct = {
  id: "",
  name: "",
  description: "",
  monthly: 0,
  twoMonth: 0,
  threeMonth: 0,
};

export const setupProduct = (productRec) => {
  if (!productRec) return null;
  if (productRec.type !== "SUPPLEMENT") return null;

  currentProduct.id = productRec.productId;
  currentProduct.name = productRec.productName;
  currentProduct.description = productRec.display;
  currentProduct.monthly = productRec.monthlyPrice;
  currentProduct.twoMonth = productRec.twoMonthPrice;
  currentProduct.threeMonth = productRec.threeMonthPrice;
  return currentProduct;
};
