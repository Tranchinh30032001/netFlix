import React from "react";
import FaqsContainer from "../containers/FaqsContainer";
import FooterContainer from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";
import JumbotronContainer from "../containers/JumbotronContainer";

function Home() {
	return (
		<>
			<HeaderContainer>
				<Feature.Content>
					<Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
					<Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
					<Form>
						<Form.Introduce>
							Ready to watch? Enter your email to create or restart your
							membership.
						</Form.Introduce>
						<Form.Break />
						<Form.Input placeholder="Email adress" />
						<Form.Button>get started</Form.Button>
					</Form>
				</Feature.Content>
			</HeaderContainer>
			<JumbotronContainer />
			<FaqsContainer />
			<FooterContainer />
		</>
	);
}

export default Home;
