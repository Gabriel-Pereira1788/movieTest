import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { getAsyncMovies } from "../../../store/modules/movies.store";
import { ViewToken } from "react-native/types";
import { ITmdb } from "../../../models/Itmdb";

export function useHome() {
  const { dataMovies, focusMovie, loading } = useSelector(
    (state: RootState) => state.movies
  );
  const dispatch = useAppDispatch();

  const [focusedMovie, setFocusMovie] = React.useState<ITmdb | null>(null);

  const topRaitingMovies = React.useMemo(() => {
    return dataMovies.find((dataMovie) => dataMovie.identify === "top");
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

      setFocusMovie(movieFocused);
    },
    []
  );

  React.useEffect(() => {
    dispatch(getAsyncMovies());
  }, []);

  return {
    focusedMovie,
    topRaitingMovies,
    initialScrollIndex,
    loading,
    focusMovie,
    onViewableItemsChanged,
  };
}

