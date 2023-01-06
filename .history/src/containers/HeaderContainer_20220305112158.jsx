import React, { useState } from "react";
import logo from "../logo.svg";
import * as SWITCH from "../constants/routes";
import Header from "../components/Header";

function HeaderContainer({ children }) {
	const [sign, setSign] = useState(true);
	return (
		<Header>
			<Header.Navbar>
				<Header.Logo to={SWITCH.Home} src={logo} />
				<Header.ButtonLink>{sign ? "Exit" : "Sign In"}</Header.ButtonLink>
			</Header.Navbar>
			{children}
		</Header>
	);
}

export default HeaderContainer;
