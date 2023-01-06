import React from "react";
import {
	Item,
	Inner,
	Container,
	Flex,
	Title,
	SubTitle,
	Image,
} from "./styles/jumbotron";

function Jumbotron({ children, direction = "row", ...restProps }) {
	return (
		<Item>
			<Inner direction={direction}>{children}</Inner>
		</Item>
	);
}

export default Jumbotron;

Jumbotron.Container = ({ children, ...restProps }) => {
	return <Container>{children}</Container>;
};
Jumbotron.Flex = ({ children, ...restProps }) => {
	return <Flex>{children}</Flex>;
};
Jumbotron.Title = ({ children, ...restProps }) => {
	return <Title>{children}</Title>;
};
Jumbotron.SubTitle = ({ children, ...restProps }) => {
	return <SubTitle>{children}</SubTitle>;
};
Jumbotron.Image = ({ children, ...restProps }) => {
	return <Image {...restProps} />;
};
