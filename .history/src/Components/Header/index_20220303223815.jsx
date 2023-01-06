import React from "react";
import {Link as RouterLink} from 'react-router-dom'

function Header({ children, ...restProps }) {
	return <Background>{children}</Background>;
}

Header.Navbar = ({ children, ...restProps }) => {
	return <Navbar>{children}</Navbar>;
};
Header.Logo = ({ to, ...restProps }) => {
	return <Logo to={to} {...restProps} />;
};
Header.ButtonLink = ({children, ...restProps}) => {
    return (

    )
}

export default Header;
