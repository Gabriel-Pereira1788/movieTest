import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { getMoviesList } from "../../services/modules/movies";
import { IDataMovie } from "../../models/DataMovie";
import { ITmdb } from "../../models/Itmdb";

interface State {
  loading: boolean;
  dataMovies: IDataMovie[];
  focusMovie: ITmdb | null;
}

const initialState: State = {
  loading: false,
  dataMovies: [],
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
    setFocusMovie(state: State, action) {
      state.focusMovie = action.payload;
    },
  },
});

export const { setLoading, getMovies, setFocusMovie } = moviesSlice.actions;

export default moviesSlice.reducer;

export function getAsyncMovies() {
  return async function Handler(dispatch: Dispatch<AnyAction>) {
    try {
      dispatch(setLoading(true));
      const moviesList = await getMoviesList();
      return dispatch(getMovies(moviesList));
    } catch (error) {
      console.log(error);
    }
  };
}

