import React from "react";
import Header from "../components/Header";
import HeaderContainer from "../containers/HeaderContainer";
import ListFilmContainer from "../containers/ListFilmContainer";
import logo from "../logo.svg";
import ListFilm from "../components/ListFilm/styles/listfilm";

function ListFilm() {
	return (
		<HeaderContainer bg>
			<Header.Navbar>
				<Header.Logo src={logo} />
			</Header.Navbar>
			<ListFilm.Content>
				<ListFilm.Title>Watch Joker Now</ListFilm.Title>
				<ListFilm.Text>
					Lunar New Year Festival often falls between late January and early
					February; it is among the most important holidays in Vietnam.
					Officially, the festival includes the 1st, 2nd, and 3rd day in Lunar
					Calendar; however, Vietnamese people often spend nearly a month
					celebrating this special event.
				</ListFilm.Text>
			</ListFilm.Content>
		</HeaderContainer>
	);
}

export default ListFilm;
