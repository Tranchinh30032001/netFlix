import React, { Children } from "react";
import { Heading, Wrapper, Question, Body, Item } from "./styles/faqs";

function Faqs({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

export default Faqs;

Faqs.Heading = ({ children, ...restProps }) => {
	return <Heading>{children}</Heading>;
};
Faqs.Question = ({ children, ...restProps }) => {
	return (
		<Question>
			{children} <img src={"/images/icons/add.png"} alt="" />{" "}
		</Question>
	);
};
Faqs.Body = ({ children, ...restProps }) => {
	return <Body>{children}</Body>;
};
Faqs.Wrapper = ({ children, ...restProps }) => {
	return <Wrapper>{children}</Wrapper>;
};
Faqs.Item = ({ children, ...restProps }) => {
	return <Item>{children}</Item>;
};
