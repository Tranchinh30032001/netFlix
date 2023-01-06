import styled from "styled-components";

export const Container = styled.div`
	background-color: #000;
	color: #fff;
`;
export const Item = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const Inner = styled.div`
	display: flex;
	flex-direction: ${({ direction }) => (direction ? direction : "row")};
	width: 110rem;
	height: 32.6rem;
	margin: 0 auto;
`;
export const Flex = styled.div``;
export const Title = styled.h2``;
export const SubTitle = styled.p``;
export const Image = styled.img`
	width: 50.5rem;
	height: 38em;
	object-fit: cover;
`;
