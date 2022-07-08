import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	open: false,
};
export const DrawerSlice = createSlice({
	name: "drawer",
	initialState: initialState,
	reducers: {
		openCloseDrawer: (state) => {
			state.open = !state.open;
		},
	},
});
export const { openCloseDrawer } = DrawerSlice.actions;
export default DrawerSlice.reducer;
