import React from "react";
import { Container, Title, Text, Play } from "./styles/ListFilm";
import { memo } from "react";

function ListFilm({ children }) {
	return <Container>{children}</Container>;
}

export default ListFilm;

ListFilm.Title = ({ children }) => {
	return <Title>{children}</Title>;
};
ListFilm.Text = ({ children }) => {
	return <Text>{children}</Text>;
};
ListFilm.Play = ({ children }) => {
	return <Play>{children}</Play>;
};
