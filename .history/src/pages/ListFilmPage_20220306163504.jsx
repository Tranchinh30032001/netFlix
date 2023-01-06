import React from "react";
import Header from "../components/Header";
import HeaderContainer from "../containers/HeaderContainer";
import ListFilmContainer from "../containers/ListFilmContainer";
import logo from "../logo.svg";

function ListFilm() {
	return (
		<ListFilmContainer>
			<HeaderContainer bg>
				<Header.Navbar>
					<Header.Logo src={logo} />
				</Header.Navbar>
			</HeaderContainer>
		</ListFilmContainer>
	);
}

export default ListFilm;
