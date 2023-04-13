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

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  console.log(dataFavorites.length > 0 ? dataFavorites[0].cast : null);

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(getAsyncFavorites());
    });
    navigation.addListener("blur", () => {
      dispatch(cleanUpFavorites());
    });
  }, []);

  return {
    dataFavorites,
    loading,
    error,
  };
}

