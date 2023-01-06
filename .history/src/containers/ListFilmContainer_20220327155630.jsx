import React from "react";
import { Card } from "reactstrap";
import PartOfFilm from "../components/PartOfFilm";
import { HandleData } from "../handleData";
function ListFilmContainer() {
	const Data = HandleData();
	return (
		<>
			{Data &&
				Data.map((item, index) => {
					return <Card.Group key={index} {...item} />;
				})}
		</>
	);
}

export default ListFilmContainer;
