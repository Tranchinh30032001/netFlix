import { ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import styled from "styled-components";

import { FormFeedback, FormGroup, Input } from "reactstrap";

function SubField(props) {
	const { field, form, placeholder, type } = props;
	const { name } = field;
	const { errors, touched } = form;
	const ShowError = errors[name] && touched[name];
	return (
		<FormGroup>
			<StyledInput
				{...field}
				type={type}
				className={ShowError ? "is-invalid" : ""}
				placeholder={placeholder}
			/>
			<ErrorMessage name={name} component={FormFeedback} />
		</FormGroup>
	);
}

export default SubField;
export const StyledInput = styled(Input)`
	width: 100%;
	margin-bottom: 1.4rem;
	border-radius: 0.6rem;
	padding: 1.4rem;
	::placeholder {
		font-size: 1.4rem;
	}
`;
