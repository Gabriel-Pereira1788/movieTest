import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../../store/store";
import {
  getAsyncFavorites,
  removeToFavorite,
} from "../../../../../store/modules/favorites.store";
import { alertRef } from "../../../../../components/Alert/View";
import {
  STATUS_MESSAGES_FAVORITES,
  STATUS_MESSAGES_REMOVE,
} from "../../../../../helpers/constants/statusMessages";

type Props = {
  id: string;
};

export function useDeleteContent({ id }: Props) {
  const { actionLoading, status } = useSelector(
    (state: RootState) => state.favorites
  );
  const dispatch = useAppDispatch();
  async function removeFavorite() {
    await dispatch(removeToFavorite(id));

    dispatch(getAsyncFavorites());
  }

  React.useEffect(() => {
    if (!!status) {
      alertRef.current?.open({
        isOpen: true,
        text: STATUS_MESSAGES_REMOVE[status],
        status: status,
      });
    }
  }, [status]);

  return { removeFavorite, loading: actionLoading };
}

