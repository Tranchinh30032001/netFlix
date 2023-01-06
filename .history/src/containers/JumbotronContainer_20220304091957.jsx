import React from "react";
import dataJumbotron from "../fixtures/jumbo.json";

function JumbotronContainer() {
	return (
		<Container>
			{dataJumbotron?.length > 0 &&
				dataJumbotron.map((item) => {
					return (
						<Jumbotron key={item.id} direction={item.direction}>
							<Jumbotron.Left>
								<Jumbotron.Title>{item.title}</Jumbotron.Title>
								<Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
							</Jumbotron.Left>
							<Jumbotron.Img src={item.image} alt={item.alt} />
						</Jumbotron>
					);
				})}
		</Container>
	);
}

export default JumbotronContainer;
