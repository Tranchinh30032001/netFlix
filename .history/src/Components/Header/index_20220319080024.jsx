import React, { createContext, useState } from "react";
import { Link as RouterLink, useSearchParams } from "react-router-dom";
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
				className={search ? "icon-search active" : "icon-search"}
			/>
		</Search>
	);
};
Header.User = function HeaderUser({ photoUrl, Icon }) {
	const [active, setActive] = useState(false);
	const handleClick = () => {
		console.log("actice");
		setActive(!active);
	};
	return (
		<User onClick={handleClick}>
			<img src={photoUrl} alt="" />
			<Icon className="icon-down" />
			{active && (
				// <div className="modal">
					<p>Logout</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						quas natus totam commodi asperiores suscipit inventore similique nam
						quos exercitationem beatae itaque, laudantium officia temporibus
						repudiandae dolores sint! Debitis, commodi.
					</p>
				// </div>
			)}
		</User>
	);
};
Header.Right = ({ children }) => {
	return <Right>{children}</Right>;
};
export default Header;
