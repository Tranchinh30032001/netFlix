import { FastField, Form, Formik } from "formik";

import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { FormGroup } from "reactstrap";
import styled from "styled-components";
import * as Yup from "yup";
import * as SWITCH from "../../constants/routes";
import {} from "../../context/firebase";
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
	return (
		<Container>
			<Heading>Registation</Heading>
			<Formik initialValues={initalValues} validationSchema={validationSchema}>
				{({ values }) => {
					return (
						<Form>
							<FastField
								name="email"
								component={SubField}
								placeholder="Email or phone number"
							/>
							<FastField
								name="url"
								component={SubField}
								placeholder="Photo URL"
							/>
							<FastField
								name="password"
								component={SubField}
								placeholder="Passwrod"
							/>
							<FastField
								name="rePassword"
								component={SubField}
								placeholder="Re-Password"
							/>

							<FormGroup>
								<StyledButton to={SWITCH.ListFilm} type="submit">
									Sign In
								</StyledButton>
							</FormGroup>
						</Form>
					);
				}}
			</Formik>
		</Container>
	);
}

export default Registration;
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
