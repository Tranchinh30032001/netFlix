import React from "react";
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
					<Form.LearnMoreContent>
						The information collected by Google reCAPTCHA is subject to the
						Google Privacy Policy and Terms of Service, and is used for
						providing, maintaining, and improving the reCAPTCHA service and for
						general security purposes (it is not used for personalized
						advertising by Google).
					</Form.LearnMoreContent>
				</Form.Notice>
			</Form.Footer>
		</FormSignIn>
	);
}
export default FormSignInContainer;
