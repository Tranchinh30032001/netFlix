import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ListFilm from "../components/ListFilm";
import HeaderContainer from "../containers/HeaderContainer";
import ListFilmContainer from "../containers/ListFilmContainer";
import { auth, db } from "../firebase";
import logo from "../logo.svg";
import { getdata, login, logout, userSelector } from "../Redux/userSlice";

function ListFilmPage() {
	const dispatch = useDispatch();
	const user = useSelector(userSelector);
	const navigate = useNavigate();
	const [category, setCategory] = useState("films");
	useEffect(() => {
		const target = collection(db, category);
		const unsnapshot = onSnapshot(target, (snap) => {
			const allResult = snap.docs.map((doc) => ({
				id: doc.id,
				title: category,
				info: doc.data(),
			}));
			dispatch(getdata(allResult));
		});
		return () => unsnapshot;
	}, [category]);
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
							<span
								onClick={() => console.log("ok series")}
								className="category"
							>
								Series
							</span>
						</ListFilm.Text>
						<ListFilm.Text>
							<span
								onClick={() => setCategory("films")}
								className="category category-film"
							>
								Film
							</span>
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
			<ListFilmContainer></ListFilmContainer>
		</>
	);
}

export default ListFilmPage;
