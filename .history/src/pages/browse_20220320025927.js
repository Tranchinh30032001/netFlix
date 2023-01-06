import React from "react";
import { useState } from "react";
// import { BrowseContainer } from "../containers/browse";
import useContent from "../hooks/useContent";
import selectionFilter from "../utils/selectionFuter";

export default function Browse() {
	const [category, setCategory] = useState("series");
	const { series } = useContent("series");
	const { films } = useContent("films");
	const slides = selectionFilter({ series, films });
	console.log("slides", slides);

	return 0;
}
