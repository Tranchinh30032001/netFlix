import React from "react";
import { render } from "react-dom";
import App from "./App";
import { StyledGlobal } from "./StyledGlobal";

import { store } from "./Redux/store";
import { Provider } from "react-redux";

render(
	<>
		<Provider value={store}>
			<StyledGlobal />
			<App />
		</Provider>
	</>,
	document.getElementById("root")
);
