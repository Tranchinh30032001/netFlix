import React, { useEffect } from "react";
import styled from "styled-components";
import Cardgroup from "../components/CardGroup/styles/cardgroup";
import { HandleData } from "../handleData";

function ListFilmContainer() {
	const Data = HandleData();
	return (
		<Container>
			<Inner>
				{Data?.length > 0 &&
					Data.map((item) => {
						<Cardgroup key={item.title} />;
					})}
			</Inner>
		</Container>
	);
}

export default ListFilmContainer;
const Container = styled.div``;
const Inner = styled.div``;
