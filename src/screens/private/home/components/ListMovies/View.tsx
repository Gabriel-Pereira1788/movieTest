import React from "react";
import { Animated, FlatList, ListRenderItem } from "react-native";
//*constants
import { SIZES } from "../../../../../helpers/constants/sizes";
//*components
import CardMovie from "../CardMovie/View";
//*hooks
import { useListMovies } from "./useListMovies";
//*types
import { ITmdb } from "../../../../../models/Itmdb";

interface ListMoviesProps {
  popularMovies: ITmdb[] | undefined;
}
function ListMovies({ popularMovies }: ListMoviesProps) {
  const FlatListAnimated = Animated.createAnimatedComponent(FlatList<ITmdb>);

  const { viewConfig, onViewableItemsChanged } = useListMovies();

  const renderItem: ListRenderItem<ITmdb> = React.useCallback(
    ({ item }) => <CardMovie {...item} />,
    []
  );
  return (
    <>
      {popularMovies && popularMovies.length > 0 && (
        <FlatListAnimated
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment="center"
          decelerationRate="fast"
          contentContainerStyle={{
            flexGrow: 1,
            height: "auto",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
          }}
          data={popularMovies}
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
          renderItem={renderItem}
        />
      )}
    </>
  );
}

export default React.memo(ListMovies);

