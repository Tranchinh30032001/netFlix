import React, { useEffect } from "react";
import Header from "../components/Header";
import HeaderContainer from "../containers/HeaderContainer";
import logo from "../logo.svg";
import ListFilm from "../components/ListFilm";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "../Redux/userSlice";
import { useSelector } from "react-redux";
import { userSelector } from "../Redux/userSlice";

function ListFilmPage() {
	const dispatch = useDispatch();
	const user = useSelector(userSelector);
	useEffect(() => {
		const eventListen = onAuthStateChanged(auth, (userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.email,
						displayName: userAuth.email,
						uid: userAuth.uid,
						photoUrl: userAuth.photoURL,
					})
				);
			}
		});
		return () => eventListen();
	}, []);

	return (
		<HeaderContainer bg>
			<Header.Navbar>
				<Header.Logo src={logo} />
				<Header.Right>
					<Header.Search>
						<input type="text" placeholder="Search ..." />
						<SearchIcon className="icon-search" />
					</Header.Search>
					<Header.User>
						<a href="">
							<img src={user?.photoUrl} alt="" />
						</a>
						<ArrowDropDownIcon className="icon-down" />
					</Header.User>
				</Header.Right>
			</Header.Navbar>
			<ListFilm>
				<ListFilm.Title>Watch Joker Now</ListFilm.Title>
				<ListFilm.Text>
					Lunar New Year Festival often falls between late January and early
					February; it is among the most important holidays in Vietnam.
					Officially, the festival includes the 1st, 2nd, and 3rd day in Lunar
					Calendar; however, Vietnamese people often spend nearly a month
					celebrating this special event.
				</ListFilm.Text>
				<ListFilm.Play>Play</ListFilm.Play>
			</ListFilm>
		</HeaderContainer>
	);
}

export default ListFilmPage;
