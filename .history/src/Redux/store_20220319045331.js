import { createStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

export const store = createStore({
	user: userSlice,
});
