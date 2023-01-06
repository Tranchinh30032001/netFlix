import React, { useEffect } from "react";
import styled from "styled-components";
import { HandleData } from "../handleData";

function ListFilmContainer() {
	const Data = HandleData();
	return (
		<Container>
			<Inner></Inner>
		</Container>
	);
}

export default ListFilmContainer;
const Container = styled.div``;
const Inner = styled.div``;
