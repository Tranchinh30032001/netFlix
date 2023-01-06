import React from "react";
import { render } from "react-dom";
import App from "./App";
import { StyledGlobal } from "./StyledGlobal";
render(
	<>
		<StyledGlobal />
		<App />
	</>,
	document.getElementById("root")
);
