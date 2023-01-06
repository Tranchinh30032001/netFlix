import React from "react";

function PartOfFilm({ data, title }) {
	return (
		<>
			<h2>{title}</h2>
			{data.map(
				(item) =>
					console.log(
						`images/${item.title}/${item.title}/${item.slug}/small.jpg`
					)
				// <img
				// 	style={{ width: "5rem", height: "5rem" }}
				// 	key={item.id}
				// 	src={`images/${item.title.toLowerCase()}/${item.genre}/${
				// 		item.slug
				// 	}/small.jpg`}
				// 	alt=""
				// />
			)}
		</>
	);
}

export default PartOfFilm;
