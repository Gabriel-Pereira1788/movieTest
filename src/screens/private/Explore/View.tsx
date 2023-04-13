import React from "react";
import * as S from "native-base";
import BottomTab from "../../../components/BottomTab/View";
import { SafeAreaView } from "react-native-safe-area-context";
import { useExplore } from "./useExplore";

import Category from "../../../components/Category/View";
import RenderIF from "../../../components/RenderIF/View";
import AllMovies from "./components/AllMovies/View";
import FilteredMovies from "./components/FilteredMovies/View";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "./components/Header/View";
import SearchBar from "../../../components/SearchBar/View";
type Props = {};

export default function Explore({}: Props) {
  const { dataMovies, categories, loading, filters, handleFilters } =
    useExplore();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f0f16" }}>
      <S.VStack
        flex={1}
        backgroundColor="background.main"
        alignItems="center"
        justifyContent="center"
      >
        <RenderIF
          condition={!loading && !!dataMovies}
          AlternativeComponent={<S.Spinner size="lg" color="orange.500" />}
        >
          <Header />
          <S.Box p={3}>
            <SearchBar
              value={filters.name}
              onChangeText={(value) => {
                handleFilters({
                  name: value,
                });
              }}
            />

            <S.Text bold color="#ddd" fontSize="xl" my={3}>
              Categorias
            </S.Text>
          </S.Box>
          <S.FlatList
            horizontal
            data={categories}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginVertical: 0,
              width: "auto",
              height: 100,
              alignItems: "flex-start",
              justifyContent: "center",
            }}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => handleFilters({ category: item.identify! })}
              >
                <Category
                  key={index}
                  text={item.name}
                  identify={item.identify}
                  currentCategory={filters.category}
                />
              </TouchableOpacity>
            )}
          />
          <RenderIF
            condition={filters.category === "all" && filters.name === ""}
            AlternativeComponent={
              <FilteredMovies filters={filters} dataMovies={dataMovies} />
            }
          >
            <AllMovies dataMovies={dataMovies} />
          </RenderIF>
        </RenderIF>
        <BottomTab position="absolute" bottom={0} currentPath="explore" />
      </S.VStack>
    </SafeAreaView>
  );
}

