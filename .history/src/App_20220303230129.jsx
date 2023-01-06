import React from "react";
import Home from "./pages/Home";
import * as SWITCH from "./constants/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path={SWITCH.Home} element={<Home />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
