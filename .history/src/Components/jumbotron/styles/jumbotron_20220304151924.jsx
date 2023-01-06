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
	padding: 4rem;
	overflow: hidden;
`;
export const Inner = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	flex-direction: ${({ direction }) => (direction ? direction : "row")};
	width: 110rem;
	margin: 0 auto;
`;
export const Flex = styled.div``;
export const Title = styled.h1`
	font-size: 4.4rem;
	max-width: 100%;
	text-align: center;
`;
export const SubTitle = styled.p`
	display: flex;
	font-size: 2.6rem;
	margin-top: 2.2rem;
	flex-wrap: wrap;
`;
export const Image = styled.img`
	max-width: 100%;
	height: 35rem;
	object-fit: contain;
	flex: 1;
`;
