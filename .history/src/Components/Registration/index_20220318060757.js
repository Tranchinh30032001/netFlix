import React, { createContext, useContext, useState } from "react";
import { FastField, Form, Formik } from "formik";
import { Link as RouterLink } from "react-router-dom";
import { FormGroup } from "reactstrap";
import styled from "styled-components";
import * as Yup from "yup";
import * as SWITCH from "../../constants/routes";
import { Container, Help } from "../FormSignIn/styles/formsignin";
import { FirebaseContext } from "../../context/firebase";
import SubField from "../FormSignIn/SubField/SubField";
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
function Registration() {
	// const { firebases } = useContext(FirebaseContext);
	// const [success, setSuccess] = useState(null);
	return (
		<Container>
			<Heading>Sign In</Heading>
			{/* {success === false &&
				setTimeout(() => {
					setSuccess(null);
				}, 3000) && <Error>Xin vui long kiem tra lai </Error>} */}
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
