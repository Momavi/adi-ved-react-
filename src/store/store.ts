import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./Popup";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
