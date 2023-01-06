import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as SWITCH from "./constants/routes";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route to={SWITCH.Home} element={<Home />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
