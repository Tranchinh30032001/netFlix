import { userSelector } from "./Redux/userSlice";

exportconst handleData = () => {
	const data = userSelector((state) => state.user.data);
	console.log("lay data: ", data);
};
