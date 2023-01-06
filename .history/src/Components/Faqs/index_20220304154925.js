import React, { Children } from "react";

function Faqs({ children, ...resProps }) {
	return <Container {...resProps}>{children}</Container>;
}

export default Faqs;
