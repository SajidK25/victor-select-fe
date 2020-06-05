const products = [
  {
    id: "viralium",
    name: "Viralium Synergy",
    description: "One sentence summary of viralium",
    monthly: 5400,
    twoMonth: 5300,
    threeMonth: 5000,
  },
];

export const getProduct = (productId) => {
  if (!productId) return null;
  return products.find((p) => p.id === productId);
};
