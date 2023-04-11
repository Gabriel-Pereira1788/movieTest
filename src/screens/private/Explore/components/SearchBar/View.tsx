import React from "react";
import * as S from "native-base";
import { AntDesign } from "@expo/vector-icons";
interface SearchBarProps {}

export default function SearchBar({}: SearchBarProps) {
  return (
    <S.Input
      placeholder="Pesquise aqui..."
      placeholderTextColor="#ddd"
      w="100%"
      p={3}
      borderRadius="lg"
      borderColor="#dddddd3d"
      focusOutlineColor=""
      borderWidth={1}
      rightElement={
        <S.Box mr={5}>
          <AntDesign name="search1" size={20} color="#ddd" />
        </S.Box>
      }
    />
  );
}

