import React, { useState } from "react";
import logo from "../logo.svg";
import * as SWITCH from "../constants/routes";
import Header from "../components/Header";

function HeaderContainer({ children }) {
	const [sign, setSign] = useState(true);
	return <Header>{children}</Header>;
}

export default HeaderContainer;
