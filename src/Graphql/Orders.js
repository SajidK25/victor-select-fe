import gql from "graphql-tag";



export const ORDERLIST = gql`
  query orderList($email: String!) {
    orderHistoryById(email: $email) {
      id
      status
      new
      refills
      amount
      createdAt
      shipDate
      trackingNumber
      user {
        firstName
        lastName
        birthDate
        email
      }
    }
  }
`;
