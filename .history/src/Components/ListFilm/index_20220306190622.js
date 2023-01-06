import React from "react";
import { Container, Content, Title, Text } from "./styles/ListFilm";

function ListFilm({ children }) {
	console.log(children);
	return <Container>{children}</Container>;
}

export default ListFilm;

ListFilm.Content = ({ children }) => {
	return <Content>{children}</Content>;
};
ListFilm.Title = ({ children }) => {
	return <Title>{children}</Title>;
};
ListFilm.Text = ({ children }) => {
	return <Text>{children}</Text>;
};
