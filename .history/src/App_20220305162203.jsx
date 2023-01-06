import React from "react";
import Home from "./pages/Home";
import * as SWITCH from "./constants/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path={SWITCH.Home} element={<Home />}></Route>
					<Route path={SWITCH.SignIn} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
