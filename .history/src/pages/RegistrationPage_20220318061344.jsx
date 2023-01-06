import React from "react";
import Header from "../components/Header";
import HeaderContainer from "../containers/HeaderContainer";
import logo from "../logo.svg";
import * as SWITCH from "../constants/routes";
import Registration from "../components/Registration";

function RegistrationPage() {
	return (
		<>
			<HeaderContainer>
				<Header.Navbar>
					<Header.Logo to={SWITCH.Home} src={logo} />
				</Header.Navbar>
			</HeaderContainer>
			<Registration />
		</>
	);
}

export default RegistrationPage;
