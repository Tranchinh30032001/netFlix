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
						<Logo
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
							alt="Logo"
						/>
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
					<Col lg={4} className="flex right" >
						<Search className="icon" />
						<span>KID</span>
						<Notifications className="icon" />
						<ArrowDropDown className="icon" />
					</Col>
				</Row>
			</Container>
		</StyledHeader>
	);
}

export default Header;

const StyledHeader = styled.header`
	background-color: ${({theme}) => theme.mainColor};
	color: #fff;
    padding: 2rem 0;
    .navlink{
        /* display: flex; */
       
		li > a{
			margin-left: 2rem;
			color: inherit;
			display: block;
		}
    }
    .flex{
        display: flex;
        align-items: center;
		font-size: 1.6rem !important;
    }
	.right{
		justify-content: end;
	}
	.right > *{
		margin-left: 2rem;
	}
	.icon{
		font-size: 2.4rem;
	}
`;
const Logo = styled.img`
    width: 18rem;
    height: 4rem;
`;
