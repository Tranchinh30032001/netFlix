import React from "react";
import { render } from "react-dom";
import App from "./App";
import { StyledGlobal } from "./StyledGlobal";
import { firebase } from "./lib/firebase.prod";
render(
	<>
		<StyledGlobal />
		<App />
	</>,
	document.getElementById("root")
);
