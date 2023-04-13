import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../../store/store";
import {
  addToFavorite,
  removeToFavorite,
} from "../../../../../store/modules/favorites.store";
import { alertRef } from "../../../../../components/Alert/View";
import {
  STATUS_MESSAGES_FAVORITES,
  STATUS_MESSAGES_REMOVE,
} from "../../../../../helpers/constants/statusMessages";
import { modalRef } from "../../../../../components/Modal/View";

type Props = {
  type: "favorite" | "movie";
};

export function useAddFavorite({ type }: Props) {
  const { favoriteData, actionLoading, error, status } = useSelector(
    (state: RootState) => state.favorites
  );

  const { dataMovie, loading: loadingDatamovie } = useSelector(
    (state: RootState) => state.singleMovie
  );
  const dispatch = useAppDispatch();

  async function toggleFavorite() {
    if (!!dataMovie && !loadingDatamovie && !!favoriteData === false) {
      await dispatch(addToFavorite(dataMovie));
      modalRef.current?.hide();
    }

    if (!!favoriteData && !actionLoading) {
      await dispatch(removeToFavorite(favoriteData!.id!));
      modalRef.current?.hide();
    }
  }

  React.useEffect(() => {
    if (!!status) {
      alertRef.current?.open({
        isOpen: true,
        text: !!favoriteData
          ? STATUS_MESSAGES_FAVORITES[status]
          : STATUS_MESSAGES_REMOVE[status],
        status: status,
      });
    }
  }, [status, favoriteData]);

  return {
    dataMovie,
    isFavorite: !!favoriteData,
    loading: actionLoading,
    error,
    status,
    toggleFavorite,
  };
}

