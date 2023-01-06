import { useSelector } from "react-redux";

export const HandleData = () => {
	const data = useSelector((state) => state.user.data);
	const seriesFilm = [
		{
			title: "Documentaries",
			data: series?.filter((item) => item.genre === "documentaries"),
		},
		{
			title: "Comedies",
			data: series?.filter((item) => item.genre === "comedies"),
		},
		{
			title: "Children",
			data: series?.filter((item) => item.genre === "children"),
		},
		{ title: "Crime", data: series?.filter((item) => item.genre === "crime") },
		{
			title: "Feel Good",
			data: series?.filter((item) => item.genre === "feel-good"),
		},
	];
	const films = [
		{ title: "Drama", data: films?.filter((item) => item.genre === "drama") },
		{
			title: "Thriller",
			data: films?.filter((item) => item.genre === "thriller"),
		},
		{
			title: "Children",
			data: films?.filter((item) => item.genre === "children"),
		},
		{
			title: "Suspense",
			data: films?.filter((item) => item.genre === "suspense"),
		},
		{
			title: "Romance",
			data: films?.filter((item) => item.genre === "romance"),
		},
	];
};
