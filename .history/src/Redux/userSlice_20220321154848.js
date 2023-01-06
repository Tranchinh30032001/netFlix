import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		data: [],
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
		getData: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const userSelector = (state) => state.user.user;
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
