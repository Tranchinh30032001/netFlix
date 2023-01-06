import React from "react";

function PartOfFilm({ data, title }) {
	return (
		<>
			<h2>{title}</h2>
			{data.map((item) => (
				<img
					key={item.id}
					src={`images/${item.title}/${item.genre}/${item.slug}/small.jpg`}
					alt=""
				/>
			))}
		</>
	);
}

export default PartOfFilm;
