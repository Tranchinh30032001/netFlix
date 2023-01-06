import React from "react";
import { Formik, Form, FastField } from "formik";
import { FormGroup, Button } from "reactstrap";
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
} from "./styles/formsignin";
import FieldPassword from "./SubField/FieldPassword";
import FieldEmail from "./SubField/FieldEmail";

const initalValues = {
	email: "",
	password: "",
	checkbox: false,
};

function FormSignIn({ children }) {
	const handleSumit = () => {
		console.log("ikkk");
	};
	return (
		<Container>
			<FormSignIn.Heading>Sign In</FormSignIn.Heading>
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
								<Button type="submit">Sign In</Button>
							</FormGroup>
						</Form>
					);
				}}
			</Formik>
			{children}
		</Container>
	);
}
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
	return <TextLink>{children}</TextLink>;
};
FormSignIn.Break = function FormSignInBreak({ children, ...restProps }) {
	return <Break>{children}</Break>;
};
FormSignIn.Notice = function FormSignInNotice({ children, ...restProps }) {
	return <Notice>{children}</Notice>;
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
