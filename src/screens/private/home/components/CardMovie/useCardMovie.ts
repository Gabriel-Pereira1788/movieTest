import { useSelector } from "react-redux";
import React from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
//*store
import { RootState } from "../../../../../store/store";
//*constants
import { SIZES } from "../../../../../constants/sizes";
//*types
import { ITmdb } from "../../../../../models/Itmdb";
import { useNavigation } from "@react-navigation/native";

type Props = Pick<ITmdb, "id">;

export function useCardMovie({ id }: Props) {
  const { focusMovie } = useSelector((state: RootState) => state.movies);

  const navigation = useNavigation();
  const isFocus = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(
        isFocus.value ? SIZES.height / 3 + 200 : SIZES.height / 3 + 150
      ),
    };
  });

  function redirectScreen() {
    navigation.navigate("SingleMovie", { id });
  }
  React.useEffect(() => {
    if (focusMovie?.id === id) {
      isFocus.value = true;
    } else {
      isFocus.value = false;
    }
  }, [focusMovie]);

  return { animatedStyle, redirectScreen };
}

