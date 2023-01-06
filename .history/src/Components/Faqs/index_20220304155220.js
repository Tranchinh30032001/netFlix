import React, { Children } from "react";

function Faqs({ children, ...resProps }) {
	return <Container {...resProps}>{children}</Container>;
}

export default Faqs;

Faqs.Heading = ({ children, ...resProps }) => {
	return <Heading>{children}</Heading>;
};
Faqs.Question = ({ children, ...resProps }) => {
	return (
		<Question>
			{children} <img src={"/images/icons/add.png"} alt="" />{" "}
		</Question>
	);
};
