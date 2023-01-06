import React from "react";
import { Formik, Form, FastField } from "formik";
import { FormGroup, Button } from "reactstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import {
	Footer,
	Text,
	TextSmall,
	TextLink,
	Notice,
	LearnMore,
	LearnMoreContent,
	Break,
	Container,
	Heading,
	Help,
} from "./styles/formsignin";
import FieldPassword from "./SubField/FieldPassword";
import FieldEmail from "./SubField/FieldEmail";
import { createContext } from "react";

const initalValues = {
	email: "",
	password: "",
	checkbox: false,
};

const Context = createContext();

function FormSignIn({ children, ...restProps }) {
	console.log(children);
	const handleSumit = () => {
		console.log("ikkk");
	};
	return (
		<Container>
			<Heading>Sign In</Heading>
			<Formik initialValues={initalValues} onSubmit={handleSumit}>
				{({ values }) => {
					console.log(values);
					return (
						<Form>
							<FastField
								name="email"
								component={FieldEmail}
								placeholder="Email or phone number"
							/>
							<FastField
								name="password"
								component={FieldPassword}
								placeholder="Passwrod"
							/>

							<FormGroup>
								<StyledButton type="submit">Sign In</StyledButton>
							</FormGroup>
							<FormGroup className="d-flex justify-content-between align-items-center">
								<FastField type="checkbox" />
								<Help>Need help?</Help>
							</FormGroup>
						</Form>
					);
				}}
			</Formik>
			{children}
		</Container>
	);
}
const StyledButton = styled(Button)`
	width: 100%;
	padding: 1.4rem;
	margin-top: 2rem;
	background-color: #e50914;
	border-radius: 0.6rem;
	color: #fff;
	outline: none;
	border: none;
	font-size: 1.6rem;
`;
FormSignIn.Footer = function FormSignInFooter({ children, ...restProps }) {
	return <Footer>{children}</Footer>;
};
FormSignIn.TextSmall = function FormSignInTextSmall({
	children,
	...restProps
}) {
	return <TextSmall>{children}</TextSmall>;
};
FormSignIn.Text = function FormSignInText({ children, ...restProps }) {
	return <Text>{children}</Text>;
};
FormSignIn.TextLink = function FormSignInTextLink({ children, ...restProps }) {
	return <TextLink {...restProps}>{children}</TextLink>;
};
FormSignIn.Break = function FormSignInBreak({ children, ...restProps }) {
	return <Break>{children}</Break>;
};
FormSignIn.Notice = function FormSignInNotice({ children, ...restProps }) {
	return (
		<Context.Provider>
			<Notice>{children}</Notice>
		</Context.Provider>
	);
};
FormSignIn.LearnMore = function FormSignInLearnMore({
	children,
	...restProps
}) {
	return <LearnMore>{children}</LearnMore>;
};
FormSignIn.LearnMoreContent = function FormSignInLearnMoreContent({
	children,
	...restProps
}) {
	return <LearnMoreContent>{children}</LearnMoreContent>;
};

export default FormSignIn;
