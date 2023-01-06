import React from "react";
import { FormGroup, Input } from "reactstrap";

function SubField({ ...restProps }) {
	return (
		<FormGroup>
			<StyledInput {...restProps} />
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
