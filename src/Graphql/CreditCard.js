import gql from "graphql-tag";

export const GETUSERCREDITCARD = gql`
  query {
    getUserCreditCard {
      ccType
      ccNumber
      ccExpire
    }
  }
`;
