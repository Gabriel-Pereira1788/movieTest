import React from "react";
import * as S from "native-base";
import { NavigationProps } from "../../../router/navigation";
import { useSingleMovie } from "./useSingleMovie";
import { TMBD_BACKDROP_URL } from "../../../helpers/constants/TMDB";
import Animated from "react-native-reanimated";
import Info from "./components/Info/View";
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import RenderIF from "../../../components/RenderIF/View";
import Poster from "./components/Poster/View";

import { MaterialIcons } from "@expo/vector-icons";

import ListCast from "./components/ListCast/View";
import AddFavorite from "./components/AddFavorite/View";
import ShareMovie from "./components/ShareMovie/View";
import { SIZES } from "../../../helpers/constants/sizes";
import Alert from "../../../components/Alert/View";
import ErrorMessage from "../../../components/ErrorMessage/View";
import { ERROR_DEFAULT } from "../../../helpers/constants/errosMessage";

export default function SingleMovie({ route }: NavigationProps<"SingleMovie">) {
  const { id, type } = route.params;

  const {
    dataMovie,
    stylesAnimation,
    styleRotate,
    loading,
    error,
    toggleMostView,
  } = useSingleMovie({ id, type });

  return (
    <S.VStack
      flex={1}
      justifyContent="center"
      backgroundColor="background.main"
    >
      <RenderIF condition={!error}>
        <S.HStack
          w={SIZES.width}
          px={3}
          zIndex={2}
          position="absolute"
          alignItems="center"
          justifyContent="flex-end"
          top={8}
          right={0}
        >
          <Alert />
          <S.HStack space={2}>
            <AddFavorite />
            <ShareMovie />
          </S.HStack>
        </S.HStack>
      </RenderIF>

      <RenderIF
        condition={!loading && !error}
        AlternativeComponent={
          !loading && error ? (
            <ErrorMessage message={ERROR_DEFAULT} />
          ) : (
            <S.Spinner size="lg" color="orange.500" />
          )
        }
      >
        {dataMovie && dataMovie.poster_path && (
          <Poster imagePath={`${dataMovie.poster_path}`} />
        )}
        <PanGestureHandler
          onGestureEvent={toggleMostView}
          activeOffsetY={[-20, 20]}
          activeOffsetX={[-20, 20]}
          failOffsetX={[-20, 1000]}
        >
          <Animated.View style={[stylesAnimation]}>
            <S.HStack
              my={3}
              w="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Animated.View style={styleRotate}>
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={40}
                  color="#fff"
                />
              </Animated.View>
            </S.HStack>
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#0f0f16",
              }}
            >
              <Info {...dataMovie!} />

              <ListCast cast={dataMovie?.cast} />
            </ScrollView>
          </Animated.View>
        </PanGestureHandler>
      </RenderIF>
    </S.VStack>
  );
}

