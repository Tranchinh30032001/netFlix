import React from "react";
import { Link as RouterLink } from "react-router-dom";
import * as SWITCH from "../../constants/routes";

function Header({ children, ...restProps }) {
	return <Background>{children}</Background>;
}

Header.Navbar = ({ children, ...restProps }) => {
	return <Navbar>{children}</Navbar>;
};
Header.Logo = ({ to, ...restProps }) => {
	return <Logo to={to} {...restProps} />;
};
Header.ButtonLink = ({ children, ...restProps }) => {
	return (
		<RouterLink to={SWITCH.SignIn}>
			<ButtonLink>{children}</ButtonLink>
		</RouterLink>
	);
};

export default Header;
