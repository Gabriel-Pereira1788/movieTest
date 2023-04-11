import React from "react";
import * as S from "native-base";
import { ImageBackground } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MostView } from "../../models";
import { PanGestureHandler } from "react-native-gesture-handler";
interface PosterProps {
  imagePath: string;
  toggleMostView: MostView;
}

export default function Poster({ imagePath, toggleMostView }: PosterProps) {
  return (
    <S.Box width="100%" flex={2} position="relative">
      <S.Image
        source={{ uri: imagePath }}
        flex={1}
        resizeMode="cover"
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
            source={{ uri: imagePath }}
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

