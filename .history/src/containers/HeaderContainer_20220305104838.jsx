import React from "react";
import logo from "../logo.svg";
import * as SWITCH from "../constants/routes";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

function HeaderContainer({ children }) {
	return (
		<Header>
			<Header.Navbar>
				<Header.Logo to={SWITCH.Home} src={logo} />
				<Header.ButtonLink>Sign In</Header.ButtonLink>
			</Header.Navbar>
			{children}
		</Header>
	);
}

export default HeaderContainer;
