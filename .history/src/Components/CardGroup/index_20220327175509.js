import React from "react";
import { Container, Title, Item } from "./styles/cardgroup";

function CardGroup({ title, data }) {
	console.log("title", data);
	return (
		<Container>
			<CardGroup.Title>{title}</CardGroup.Title>
			{data?.length > 0 &&
				data.map((item) => {
					return (
						<CardGroup.Item key={item.id}>
							<img
								src={`./images/${item.title}/${item.info.genre}/${item.info.slug}/small.jpg`}
								alt=""
							/>
							<div>
								<h3>{item.info.title}</h3>
							</div>
						</CardGroup.Item>
					);
				})}
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
