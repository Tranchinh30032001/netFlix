import React from "react";
import { Container, Title, Item } from "./styles/cardgroup";

function CardGroup({ title, data }) {
	console.log("title", data);
	return (
		<Container>
			<CardGroup.Title>{title}</CardGroup.Title>
			{/* {data?.length > 0} */}
		</Container>
	);
}

export default CardGroup;

CardGroup.Title = ({ children }) => {
	return <Title>{children}</Title>;
};
CardGroup.Item = ({ children }) => {
	return <Item>{children}</Item>;
};
