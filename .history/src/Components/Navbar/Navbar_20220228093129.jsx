import "./navbar.scss";
import React, { useState } from "react";
import {
	ArrowDownward,
	ArrowDropDown,
	Notifications,
	Search,
} from "@material-ui/icons";

function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	window.onscroll = () => {
		setScrolled(window.scrollY === 0 ? false : true);
		return () => (window.onscroll = null);
	};
	return (
		<div className={scrolled ? "navbar active" : "navbar"}>
			<div className="container">
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
					<Search className="icon" />
					<span>KID</span>
					<Notifications className="icon" />
					<img src="/Img/person.jpg" alt="" />
					<div className="profile">
						<ArrowDropDown className="icon" />
						<div className="login">
							<div>
								<a href="">LogIn</a>
							</div>
							<div>
								<a href="">LogOut</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
