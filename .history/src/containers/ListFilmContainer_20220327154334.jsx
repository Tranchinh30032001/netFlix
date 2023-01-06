import React from "react";
import PartOfFilm from "../components/PartOfFilm";
import { Data } from "../handleData";
function ListFilmContainer() {
	// const Data = HandleData();
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
