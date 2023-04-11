import React from "react";
import * as S from "native-base";
import { SIZES } from "../../constants/sizes";
import { MaterialIcons, Fontisto } from "@expo/vector-icons";
type Props = {
  currentPath: string;
};

export default function BottomTab({ currentPath }: Props) {
  return (
    <S.HStack
      backgroundColor={"rgba(0,0,0,0.9"}
      borderTopColor="#dddddd15"
      borderWidth={1}
      w={SIZES.width}
      py={5}
      alignItems="center"
      justifyContent="center"
      space={5}
    >
      <MaterialIcons
        name="movie"
        size={30}
        color={currentPath === "movie" ? "#c54444" : "#fff"}
      />
      <MaterialIcons name="search" size={30} color="#fff" />
      <Fontisto name="favorite" size={25} color="#fff" />
    </S.HStack>
  );
}

