import React, { Component } from "react";
import "./App.css";
import logo from "./spacex.png";
import styled from "styled-components";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from "./components/Launches";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});
const App = () => (
  <ApolloProvider client={client}>
    <AppContainer>
      <img src={logo} alt="spacex-logo" />
      <Launches />
    </AppContainer>
  </ApolloProvider>
);

export default App;

const AppContainer = styled("div")`
  margin: 0 auto;
  padding: 1em;

  img {
    width: 300px;
    display: block;
    margin: auto;
  }
`;
