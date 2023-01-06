import React from "react";

function PartOfFilm({ data, title }) {
	return (
		<>
			<h2>{title}</h2>
			{data.map((item) => {
				// <img
				// 	src={`/images/${item.title}/${item.genre}/${item.slug}/small.img`}
				// 	alt=""
				// />;
				<h1>hello anh em</h1>;
			})}
		</>
	);
}

export default PartOfFilm;
