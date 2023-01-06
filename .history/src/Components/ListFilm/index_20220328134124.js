import React from "react";
import { Container, Play, Text, Title } from "./styles/ListFilm";

function ListFilm({ children }) {
	return <Container>{children}</Container>;
}

export default ListFilm;
// khoong memo

ListFilm.Title = ({ children }) => {
	return <Title>{children}</Title>;
};
ListFilm.Text = ({ children }) => {
	return <Text>{children}</Text>;
};
ListFilm.Play = ({ children }) => {
	return <Play>{children}</Play>;
};
