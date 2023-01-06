import React from "react";
import { Formik, FastField } from "formik";
import { FormGroup, Button} from "reactstrap";

const initialValues = {
	emailOrphonenumber: "",
	password: "",
	toggle: false,
};

function FormSignIn({ children }) {
	const handleSumbit = () => {};
	return (
		<Formik initialValues={initialValues} onSubmit={() => handleSumit}>
			{({ values }) => {
				return (
					<Form.Container>
						<FastField name='emailOrphonenumber' component = {FiledEmailOrPhone} placeholer = 'Email or Phone number' />
                        <FastField name = 'password' component = {FieldPassword} placeholer='Password' />
                        <FormGroup>
                            <Button color='danger' >Sign In</Button>
                        </FormGroup>
                        <FormGroup>
                            <FastField type='checkbox' name= 'toggle' />
                            <
                        </FormGroup>
					</Form>
				);
			}}
		</Formik>
	);
}

export default FormSignIn;
