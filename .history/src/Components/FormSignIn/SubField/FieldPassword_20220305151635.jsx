import React from "react";
import { FormGroup, Input } from "reactstrap";

function FieldPassword(props) {
	const { field, form, placeholder } = props;
	const { name } = field;
	return (
		<FormGroup>
			<Input name={name} {...field} placeholder={placeholder} />
		</FormGroup>
	);
}

export default FieldPassword;
