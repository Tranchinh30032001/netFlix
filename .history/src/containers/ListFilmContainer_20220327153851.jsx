import React from "react";
import ListFilm from "../components/ListFilm/index";
import PartOfFilm from "../components/PartOfFilm";
import { result } from "../handleData";
function ListFilmContainer() {
	console.log("result: ", result);
	return (
		<>
			{result &&
				result.map((item, index) => {
					return <PartOfFilm key={index} {...item} />;
					// từng chủ đề trong phim
				})}
		</>
	);
}

export default ListFilmContainer;
