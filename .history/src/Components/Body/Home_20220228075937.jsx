import React from "react";
import styled from "styled-components";

function Home() {
	return <StyledHome></StyledHome>;
}

export default Home;

const StyledHome = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background: url("https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")
		no-repeat;
	background-size: cover;
`;
