import React from "react";
import * as S from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { modalRef } from "../../../../../components/Modal/View";
import ActionsFavorite from "../../../../../components/ActionsFavorite/View";
import { useAddFavorite } from "./useAddFavorite";
import RenderIF from "../../../../../components/RenderIF/View";

export default function AddFavorite() {
  const { loading, dataMovie, error, isFavorite, toggleFavorite } =
    useAddFavorite();
  function openModal() {
    modalRef.current?.show(() => (
      <ActionsFavorite
        titleAction={
          isFavorite ? "Remover dos favoritos?" : "Adicionar aos favoritos ?"
        }
        titleItem={dataMovie?.title || ""}
        loading={loading}
        onSubmit={toggleFavorite}
      />
    ));
  }
  return (
    <>
      <TouchableOpacity onPress={openModal}>
        <S.Circle p={2} backgroundColor={"rgba(0,0,0,0.4)"} mr={2} shadow={5}>
          <RenderIF
            condition={isFavorite}
            AlternativeComponent={
              <MaterialIcons name="favorite-outline" size={24} color="#fff" />
            }
          >
            <MaterialIcons name="favorite" size={24} color="#fff" />
          </RenderIF>
        </S.Circle>
      </TouchableOpacity>
    </>
  );
}

