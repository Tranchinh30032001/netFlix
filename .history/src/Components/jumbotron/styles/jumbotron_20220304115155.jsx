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
	border-bottom: 0.8rem solid rgb(58, 58, 58);
`;
export const Inner = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: ${({ direction }) => (direction ? direction : "row")};
	width: 110rem;
	margin: 0 auto;
`;
export const Flex = styled.div`
	max-width: 50.5rem;
	width: 100%;
`;
export const Title = styled.h2`
	font-size: 4rem;
`;
export const SubTitle = styled.p`
	font-size: 1.8rem;
	margin-top: 1.6rem;
`;
export const Image = styled.img`
	width: 100%;
	height: 35rem;
	object-fit: contain;
	flex: 1;
`;
