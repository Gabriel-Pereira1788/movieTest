import { AnyAction, Dispatch, createSlice } from "@reduxjs/toolkit";
import { ISingleMovie } from "../../models/DataMovie";
import { MoviesAPI } from "../../repositories/services/modules/movies";

interface State {
  dataMovie: ISingleMovie | null;
  loading: boolean;
  error: any;
}

const initialState: State = {
  dataMovie: null,
  error: null,
  loading: false,
};

export const singleMovie = createSlice({
  name: "singleMovie",
  initialState,
  reducers: {
    setLoading(state: State, action) {
      state.loading = action.payload;
    },
    setError(state: State, action) {
      state.error = action.payload;
    },
    getSingleMovie(state: State, action) {
      state.dataMovie = action.payload;
      state.error = null;
    },
    cleanUp(state: State) {
      return {
        dataMovie: null,
        error: null,
        loading: false,
      };
    },
  },
});

export const { setLoading, getSingleMovie, cleanUp, setError } =
  singleMovie.actions;

export default singleMovie.reducer;

export function getAsyncSingleMovie(id: number) {
  return async function Handler(dispatch: Dispatch<AnyAction>) {
    dispatch(setLoading(true));
    try {
      const dataMovie = await MoviesAPI.getMovieById(id);

      return dispatch(getSingleMovie(dataMovie));
    } catch (error) {
      console.log("single-movie-error", error);
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
}

