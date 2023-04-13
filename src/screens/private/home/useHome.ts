import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import {
  cleanUp,
  getAsyncMovies,
  setFocusMovie,
} from "../../../store/modules/movies.store";
import { HomeViewModel } from "./models";
import { useNavigation } from "@react-navigation/native";

export function useHome(): HomeViewModel {
  const { dataMoviesGenre, focusMovie, loading, error } = useSelector(
    (state: RootState) => state.movies
  );

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(getAsyncMovies("popular"));
    });

    navigation.addListener("blur", () => {
      dispatch(cleanUp());
    });
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
    error,
    focusMovie,
  };
}

