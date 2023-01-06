import React, { memo } from "react";
import {
	Container,
	Column,
	Row,
	Link,
	Title,
	Text,
	Inner,
	Break,
} from "../footer/styles/footer";

function Footer({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

export default memo(Footer);

Footer.Column = ({ children, ...restProps }) => {
	return <Column {...restProps}>{children}</Column>;
};
Footer.Row = ({ children, ...restProps }) => {
	return <Row {...restProps}>{children}</Row>;
};
Footer.Link = ({ children, ...restProps }) => {
	return <Link {...restProps}>{children}</Link>;
};
Footer.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};
Footer.Text = ({ children, ...restProps }) => {
	return <Text {...restProps}>{children}</Text>;
};
Footer.Break = ({ children, ...restProps }) => {
	return <Break {...restProps}>{children}</Break>;
};
