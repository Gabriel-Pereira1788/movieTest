import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { IDataMovie } from "../../models/DataMovie";
import { ITmdb } from "../../models/Itmdb";
import { MoviesAPI } from "../../repositories/services/modules/movies";

interface State {
  loading: boolean;
  dataMovies: IDataMovie[];
  popularMovies: ITmdb[];
  dataMoviesGenre: ITmdb[];
  focusMovie: ITmdb | null;
}

const initialState: State = {
  loading: false,
  dataMovies: [],
  dataMoviesGenre: [],
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
      if (action.payload.genre === "all") {
        state.dataMovies = action.payload.list;
        state.dataMoviesGenre = [];
      } else {
        state.dataMoviesGenre = action.payload.list;
        state.dataMovies = [];
      }
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

export function getAsyncMovies(genre: GenreIdentify) {
  return async function Handler(dispatch: Dispatch<AnyAction>) {
    try {
      dispatch(setLoading(true));
      const moviesList =
        genre === "all"
          ? await MoviesAPI.getMoviesList()
          : await MoviesAPI.getMoviesByGenre(genre);

      return dispatch(getMovies({ list: moviesList, genre }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
}

