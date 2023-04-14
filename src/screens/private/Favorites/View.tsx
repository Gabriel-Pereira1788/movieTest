import React from "react";
import * as S from "native-base";
import { useFavorites } from "./useFavorites";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../../components/SearchBar/View";
import CardFavorite from "./components/CardFavorite/View";
import BottomTab from "../../../components/BottomTab/View";
import RenderIF from "../../../components/RenderIF/View";
import ErrorMessage from "../../../components/ErrorMessage/View";
import { ListRenderItem } from "react-native/types";
import { FavoriteData } from "../../../repositories/database/models/FavoriteModel";

type Props = {};

export default function Favorites({}: Props) {
  const { dataFavorites, loading, searchText, handleSearchText } =
    useFavorites();

  const renderItem: ListRenderItem<FavoriteData> = React.useCallback(
    ({ item }) => <CardFavorite {...item} />,
    []
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f0f16" }}>
      <S.VStack
        flex={1}
        backgroundColor="background.main"
        py={4}
        mt={5}
        space={5}
      >
        <RenderIF
          condition={!loading && dataFavorites.length > 0}
          AlternativeComponent={
            !loading && dataFavorites.length === 0 ? (
              <ErrorMessage message="Nenhum filme adicionado..." />
            ) : (
              <S.Box flex={1} alignItems="center" justifyContent="center">
                <S.Spinner size="lg" color="orange.500" />
              </S.Box>
            )
          }
        >
          <S.Box px={4}>
            <SearchBar value={searchText} onChangeText={handleSearchText} />
          </S.Box>
          <S.FlatList
            data={dataFavorites}
            scrollEventThrottle={16}
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "flex-start",
              paddingHorizontal: 20,
            }}
            keyExtractor={(item) => item.id!}
            renderItem={renderItem}
          />
        </RenderIF>
      </S.VStack>
      <BottomTab currentPath="favorites" />
    </SafeAreaView>
  );
}

