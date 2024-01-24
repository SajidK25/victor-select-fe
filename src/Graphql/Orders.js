import gql from "graphql-tag";

// export const ORDERLIST = gql`
//   query orderList($email: String, $status: String) {
//     orderHistoryById(email: $email, status: $status) {
//       id
//       status
//       new
//       refills
//       amount
//       createdAt
//       shipDate
//       trackingNumber
//       user {
//         firstName
//         lastName
//         birthDate
//       }
//       addressOne
//       addressTwo
//       city
//       state
//       zipcode
//       telephone
//       email
//       prescription {
//         id
//         status
//         type
//         createdAt
//         approvedDate
//         startDate
//         expireDate
//         nextDelivery
//         refillsRemaining
//         product {
//           productName
//           display
//           directions
//           pillsPerDose
//         }
//         addon {
//           productName
//           display
//           directions
//           pillsPerDose
//         }
//         timesPerMonth
//         addonTimesPerMonth
//         shippingInterval
//       }
//     }
//   }
// `;

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
      }
    }
  }
`;
