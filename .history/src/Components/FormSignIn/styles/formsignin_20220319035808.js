import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	max-width: 45rem;
	padding: 4rem 6rem;
	width: 100%;
	margin: 0rem auto;
	color: #888;
	background-color: rgba(0, 0, 0, 0.8);
	border-radius: 0.5rem;
	font-size: 1.3rem;
	margin-bottom: 5rem;
`;
export const Error = styled.p`
	color: red;
`;
export const Heading = styled.h1`
	font-size: 3.6rem;
	color: #fff;
	margin-bottom: 3rem;
`;
export const Footer = styled.div``;
export const Help = styled.span`
	font-size: 1.25rem;
`;
export const TextSmall = styled.small``;
export const Text = styled.span`
	font-size: 1.5rem;
	margin-right: 0.8rem;
`;
export const TextLink = styled(RouterLink)`
	font-size: 1.5rem;
`;
export const Break = styled.div``;
export const Notice = styled.div`
	margin-top: 0.5rem;
`;
export const LearnMore = styled.p`
	color: rgb(10, 85, 190);
	cursor: pointer;
	text-decoration: underline;
	.close {
		opacity: 0;
		visibility: hidden;
	}
	.open {
		opacity: 1;
		visibility: visible;
	}
`;
export const LearnMoreContent = styled.p`
	margin: 0 !important;
	.close {
		transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
		opacity: 0;
		visibility: hidden;
		max-height: 0;
	}
	.open {
		opacity: 1;
		visibility: visible;
		transition: all 0.25se cubic-bezier(0.075, 0.82, 0.165, 1);
		max-height: 15rem;
	}
`;
