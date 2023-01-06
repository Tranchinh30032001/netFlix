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
		var listSeries = [
			{
				title: "Documentaries",
				data: result.filter((item) => item.info.genre === "documentaries"),
			},
			{
				title: "Comedies",
				data: result.filter((item) => item.info.genre === "comedies"),
			},
			{
				title: "Children",
				data: result.filter((item) => item.info.genre === "children"),
			},
			{
				title: "Crime",
				data: result.filter((item) => item.info.genre === "crime"),
			},
			{
				title: "Feel Good",
				data: result.filter((item) => item.info.genre === "feel-good"),
			},
		];
	}
	console.log("listSeries: ", listSeries);
};
