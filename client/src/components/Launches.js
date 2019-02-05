import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "styled-components";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  return (
    <LaunchesContainer>
      <h1>Launches</h1>
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h3>loading...</h3>;
          if (error) console.error(error);
          console.log(data);
          return <h1>test</h1>;
        }}
      </Query>
    </LaunchesContainer>
  );
};

export default Launches;

const LaunchesContainer = styled("div")`
  margin: 0.5em auto;
  padding: 1em;

  h1 {
    font-size: 2em;
    margin: 1em auto;
  }
`;
