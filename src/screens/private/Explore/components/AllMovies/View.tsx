import React from "react";
import * as S from "native-base";
import { IDataMovie } from "../../../../../models/DataMovie";
import Animated, { FadeInDown } from "react-native-reanimated";
import CardMovie from "../CardMovie/View";
import { ListRenderItem } from "react-native/types";
import { ITmdb } from "../../../../../models/Itmdb";

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
  return (
    <S.ScrollView
      contentContainerStyle={{
        flexGrow: 2,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingHorizontal: 10,
      }}
    >
      {dataMovies &&
        dataMovies.length > 0 &&
        dataMovies.map((data, index) => (
          <S.Box key={index} flex={1}>
            <Animated.View entering={FadeInDown.delay(150).duration(150)}>
              <S.Text bold color="#ddd" fontSize="xl" my={3}>
                {data.title}
              </S.Text>
            </Animated.View>
            <S.FlatList
              pagingEnabled
              horizontal
              data={data.list}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                marginVertical: 20,
                width: "auto",
                height: "auto",
                alignItems: "center",
                justifyContent: "center",
              }}
              renderItem={renderItem}
            />
          </S.Box>
        ))}
    </S.ScrollView>
  );
}

