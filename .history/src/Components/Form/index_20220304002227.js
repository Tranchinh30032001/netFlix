import React from "react";
import { Break, Input, Button, Introduce } from "./styles/form";

function Form({ children, ...restProps }) {
	return <Container>{children}</Container>;
}

export default Form;

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