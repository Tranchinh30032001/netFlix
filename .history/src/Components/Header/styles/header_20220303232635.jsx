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
`;
export const Logo = styled.img`
	height: 36px;
	width: 134px;
	margin-right: 40px;

	@media (min-width: 1449px) {
		height: 45px;
		width: 167px;
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
