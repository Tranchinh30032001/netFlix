import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./Redux/store";
import { StyledGlobal } from "./StyledGlobal";

render(
	<>
		<Provider value={store}>
			<StyledGlobal />
			<App />
		</Provider>
	</>,
	document.getElementById("root")
);
