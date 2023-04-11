import React from "react";
import * as S from "native-base";
import BottomTab from "../../../components/BottomTab/View";
import SearchBar from "./components/SearchBar/View";
import { SafeAreaView } from "react-native-safe-area-context";
import { useExplore } from "./useExplore";
import { TMBD_BACKDROP_URL } from "../../../constants/TMDB";
import Category from "../../../components/Category/View";
import CardMovie from "./components/CardMovie/View";
import Animated, { FadeInDown } from "react-native-reanimated";
import RenderIF from "../../../components/RenderIF/View";
type Props = {};

export default function Explore({}: Props) {
  const { dataMovies, categories, loading } = useExplore();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f0f16" }}>
      <S.VStack
        flex={1}
        backgroundColor="background.main"
        alignItems="center"
        p={3}
        justifyContent="center"
      >
        <RenderIF
          condition={!loading && !!dataMovies}
          AlternativeComponent={<S.Spinner size="lg" color="red.600" />}
        >
          <SearchBar />
          <S.ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <S.Text bold color="#ddd" fontSize="xl" my={3}>
              Categorias
            </S.Text>
            <S.FlatList
              horizontal
              data={categories}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                marginVertical: 20,
                width: "auto",
                height: "auto",
                alignItems: "center",
                justifyContent: "center",
              }}
              renderItem={({ item, index }) => (
                <Category key={index} text={item} />
              )}
            />

            {dataMovies &&
              dataMovies.length > 0 &&
              dataMovies.map((data) => (
                <>
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
                    renderItem={({ item, index }) => {
                      if (!!item.backdrop_path) {
                        return <CardMovie key={index} {...item} />;
                      }
                      return <></>;
                    }}
                  />
                </>
              ))}
          </S.ScrollView>
        </RenderIF>
        <BottomTab position="absolute" bottom={0} currentPath="explore" />
      </S.VStack>
    </SafeAreaView>
  );
}

