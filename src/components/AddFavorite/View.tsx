import React from "react";
import * as S from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { modalRef } from "../Modal/View";
import { useAddFavorite } from "./useAddFavorite";
import ActionsFavorite from "../ActionsFavorite/View";
interface AddFavoriteProps {}

export default function AddFavorite({}: AddFavoriteProps) {
  const { loading, dataMovie, error, addFavorite } = useAddFavorite();
  function openModal() {
    modalRef.current?.show(() => (
      <ActionsFavorite
        titleAction="Adicionar aos favoritos ?"
        titleItem={dataMovie?.title || ""}
        loading={loading}
        onSubmit={addFavorite}
      />
    ));
  }
  return (
    <TouchableOpacity onPress={openModal}>
      <S.Circle p={2} backgroundColor={"rgba(0,0,0,0.4)"} mr={2} shadow={5}>
        <MaterialIcons name="favorite-outline" size={24} color="#fff" />
      </S.Circle>
    </TouchableOpacity>
  );
}

