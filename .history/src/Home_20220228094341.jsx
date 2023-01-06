import React from "react";
import Feature from "./Components/Feature/Feature";
import Navbar from "./Components/Navbar/Navbar";
import "./home.scss";

function Home() {
	return (
		<div className="home">
			<Navbar />
			<Feature />
		</div>
	);
}

export default Home;
