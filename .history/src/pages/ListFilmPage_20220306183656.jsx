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
				<Header.Content>
					<Header.Title>Watch Joker Now</Header.Title>
					<Header.Text>
						Lunar New Year Festival often falls between late January and early
						February; it is among the most important holidays in Vietnam.
						Officially, the festival includes the 1st, 2nd, and 3rd day in Lunar
						Calendar; however, Vietnamese people often spend nearly a month
						celebrating this special event.
					</Header.Text>
				</Header.Content>
			</HeaderContainer>
		</ListFilmContainer>
	);
}

export default ListFilm;
