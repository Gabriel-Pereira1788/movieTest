import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import React from "react";
import { cleanUp, getAsyncMovies } from "../../../store/modules/movies.store";
import { useNavigation } from "@react-navigation/native";
import { ExploreViewModel, Filter } from "./models";
import { TMDB_GENRES } from "../../../helpers/constants/TMDB";

export function useExplore(): ExploreViewModel {
  const { dataMovies, loading, error } = useSelector(
    (state: RootState) => state.movies
  );
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const [filters, setFilters] = React.useState<Filter>({
    name: "",
    category: "all",
  });

  const categories = TMDB_GENRES.filter((genre) => !!genre.identify);

  function handleFilters(filter: Filter) {
    setFilters((prev) => ({ ...prev, ...filter }));
  }

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(getAsyncMovies(filters.category!));
    });

    navigation.addListener("blur", () => {
      dispatch(cleanUp());
      setFilters({
        name: "",
        category: "all",
      });
    });
  }, []);

  React.useEffect(() => {
    dispatch(getAsyncMovies(filters.category!));
  }, [filters.category]);

  return {
    dataMovies,
    categories: [{ name: "Todos", identify: "all" }, ...categories],
    loading,
    filters,
    error,
    handleFilters,
  };
}

