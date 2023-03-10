import { configureStore } from "@reduxjs/toolkit";
import reducerDragDrop from "../../services/actions/isDragDrop";
import changeEditor from "../../services/actions/editorOrder";
import selectedOption from "../../services/actions/pickOption";
import createSketch from "../../services/actions/createSketch";

export const store = configureStore({
	reducer: {
		isDragDrop: reducerDragDrop,
		editorOrder: changeEditor,
		pickOption: selectedOption,
		createSketch: createSketch,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
