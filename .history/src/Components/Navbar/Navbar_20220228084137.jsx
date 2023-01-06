import "./navbar.scss";
import React from "react";
import { ArrowDownward, Notifications, Search } from "@material-ui/icons";

function Navbar() {
	return (
		<div className="navbar">
			<div className="left">
				<a href="" className="logo">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
						alt=""
					/>
				</a>
				<ul className="nav-link">
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
						<a href="">New and Popular</a>
					</li>
					<li>
						<a href="">My List</a>
					</li>
				</ul>
			</div>
			<div className="right">
				<Search />
				<span>KID</span>
				<Notifications />
				<img src="/Img/person.jpg" alt="" />
				<ArrowDownward />
			</div>
		</div>
	);
}

export default Navbar;
