import styled from "styled-components";

export const Container = styled.div`
	background-color: #0000;
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
`;
export const Flex = styled.div``;
export const Title = styled.h2``;
export const SubTitle = styled.p``;
