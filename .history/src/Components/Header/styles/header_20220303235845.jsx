import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background: url("./images/misc/home-bg.jpg");
`;
export const Navbar = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 10rem;
	margin: 0 5.6rem;
	@media screen and (max-width: 991px) {
		margin: 0 3rem;
	}
`;
export const Logo = styled.img`
	height: 4rem;
	width: 15rem;
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
	max-width: 90rem;
	width: 100%;
	height: 50.8rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #fff;
	margin: 0 auto;
`;
export const Title = styled.h1`
	font-size: 7rem;
	max-width: 80rem;
	/* margin: 0 auto; */
`;
export const SubTitle = styled.p`
	font-size: 1.6rem;
`;
