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
	align-items: center;
	justify-content: space-evenly;
	flex-direction: ${({ direction }) => (direction ? direction : "row")};
	width: 110rem;
	margin: 0 auto;
	border: 1px solid red;
`;
export const Flex = styled.div`
	max-width: 50.5rem;
	width: 100%;
`;
export const Title = styled.h2`
	font-size: 4rem;
`;
export const SubTitle = styled.p``;
export const Image = styled.img`
	width: 100%;
	height: 35rem;
	object-fit: contain;
	flex: 1;
`;
