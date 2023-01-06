import React from "react";
import { Content, Title, SubTitle } from "./styles/feature";

function Feature({ children }) {
	return <Container>{children}</Container>;
}

export default Feature;

Feature.Content = ({ children, ...restProps }) => {
	return <Content>{children}</Content>;
};
Feature.Title = ({ children }) => {
	return <Title>{children}</Title>;
};
Feature.SubTitle = ({ children }) => {
	return <SubTitle>{children}</SubTitle>;
};
