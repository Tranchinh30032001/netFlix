import styled from "styled-components";

export const Container = styled.div`
	margin-top: 4rem;
`;
export const Title = styled.h2`
	color: #fff;
`;
export const Item = styled.div`
	cursor: pointer;
	color: #fff;
	position: relative;
	transition: all 0.2s linear;
	img {
		width: 100%;
		object-fit: cover;
	}
	.detail {
		display: none;
	}
	&:hover {
		z-index: 100;
		.detail {
			display: block;
			position: absolute;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.5);
			padding: 0 1rem;
		}
		transform: scale(1.12);
	}
`;
export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 0 0.6rem;
`;
