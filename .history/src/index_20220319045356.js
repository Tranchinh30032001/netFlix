import React from "react";
import { render } from "react-dom";
import App from "./App";
import { StyledGlobal } from "./StyledGlobal";
import { firebases } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

render(
	<>
		<FirebaseContext.Provider value={{ firebases }}>
			<StyledGlobal />
			<App />
		</FirebaseContext.Provider>
	</>,
	document.getElementById("root")
);
