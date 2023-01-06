import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import styled from "styled-components";
import React from "react";
import { Container, Row, Col } from "reactstrap";

function Header() {
	return (
		<StyledHeader>
			<Container>
				<Row>
					<Col lg={8} className="flex left">
						<a href="">
							<Logo
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
								alt="Logo"
							/>
						</a>
						<ul className="navlink">
							<li>
								<a href="">HomePage</a>
							</li>
							<li>
								<a href="">Series</a>
							</li>
							<li>
								<a href="">Movies</a>
							</li>
							<li>
								<a href="">New And Popular</a>
							</li>
							<li>
								<a href="">My list</a>
							</li>
						</ul>
					</Col>
					<Col lg={4} className="flex right">
						<Search className="icon" />
						<span>KID</span>
						<Notifications className="icon" />
						<img src="/Img/person.jpg" alt="" />
						<ArrowDropDown className="icon" />
					</Col>
				</Row>
			</Container>
		</StyledHeader>
	);
}

export default Header;

const StyledHeader = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	background-color: ${({ theme }) => theme.mainColor};
	color: #fff;
	padding: 2rem 0;
	.navlink {
		display: flex;
		li > a {
			margin-left: 2rem;
			color: inherit;
			display: block;
		}
	}
	.flex {
		display: flex;
		align-items: center;
		font-size: 1.6rem !important;
	}
	.right {
		justify-content: end;
		img {
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
			object-fit: cover;
		}
	}
	.right > * {
		margin-left: 2rem;
	}
	.icon {
		font-size: 2.4rem;
	}
`;
const Logo = styled.img`
	width: 18rem;
	height: 4rem;
`;
