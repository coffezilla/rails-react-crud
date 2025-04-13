import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRdxUser } from "./User.types";

// INITIAL STATE
const INITIAL_STATE: IRdxUser = {
	preferences: {
		theme: "light",
	},
	user: {},
};

// CREATE SLICE
const userSlice = createSlice({
	name: "localdata",
	initialState: INITIAL_STATE,
	reducers: {
		rdxChangePreferenceData(state: IRdxUser, action: PayloadAction<IRdxUser["preferences"]>) {
			state.preferences.theme = action.payload.theme;
		},
		rdxChangeUserData(state: IRdxUser, action: PayloadAction<IRdxUser["user"]>) {
			state.user.name = action.payload.name;
			state.user.email = action.payload.email;
		},
	},
});

// EXPORT ACTIONS
export const { rdxChangePreferenceData, rdxChangeUserData } = userSlice.actions;

// EXPORT REDUCER
export default userSlice.reducer;
