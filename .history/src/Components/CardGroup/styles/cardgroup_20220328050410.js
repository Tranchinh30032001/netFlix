import styled from "styled-components";

export const Container = styled.div`
	padding-top: 4rem;
`;
export const Title = styled.h2`
	color: #fff;
	margin-bottom: 1rem;
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

			display: -webkit-box;
			-webkit-line-clamp: 4;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			word-break: break-word;
		}
		transform: scale(1.12);
	}
`;
export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 0 0.6rem;
`;
export const Feature = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0 4rem;
	cursor: pointer;
	.left {
		color: #fff;
		p {
			font-size: 1.2rem;
			margin-top: 2rem;
		}
		.rating {
			display: flex;
			align-items: center;
			.maturity {
				background-color: red;
				width: 2.4rem;
				height: 2.4rem;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 100%;
				margin-right: 1rem;
			}
		}
		.btn-play {
			background-color: red;
			width: 10rem;
			height: 3rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 1rem;
			font-size: 1.5rem;
			margin-top: 2rem;
		}
	}
	.right {
		border: 1px solid #fff;
		img {
			height: 30rem;
		}
		.icon-cancel {
			font-size: 3rem;
			color: #fff;
			position: absolute;
		}
	}
`;
