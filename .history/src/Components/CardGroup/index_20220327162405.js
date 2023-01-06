import React from "react";
import styled from "styled-components";
import { Container, Title } from "./styles/cardgroup";

function Cardgroup({ title, data }) {
	console.log("title", title);
	return (
		<Container>
			<Cardgroup.Title>{title}</Cardgroup.Title>
			<CartGroup.Item></CartGroup.Item>
		</Container>
	);
}

export default Cardgroup;
const Container = styled.div``;
