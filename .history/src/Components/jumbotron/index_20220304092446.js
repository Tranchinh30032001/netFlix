import React from "react";

function Jumbotron({ children, direction, ...restProps }) {
	return (
		<Item>
			<Inner>{children}</Inner>
		</Item>
	);
}

export default Jumbotron;
