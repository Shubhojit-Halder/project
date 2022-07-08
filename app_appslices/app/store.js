import { configureStore } from "@reduxjs/toolkit";
// import themeReducer from "../features/themeSlice";
import DrawerSlice from "../features/DrawerSlice";
export const store = configureStore({
	reducer: {
		// theme: themeReducer,
		drawer: DrawerSlice,
	},
});
