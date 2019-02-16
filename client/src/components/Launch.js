import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import moment from "moment";

const Launch = ({ flight_number, mission_name, launch_date_local, launch_success }) => (
  <LaunchContainer>
    <Title success={launch_success}>{mission_name}</Title>
    <Details>
      <p>
        <span>Flight</span>
        {flight_number}
      </p>
      <p>{moment(launch_date_local).format("MMMM Do YYYY")}</p>
    </Details>
    <Button to={`/${flight_number}`}>View Launch Details</Button>
  </LaunchContainer>
);

export default Launch;

const LaunchContainer = styled("div")`
  width: 70%;
  display: flex;
  border-radius: 5px;
  margin: 1em auto;
  padding: 1.5em;
  background: hsl(0, 0%, 51%);
  color: whitesmoke;
  &:hover {
    transform: translateY(-5px);
    transition-duration: 300ms;
    cursor: pointer;
  }
  h1 {
    font-weight: 300;
    font-size: 4rem;
  }
`;

const Details = styled("div")`
  width: auto;
  padding-right: 1em;
  display: flex;
  margin: 0 auto;
  justify-content: flex-end;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 1rem;
    margin-right: 0.5em;
  }

  p {
    display: inline-block;
    margin: 0 1em;
  }
`;

export const Button = styled(Link)`
  text-decoration: none;
  padding: 0.4em;
  border-radius: 3px;
  display: block;
  margin: 1em 0;
  font-size: 0.7em;
  align-self: center;
  border: none;
  height: 30px;
  background: hsl(0, 0%, 33%);
  color: whitesmoke;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition-duration: 400ms;
  }
`;

const Title = styled("h1")`
  color: ${({ success }) => (success ? "hsl(91, 50%, 39%)" : "hsl(3, 87%, 60%)")};
  font-weight: bold;
  text-shadow: 1px 1px 1px hsl(0, 0%, 27%);
`;
