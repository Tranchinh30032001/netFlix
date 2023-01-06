import React, { useState } from "react";
import { Container, Title, Item, Wrapper, Feature } from "./styles/cardgroup";

function CardGroup({ title, data }) {
	const [itemFeature, setItemFeature] = useState("");
	const [open, setOpen] = useState("");
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
								setOpen={() => item.id}
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
			{itemFeature && (
				<CardGroup.Feature>
					<div className="left">
						{<h2>{itemFeature.info.title}</h2>}
						{<p>{itemFeature.info.description}</p>}
						<div className="rating">
							<h4 className="maturity">{itemFeature.info.maturity}</h4>
							<h4>{itemFeature.info.title}</h4>
						</div>
						<div className="btn-play">Play</div>
					</div>
					<div className="right">
						<img
							src={`./images/${itemFeature.title}/${itemFeature.info.genre}/${itemFeature.info.slug}/large.jpg`}
							alt=""
						/>
					</div>
				</CardGroup.Feature>
			)}
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
	};
	return <Item onClick={handleFeature}>{children}</Item>;
};
CardGroup.Wrapper = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};
CardGroup.Feature = ({ children }) => {
	return <Feature>{children}</Feature>;
};
