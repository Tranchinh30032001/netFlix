import React, { useState } from "react";
import logo from "../logo.svg";
import * as SWITCH from "../constants/routes";
import Header from "../components/Header";

function HeaderContainer({ children, ...restProps }) {
	return <Header {...restProps}>{children}</Header>;
}

export default HeaderContainer;
