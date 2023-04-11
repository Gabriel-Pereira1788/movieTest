import { AnyAction, Dispatch, createSlice } from "@reduxjs/toolkit";
import { ITmdb } from "../../models/Itmdb";
import { MoviesAPI } from "../../services/modules/movies";

interface State {
  dataMovie: ITmdb | null;
  loading: boolean;
}

const initialState: State = {
  dataMovie: null,
  loading: false,
};

export const singleMovie = createSlice({
  name: "singleMovie",
  initialState,
  reducers: {
    setLoading(state: State, action) {
      state.loading = action.payload;
    },
    getSingleMovie(state: State, action) {
      state.dataMovie = action.payload;
    },
    cleanUp(state: State) {
      state = initialState;
    },
  },
});

export const { setLoading, getSingleMovie, cleanUp } = singleMovie.actions;

export default singleMovie.reducer;

export function getAsyncSingleMovie(id: number) {
  return async function Handler(dispatch: Dispatch<AnyAction>) {
    try {
      dispatch(setLoading(true));
      const dataMovie = await MoviesAPI.getMovieById(id);

      return dispatch(getSingleMovie(dataMovie));
    } catch (error) {
      console.log(error);
    }
  };
}

