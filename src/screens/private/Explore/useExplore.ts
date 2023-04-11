import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import React from "react";
import { cleanUp, getAsyncMovies } from "../../../store/modules/movies.store";
import { useNavigation } from "@react-navigation/native";

export function useExplore() {
  const { dataMovies, loading } = useSelector(
    (state: RootState) => state.movies
  );
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const categories =
    dataMovies.length > 0 ? dataMovies.map((movie) => movie.title) : [];

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(getAsyncMovies());
    });
    navigation.addListener("blur", () => {
      dispatch(cleanUp());
    });
  }, []);

  return {
    dataMovies,
    categories,
    loading,
  };
}

