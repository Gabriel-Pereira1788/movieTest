import React from "react";
import * as S from "native-base";
import { useHome } from "./useHome";
import CardMovie from "./components/CardMovie/View";
import { SIZES } from "../../../constants/sizes";
import { Animated, FlatList, ImageBackground } from "react-native";
import ListMovies from "./components/ListMovies/View";
import { TMBD_BACKDROP_URL } from "../../../constants/TMDB";
import InfoMovie from "./components/InfoMovie/View";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTab from "../../../components/BottomTab/View";
import RenderIF from "../../../components/RenderIF/View";
type Props = {};

export default function Home({}: Props) {
  const { topRaitingMovies, focusedMovie, loading, onViewableItemsChanged } =
    useHome();

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={{ uri: `${TMBD_BACKDROP_URL}${focusedMovie?.backdrop_path}` }}
      blurRadius={25}
    >
      <S.VStack
        paddingTop="10%"
        flex={1}
        backgroundColor="rgba(0,0,0,0.8)"
        alignItems="center"
        justifyContent="center"
      >
        <RenderIF
          condition={!loading && !!topRaitingMovies}
          AlternativeComponent={<S.Spinner size="lg" color="red.600" />}
        >
          <ListMovies
            onViewableItemsChanged={onViewableItemsChanged}
            topRaitingMovies={topRaitingMovies}
          />

          <S.VStack
            zIndex={-1}
            position="absolute"
            bottom={0}
            w="100%"
            alignItems="center"
            justifyContent="flex-end"
            height={SIZES.height / 2}
            backgroundColor="rgba(0,0,0,0.7)"
            space={3}
          >
            <InfoMovie
              title={focusedMovie?.title || ""}
              genre_ids={focusedMovie?.genre_ids || []}
            />
            <BottomTab currentPath="movie" />
          </S.VStack>
        </RenderIF>
      </S.VStack>
    </ImageBackground>
  );
}

