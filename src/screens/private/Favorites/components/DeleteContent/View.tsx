import React from "react";
import * as S from "native-base";
import Alert from "../../../../../components/Alert/View";
import { SIZES } from "../../../../../helpers/constants/sizes";
import Button from "../../../../../components/Button/View";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { modalRef } from "../../../../../components/Modal/View";
import ActionsFavorite from "../../../../../components/ActionsFavorite/View";
import { useDeleteContent } from "./useDeleteContent";

interface DeleteContentProps {
  id: string;
  title: string;
}

export default function DeleteContent({ id, title }: DeleteContentProps) {
  const { removeFavorite, loading } = useDeleteContent({ id });
  function openModal() {
    modalRef.current?.show(() => (
      <ActionsFavorite
        loading={loading}
        onSubmit={removeFavorite}
        titleAction="Remover dos favoritos?"
        titleItem={title}
      />
    ));
  }
  return (
    <TouchableOpacity onPress={openModal}>
      <FontAwesome5 name="trash" size={20} color="#991b1b" />
    </TouchableOpacity>
  );
}

