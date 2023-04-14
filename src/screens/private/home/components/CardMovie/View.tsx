import React from "react";
import * as S from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
//*types
import { ITmdb } from "../../../../../models/Itmdb";
//*constants
import {
  TMBD_BACKDROP_PREVIEW,
  TMBD_BACKDROP_URL,
} from "../../../../../helpers/constants/TMDB";
import { SIZES } from "../../../../../helpers/constants/sizes";
//*hooks
import { useCardMovie } from "./useCardMovie";
import ProgressiveImage from "../../../../../components/ProgressiveImage/View";

interface CardMovieProps extends ITmdb {}

export default function CardMovie({ backdrop_path, id }: CardMovieProps) {
  const { animatedStyle, redirectScreen } = useCardMovie({ id });

  console.log(backdrop_path);
  return (
    <TouchableOpacity onPress={redirectScreen}>
      <S.Box mx={2}>
        <ProgressiveImage
          source={{ uri: `${TMBD_BACKDROP_URL}${backdrop_path}` }}
          progressiveRenderingEnabled={true}
          thumbnailSource={`${TMBD_BACKDROP_PREVIEW}${backdrop_path}`}
          style={[styles.image, animatedStyle]}
          alt="image-movie"
          containerProps={{
            style: {
              borderRadius: 20,
              borderColor: "#dddddd35",
              borderWidth: 1,
            },
          }}
        />
      </S.Box>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: SIZES.width - 50,
  },
});

