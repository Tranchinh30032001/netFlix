import React from "react";
import { Container, Title, Item, Wrapper } from "./styles/cardgroup";

function CardGroup({ title, data }) {
	console.log("title", data);
	return (
		<Container>
			<CardGroup.Title>{title}</CardGroup.Title>
			<CardGroup.Wrapper>
				{data?.length > 0 &&
					data.map((item) => {
						return (
							<CardGroup.Item key={item.id}>
								<img
									src={`./images/${item.title}/${item.info.genre}/${item.info.slug}/small.jpg`}
									alt=""
								/>
								<div className="detail">
									<h3>{item.info.title}</h3>
									<p>{item.info.description}</p>
								</div>
							</CardGroup.Item>
						);
					})}
			</CardGroup.Wrapper>
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
CardGroup.Wrapper = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};
