import React from "react";
import { Formik, Form, FastField } from "formik";

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
					<Form>
						<FastField />
					</Form>
				);
			}}
		</Formik>
	);
}

export default FormSignIn;
