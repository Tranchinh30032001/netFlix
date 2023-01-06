import styled from "styled-components";

export const Container = styled.div``;
export const Title = styled.h2`
	color: #fff;
`;
export const Item = styled.div`
	cursor: pointer;
	color: #fff;
	position: relative;
	img {
		width: 100%;
		object-fit: cover;
	}
	.detail {
		position: absolute;
		bottom: 0;
		display: none;
	}
`;
export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 0 0.6rem;
`;
