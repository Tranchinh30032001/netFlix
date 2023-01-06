import styled from "styled-components";

export const Heading = styled.h1`
	color: #fff;
	font-size: 5rem;
	margin: 3rem 0;
`;
export const Wrapper = styled.div`
	max-width: 80rem;
	width: 100%;
`;
export const Item = styled.div`
	/* color: #fff;
	margin-bottom: 0.8rem;
	width: 100%; */
	color: white;
	margin: auto;
	margin-bottom: 10px;
	max-width: 728px;
	width: 100%;
`;
export const Question = styled.h1`
	/* display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 3rem;
	font-size: 2.4rem;
	background-color: rgb(48, 48, 48);
	margin-bottom: 0.2rem;
	width: 100%;
	img {
		width: 3rem;
		filter: brightness(0) invert(1);
	} */
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	margin-bottom: 1px;
	font-size: 26px;
	font-weight: normal;
	background: #303030;
	padding: 0.8em 1.2em 0.8em 1.2em;
	user-select: none;
	align-items: center;
	img {
		filter: brightness(0) invert(1);
		width: 24px;
		user-select: none;
		@media (max-width: 600px) {
			width: 16px;
		}
	}
	@media (max-width: 600px) {
		font-size: 16px;
	}
`;
export const Body = styled.p`
	/* font-size: 1.8rem;
	background-color: rgb(48, 48, 48);
	padding: 0rem 2rem;
	transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1);
	white-space: pre-wrap; */
	/* max-height: 10rem; */
	font-size: 26px;
	font-weight: normal;
	line-height: normal;
	background: #303030;
	white-space: pre-wrap;
	user-select: none;
	overflow: hidden;
	&.closed {
		max-height: 0;
		overflow: hidden;
		transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1);
	}
	&.open {
		max-height: 1200px;
		transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1);
	}
	span {
		display: block;
		padding: 0.8em 2.2em 0.8em 1.2em;
	}
	@media (max-width: 600px) {
		font-size: 16px;
		line-height: 22px;
	}
`;
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #000;
`;
