import React, { useState } from "react";
import { Container, Title, Item, Wrapper, Feature } from "./styles/cardgroup";

function CardGroup({ title, data }) {
	const [itemFeature, setItemFeature] = useState("");
	const [open, setOpen] = useState(false);
	console.log(itemFeature);
	return (
		<Container>
			<CardGroup.Title>{title}</CardGroup.Title>
			<CardGroup.Wrapper>
				{data?.length > 0 &&
					data.map((item) => {
						return (
							<CardGroup.Item
								key={item.id}
								item={item}
								setItemFeature={setItemFeature}
								setOpen={setOpen}
								open={open}
							>
								<img
									src={`./images/${item.title}/${item.info.genre}/${item.info.slug}/small.jpg`}
									alt=""
								/>
								<div className="detail">
									<h4>{item.info.title}</h4>
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
CardGroup.Item = ({ children, item, setItemFeature, setOpen, open }) => {
	const handleFeature = () => {
		setItemFeature(item);
		// setOpen(!open);
	};
	return <Item onClick={handleFeature}>{children}</Item>;
};
CardGroup.Wrapper = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};
CardGroup.Feature = ({ children }) => {
	return <Feature>{children}</Feature>;
};
