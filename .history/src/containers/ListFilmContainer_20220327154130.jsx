import React from "react";
import ListFilm from ".H/components/ListFilm/index";
import PartOfFilm from "../components/PartOfFilm";
import { handleData } from "../handleData";
function ListFilmContainer() {
	const Data = HandleData();
	return (
		<>
			{Data &&
				Data.map((item, index) => {
					return <PartOfFilm key={index} {...item} />;
					// từng chủ đề trong phim
				})}
		</>
	);
}

export default ListFilmContainer;
