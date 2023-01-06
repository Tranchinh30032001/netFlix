import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";
import { useParams } from "react-router-dom";
import * as SWITCH from "../constants/routes";

function SignIn() {
	const { SWITCH.SignIn } = useParams();
	console.log(SWITCH.SignIn);
	return (
		<>
			<HeaderContainer>toi la ban</HeaderContainer>
			<FooterContainer />
		</>
	);
}

export default SignIn;
