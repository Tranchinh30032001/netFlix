import React from "react";
import { Formik, FastField } from "formik";
import { FormGroup, Button, Form } from "reactstrap";
import FieldEmail from "./FieldEmail";
import FieldPassword from "./FieldPassword";

const initialValues = {
	emailOrphonenumber: "",
	password: "",
	toggle: false,
};

function FormSignIn({ children }) {
	const handleSubmit = () => {};
	return (
		<Formik initialValues={initialValues} onSubmit={() => handleSubmit()}>
			{({ values }) => {
				return (
					<Form.Container>
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
							<Button color="danger">Sign In</Button>
						</FormGroup>
						<FormGroup>
							<FastField type="checkbox" name="toggle" />
							<Form.Help>Need help</Form.Help>
						</FormGroup>
					</Form.Container>
				);
			}}
		</Formik>
	);
}

export default FormSignIn;
