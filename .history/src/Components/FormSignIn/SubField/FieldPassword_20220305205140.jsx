import React from "react";
import { FormGroup, Input } from "reactstrap";
import styled from "styled-components";

function FieldPassword(props) {
	const { field, form, placeholder } = props;
	const { name } = field;
	return (
		<FormGroup>
			<StyledInput name={name} {...field} placeholder={placeholder} />
		</FormGroup>
	);
}

const StyledInput = styled(Input)`
	padding: 1.4rem;
	::placeholder {
		font-size: 1.6rem;
	}
`;

export default FieldPassword;
