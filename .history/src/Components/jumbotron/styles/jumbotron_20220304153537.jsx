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
	max-width: 110rem;
	width: 100%;
	margin: 0 auto;
	@media (max-width: 991px) {
		flex-direction: column;
	}
`;
export const Flex = styled.div`
	width: 50%;
`;
export const Title = styled.h1`
	font-size: 4.8rem;
	line-height: 1.1;
	margin-bottom: 1.6rem;
	@media (max-width: 991px) {
		text-align: center;
		font-size: 35px;
	}
`;
export const SubTitle = styled.p`
	font-size: 2.6rem;
	@media (max-width: 991px) {
		text-align: center;
	}
`;
export const Image = styled.img`
	max-width: 100%;
	height: auto;
`;
