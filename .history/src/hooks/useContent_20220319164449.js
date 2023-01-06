import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function useContent(target) {
	const [content, setContent] = useState([]);

	useEffect(() => {
		const result = collection(db, target);
		const unsnapshot = onSnapshot(result, (snapshot) => {
			const allContent = snapshot.docs.map((contentObj) => ({
				...contentObj.data(),
				docId: contentObj.id,
			}));
			return setContent(allContent);
		});
	}, []);
}
