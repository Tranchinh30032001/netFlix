import React from "react";
import ListFilm from "../components/ListFilm";

function ListFilmContainer({ children }) {
	return <ListFilm>{children}</ListFilm>;
}

export default ListFilmContainer;
