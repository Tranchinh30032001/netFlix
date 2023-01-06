import React from "react";
import styled from "styled-components";

function Home() {
	return <StyledHome></StyledHome>;
}

export default Home;

const StyledHome = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	background: url("https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")
		no-repeat;
	background-size: cover;
`;
