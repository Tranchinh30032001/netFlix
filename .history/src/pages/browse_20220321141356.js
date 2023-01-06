import React from "react";
import { useState } from "react";
// import { BrowseContainer } from "../containers/browse";
import useContent from "../hooks/useContent";

export default function Browse() {
	const [category, setCategory] = useState("series");
	const { series } = useContent("series");
	const { films } = useContent("films");

	return 0;
}
