import gql from "graphql-tag";

export const GET_PRODUCT = gql`
  query getProduct($id: String!) {
    getProduct(id: $id) {
      productId
      type
      productName
      display
      monthlyPrice
      twoMonthPrice
      threeMonthPrice
    }
  }
`;
