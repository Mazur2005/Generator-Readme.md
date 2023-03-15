import { configureStore } from "@reduxjs/toolkit";
import reducerDragDrop from "./actions/isDragDrop";
import changeEditor from "./actions/editorOrder";
import selectedOption from "./actions/pickOption";
import createSketch from "./actions/createSketch";
import isDesktop from "@/services/redux/actions/isDesktop";

export const store = configureStore({
	reducer: {
		isDragDrop: reducerDragDrop,
		editorOrder: changeEditor,
		pickOption: selectedOption,
		createSketch: createSketch,
		isDesktop,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
