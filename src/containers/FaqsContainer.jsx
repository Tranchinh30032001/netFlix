import React, { memo } from "react";
import dataFaqs from "../fixtures/faqs.json";
import Faqs from "../components/Faqs";
import Form from "../components/Form/index";
function FaqsContainer() {
	return (
		<Faqs>
			<Faqs.Heading>Frequently Asked Questions</Faqs.Heading>
			<Faqs.Wrapper>
				{dataFaqs?.length > 0 &&
					dataFaqs.map((item) => (
						<Faqs.Item key={item.id}>
							<Faqs.Question>{item.header}</Faqs.Question>
							<Faqs.Body>{item.body}</Faqs.Body>
						</Faqs.Item>
					))}
			</Faqs.Wrapper>
			<Form>
				<Form.Introduce>
					Ready to watch? Enter your email to create or restart your membership.
				</Form.Introduce>
				<Form.Break />
				<Form.Input placeholder="Email adress" />
				<Form.Button>Try it now</Form.Button>
			</Form>
		</Faqs>
	);
}

export default memo(FaqsContainer);
