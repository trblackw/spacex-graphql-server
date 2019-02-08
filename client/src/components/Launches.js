import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "styled-components";
import Launch from "./Launch";

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
          return data.launches.map(launch => (
            <Launch
              key={launch.flight_number}
              flight_number={launch.flight_number}
              mission_name={launch.mission_name}
              launch_date_local={launch.launch_date_local}
              launch_success={launch.launch_success}
            />
          ));
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
