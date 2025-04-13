import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./ducks/User";

const store = configureStore({
	reducer: {
		localdata: userReducer,
	},
});

export default store;
