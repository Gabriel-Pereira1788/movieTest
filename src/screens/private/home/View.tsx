import React from "react";
import * as S from "native-base";
import { useHome } from "./useHome";
import CardMovie from "./components/CardMovie/View";
import { SIZES } from "../../../constants/sizes";
import { Animated, FlatList, ImageBackground } from "react-native";
import ListMovies from "./components/ListMovies/View";
import { TMBD_BACKDROP_URL } from "../../../constants/TMDB";
type Props = {};

export default function Home({}: Props) {
  const { topRaitingMovies, focusedMovie, onViewableItemsChanged } = useHome();

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={{ uri: `${TMBD_BACKDROP_URL}${focusedMovie?.backdrop_path}` }}
      blurRadius={25}
    >
      <S.VStack
        flex={1}
        backgroundColor="rgba(0,0,0,0.5)"
        alignItems="center"
        justifyContent="center"
      >
        <ListMovies
          onViewableItemsChanged={onViewableItemsChanged}
          topRaitingMovies={topRaitingMovies}
        />
      </S.VStack>
    </ImageBackground>
  );
}

