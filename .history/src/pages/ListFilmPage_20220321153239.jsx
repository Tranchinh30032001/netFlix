import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ListFilm from "../components/ListFilm";
import HeaderContainer from "../containers/HeaderContainer";
import { auth } from "../firebase";
import logo from "../logo.svg";
import { login, logout, userSelector } from "../Redux/userSlice";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function ListFilmPage() {
	const dispatch = useDispatch();
	const user = useSelector(userSelector);
	const navigate = useNavigate();
	const [category, setCategory] = useState("film");
	const [data, setData] = useState([]);
	useEffect(() => {
		const target = collection(db, category);
		const unsnapshot = onSnapshot(target, (snap) => {
			const allResult = snap.docs.map((doc) => ({
				id: doc.id,
				info: doc.data(),
			}));
		});
	}, []);
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
					<Header.Right>
						<Header.Logo src={logo} />
						<ListFilm.Text>
							<span className="category">Series</span>
						</ListFilm.Text>
						<ListFilm.Text>
							<span className="category category-film">Film</span>
						</ListFilm.Text>
					</Header.Right>
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
