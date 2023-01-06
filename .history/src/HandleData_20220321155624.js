import { userSelector } from "./Redux/userSlice";

export const handleData = () => {
	const data = userSelector((state) => state.user.data);
	console.log("lay data: ", data);
};
