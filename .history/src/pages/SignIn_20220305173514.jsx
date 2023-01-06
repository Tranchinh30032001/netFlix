import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";
import Header from "../components/Header";
import * as SWITCH from "../constants/routes";
import logo from "../logo.svg";
import FormSignInContainer from "../containers/FormSignInContainer";

function SignIn() {
	return (
		<>
			<HeaderContainer>
				<Header.Navbar>
					<Header.Logo to={SWITCH.Home} src={logo} />
					<Header.ButtonLink link={SWITCH.Home}>Exit</Header.ButtonLink>
				</Header.Navbar>
				{/* <FormSignInContainer /> */}
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
					laborum, voluptatem id modi mollitia, unde dolores dolorum architecto
					vel repudiandae corrupti earum nihil qui quis deserunt pariatur est,
					quidem necessitatibus?
				</p>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}

export default SignIn;
