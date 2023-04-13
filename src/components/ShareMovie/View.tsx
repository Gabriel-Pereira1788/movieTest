import React from "react";
import * as S from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { modalRef } from "../Modal/View";
import ShareModal from "./components/ShareModal";

type Props = {};

export default function ShareMovie({}: Props) {
  function openModal() {
    modalRef.current?.show(() => <ShareModal />);
  }
  return (
    <TouchableOpacity onPress={openModal}>
      <S.Circle p={2} backgroundColor={"rgba(0,0,0,0.4)"} mr={2} shadow={5}>
        <MaterialIcons name="share" size={24} color="#fff" />
      </S.Circle>
    </TouchableOpacity>
  );
}

