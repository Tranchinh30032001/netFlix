import React from "react";
import "../logo.svg";

function HeaderContainer() {
	return (
		<Header>
			<Header.Navbar>
				<Header.Logo />
				<Header.Button>Sign In</Header.Button>
			</Header.Navbar>
			<Header.Content>
				<Header.Title>Unlimited movies, TV shows, and more.</Header.Title>
				<Header.SubTitle>Watch anywhere. Cancel anytime.</Header.SubTitle>
			</Header.Content>
		</Header>
	);
}

export default HeaderContainer;
