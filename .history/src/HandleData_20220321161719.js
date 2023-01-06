import { useSelector } from "react-redux";

export const HandleData = () => {
	const result = useSelector((state) => state.user.data);
	if (result?.length > 0 && result[0].title === "films") {
		var listFilms = [
			{
				title: "Drama",
				data: result.filter((item) => item.info.genre === "drama"),
			},
			{
				title: "Thriller",
				data: result.filter((item) => item.info.genre === "thriller"),
			},
			{
				title: "Children",
				data: result.filter((item) => item.info.genre === "children"),
			},
			{
				title: "Suspense",
				data: result.filter((item) => item.info.genre === "suspense"),
			},
			{
				title: "Romance",
				data: result.filter((item) => item.info.genre === "romance"),
			},
		];
	}
	console.log("listFilm", listFilms);
	if (result?.length > 0 && result[0].title === "series") {
		var listFilms = [
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
	}
};
