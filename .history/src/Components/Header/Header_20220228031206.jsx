import { Notifications, Search } from "@material-ui/icons";
import styled from "styled-components";
import React from "react";
import { Container, Row, Col } from "reactstrap";

function Header() {
	return (
		<StyledHeader>
			<Container>
				<Row>
					<Col className="flex left">
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
					<Col className="flex right" >
						<Search />
						<span>KID</span>
						<Notifications />
					</Col>
				</Row>
			</Container>
		</StyledHeader>
	);
}

export default Header;

const StyledHeader = styled.header`
    padding: 2rem 0;
    .navlink{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .flex{
        display: flex;
        align-items: center;
    }
	.right{
		/* justify-content: end; */
	}
`;
const Logo = styled.img`
    width: 20rem;
    height: 5rem;
`;
