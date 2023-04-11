import React from "react";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "native-base";
//*hooks
import { useHome } from "./useHome";
//*components
import CardMovie from "./components/CardMovie/View";
import ListMovies from "./components/ListMovies/View";
import InfoMovie from "./components/InfoMovie/View";
import BottomTab from "../../../components/BottomTab/View";
import RenderIF from "../../../components/RenderIF/View";
//*constants
import { SIZES } from "../../../constants/sizes";
import { TMBD_BACKDROP_URL } from "../../../constants/TMDB";

export default function Home() {
  const { popularMovies, focusMovie, loading } = useHome();

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={{ uri: `${TMBD_BACKDROP_URL}${focusMovie?.backdrop_path}` }}
      blurRadius={25}
    >
      <S.ScrollView
        flex={1}
        backgroundColor="rgba(0,0,0,0.8)"
        contentContainerStyle={{
          position: "relative",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RenderIF
          condition={!loading && !!popularMovies}
          AlternativeComponent={<S.Spinner size="lg" color="red.600" />}
        >
          <ListMovies popularMovies={popularMovies} />

          <S.VStack
            zIndex={-1}
            position="relative"
            bottom={0}
            w="100%"
            alignItems="center"
            justifyContent="flex-end"
            space={3}
          >
            <InfoMovie
              title={focusMovie?.title || ""}
              genre_ids={focusMovie?.genre_ids || []}
            />
            <BottomTab currentPath="movie" />
          </S.VStack>
        </RenderIF>
      </S.ScrollView>
    </ImageBackground>
  );
}

