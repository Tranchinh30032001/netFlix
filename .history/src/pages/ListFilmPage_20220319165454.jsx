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
import { useNavigate } from "react-router-dom";
import useContent from "../hooks/useContent";

function ListFilmPage() {
	const dispatch = useDispatch();
	const user = useSelector(userSelector);
	const navigate = useNavigate();
	const series = useContent("series");
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
			} else {
				navigate("/signin");
				dispatch(logout());
			}
		});
		return () => eventListen();
	}, []);

	return (
		<>
			<HeaderContainer bg>
				<Header.Navbar>
					<Header.Logo src={logo} />
					<Header.Right>
						<Header.Search Icon={SearchIcon} />
						<Header.User photoUrl={user?.photoUrl} Icon={ArrowDropDownIcon} />
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
		</>
	);
}

export default ListFilmPage;
