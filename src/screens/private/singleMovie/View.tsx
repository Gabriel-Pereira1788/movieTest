import React from "react";
import * as S from "native-base";
import { NavigationProps } from "../../../router/navigation";
import { useSingleMovie } from "./useSingleMovie";
import { TMBD_BACKDROP_URL } from "../../../constants/TMDB";
import Animated from "react-native-reanimated";
import Info from "./components/Info/View";
import {
  FlatList,
  PanGestureHandler,
  ScrollView,
} from "react-native-gesture-handler";
import RenderIF from "../../../components/RenderIF/View";
import { LinearGradient } from "expo-linear-gradient";
import Poster from "./components/Poster/View";
import { SIZES } from "../../../constants/sizes";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import CardCast from "./components/CardCast/View";
import ListCast from "./components/ListCast/View";

export default function SingleMovie({ route }: NavigationProps<"SingleMovie">) {
  const { id } = route.params;

  const { dataMovie, stylesAnimation, styleRotate, toggleMostView } =
    useSingleMovie({ id });

  return (
    <S.VStack
      flex={1}
      justifyContent="flex-start"
      backgroundColor="background.main"
    >
      <RenderIF condition={!!dataMovie && !!dataMovie.data}>
        {dataMovie?.data && dataMovie?.data.poster_path && (
          <Poster
            toggleMostView={toggleMostView}
            imagePath={`${TMBD_BACKDROP_URL}${dataMovie.data.poster_path}`}
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

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

