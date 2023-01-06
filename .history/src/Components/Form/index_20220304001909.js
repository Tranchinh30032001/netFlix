import React from "react";

function Form({ children, ...restProps }) {
	return <Container>{children}</Container>;
}

export default Form;

Form.Title = ({ children }) => {
	return <Title>{children}</Title>;
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
