import React from "react";

function Header({ children, ...restProps }) {
	return <Background>{children}</Background>;
}

Header.Navbar = ({ children, ...restProps }) => {
	return <Navbar>{children}</Navbar>;
};
Header.Logo = ({ to, ...restProps }) => {
	return <Logo to={to} {...restProps} />;
};

export default Header;
