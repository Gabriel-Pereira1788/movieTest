import React from "react";
import * as S from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
//*types
import { ITmdb } from "../../../../../models/Itmdb";
//*constants
import { TMBD_BACKDROP_URL } from "../../../../../constants/TMDB";
import { SIZES } from "../../../../../constants/sizes";
//*hooks
import { useCardMovie } from "./useCardMovie";

interface CardMovieProps extends ITmdb {}

export default function CardMovie({ backdrop_path, id }: CardMovieProps) {
  const { animatedStyle, redirectScreen } = useCardMovie({ id });
  return (
    <TouchableOpacity onPress={redirectScreen}>
      <S.Box mx={2}>
        <Animated.Image
          source={{ uri: `${TMBD_BACKDROP_URL}${backdrop_path}` }}
          style={[styles.image, animatedStyle]}
          alt="image-movie"
        />
      </S.Box>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: SIZES.width - 50,
    borderColor: "#dddddd35",
    borderWidth: 1,
    borderRadius: 20,
  },
});

