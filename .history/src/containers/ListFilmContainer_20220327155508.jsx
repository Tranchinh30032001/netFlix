import React from "react";
import PartOfFilm from "../components/PartOfFilm";
import { HandleData } from "../handleData";
function ListFilmContainer() {
	const Data = HandleData();
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
