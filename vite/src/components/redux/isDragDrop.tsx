import { createSlice } from "@reduxjs/toolkit";

export interface DragDrop {
	value: boolean;
}

const initialState: DragDrop = {
	value: false,
};

export const DragDrop = createSlice({
	name: "DragDrop",
	initialState,
	reducers: {
		isDragDrop: (state, action) => {
			state.value = action.payload;
		},
	},
});
export const { isDragDrop } = DragDrop.actions;

export default DragDrop.reducer;
