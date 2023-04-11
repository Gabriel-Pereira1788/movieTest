import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import moviesReducer from "./modules/movies.store";
import singleMovieReducer from "./modules/singleMovie.store";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    singleMovie: singleMovieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

