import React from "react";
import FormSignIn from "../components/FormSignIn/index";

function FormSignInContainer() {
	return (
		<FormSignIn>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo
				sapiente eveniet animi blanditiis magnam laudantium necessitatibus fugit
				cumque porro! Iure ea architecto, fuga neque placeat ducimus laudantium
				provident deleniti?
			</p>
			{/* <FormSignIn.Footer>
				<FormSignIn.TextSmall>Login With Facebook</FormSignIn.TextSmall>
				<FormSignIn.Break />
				<FormSignIn.Text>New to Netflix</FormSignIn.Text>
				<FormSignIn.TextLink>Sign up now</FormSignIn.TextLink>
				<FormSignIn.Break />
				<FormSignIn.Notice>
					This page is protected by Google reCAPTCHA to ensure you're not a bot.
					<FormSignIn.LearnMore>Learn more</FormSignIn.LearnMore>
					<FormSignIn.LearnMoreContent>
						The informSignInation collected by Google reCAPTCHA is subject to
						the Google Privacy Policy and Terms of Service, and is used for
						providing, maintaining, and improving the reCAPTCHA service and for
						general security purposes (it is not used for personalized
						advertising by Google).
					</FormSignIn.LearnMoreContent>
				</FormSignIn.Notice>
			</FormSignIn.Footer> */}
		</FormSignIn>
	);
}
export default FormSignInContainer;
