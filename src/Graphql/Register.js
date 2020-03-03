import gql from "graphql-tag";

export const REGISTER_MUTATION = gql`
  mutation REGISTER_MUTATION($input: RegisterInput!) {
    register(input: $input) {
      message
      accessToken
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;
