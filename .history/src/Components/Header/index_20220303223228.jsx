import React from "react";

function Header({ children, ...restProps }) {
	return <Background>{children}</Background>;
}

export default Header;
