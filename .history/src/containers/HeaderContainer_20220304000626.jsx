import React from "react";
import logo from "../logo.svg";
import * as SWITCH from "../constants/routes";
import Header from "../components/Header";
import Form from "../components/Form";

function HeaderContainer() {
	return (
		<Header>
			<Header.Navbar>
				<Header.Logo to={SWITCH.Home} src={logo} />
				<Header.ButtonLink>Sign In</Header.ButtonLink>
			</Header.Navbar>
			<Header.Content>
				<Header.Title>Unlimited movies, TV shows, and more.</Header.Title>
				<Header.SubTitle>Watch anywhere. Cancel anytime.</Header.SubTitle>
				<Form>
					<Form.Title>
						Ready to watch? Enter your email to create or restart your
						membership.
					</Form.Title>
					<Form.Input placeholder="Email adress" />
					<Form.Button>get started</Form.Button>
				</Form>
			</Header.Content>
		</Header>
	);
}

export default HeaderContainer;
