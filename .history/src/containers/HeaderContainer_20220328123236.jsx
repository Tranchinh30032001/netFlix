import React from "react";
import Header from "../components/Header";
// import { memo } from "react";

function HeaderContainer({ children, ...restProps }) {
	return <Header {...restProps}>{children}</Header>;
}

export default HeaderContainer;
