import React from "react";
import useContent from "../hooks/useContent";
// import { selectionFilter } from "../utils";

export default function Browse() {
	const series = useContent("series");
	console.log("day la series: ", series);
	const films = useContent("films");
	console.log("day la films", films);
	// const slides = selectionFilter(series, films);

	// return <BrowseContainer slides={slides} />;
	return 0;
}
