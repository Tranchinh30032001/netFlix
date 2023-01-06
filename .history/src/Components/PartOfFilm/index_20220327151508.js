import React from "react";

function PartOfFilm({ data, title }) {
	return (
		<>
			<h2>{title}</h2>
			{data.map((item) => {
				<h1>{item.title}</h1>;
				// <img
				// 	src={`/images/${item.title}/${item.genre}/${item.slug}/small.img`}
				// 	alt=""
				// />;
			})}
		</>
	);
}

export default PartOfFilm;
