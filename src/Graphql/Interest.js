import gql from "graphql-tag";

// This is interest as in interested"

export const ADDINTEREST = gql`
  mutation ADDINTEREST($input: InterestInput!) {
    addInterest(input: $input) {
      message
    }
  }
`;
