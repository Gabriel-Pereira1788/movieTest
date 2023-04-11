import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { MoviesAPI } from "../../services/modules/movies";
import { IDataMovie } from "../../models/DataMovie";
import { ITmdb } from "../../models/Itmdb";

interface State {
  loading: boolean;
  dataMovies: IDataMovie[];
  popularMovies: ITmdb[];
  focusMovie: ITmdb | null;
}

const initialState: State = {
  loading: false,
  dataMovies: [],
  popularMovies: [],
  focusMovie: null,
};

export const moviesSlice = createSlice({
  initialState,
  name: "movies",
  reducers: {
    setLoading(state: State, action) {
      state.loading = action.payload;
    },
    getMovies(state: State, action) {
      state.dataMovies = action.payload;
    },
    getPopularMovies(state: State, action) {
      state.popularMovies = action.payload;
    },
    setFocusMovie(state: State, action) {
      state.focusMovie = action.payload;
    },
    cleanUp(state: State) {
      state = initialState;
    },
  },
});

export const {
  setLoading,
  getMovies,
  getPopularMovies,
  setFocusMovie,
  cleanUp,
} = moviesSlice.actions;

export default moviesSlice.reducer;

export function getAsyncMovies() {
  return async function Handler(dispatch: Dispatch<AnyAction>) {
    try {
      dispatch(setLoading(true));
      const moviesList = await MoviesAPI.getMoviesList();

      return dispatch(getMovies(moviesList));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function getAsyncPopularMovies() {
  return async function Handler(dispatch: Dispatch<AnyAction>) {
    try {
      dispatch(setLoading(true));
      const moviesList = await MoviesAPI.getMoviesByCategory("popular");
      return dispatch(getPopularMovies(moviesList));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
}

