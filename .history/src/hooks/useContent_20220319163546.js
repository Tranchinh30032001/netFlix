import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { db } from "../firebase";
import { collection } from "firebase/firestore";

export default function useContent(target) {
	const [content, setContent] = useState([]);

	useEffect(() => {
		collection(db, target)
			.get()
			.then((snapshot) => {
				const allContent = snapshot.docs.map((contentObj) => ({
					...contentObj.data(),
					docId: contentObj.id,
				}));

				setContent(allContent);
			})
			.catch((error) => {
				console.log(error.message);
			});
	}, []);

	return { [target]: content };
}
