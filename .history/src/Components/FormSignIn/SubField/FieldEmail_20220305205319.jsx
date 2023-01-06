import React from "react";
import { FormGroup, Input } from "reactstrap";
import { StyledInput } from "./FieldPassword";

function FieldEmail(props) {
	const { field, form, placeholder } = props;
	const { name } = field;
	return (
		<FormGroup>
			<StyledInput name={name} {...field} placeholder={placeholder} />
		</FormGroup>
	);
}

export default FieldEmail;
