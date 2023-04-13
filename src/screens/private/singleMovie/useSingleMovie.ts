import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { getAsyncSingleMovie } from "../../../store/modules/singleMovie.store";
import {
  GestureEvent,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SingleMovieViewModel } from "./models";
import { useNavigation } from "@react-navigation/native";
import { cleanUp } from "../../../store/modules/movies.store";

type Props = {
  id: number;
};

export function useSingleMovie({ id }: Props): SingleMovieViewModel {
  const { dataMovie, loading } = useSelector(
    (state: RootState) => state.singleMovie
  );

  const navigation = useNavigation();

  const valueAnimated = useSharedValue("middle");

  const stylesAnimation = useAnimatedStyle(() => {
    return {
      flex: withTiming(valueAnimated.value === "full" ? 3.5 : 1, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  const styleRotate = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withTiming(
            valueAnimated.value === "full" ? "180deg" : "0deg",
            {
              duration: 500,
              easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }
          ),
        },
      ],
    };
  });

  const dispatch = useAppDispatch();

  function toggleMostView(event: GestureEvent<PanGestureHandlerEventPayload>) {
    const translationY = event.nativeEvent.translationY;
    console.log(translationY);
    if (translationY > 50) {
      valueAnimated.value = " middle";
    } else {
      valueAnimated.value = "full";
    }
  }

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(getAsyncSingleMovie(id));
    });
    navigation.addListener("blur", () => {
      dispatch(cleanUp());
    });
  }, []);

  return { dataMovie, loading, stylesAnimation, styleRotate, toggleMostView };
}

