import React from "react";
import ListFilm from "../components/ListFilm/index";
import PartOfFilm from "../components/PartOfFilm";
import { HandleData } from "../handleData";

function ListFilmContainer() {
	const Data = HandleData();
	console.log(Data);
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