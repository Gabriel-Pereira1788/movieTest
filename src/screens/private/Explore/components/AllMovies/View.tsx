import React from "react";
import * as S from "native-base";
import { IDataMovie } from "../../../../../models/DataMovie";
import Animated, { FadeInDown } from "react-native-reanimated";
import CardMovie from "../CardMovie/View";
import { ListRenderItem } from "react-native/types";
import { ITmdb } from "../../../../../models/Itmdb";
import { SIZES } from "../../../../../helpers/constants/sizes";

interface AllMoviewsProps {
  dataMovies?: IDataMovie[];
}

export default function AllMovies({ dataMovies }: AllMoviewsProps) {
  const renderItem: ListRenderItem<ITmdb> = React.useCallback(
    ({ item, index }) => {
      return <CardMovie key={index} {...item} />;
    },
    []
  );

  const renderListItem: ListRenderItem<IDataMovie> = React.useCallback(
    ({ item, index }) => (
      <S.Box key={index}>
        <Animated.View entering={FadeInDown.delay(150).duration(150)}>
          <S.Text bold color="#ddd" fontSize="xl" my={3}>
            {item.title}
          </S.Text>
        </Animated.View>
        <S.FlatList
          pagingEnabled
          horizontal
          data={item.list}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginHorizontal: 10,

            width: "auto",
            height: "auto",
            alignItems: "center",
            justifyContent: "center",
          }}
          renderItem={renderItem}
        />
      </S.Box>
    ),
    []
  );

  return (
    <S.FlatList
      data={dataMovies}
      ListFooterComponent={() => <S.Box h={70}></S.Box>}
      contentContainerStyle={{
        paddingHorizontal: 10,
      }}
      renderItem={renderListItem}
    />
  );
}

