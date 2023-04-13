import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";

import {
  addToFavorite,
  getAsyncFavoriteByMovieId,
  removeToFavorite,
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

  const isFavorite = false;
  function toggleFavorite() {
    if (!!dataMovie && !loadingDatamovie && !isFavorite) {
      dispatch(addToFavorite(dataMovie));
      dispatch(getAsyncFavoriteByMovieId(dataMovie.id));
    }

    if (!!dataMovie && !loadingDatamovie && isFavorite) {
      dispatch(removeToFavorite(favoriteData!.id!));
      dispatch(getAsyncFavoriteByMovieId(dataMovie.id));
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

  return {
    dataMovie,
    loading,
    error,
    status,
    isFavorite,
    toggleFavorite,
  };
}

