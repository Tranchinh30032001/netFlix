import React, { memo } from "react";
import { Break, Input, Button, Introduce, Container } from "./styles/form";

function Form({ children, ...restProps }) {
	return <Container>{children}</Container>;
}

export default Form;
// khong memo

Form.Introduce = ({ children }) => {
	return <Introduce>{children}</Introduce>;
};
Form.Break = () => {
	return <Break />;
};
Form.Input = ({ children, ...restProps }) => {
	return <Input {...restProps} />;
};
Form.Button = ({ children }) => {
	return (
		<Button>
			{children} <img src="/images/icons/chevron-right.png" alt="" />{" "}
		</Button>
	);
};
