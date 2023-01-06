import React from "react";
import { Formik, FastField } from "formik";
import { FormGroup, Button, Form } from "reactstrap";
import FieldEmail from "./FieldEmail";
import FieldPassword from "./FieldPassword";
import { Container } from "./styles/formsignin";

const initialValues = {
	emailOrphonenumber: "",
	password: "",
	toggle: false,
};

function FormSignIn({ children }) {
	const handleSubmit = (values) => {
		console.log("submit", values);
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values) => handleSubmit(values)}
		>
			{({ values }) => {
				console.log(values);
				return (
					<Container>
						<FastField
							name="emailOrphonenumber"
							component={FieldEmail}
							placeholer="Email or Phone number"
						/>
						<FastField
							name="password"
							component={FieldPassword}
							placeholer="Password"
						/>
						<FormGroup>
							<Button type="submit" color="danger">
								Sign In
							</Button>
						</FormGroup>
						{/* <FormGroup>
							<FastField type="checkbox" name="toggle" />
							<Form.Help>Need help</Form.Help>
						</FormGroup> */}
					</Container>
				);
			}}
		</Formik>
	);
}

export default FormSignIn;
