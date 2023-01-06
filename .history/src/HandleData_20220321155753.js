import { useSelector } from "react-redux";

export const handleData = () => {
	const data = useSelector((state) => state.user.data);
	console.log("lay data: ", data);
};
