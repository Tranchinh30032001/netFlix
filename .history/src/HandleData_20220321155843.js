import { useSelector } from "react-redux";

export function HandleData() {
	const data = useSelector((state) => state.user.data);
	console.log("lay data: ", data);
}
