import React, { useEffect } from "react";
import styled from "styled-components";
import CardGroup from "../components/CardGroup";
import { HandleData } from "../handleData";

function ListFilmContainer() {
	const Data = HandleData();
	return (
		<Container>
			<Inner>
				{Data?.length > 0 &&
					Data.map((item) => {
						return <CardGroup key={item.title} {...item} />;
					})}
			</Inner>
		</Container>
	);
}

export default ListFilmContainer;
const Container = styled.div`
	width: 100%;
	background-color: #000000;
`;
const Inner = styled.div`
	width: 98%;
	margin: 0 auto;
`;
