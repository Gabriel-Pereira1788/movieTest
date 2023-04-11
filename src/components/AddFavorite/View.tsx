import React from "react";
import * as S from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { modalRef } from "../Modal/View";
import FeedbackAdd from "./components/FeedbackAdd/View";
interface AddFavoriteProps {}

export default function AddFavorite({}: AddFavoriteProps) {
  function openModal() {
    modalRef.current?.show(() => <FeedbackAdd />);
  }
  return (
    <TouchableOpacity onPress={openModal}>
      <S.Circle p={2} backgroundColor={"rgba(0,0,0,0.4)"} mr={2} shadow={5}>
        <MaterialIcons name="favorite-outline" size={24} color="#fff" />
      </S.Circle>
    </TouchableOpacity>
  );
}

