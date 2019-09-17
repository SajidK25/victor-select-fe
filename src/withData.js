import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { prod_endpoint, dev_endpoint } from "./config";

const cache = new InMemoryCache();
const endpoint =
  process.env.NODE_ENV === "development" ? dev_endpoint : prod_endpoint;

console.log(process.env.NODE_ENV);

const client = new ApolloClient({
  link: createHttpLink({
    uri: endpoint,
    credentials: "include"
  }),
  cache,
  resolvers: {}
});

cache.writeData({
  data: {
    sleepType: ""
  }
});

export default client;
