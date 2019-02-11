import React from 'react';
import styled from 'styled-components';

const Launch = ({flight_number, mission_name, launch_date_local, launch_success}) => (
	<LaunchContainer>
		<h1>{mission_name}</h1>
		<div>
			<span>{flight_number}</span>
			<span>{launch_date_local}</span>
			<span>{launch_success}</span>
		</div>
	</LaunchContainer>
);

export default Launch;

const LaunchContainer = styled('div')`
	width: 70%;
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

	div {
		width: 50%;
		display: flex;
      margin: 0 auto;
		justify-content: flex-end;
		align-content: center;
      border: 1px solid red;
	}

	span {
		padding: 1em;
		margin: 1em;
	}
`;
