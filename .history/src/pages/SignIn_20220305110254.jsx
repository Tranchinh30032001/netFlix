import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";
import { useParams } from "react-router-dom";
import { SignIn } from "../constants/routes";

function SignIn() {
	const { SignIn } = useParams();
	console.log(SignIn);
	return (
		<>
			<HeaderContainer>toi la ban</HeaderContainer>
			<FooterContainer />
		</>
	);
}

export default SignIn;
