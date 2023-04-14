import React from "react";
import * as S from "native-base";
import { ImageBackground } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MostView } from "../../models";
import { PanGestureHandler } from "react-native-gesture-handler";
import {
  TMBD_BACKDROP_PREVIEW,
  TMBD_BACKDROP_URL,
} from "../../../../../helpers/constants/TMDB";
import ProgressiveImage from "../../../../../components/ProgressiveImage/View";
interface PosterProps {
  imagePath: string;
  toggleMostView: MostView;
}

export default function Poster({ imagePath, toggleMostView }: PosterProps) {
  console.log(imagePath);
  return (
    <S.Box width="100%" flex={2} position="relative">
      <ProgressiveImage
        source={{ uri: `${TMBD_BACKDROP_URL}${imagePath}` }}
        thumbnailSource={`${TMBD_BACKDROP_PREVIEW}${imagePath}`}
        progressiveRenderingEnabled={true}
        style={{ flex: 1, width: "100%", height: "100%" }}
        containerProps={{
          width: "100%",
          height: "100%",
        }}
        alt="image-movie"
      />

      <S.Box
        width="100%"
        height="100%"
        flex={1}
        position="absolute"
        alignItems="center"
        justifyContent="center"
      >
        <S.Box
          borderRadius="full"
          overflow="hidden"
          shadow={5}
          style={{
            width: 80,
            height: 80,
          }}
        >
          <ImageBackground
            source={{ uri: `${TMBD_BACKDROP_URL}${imagePath}` }}
            blurRadius={70}
            alt="blur-image"
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <S.Box
              alignItems="center"
              justifyContent="center"
              background="rgba(0,0,0,0.3)"
              w="100%"
              h="100%"
            >
              <Ionicons name="ios-play" size={40} color="#ffffffeb" />
            </S.Box>
          </ImageBackground>
        </S.Box>
      </S.Box>
    </S.Box>
  );
}

