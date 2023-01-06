import { FastField, Form, Formik } from "formik";
import React, { createContext, useContext, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FormGroup } from "reactstrap";
import styled from "styled-components";
import * as Yup from "yup";
import * as SWITCH from "../../constants/routes";
import { FirebaseContext } from "../../context/firebase";
import {
	Break,
	Container,
	Error,
	Footer,
	Heading,
	Help,
	LearnMore,
	LearnMoreContent,
	Notice,
	Text,
	TextLink,
	TextSmall,
} from "./styles/formsignin";
import SubField from "./SubField/SubField";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

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
	const navigate = useNavigate();
	const handleSubmit = (values) => {
		signInWithEmailAndPassword(auth, values.email, values.password)
			.then((userCredential) => {
				navigate("/listfilm");
			})
			.catch((error) => {
				console.log(error);
			});
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
				validationSchema={validationSchema}
				onSubmit={(values) => handleSubmit(values)}
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
								<StyledButton type="submit">Sign In</StyledButton>
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
const StyledButton = styled.button`
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
		<LearnMore onClick={() => setOpen(!open)}>
			<span className={open ? "close" : "open"}>{children}</span>
		</LearnMore>
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
