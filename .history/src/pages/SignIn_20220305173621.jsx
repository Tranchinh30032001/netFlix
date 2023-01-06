import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";
import Header from "../components/Header";
import * as SWITCH from "../constants/routes";
import logo from "../logo.svg";
import FormSignInContainer from "../containers/FormSignInContainer";
import Form from "../components/Form";

function SignIn() {
	return (
		<>
			<HeaderContainer>
				<Header.Navbar>
					<Header.Logo to={SWITCH.Home} src={logo} />
					<Header.ButtonLink link={SWITCH.Home}>Exit</Header.ButtonLink>
				</Header.Navbar>
				<FormSignInContainer />
				<Form />
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}

export default SignIn;