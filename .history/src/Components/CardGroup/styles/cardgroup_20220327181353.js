import styled from "styled-components";

export const Container = styled.div``;
export const Title = styled.h2``;
export const Item = styled.div`
	cursor: pointer;
	img {
		width: 100%;
		object-fit: cover;
	}
`;
export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 0 0.6rem;
`;
