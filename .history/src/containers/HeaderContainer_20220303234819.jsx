import React from "react";
import logo from "../logo.svg";
import * as SWITCH from "../constants/routes";
import Header from "../components/Header";

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
			</Header.Content>
		</Header>
	);
}

export default HeaderContainer;
