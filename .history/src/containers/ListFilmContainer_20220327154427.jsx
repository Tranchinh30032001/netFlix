import React from "react";
import PartOfFilm from "../components/PartOfFilm";
import { Data } from "../handleData";
function ListFilmContainer() {
	return (
		<>
			{Data &&
				Data.map((item, index) => {
					return <PartOfFilm key={index} {...item} />;
				})}
		</>
	);
}

export default ListFilmContainer;
