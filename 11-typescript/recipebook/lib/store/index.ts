import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipeSlice";

export const store = configureStore({
  reducer: { recipes: recipeReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
