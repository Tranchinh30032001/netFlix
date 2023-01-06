import React from "react";
import ListFilm from "../pages/ListFilmPage";

function ListFilmContainer({ children, ...restProps }) {
	return <ListFilm>{children}</ListFilm>;
}

export default ListFilmContainer;
