import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	initialState: {
		user: null,
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
	},
});

// export userSelector = (state) => state.
export {login, logout} = userSlice.actions

export default userSlice.reducer;


