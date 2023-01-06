import React from "react";
import dataFaqs from "../fixtures/faqs.json";
import Faqs from "../components/Faqs";

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
		</Faqs>
	);
}

export default FaqsContainer;
