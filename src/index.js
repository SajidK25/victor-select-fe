import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { App } from "./App";
import client from "./withData";
import UserProvider from "./context/UserProvider";
// import "./index.css";

const StartApp = () => (
  <ApolloProvider client={client}>
    <UserProvider>
      <App />
    </UserProvider>
  </ApolloProvider>
);

ReactDOM.render(<StartApp />, document.getElementById("root"));
