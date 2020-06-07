import gql from "graphql-tag";

export const UPDATECURRVISIT_MUTATION = gql`
  mutation UPDATECURRVISIT_MUTATION($input: Json!) {
    updateCurrVisit(input: $input) {
      message
    }
  }
`;

export const SAVENEWVISIT_MUTATION = gql`
  mutation SAVENEWVISIT_MUTATION($input: Json!) {
    saveNewVisit(input: $input) {
      message
    }
  }
`;

export const SAVENEWSUPPLEMENT_MUTATION = gql`
  mutation SAVENEWSUPPLEMENT_MUTATION($input: Json!) {
    saveNewSupplement(input: $input) {
      message
    }
  }
`;
