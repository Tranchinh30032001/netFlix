import React from "react";
import { Background, Logo, Navbar, Button } from "./styles/header";

function Header({ children, ...restProps }) {
	return <Background {...restProps}>{children}</Background>;
}

export default Header;

Header.Navbar = function HeaderNavbar(children, ...restProps) {
	return <Navbar {...restProps}>{children}</Navbar>;
};
Header.Logo = function HeaderLogo(children, ...restProps) {
	return <Logo {...restProps} />;
};
Header.Button = function HeaderButton(children, ...restProps) {
	return <Button>{children}</Button>;
};
// Header.Content = function HeaderContent(children, ...restProps) {
// 	return;
// };
// Header.Title = function HeaderTitle(children, ...restProps) {
// 	return;
// };
// Header.SubTitle = function HeaderSubTitle(children, ...restProps) {
// 	return;
// };
