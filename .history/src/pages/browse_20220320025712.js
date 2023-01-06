import React from "react";
// import { BrowseContainer } from "../containers/browse";
import useContent from "../hooks/useContent";
import selectionFilter from "../utils/selectionFuter";

export default function Browse() {
	const { series } = useContent("series");
	const { films } = useContent("films");
	const slides = selectionFilter({ series, films });
	console.log("slides", slides);

	return 0;
}
