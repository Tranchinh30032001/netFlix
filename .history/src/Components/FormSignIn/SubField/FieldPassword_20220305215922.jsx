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

export const StyledInput = styled(Input)`
	max-width: 100%;
	padding: 1.4rem;
	::placeholder {
		font-size: 1.4rem;
	}
`;

export default FieldPassword;
