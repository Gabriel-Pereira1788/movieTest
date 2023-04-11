import React from "react";
import * as S from "native-base";
import { ITmdb } from "../../../../../models/Itmdb";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TMBD_BACKDROP_URL } from "../../../../../constants/TMDB";
import { SIZES } from "../../../../../constants/sizes";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { StyleSheet } from "react-native";

interface CardMovieProps extends ITmdb {}

export default function CardMovie({ backdrop_path, id }: CardMovieProps) {
  const { focusMovie } = useSelector((state: RootState) => state.movies);

  const isFocus = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(
        isFocus.value ? SIZES.height / 3 + 200 : SIZES.height / 3 + 150
      ),
    };
  });

  React.useEffect(() => {
    if (focusMovie?.id === id) {
      isFocus.value = true;
    } else {
      isFocus.value = false;
    }
  }, [focusMovie]);
  return (
    <TouchableOpacity>
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

