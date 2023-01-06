import { useEffect, useState, useContext } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function useContent(target) {
	const [content, setContent] = useState([]);
	useEffect(async () => {
		const result = collection(db, target);
		const unsnapshot = await onSnapshot(result, (snapshot) => {
			const allContent = snapshot.docs.map((contentObj) => ({
				data: contentObj.data(),
				docId: contentObj.id,
			}));
			return setContent(allContent);
		});
	}, []);

	return content;
}
