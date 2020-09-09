import gql from "graphql-tag";

const GET_DISCOUNT = gql`
  query GET_DISCOUNT($code: String!) {
    getDiscount(code: $code) {
      amount
      percent
    }
  }
`;

export const getDiscount = async (code, client) => {
  try {
    var ret = await client.query({
      query: GET_DISCOUNT,
      variables: { code: code },
    });
    console.log("retrun", ret);
    if (ret.data.getDiscount) {
      return ret.data.getDiscount;
    }
  } catch (e) {
    console.log(e);
  }

  return null;
};
