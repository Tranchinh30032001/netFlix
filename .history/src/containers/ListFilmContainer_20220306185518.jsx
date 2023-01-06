import React from "react";

function ListFilmContainer({ children, ...restProps }) {
	return <ListFilm>{children}</ListFilm>;
}

export default ListFilmContainer;
