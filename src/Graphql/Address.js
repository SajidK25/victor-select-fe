import gql from "graphql-tag";

export const SAVE_ADDRESS = gql`
  mutation SAVE_ADDRESS($input: SaveAddressInput!) {
    saveAddress(input: $input) {
      message
    }
  }
`;
