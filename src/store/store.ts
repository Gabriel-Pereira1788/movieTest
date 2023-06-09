import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import moviesReducer from "./modules/movies.store";
import singleMovieReducer from "./modules/singleMovie.store";
import authReducer from "./modules/auth.store";
import favoritesReducer from "./modules/favorites.store";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    singleMovie: singleMovieReducer,
    auth: authReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

