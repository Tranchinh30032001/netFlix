import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background: url("./images/misc/home-bg.jpg");
	border-bottom: 8px solid rgb(58, 58, 58);
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
	max-width: 95rem;
	width: 100%;
	padding:0 4rem;
	height: 50.8rem;
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
