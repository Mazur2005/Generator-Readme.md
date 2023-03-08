import { createSlice } from "@reduxjs/toolkit";

export interface PickOption {
	value: string;
}

const initialState: PickOption = {
	value: "",
};

export const PickOption = createSlice({
	name: "PickOption",
	initialState,
	reducers: {
		selectedOption: (state, action) => {
			state.value = action.payload;
		},
	},
});
export const { selectedOption } = PickOption.actions;

export default PickOption.reducer;
