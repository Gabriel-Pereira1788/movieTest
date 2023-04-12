import React from "react";
import * as S from "native-base";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import Input from "../../../components/Input/View";
import Button from "../../../components/Button/View";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationProps } from "../../../router/navigation";
import { useMyAccount } from "./useMyAccount";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyAccount({
  navigation,
}: NavigationProps<"MyAccount">) {
  const { formData, errors, loading, handleFormData, onSubmit, signOut } =
    useMyAccount();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f0f16" }}>
      <S.VStack
        flex={1}
        backgroundColor="background.main"
        alignItems="center"
        justifyContent="center"
      >
        <S.HStack
          my={5}
          w="100%"
          alignItems="center"
          justifyContent="flex-end"
          px={3}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <S.Text mr={2} color="#fff" fontWeight={500} fontSize="md">
              Sair
            </S.Text>
            <Ionicons name="exit-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </S.HStack>

        <S.VStack
          w="100%"
          p={3}
          flex={1}
          space={3}
          alignItems="center"
          justifyContent="center"
        >
          <TouchableOpacity>
            <FontAwesome name="user-circle-o" size={100} color="#ddd" />
          </TouchableOpacity>
          <Input
            placeholder="Email"
            value={formData.email}
            error={errors?.email}
            onChangeText={(value) => handleFormData("email", value)}
          />
          <Input
            placeholder="Nome"
            value={formData.name}
            error={errors?.name}
            onChangeText={(value) => handleFormData("name", value)}
          />
          <Button isLoading={loading} onPress={onSubmit}>
            Editar
          </Button>
        </S.VStack>
      </S.VStack>
    </SafeAreaView>
  );
}

