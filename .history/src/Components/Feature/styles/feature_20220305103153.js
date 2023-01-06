import styled from "styled-components";

export const Content = styled.div`
	max-width: 95rem;
	width: 100%;
	padding: 12.5rem 4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #fff;
	margin: 0 auto;
`;
export const Title = styled.h1`
	font-size: 6rem;
	max-width: 70rem;
	text-align: center;
	margin: 0 auto;
	padding: 0 2rem;
	@media screen and (max-width: 991px) {
		font-size: 4.8rem;
	}
	@media screen and (max-width: 558px) {
		font-size: 3.6rem;
	}
`;
export const SubTitle = styled.p`
	font-size: 2.4rem;
	margin-top: 1.6rem;
`;
