import React from "react";
import Home from "./pages/Home";
import * as SWITCH from "./constants/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import ListFilmPage from "./pages/ListFilmPage";
import Registration from "./pages/Registration";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path={SWITCH.Home} element={<Home />} />
					<Route path={SWITCH.SignIn} element={<SignIn />} />
					<Route path={SWITCH.Registration} element={<Registration />} />
					<Route path={SWITCH.ListFilm} element={<ListFilmPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
