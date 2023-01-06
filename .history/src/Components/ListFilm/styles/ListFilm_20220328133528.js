import styled from "styled-components";

export const Container = styled.div`
	max-width: 50rem;
	width: 100%;
	color: #fff;
	padding-top: 10rem;
	padding-bottom: 25rem;
`;
export const Title = styled.h1`
	font-size: 5rem;
	@media (max-width: 578px) {
		font-size: 3rem;
		padding-left: 2rem;
	}
`;
export const Text = styled.p`
	font-size: 1.6rem;
	.category {
		color: orange;
		cursor: pointer;
		position: relative;
		&:hover::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 2px;
			background-color: #fff;
		}
		&:first-child {
			margin-left: 9rem;
		}
	}
	.category-film {
		margin-left: 2rem !important;
	}
	@media (max-width: 578px) {
		padding-left: 2rem;
	}
`;
export const Play = styled.button`
	width: 15rem;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	font-size: 1.6rem;
	padding: 1.6rem 0;
	border-radius: 0.6rem;
	&:hover {
		color: #fff;
		background-color: red;
	}
	&:active {
		opacity: 0.6;
	}
`;