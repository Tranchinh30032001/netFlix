import React, { memo } from "react";
import { Content, Title, SubTitle } from "./styles/feature";

function Feature({ children }) {
	return <>{children}</>;
}

export default Feature;
// khong memo

Feature.Content = ({ children, ...restProps }) => {
	return <Content>{children}</Content>;
};
Feature.Title = ({ children }) => {
	return <Title>{children}</Title>;
};
Feature.SubTitle = ({ children }) => {
	return <SubTitle>{children}</SubTitle>;
};
