import gql from "graphql-tag";

const VALID_ZIPCODE = gql`
  query VALID_ZIPCODE($zipcode: String!) {
    validZipCode(zipcode: $zipcode)
  }
`;

export const zipcodeIsValid = async (zipCode, client) => {

  try {
    var { data } = await client.query({
      query: VALID_ZIPCODE,
      variables: { zipcode: zipCode }
    });
    return data.validZipCode;
  } catch (e) {
    console.log(e);
    console.log(e.networkError.result.errors);
  }

  return false;
};
