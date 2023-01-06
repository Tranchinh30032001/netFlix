import React, { useState } from "react";
import { useEffect } from "react";
import useContent from "../hooks/useContent";
import SelectionFilter from "../utils/selectionFuter";

export default function Browse() {
	const [category, setCategory] = useState("series1");
	const series = useContent("series");
	// console.log("day la series: ", series);
	const films = useContent("films");
	// console.log("day la films", films);
	const slides = SelectionFilter(series, films);
	useEffect(() => {
		console.log("slides: ", slides[category]);
	}, []);

	// return <BrowseContainer slides={slides} />;
	return 0;
}
