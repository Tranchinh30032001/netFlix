import React from "react";
import ListFilm from "../components/ListFilm/index";
import { HandleData } from "../handleData";

function ListFilmContainer() {
	const Data = HandleData();
	console.log(Data);
	return <></>;
}

export default ListFilmContainer;
