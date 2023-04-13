import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import {
  getAsyncMovies,
  setFocusMovie,
} from "../../../store/modules/movies.store";
import { HomeViewModel } from "./models";

export function useHome(): HomeViewModel {
  const { dataMoviesGenre, focusMovie, loading } = useSelector(
    (state: RootState) => state.movies
  );
  const dispatch = useAppDispatch();

  console.log(dataMoviesGenre);

  React.useEffect(() => {
    dispatch(getAsyncMovies("popular"));
  }, []);

  React.useEffect(() => {
    if (!!dataMoviesGenre) {
      const defaultSelected = dataMoviesGenre[0];
      dispatch(setFocusMovie(defaultSelected));
    }
  }, [dataMoviesGenre]);

  return {
    popularMovies: dataMoviesGenre,
    loading,
    focusMovie,
  };
}

