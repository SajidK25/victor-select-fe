import ApolloClient from "apollo-client";
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { endpoint } from "./config";
// import { LOCAL_STATE_QUERY } from '../components/Cart'
const LOCAL_STATE_QUERY = gql`
  query {
    sleepType @client
  }
`;

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: createHttpLink({ uri: endpoint, credentials: "include" }),
  cache,
  resolvers: {}
});

cache.writeData({
  data: {
    sleepType: ""
  }
});

export default client;
