import React from "react";
import Listfilm from "../components/ListFilm";

function ListFilmContainer({ children }) {
	return <ListFilm>{children}</ListFilm>;
}

export default ListFilmContainer;
