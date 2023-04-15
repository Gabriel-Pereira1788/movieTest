import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import React from "react";
import { useFormAuth } from "../../../helpers/hooks/useFormAuth";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamListI } from "../../../router/navigation";
import * as ImagePicker from "expo-image-picker";
import { useAuth } from "../../../helpers/hooks/useAuth";
import { MyAccountViewModel } from "./models";

export function useMyAccount(): MyAccountViewModel {
  const { user } = useSelector((state: RootState) => state.auth);
  const { signOut } = useAuth();

  const dataForm = useFormAuth({
    fields: {
      email: user?.email || "",
      name: user?.name || "",
      photoURL: user?.photoURL || "",
    },
    typeSubmit: "edit",
    successMessage: "Usuário editado com sucesso!",
  });

  async function handleSignOut() {
    await signOut();
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const assets = result.assets;
      dataForm.setformData((prev) => ({ ...prev, photoURL: assets[0].uri }));
    }
  };

  return {
    ...dataForm,
    handleSignOut,
    pickImage,
  };
}

