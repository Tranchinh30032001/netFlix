import styled from "styled-components";

export const Heading = styled.h1``;
export const Wrapper = styled.div`
	max-width: 80rem;
`;
export const Item = styled.div`
	color: #fff;
`;
export const Question = styled.h1`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem;
	font-size: 2.4rem;
	background-color: rgb(48, 48, 48);
	img {
		width: 3rem;
		filter: brightness(0) invert(1);
	}
`;
export const Body = styled.p`
	font-size: 1.6rem;
	background-color: rgb(48, 48, 48);
	margin-top: 0.4rem;
	padding: 2rem;
`;
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #000;
`;
