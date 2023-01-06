import React from "react";
import FaqsContainer from "../containers/FaqsContainer";
import FooterContainer from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";
import JumbotronContainer from "../containers/JumbotronContainer";
import Form from "../components/Form";
import Feature from "../components/Feature";
import Header from "../components/Header";
import * as SWITCH from "../constants/routes";

function Home() {
	return (
		<>
			<HeaderContainer>
				<Header.Navbar>
					<Header.Logo to={SWITCH.Home} src={logo} />
					<Header.ButtonLink>Sign</Header.ButtonLink>
				</Header.Navbar>
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
