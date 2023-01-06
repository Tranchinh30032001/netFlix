import React from "react";
import logo from "../logo.svg";
import * as SWITCH from "../constants/routes";

function HeaderContainer() {
	return (
		<Header>
			<Header.Navbar>
				<Header.Logo to={SWITCH.Home} logo={logo} />
				<Header.ButtonLink>Sign In</Header.ButtonLink>
			</Header.Navbar>
		</Header>
	);
}

export default HeaderContainer;
