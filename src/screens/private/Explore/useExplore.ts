import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import React from "react";
import { cleanUp, getAsyncMovies } from "../../../store/modules/movies.store";
import { useNavigation } from "@react-navigation/native";
import { ExploreViewModel, Filter } from "./models";

export function useExplore(): ExploreViewModel {
  const { dataMovies, loading } = useSelector(
    (state: RootState) => state.movies
  );
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const [filters, setFilters] = React.useState<Filter>({
    name: "",
    category: "popular",
  });

  const categories =
    dataMovies.length > 0
      ? dataMovies.map(({ title, identify }) => ({
          title,
          identify,
        }))
      : [];

  function handleFilters(filter: Filter) {
    setFilters((prev) => ({ ...prev, ...filter }));
  }

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      console.log("geted");
      dispatch(getAsyncMovies());
    });
    navigation.addListener("blur", () => {
      dispatch(cleanUp());
    });
  }, []);

  return {
    dataMovies,
    categories: [{ title: "Todos", identify: "all" }, ...categories],
    loading,
    filters,
    handleFilters,
  };
}

