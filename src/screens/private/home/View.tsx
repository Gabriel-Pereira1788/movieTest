import React from "react";
import { ImageBackground } from "react-native";
import * as S from "native-base";
//*hooks
import { useHome } from "./useHome";
//*components
import ListMovies from "./components/ListMovies/View";
import InfoMovie from "./components/InfoMovie/View";
import BottomTab from "../../../components/BottomTab/View";
import RenderIF from "../../../components/RenderIF/View";
//*constants
import { TMBD_BACKDROP_URL } from "../../../helpers/constants/TMDB";
import ErrorMessage from "../../../components/ErrorMessage/View";
import { ERROR_DEFAULT } from "../../../helpers/constants/errosMessage";

export default function Home() {
  const { popularMovies, focusMovie, loading, error } = useHome();

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={{ uri: `${TMBD_BACKDROP_URL}${focusMovie?.backdrop_path}` }}
      blurRadius={25}
    >
      <S.ScrollView
        backgroundColor="rgba(0,0,0,0.8)"
        contentContainerStyle={{
          position: "relative",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <S.VStack
          flex={1}
          w="100%"
          alignItems="center"
          justifyContent="center"
          space={1}
        >
          <RenderIF
            condition={!loading && !!popularMovies && !error}
            AlternativeComponent={
              !!error ? (
                <ErrorMessage message={ERROR_DEFAULT} />
              ) : (
                <S.Box flex={1} alignItems="center" justifyContent="center">
                  <S.Spinner size="lg" color="orange.500" />
                </S.Box>
              )
            }
          >
            <ListMovies popularMovies={popularMovies} />

            <InfoMovie
              title={focusMovie?.title || ""}
              genre_ids={focusMovie?.genre_ids || []}
            />
          </RenderIF>
          <BottomTab currentPath="movie" />
        </S.VStack>
      </S.ScrollView>
    </ImageBackground>
  );
}

