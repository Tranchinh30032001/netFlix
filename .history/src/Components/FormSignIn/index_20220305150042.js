import React from "react";
import { Formik, Form, FastField } from "formik";
import { FormGroup, Button } from "reactstrap";

initalValues = {
	email: "",
	password: "",
	checkbox: false,
};

function FormSignIn({ children }) {
	const handleSumit = () => {};
	return (
		<Container>
			<Formik initialValues={initalValues} onSubmit={handleSumit}>
				{({ values }) => {
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
								<Button>Sign In</Button>
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
FormSignIn.TextSmaill = function FormSignInTextSmaill({
	children,
	...restProps
}) {
	return <TextSmaill>{children}</TextSmaill>;
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
