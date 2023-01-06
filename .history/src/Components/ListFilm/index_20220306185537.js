import React from "react";
import { Container, Content, Title, Text } from "./styles/Listfilm";

function Listfilm({ children }) {
	return <Container>{children}</Container>;
}

export default Listfilm;

Listfilm.Content = ({ children }) => {
	return <Content>{children}</Content>;
};
Listfilm.Title = ({ children }) => {
	return <Title>{children}</Title>;
};
Listfilm.Text = ({ children }) => {
	return <Text>{children}</Text>;
};
