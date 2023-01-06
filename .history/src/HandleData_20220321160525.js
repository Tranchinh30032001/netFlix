import { useSelector } from "react-redux";

export const HandleData = () => {
	const data = useSelector((state) => state.user.data);
	console.log(data.title);
};
