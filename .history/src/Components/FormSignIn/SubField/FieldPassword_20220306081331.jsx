import { ErrorMessage } from "formik";
import React from "react";
import { FormFeedback, FormGroup, Input } from "reactstrap";
import styled from "styled-components";

function FieldPassword(props) {
	const { field, form, placeholder } = props;
	const { name } = field;
	const { error, touched } = form;
	const ShowError = error[name] && touched[name];
	return (
		<FormGroup>
			<StyledInput
				invalid={ShowError}
				name={name}
				{...field}
				placeholder={placeholder}
			/>
			<ErrorMessage name={name} component={<FormFeedback />} />
		</FormGroup>
	);
}

export const StyledInput = styled(Input)`
	width: 100%;
	margin-bottom: 1.4rem;
	border-radius: 0.6rem;
	padding: 1.4rem;
	::placeholder {
		font-size: 1.4rem;
	}
`;

export default FieldPassword;
