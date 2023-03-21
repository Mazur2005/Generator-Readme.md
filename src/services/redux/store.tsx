import { configureStore } from "@reduxjs/toolkit";
import isDragDrop from "./actions/isDragDrop";
import editorOrder from "./actions/editorOrder";
import pickOption from "./actions/pickOption";
import createSketch from "./actions/createSketch";
import isDesktop from "@/services/redux/actions/isDesktop";

export const store = configureStore({
	reducer: {
		isDragDrop,
		editorOrder,
		pickOption,
		createSketch,
		isDesktop,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
