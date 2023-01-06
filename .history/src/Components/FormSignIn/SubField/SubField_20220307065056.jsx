import React from "react";
import { FormGroup, Input } from "reactstrap";

function SubField(props) {
	const { field, form, placeholder } = props;
	const { name } = field;
	const { errors, touched } = form;
	const ShowError = errors[name] && touched[name];
	return (
		<FormGroup>
			<StyledInput className={ShowError ? "is-invalid" : ""} {...restProps} />
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
