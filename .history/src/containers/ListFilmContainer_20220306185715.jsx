import React from "react";
import Listfilm from "../components/ListFilm";

function ListFilmContainer({ children }) {
	return <Listfilm>{children}</Listfilm>;
}

export default ListFilmContainer;
