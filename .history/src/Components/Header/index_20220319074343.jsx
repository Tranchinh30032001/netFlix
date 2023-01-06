import React, { createContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import * as SWITCH from "../../constants/routes";
import {
	Background,
	Navbar,
	Logo,
	ButtonLink,
	Search,
	User,
	Right,
} from "./styles/header";

function Header({ children, bg, ...restProps }) {
	return (
		<Background bg={bg} {...restProps}>
			{children}
		</Background>
	);
}

Header.Navbar = ({ children, ...restProps }) => {
	return <Navbar>{children}</Navbar>;
};
Header.Logo = ({ to, ...restProps }) => {
	return (
		<RouterLink to={SWITCH.Home}>
			<Logo to={to} {...restProps} />
		</RouterLink>
	);
};
Header.ButtonLink = ({ children, link, ...restProps }) => {
	return <ButtonLink to={link}>{children}</ButtonLink>;
};
Header.Search = function HeaderSearch({ children, Icon }) {
	const [search, setSearch] = useState(false);
	const handleClick = () => {
		setSearch(!search);
	};
	return (
		<Search bg={search}>
			{search && <input type="text" placeholder="Search ..." />}
			<Icon
				onClick={handleClick}
				className={!search ? "icon-search_active" : "icon-search"}
			/>
		</Search>
	);
};
Header.User = ({ photoUrl, Icon }) => {
	return (
		<User>
			<a href="">
				<img src={photoUrl} alt="" />
			</a>
			<Icon className="icon-down" />
		</User>
	);
};
Header.Right = ({ children }) => {
	return <Right>{children}</Right>;
};
export default Header;
