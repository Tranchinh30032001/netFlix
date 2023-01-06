import { createStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = createStore({
	user: userSlice,
});
