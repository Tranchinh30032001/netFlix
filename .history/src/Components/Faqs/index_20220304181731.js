import React, { Children, createContext, useContext, useState } from "react";
import {
	Heading,
	Wrapper,
	Question,
	Body,
	Item,
	Container,
} from "./styles/faqs";

const Context = createContext();

function Faqs({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

export default Faqs;

Faqs.Heading = ({ children, ...restProps }) => {
	return <Heading>{children}</Heading>;
};
Faqs.Question = function FaqsQuestion({ children, ...restProps }) {
	const [open, setOpen] = useState(false);
	return (
		<Question onClick={() => setOpen(!open)}>
			{children}{" "}
			{!open ? (
				<img src={"/images/icons/add.png"} alt="" />
			) : (
				<img src={"/images/icons/close.png"} />
			)}
		</Question>
	);
};
Faqs.Body = ({ children, ...restProps }) => {
	return <Body>{children}</Body>;
};
Faqs.Wrapper = ({ children, ...restProps }) => {
	return <Wrapper>{children}</Wrapper>;
};
Faqs.Item = function FaqsItem({ children, ...restProps }) {
	return <Item>{children}</Item>;
};
