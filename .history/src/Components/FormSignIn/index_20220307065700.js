import React from "react";
import { Formik, Form, FastField } from "formik";
import { FormGroup, Button } from "reactstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";
import { FirebaseContext } from "../../context/firebase";
import { Link as RouterLink } from "react-router-dom";

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
	Error,
} from "./styles/formsignin";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { CheckAccount } from "../../CheckAccout";
import * as SWITCH from "../../constants/routes";
import SubField from "./SubField/SubField";

const initalValues = {
	email: "",
	password: "",
	checkbox: false,
};
const validationSchema = Yup.object().shape({
	email: Yup.string().required("Please enter a valid email or phone number."),
	password: Yup.string().required(
		"Your password must contain between 4 and 60 characters."
	),
});
const Context = createContext();

function FormSignIn({ children, ...restProps }) {
	const { firebases } = useContext(FirebaseContext);
	const [success, setSuccess] = useState(null);
	const handleSumit = async (value) => {
		try {
			const result = await CheckAccount(value.email, value.password);
			setSuccess(true);
		} catch (error) {
			setSuccess(false);
		}
	};
	return (
		<Container>
			<Heading>Sign In</Heading>
			{success === false &&
				setTimeout(() => {
					setSuccess(null);
				}, 3000) && <Error>Xin vui long kiem tra lai </Error>}
			<Formik
				initialValues={initalValues}
				onSubmit={(values) => handleSumit(values)}
				validationSchema={validationSchema}
			>
				{({ values }) => {
					return (
						<Form>
							<FastField
								name="email"
								component={SubField}
								placeholder="Email or phone number"
							/>
							<FastField
								name="password"
								component={SubField}
								placeholder="Passwrod"
							/>

							<FormGroup>
								<StyledButton to={SWITCH.ListFilm} type="submit">
									Sign In
								</StyledButton>
							</FormGroup>
							<FormGroup className="d-flex justify-content-between align-items-center">
								<FastField name="checkbox" type="checkbox" />
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
const StyledButton = styled(RouterLink)`
	width: 100%;
	padding: 1.4rem;
	margin-top: 2rem;
	background-color: #e50914;
	border-radius: 0.6rem;
	color: #fff;
	outline: none;
	border: none;
	font-size: 1.6rem;
	text-align: center;
	&:hover {
		color: #fff;
	}
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
	const [open, setOpen] = useState(false);
	return (
		<Context.Provider value={{ open, setOpen }}>
			<Notice>{children}</Notice>
		</Context.Provider>
	);
};
FormSignIn.LearnMore = function FormSignInLearnMore({
	children,
	...restProps
}) {
	const { open, setOpen } = useContext(Context);
	return (
		<LearnMore onClick={() => setOpen(!open)}>{!open && children}</LearnMore>
	);
};
FormSignIn.LearnMoreContent = function FormSignInLearnMoreContent({
	children,
	...restProps
}) {
	const { open } = useContext(Context);
	return (
		<LearnMoreContent>
			<span className={open ? "open" : "close"}>{children}</span>
		</LearnMoreContent>
	);
};

export default FormSignIn;
