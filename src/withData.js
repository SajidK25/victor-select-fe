import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { prod_endpoint, dev_endpoint } from "./config";

const cache = new InMemoryCache();
const endpoint = prod_endpoint;
// const endpoint = dev_endpoint;
//  process.env.NODE_ENV === "development" ? dev_endpoint : prod_endpoint;

console.log(process.env.NODE_ENV);

const client = new ApolloClient({
  link: createHttpLink({
    uri: endpoint,
    credentials: "include"
  }),
  cache,
  resolvers: {}
});

const data = {
  sleepType: "",
  user: {
    firstName: "",
    lastName: "",
    zipCode: "",
    email: "",
    gender: ""
  },
  networkStatus: {
    __typename: "Network Status",
    isConnected: false
  }
};

cache.writeData({ data });

// cache.onResetStore(() => cache.writeData({ data }));

export default client;
