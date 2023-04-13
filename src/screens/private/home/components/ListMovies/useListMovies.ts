import React from "react";
import { ViewToken, ViewabilityConfig } from "react-native/types";
import { useAppDispatch } from "../../../../../store/store";
import { setFocusMovie } from "../../../../../store/modules/movies.store";
import { ListMoviesViewModel } from "./models";

export function useListMovies(): ListMoviesViewModel {
  const dispatch = useAppDispatch();

  const viewConfig: ViewabilityConfig = {
    viewAreaCoveragePercentThreshold: 20,
    waitForInteraction: true,
  };
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

      dispatch(setFocusMovie(movieFocused));
    },
    []
  );

  return {
    viewConfig,
    onViewableItemsChanged,
  };
}

