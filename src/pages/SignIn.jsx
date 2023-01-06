import React from "react";
import Header from "../components/Header";
import * as SWITCH from "../constants/routes";
import FooterContainer from "../containers/FooterContainer";
import FormSignInContainer from "../containers/FormSignInContainer";
import HeaderContainer from "../containers/HeaderContainer";
import logo from "../logo.svg";

function SignIn() {
	return (
		<>
			<HeaderContainer>
				<Header.Navbar>
					<Header.Logo to={SWITCH.Home} src={logo} />
					<Header.ButtonLink link={SWITCH.Home}>Exit</Header.ButtonLink>
				</Header.Navbar>
				<FormSignInContainer />
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}

export default SignIn;
