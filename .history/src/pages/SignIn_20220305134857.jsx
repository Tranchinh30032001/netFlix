import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";
import Header from "../components/Header";
import * as SWITCH from "../constants/routes";
import logo from "../logo.svg";
import FormSignIn from "../components/FormSignIn";

function SignIn() {
	return (
		<>
			<HeaderContainer>
				<Header.Navbar>
					<Header.Logo to={SWITCH.Home} src={logo} />
					<Header.ButtonLink link={SWITCH.Home}>Exit</Header.ButtonLink>
				</Header.Navbar>
				<FormSignIn></FormSignIn>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}

export default SignIn;
