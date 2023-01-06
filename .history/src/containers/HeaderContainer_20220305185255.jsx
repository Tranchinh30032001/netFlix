import React, { useState } from "react";
import logo from "../logo.svg";
import * as SWITCH from "../constants/routes";
import Header from "../components/Header";

function HeaderContainer({ children }) {
	console.log("children1", children);
	return <Header>{children}</Header>;
}

export default HeaderContainer;
