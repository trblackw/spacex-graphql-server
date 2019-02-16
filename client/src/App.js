import React from "react";
import "./App.css";
import logo from "./spacexx.png";
import styled from "styled-components";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from "./components/Launches";
import { Router } from "@reach/router";
import LaunchDetails from "./components/LaunchDetails";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});
const App = () => (
  <ApolloProvider client={client}>
    <AppContainer>
      <img src={logo} alt="spacex-logo" />
      <Router>
        <Launches path="/" />
        <LaunchDetails path="/:flight_number" />
      </Router>
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
