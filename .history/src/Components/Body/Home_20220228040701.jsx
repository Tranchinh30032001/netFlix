import React from "react";
import styled from "styled-components";

function Home() {
	return (
		<StyledHome>
			<img
				width="100%"
				src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
				alt=""
			/>
		</StyledHome>
	);
}

export default Home;

const StyledHome = styled.div`
	img {
		width: 100vw;
	}
`;
