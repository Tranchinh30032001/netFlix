import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	margin-top: 2.4rem;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;
export const Introduce = styled.p`
	color: #fff;
	text-align: center;
	font-size: 1.9rem;
	@media screen and (max-width: 991px) {
		padding: 0 8rem;
		margin: 0 2rem;
		line-height: 1.5;
	}
`;
export const Input = styled.input`
	max-width: 50rem;
	width: 100%;
	height: 7rem;
	padding: 0 1rem;
	@media screen and (max-width: 991px) {
		height: 6rem;
		margin-top: 2rem;
	}
`;
export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-size: 2.6rem;
	background-color: #e50914;
	text-transform: capitalize;
	padding: 0 2.4rem;
	height: 7rem;
	img {
		width: 2rem;
		margin-left: 1rem;
		color: #fff;
		filter: brightness(0) invert(1);
	}
	@media screen and (max-width: 991px) {
		height: 6rem;
	}
`;
export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
	margin-bottom: 2rem;
`;
