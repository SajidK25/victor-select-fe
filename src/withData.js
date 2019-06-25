import ApolloClient from "apollo-boost";
import { endpoint, prodEndpoint } from "./config";
// import { LOCAL_STATE_QUERY } from '../components/Cart'

const client = new ApolloClient({
  uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
  // uri: prodEndpoint,
  request: operation => {
    operation.setContext({
      fetchOptions: {
        credentials: "include"
      }
    });
  },
  // Local data
  clientState: {
    resolvers: {
      Mutation: {
        // toggleCart(_, variables, { cache }) {
        //   // read the cartOpen value from the cache
        //   const { cartOpen } = cache.readQuery({
        //     query: LOCAL_STATE_QUERY
        //   })
        //   // Write the cart State to the opposite
        //   const data = {
        //     data: { cartOpen: !cartOpen }
        //   }
        //   cache.writeData(data)
        //   return data
        // }
      }
    },
    defaults: {
      cartOpen: false
    }
  }
});

export default client;
