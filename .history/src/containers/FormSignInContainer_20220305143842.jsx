import React from "react";
import { Form } from "reactstrap";
import FormSignIn from "../components/FormSignIn";

function FormSignInContainer() {
	return (
		<FormSignIn>
			<Form.Footer>
				<Form.TextSmall>Login With Facebook</Form.TextSmall>
				<Form.Break />
				<Form.Text>New to Netflix</Form.Text>
				<Form.TextLink>Sign up now</Form.TextLink>
				<Form.Break />
				<Form.Notice>
					This page is protected by Google reCAPTCHA to ensure you're not a bot.
					<Form.LearnMore>Learn more</Form.LearnMore>
				</Form.Notice>
			</Form.Footer>
		</FormSignIn>
	);
}
export default FormSignInContainer;
