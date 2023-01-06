import React from "react";
import { render } from "react-dom";
import App from "./App";
import { StyledGlobal } from "./StyledGlobal";
import { firebases } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

render(
	<>
		<FirebaseContext.Provider value={{ firebases }}>
			<StyledGlobal />
			<App />
		</FirebaseContext.Provider>
	</>,
	document.getElementById("root")
);
