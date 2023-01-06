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
		</Header>
	);
}

export default HeaderContainer;
