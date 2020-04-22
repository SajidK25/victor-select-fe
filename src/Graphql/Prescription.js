import gql from "graphql-tag";

export const PATIENT_PRESCRIPTIONS = gql`
  query {
    getPatientPrescriptions {
      id
      type
      status
    }
  }
`;
