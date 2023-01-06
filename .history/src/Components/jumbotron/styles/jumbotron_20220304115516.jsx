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
	padding: 1rem;
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
	width: 50%;
	@media (max-width: 1000px) {
		width: 100%;
		padding: 0 45px;
		text-align: center;
	}
`;
export const Title = styled.h2`
	font-size: 4rem;
`;
export const SubTitle = styled.p`
	font-size: 2rem;
	margin-top: 2.2rem;
`;
export const Image = styled.img`
	width: 100%;
	height: 35rem;
	object-fit: contain;
	flex: 1;
`;
