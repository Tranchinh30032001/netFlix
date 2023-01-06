import React from "react";

function PartOfFilm({ data, title }) {
	return (
		<>
			<h2>{title}</h2>
			{data.map((item) => {
				<img
					src={`${item.title}/${item.genre}/${item.slug}/small.img`}
					alt=""
				/>;
			})}
		</>
	);
}

export default PartOfFilm;
