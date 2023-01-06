import styled from "styled-components";

export const Container = styled.div``;
export const Title = styled.h2``;
export const Item = styled.div`
	img {
		width: 100%;
		/* height: 100%; */
		object-fit: cover;
	}
`;
export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
`;
