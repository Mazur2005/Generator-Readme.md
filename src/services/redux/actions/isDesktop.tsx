import { createSlice } from "@reduxjs/toolkit";

export interface desktop {
	value: boolean;
}

const initialState: desktop = {
	value: false,
};

export const desktop = createSlice({
	name: "desktop",
	initialState,
	reducers: {
		isDesktop: (state, action) => {
			state.value = action.payload;
		},
	},
});
export const { isDesktop } = desktop.actions;

export default desktop.reducer;