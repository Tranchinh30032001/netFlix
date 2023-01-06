import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	border-bottom: 8px solid rgb(58, 58, 58);
	background: url(${({ bg }) =>
			!bg ? "/images/misc/home-bg.jpg" : "/images/misc/joker1.jpg"})
		top left / cover no-repeat;
	padding: 0 5.6rem;
`;
export const Navbar = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 10rem;
`;
export const Logo = styled.img`
	height: 4rem;
	width: 15rem;
	text-align: left;
	@media (max-width: 578px) {
		height: 3rem;
	}
`;
export const ButtonLink = styled(RouterLink)`
	display: block;
	width: 8.4rem;
	height: 3.2rem;
	background-color: #e50914;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-size: 1.6rem;
	border-radius: 0.3rem;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
`;
export const Content = styled.div`
	max-width: 95rem;
	width: 100%;
	padding: 12.5rem 4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #fff;
	margin: 0 auto;
`;
export const Title = styled.h1`
	font-size: 6rem;
	max-width: 70rem;
	text-align: center;
	margin: 0 auto;
	padding: 0 2rem;
	@media screen and (max-width: 991px) {
		font-size: 4.8rem;
	}
	@media screen and (max-width: 558px) {
		font-size: 3.6rem;
	}
`;
export const SubTitle = styled.p`
	font-size: 2.4rem;
	margin-top: 1.6rem;
`;
export const Search = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ bg }) => (bg ? "#fff" : "transparent")};
	border-radius: 0.6rem;
	input {
		background-color: transparent;
		width: 16rem;
		padding: 0.8rem 0;
		padding-left: 0.8rem;
	}
	.icon-search {
		font-size: 2rem;
		cursor: pointer;
		color: #fff;
		margin-right: 0.6rem;
		&.active {
			color: #000;
		}
	}
	margin-right: 2rem;
`;
export const Right = styled.div`
	display: flex;
	align-items: center;
`;
export const User = styled.div`
	position: relative;
	img {
		width: 3.6rem;
		height: 3.6rem;
		border-radius: 100%;
		object-fit: cover;
	}
	.icon-down {
		font-size: 2.4rem;
		color: #fff;
		cursor: pointer;
	}
	.logout {
		position: absolute;
		top: 60%;
		left: 50%;
		background-color: #fff;
		padding: 0.4rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
