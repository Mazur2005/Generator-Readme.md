import { createSlice } from "@reduxjs/toolkit";

export interface EditorOrder {
	value: boolean;
}

const initialState: EditorOrder = {
	value: false,
};

export const EditorOrder = createSlice({
	name: "EditorOrder",
	initialState,
	reducers: {
		changeEditor: (state, action) => {
			state.value = action.payload;
		},
	},
});
export const { changeEditor } = EditorOrder.actions;

export default EditorOrder.reducer;
