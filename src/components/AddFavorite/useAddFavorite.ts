import React from "react";
import { FavoritesController } from "../../repositories/database/useCases/Favorites/FavoritesController";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { FavoriteData } from "../../repositories/database/models/FavoriteModel";
import {
  addToFavorite,
  getAsyncFavoriteByMovieId,
} from "../../store/modules/favorites.store";
import { alertRef } from "../Alert/View";
import { STATUS_MESSAGES_FAVORITES } from "../../helpers/constants/statusMessages";

export function useAddFavorite() {
  const { favoriteData, loading, error, status } = useSelector(
    (state: RootState) => state.favorites
  );

  const { dataMovie, loading: loadingDatamovie } = useSelector(
    (state: RootState) => state.singleMovie
  );
  const dispatch = useAppDispatch();
  function addFavorite() {
    if (!!dataMovie && !loadingDatamovie) {
      dispatch(addToFavorite(dataMovie));
    }
  }

  React.useEffect(() => {
    if (!!status) {
      alertRef.current?.open({
        isOpen: true,
        text: STATUS_MESSAGES_FAVORITES[status],
        status: status,
      });
    }
  }, [status]);

  /*   React.useEffect(() => {
    if (dataMovie && dataMovie.data) {
      dispatch(getAsyncFavoriteByMovieId(dataMovie.data.id));
    }
  }, [dataMovie]); */

  return {
    dataMovie,
    loading,
    error,
    status,
    addFavorite,
  };
}

