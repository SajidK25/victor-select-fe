import {
  personal,
  payment,
  subscription,
} from "../Questionaire/Shared/ProductInfo";

export const initialProductValues = {
  type: "SUPPLEMENT",
  personal,
  payment,
  subscription,
  email: "",
  password: "",
  accept: false,
};

initialProductValues.subscription.shippingInterval = "3";

const products = [
  {
    id: "viralium",
    name: "Viralium Synergy",
    description:
      "Custom compounded anti-viral regimen containing the most vital elements to combat viruses.",
    monthly: 5400,
    twoMonth: 5100,
    threeMonth: 4800,
  },
  {
    id: "super-immune",
    name: "Victory Super Immune Proprietary Kit",
    description:
      "This kit contains hand selected supplements and Viralium Synergy for extra protection against viruses.",
    monthly: 16000,
    twoMonth: 15200,
    threeMonth: 14400,
  },
  {
    id: "ultimate-immune",
    name: "Victory Ultimate Immune Proprietary Kit",
    description:
      "The most comprehensive kit for viral resistance containing everything in the Super kit plus additional protection.",
    monthly: 30000,
    twoMonth: 28500,
    threeMonth: 27000,
  },
];

export const getProduct = (productId) => {
  if (!productId) return null;
  return products.find((p) => p.id === productId);
};
