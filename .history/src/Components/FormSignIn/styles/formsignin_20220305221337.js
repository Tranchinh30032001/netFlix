import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
	max-width: 45rem;
	padding: 5rem 7rem;
	width: 100%;
	margin: 0 auto;
	color: #9999;
	background-color: rgba(0, 0, 0, 0.8);
	border-radius: 0.5rem;
	font-size: 1.3rem;
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
`;
export const LearnMoreContent = styled.p``;
