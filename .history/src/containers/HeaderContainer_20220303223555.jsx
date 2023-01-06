import React from "react";
import logo from "../logo.svg";
import * as SWITCH from "../constants/routes";

function HeaderContainer() {
	return (
		<Header>
			<Header.Navbar>
				<Header.Logo />
				<Header.ButtonLink>Sign In</Header.ButtonLink>
			</Header.Navbar>
		</Header>
	);
}

export default HeaderContainer;
