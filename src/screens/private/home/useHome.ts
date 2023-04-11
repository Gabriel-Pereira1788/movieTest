import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import {
  getAsyncMovies,
  setFocusMovie,
} from "../../../store/modules/movies.store";
import { ViewToken } from "react-native/types";
import { ITmdb } from "../../../models/Itmdb";

export function useHome() {
  const { dataMovies, focusMovie, loading } = useSelector(
    (state: RootState) => state.movies
  );
  const dispatch = useAppDispatch();

  const topRaitingMovies = React.useMemo(() => {
    return dataMovies.find((dataMovie) => dataMovie.identify === "popular");
  }, [dataMovies]);

  const initialScrollIndex = topRaitingMovies
    ? topRaitingMovies.list.length / 2
    : 1;

  const onViewableItemsChanged = React.useCallback(
    ({
      viewableItems,
      changed,
    }: {
      viewableItems: ViewToken[];
      changed: ViewToken[];
    }) => {
      const movieFocused =
        viewableItems.length > 0 ? viewableItems[0].item : null;
      console.log(viewableItems.length);

      dispatch(setFocusMovie(movieFocused));
    },
    []
  );

  React.useEffect(() => {
    dispatch(getAsyncMovies());
  }, []);

  React.useEffect(() => {
    if (!!topRaitingMovies) {
      const defaultSelected = topRaitingMovies.list[0];
      dispatch(setFocusMovie(defaultSelected));
    }
  }, [topRaitingMovies]);

  return {
    focusedMovie: focusMovie,
    topRaitingMovies,
    initialScrollIndex,
    loading,
    focusMovie,
    onViewableItemsChanged,
  };
}

