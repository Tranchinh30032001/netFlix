import React from "react";
import useContent from "../hooks/useContent";
import selectionFilter from "../utils/selectionFuter";

export default function Browse() {
	const series = useContent("series");
	// console.log("day la series: ", series);
	const films = useContent("films");
	// console.log("day la films", films);
	const slides = selectionFilter(series, films);
	useEffect(() => {
		cons ole.log(slides);

	})

	// return <BrowseContainer slides={slides} />;
	return 0;
}
