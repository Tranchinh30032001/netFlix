import React from "react";
import FaqsContainer from "../containers/FaqsContainer";
import HeaderContainer from "../containers/HeaderContainer";
import JumbotronContainer from "../containers/JumbotronContainer";

function Home() {
	return (
		<>
			<HeaderContainer />
			<JumbotronContainer />
			<FaqsContainer />
		</>
	);
}

export default Home;
