import React from "react";
import { IDataMovie } from "../../../../../models/DataMovie";
import { Animated, FlatList, ViewToken, ViewabilityConfig } from "react-native";
import { SIZES } from "../../../../../constants/sizes";
import CardMovie from "../CardMovie/View";

interface ListMoviesProps {
  topRaitingMovies: IDataMovie | undefined;
  onViewableItemsChanged: ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
    changed: ViewToken[];
  }) => void;
}
function ListMovies({
  topRaitingMovies,
  onViewableItemsChanged,
}: ListMoviesProps) {
  console.log("render");
  const FlatListAnimated = Animated.createAnimatedComponent(FlatList);

  const viewConfig: ViewabilityConfig = {
    viewAreaCoveragePercentThreshold: 20,
    waitForInteraction: true,
  };

  return (
    <>
      {topRaitingMovies && topRaitingMovies.list.length > 0 && (
        <FlatListAnimated
          pagingEnabled
          snapToAlignment="center"
          decelerationRate="fast"
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
          data={topRaitingMovies?.list}
          getItemLayout={(data, index) => {
            return {
              length: SIZES.width - 50,
              offset: (SIZES.width - 50) * index,
              index,
            };
          }}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewConfig}
          horizontal={true}
          renderItem={({ item }) => <CardMovie {...item} />}
        />
      )}
    </>
  );
}

export default React.memo(ListMovies);

