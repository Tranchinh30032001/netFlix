import React from "react";

function PartOfFilm({ data, title }) {
	return (
		<>
			<h2>{title}</h2>
			{data.map((item) => {
				console.log("item: ", item);
				// <img
				// 	src={`/images/${item.title}/${item.genre}/${item.slug}/small.img`}
				// 	alt=""
				// />;
			})}
		</>
	);
}

export default PartOfFilm;
