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

export default function SingleMovie({ route }: NavigationProps<"SingleMovie">) {
  const { id, type } = route.params;

  const { dataMovie, stylesAnimation, styleRotate, loading, toggleMostView } =
    useSingleMovie({ id, type });

  return (
    <S.VStack
      flex={1}
      justifyContent="center"
      backgroundColor="background.main"
    >
      <RenderIF
        condition={!loading && !!dataMovie}
        AlternativeComponent={<S.Spinner size="lg" color="orange.500" />}
      >
        {dataMovie && dataMovie.poster_path && (
          <Poster
            toggleMostView={toggleMostView}
            imagePath={`${TMBD_BACKDROP_URL}${dataMovie.poster_path}`}
          />
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

