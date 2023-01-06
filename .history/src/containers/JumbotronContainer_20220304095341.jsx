import React from "react";
import Jumbotron from "../components/jumbotron";
import dataJumbotron from "../fixtures/jumbo.json";

function JumbotronContainer() {
	return (
		<Jumbotron.Container>
			{dataJumbotron.map((item) => {
				return (
					<Jumbotron key={item.id} direction={item.direction}>
						<Jumbotron.Flex>
							<Jumbotron.Title>{item.title}</Jumbotron.Title>
							<Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
						</Jumbotron.Flex>
						<Jumbotron.Flex>
							<Jumbotron.Img src={item.image} alt={item.alt} />
						</Jumbotron.Flex>
					</Jumbotron>
				);
			})}
		</Jumbotron.Container>
	);
}

export default JumbotronContainer;
