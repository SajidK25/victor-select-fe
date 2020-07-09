import gql from "graphql-tag";

export const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      user {
        id
        email
        firstName
        lastName
        role
      }
    }
  }
`;

export const RESET_MUTATION = gql`
  mutation RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

export const RESETPASSWORD_MUTATION = gql`
  mutation RESETPASSWORD_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      message
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    logout
  }
`;
