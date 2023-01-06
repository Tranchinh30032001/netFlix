import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FastField, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FormGroup } from "reactstrap";
import styled from "styled-components";
import * as Yup from "yup";
import { auth } from "../../firebase";
import { Container, Heading } from "../FormSignIn/styles/formsignin";
import SubField from "../FormSignIn/SubField/SubField";

const initalValues = {
	email: "",
	url: "",
	password: "",
	rePassword: "",
	checkbox: false,
};
const validationSchema = Yup.object().shape({
	email: Yup.string().required("Please enter a valid email or phone number."),
	password: Yup.string().required(
		"Your password must contain between 4 and 60 characters."
	),
	rePassword: Yup.string().required(
		"Your rePassword must match with your password"
	),
});
function Registration() {
	const navigate = useNavigate();
	const handleSubmit = async (values) => {
		await createUserWithEmailAndPassword(auth, values.email, values.password)
			.then((userCredential) => {
				updateProfile(userCredential.user, {
					displayName: values.email,
					photoURL: values.url,
				})
					.then(() => {
						console.log("create account successfully");
						navigate("/signin");
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((error) => console.log(error));
	};
	return (
		<Container>
			<Heading>Registation</Heading>
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
								type="email"
							/>
							<FastField
								name="url"
								component={SubField}
								placeholder="Photo URL"
								type="text"
							/>
							<FastField
								name="password"
								component={SubField}
								placeholder="Passwrod"
								type="password"
							/>
							<FastField
								name="rePassword"
								component={SubField}
								placeholder="Re-Password"
								type="password"
							/>

							<FormGroup>
								<StyledButton type="submit">Sign In</StyledButton>
							</FormGroup>
						</Form>
					);
				}}
			</Formik>
		</Container>
	);
}

export default Registration;
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
