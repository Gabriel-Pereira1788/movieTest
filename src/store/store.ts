import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./modules/movies.store";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
