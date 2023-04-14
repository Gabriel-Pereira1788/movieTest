import React from "react";
import * as S from "native-base";
import { AntDesign } from "@expo/vector-icons";
interface SearchBarProps extends S.IInputProps {}

export default function SearchBar({ ...rest }: SearchBarProps) {
  return (
    <S.Input
      placeholder="Pesquise aqui..."
      placeholderTextColor="#ddd"
      color="#fff"
      w="100%"
      p={3}
      borderRadius="lg"
      borderColor="#dddddd3d"
      focusOutlineColor=""
      rightElement={
        <S.Box mr={5}>
          <AntDesign name="search1" size={20} color="#ddd" />
        </S.Box>
      }
      borderWidth={1}
      {...rest}
    />
  );
}

