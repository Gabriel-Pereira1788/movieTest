import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  cleanUpFavorites,
  getAsyncFavorites,
} from "../../../store/modules/favorites.store";

export function useFavorites() {
  const { dataFavorites, loading, error } = useSelector(
    (state: RootState) => state.favorites
  );
  const [searchText, setSearchText] = React.useState("");

  function handleSearchText(value: string) {
    setSearchText(value);
  }

  const displayDataFavorites = React.useMemo(() => {
    let filteredFavorites = dataFavorites;

    if (searchText !== "") {
      filteredFavorites = dataFavorites.filter((favorite) =>
        favorite.title?.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    return filteredFavorites;
  }, [searchText, dataFavorites]);

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(getAsyncFavorites());
    });
    navigation.addListener("blur", () => {
      dispatch(cleanUpFavorites());
    });
  }, []);

  return {
    dataFavorites: displayDataFavorites,
    loading,
    error,
    searchText,
    handleSearchText,
  };
}

