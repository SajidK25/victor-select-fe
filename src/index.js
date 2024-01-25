import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { App } from "./App";
import client from "./withData";
// import "./index.css";

const StartApp = () => (
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>
);

ReactDOM.render(<StartApp />, document.getElementById("root"));
