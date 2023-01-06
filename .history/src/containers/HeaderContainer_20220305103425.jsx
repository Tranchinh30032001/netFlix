import React from "react";
import logo from "../logo.svg";
import * as SWITCH from "../constants/routes";
import Header from "../components/Header";
import Form from "../components/Form";
import Feature from "../components/Feature";

function HeaderContainer() {
	return (
		<Header>
			<Header.Navbar>
				<Header.Logo to={SWITCH.Home} src={logo} />
				<Header.ButtonLink>Sign In</Header.ButtonLink>
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
		</Header>
	);
}

export default HeaderContainer;
