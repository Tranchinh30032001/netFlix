import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";
import { useParams } from "react-router-dom";

function SignIn() {
	const Params = useParams();
	console.log(Params);
	return (
		<>
			<HeaderContainer>toi la ban</HeaderContainer>
			<FooterContainer />
		</>
	);
}

export default SignIn;
