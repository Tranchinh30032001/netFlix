import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import * as SWITCH from "./constants/routes";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route to="/" element={<Home />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
