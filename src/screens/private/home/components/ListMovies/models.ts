import { ViewToken, ViewabilityConfig } from "react-native/types";

export interface ListMoviesViewModel {
  viewConfig: ViewabilityConfig;
  onViewableItemsChanged: ({
    viewableItems,
    changed,
  }: {
    viewableItems: ViewToken[];
    changed: ViewToken[];
  }) => void;
}
