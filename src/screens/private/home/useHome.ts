import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import {
  getAsyncPopularMovies,
  setFocusMovie,
} from "../../../store/modules/movies.store";
import { HomeViewModel } from "./models";

export function useHome(): HomeViewModel {
  const { popularMovies, focusMovie, loading } = useSelector(
    (state: RootState) => state.movies
  );
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getAsyncPopularMovies());
  }, []);

  React.useEffect(() => {
    if (!!popularMovies) {
      const defaultSelected = popularMovies[0];
      dispatch(setFocusMovie(defaultSelected));
    }
  }, [popularMovies]);

  return {
    popularMovies,
    loading,
    focusMovie,
  };
}

