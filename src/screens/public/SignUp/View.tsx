import React from "react";
import * as S from "native-base";
import WrapperAuthScreen from "../../../components/WrapperAuthScreen/View";
import Input from "../../../components/Input/View";
import Button from "../../../components/Button/View";
import { NavigationProps } from "../../../router/navigation";
import { useFormAuth } from "../../../helpers/hooks/useFormAuth";

export default function SignUp({ navigation }: NavigationProps<"SignUp">) {
  const { formData, loading, errors, onSubmit, handleFormData } = useFormAuth({
    fields: {
      email: "",
      password: "",
      name: "",
    },
    navigation,
    typeSubmit: "signUp",
  });
  return (
    <WrapperAuthScreen title="Entrar">
      <Input
        placeholder="Nome"
        backgroundColor="#131212"
        value={formData.name}
        error={errors?.name}
        onChangeText={(value) => handleFormData("name", value)}
      />
      <Input
        placeholder="Email"
        backgroundColor="#131212"
        value={formData.email}
        error={errors?.email}
        onChangeText={(value) => handleFormData("email", value)}
      />
      <Input
        placeholder="Senha"
        backgroundColor="#131212"
        value={formData.password}
        error={errors?.password}
        onChangeText={(value) => handleFormData("password", value)}
      />
      <Button onPress={onSubmit} isLoading={loading}>
        Confirmar
      </Button>
    </WrapperAuthScreen>
  );
}

