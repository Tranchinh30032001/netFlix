import { ErrorMessage } from "formik";
import React from "react";
import { FormFeedback, FormGroup, Input } from "reactstrap";
import { StyledInput } from "./FieldPassword";

function FieldEmail(props) {
	const { field, form, placeholder } = props;
	const { name } = field;
	const { error, touched } = form;
	const showError = error[name] && touched[name];
	return (
		<FormGroup>
			<StyledInput
				invalid={showError}
				name={name}
				{...field}
				placeholder={placeholder}
			/>
			<ErrorMessage name={name} component={<FormFeedback />} />
		</FormGroup>
	);
}

export default FieldEmail;
