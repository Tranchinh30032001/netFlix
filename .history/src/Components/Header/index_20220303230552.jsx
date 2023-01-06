import React from "react";
import { Link as RouterLink } from "react-router-dom";
import * as SWITCH from "../../constants/routes";
import { Background, Navbar, Logo, ButtonLink } from "./styles/header";

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
	return <ButtonLink to={SWITCH.SignIn}>{children}</ButtonLink>;
};

export default Header;
