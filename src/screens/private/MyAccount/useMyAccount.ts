import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import React from "react";
import { useFormAuth } from "../../../helpers/hooks/useFormAuth";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamListI } from "../../../router/navigation";
import * as ImagePicker from "expo-image-picker";
export function useMyAccount() {
  const { user } = useSelector((state: RootState) => state.auth);

  const dataForm = useFormAuth({
    fields: {
      email: user?.email || "",
      name: user?.name || "",
      photoURL: user?.photoURL || "",
    },
    typeSubmit: "edit",
    successMessage: "Usuário editado com sucesso!",
  });

  async function signOut() {
    console.log("sair");
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      //*tratar get de imagem e setar no firebase
      /*      dataForm.setformData((prev) => ({...prev,photoURL}))
      handle(result.assets[0].uri); */
    }
  };

  return {
    ...dataForm,
    signOut,
  };
}

