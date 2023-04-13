import React from "react";
import * as S from "native-base";
import { useFavorites } from "./useFavorites";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../../components/SearchBar/View";
import CardFavorite from "./components/CardFavorite/View";

type Props = {};

export default function Favorites({}: Props) {
  const { dataFavorites } = useFavorites();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f0f16" }}>
      <S.VStack
        flex={1}
        backgroundColor="background.main"
        py={4}
        mt={5}
        space={5}
      >
        <S.Box px={4}>
          <SearchBar />
        </S.Box>
        <S.FlatList
          data={dataFavorites}
          scrollEventThrottle={16}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "flex-start",
            paddingHorizontal: 20,
          }}
          keyExtractor={(item) => item.id!}
          renderItem={({ item }) => <CardFavorite {...item} />}
        />
      </S.VStack>
    </SafeAreaView>
  );
}

