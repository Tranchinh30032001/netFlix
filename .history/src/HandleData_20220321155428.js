import { userSelector } from "./Redux/userSlice";

const handleData = () => {
	const data = userSelector((state) => state.user.data);
	console.log("lay data: ", data);
};
