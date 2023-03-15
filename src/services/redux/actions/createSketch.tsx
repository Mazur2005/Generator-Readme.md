import { createSlice } from "@reduxjs/toolkit";

export interface sketch {
	value: string;
}

const initialState: sketch = {
	value: "",
};

export const sketch = createSlice({
	name: "sketch",
	initialState,
	reducers: {
		createSketch: (state, action) => {
			state.value = action.payload;
		},
	},
});
export const { createSketch } = sketch.actions;

export default sketch.reducer;
