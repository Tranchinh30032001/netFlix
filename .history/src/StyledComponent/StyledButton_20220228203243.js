import styled from "styled-components";

export const StyledButton = styled.div`
	width: 12rem;
	height: 3rem;
	padding: 2rem;
	border-radius: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ color }) => (color ? color : "#fff")};
	cursor: pointer;
	font-size: 1.6rem;
	&:hover {
		opacity: 0.8;
	}
`;
