import { configureStore } from "@reduxjs/toolkit";
import reducerDragDrop from "./isDragDrop";
import changeEditor from "./editorOrder";
import selectedOption from "./pickOption";

export const store = configureStore({
	reducer: {
		isDragDrop: reducerDragDrop,
		editorOrder: changeEditor,
		pickOption: selectedOption,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
