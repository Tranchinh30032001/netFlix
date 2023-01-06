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
			&:hover {
				background-color: #fff;
				color: red;
			}
		}
	}
	.right {
		position: relative;
		img {
			height: 30rem;
		}
		.icon-cancel {
			font-size: 3.6rem;
			color: #fff;
			position: absolute;
			top: 2rem;
			right: 2rem;
		}
	}

	.overlay {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		width: 100vw;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		z-index: 100;
		.inner {
			position: relative;
			width: 100%;
			max-width: 900px;
			margin: auto;
			video {
				height: 100%;
				width: 100%;
			}
			.icon-clear {
				position: absolute;
				top: 1.5rem;
				right: 1.5rem;
			}
		}
	}
`;
