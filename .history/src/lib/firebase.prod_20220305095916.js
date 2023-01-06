import Firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
	apiKey: "AIzaSyATf9zODcOCt6TjD_tqzxz81EdhSlzOPV4",
	authDomain: "netflix-clone-8b3a7.firebaseapp.com",
	projectId: "netflix-clone-8b3a7",
	storageBucket: "netflix-clone-8b3a7.appspot.com",
	messagingSenderId: "747610415757",
	appId: "1:747610415757:web:0f8263adbf5e9e73c978c4",
};
const firebase = Firebase.initializeApp(config);
seedDatabase(firebase);
export default firebase;
