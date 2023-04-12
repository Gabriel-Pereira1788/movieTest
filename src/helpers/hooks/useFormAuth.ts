import React from "react";
import { AuthDTO } from "../../models/User";
import { alertRef } from "../../components/Alert/View";
import { ERRORS_FIREBASE_MESSAGE } from "../constants/errosMessage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamListI } from "../../router/navigation";
import { useAuth } from "./useAuth";

export type Errors = {
  [name in keyof AuthDTO]: string;
};

type Props<T extends keyof RootParamListI> = {
  fields: AuthDTO;
  successMessage?: string;
  navigation?: NativeStackNavigationProp<RootParamListI, T, undefined>;
  typeSubmit: "signIn" | "signUp" | "edit";
};
export function useFormAuth<T extends keyof RootParamListI>({
  fields,
  navigation,
  successMessage,
  typeSubmit,
}: Props<T>) {
  const [loading, setLoading] = React.useState(false);
  const [formData, setformData] = React.useState<AuthDTO>(fields);

  const [errors, setErrors] = React.useState<Errors | null>(null);

  const { signIn, signUp } = useAuth();

  function handleFormData(key: keyof AuthDTO, value: string) {
    setformData((prev) => ({ ...prev, [key]: value }));
    if (errors) {
      setErrors(null);
    }
  }

  async function submit() {
    if (typeSubmit === "edit") {
      return;
    }
    if (typeSubmit === "signUp") {
      await signUp(formData);
      return;
    }
    return await signIn(formData);
  }

  async function onSubmit() {
    const haveErrors = validationFields(formData);
    setErrors(haveErrors);
    if (!!haveErrors === false) {
      setLoading(true);
      try {
        if (alertRef.current?.isOpen) {
          alertRef.current.hide();
        }
        await submit();
        navigation && navigation.replace("Home");

        alertRef.current?.open({
          isOpen: true,
          text: successMessage || "Sucesso!",
          status: "success",
        });
      } catch (error) {
        const Error = error as { message: string };
        console.log(Error);
        let messageError = "";
        Object.entries(ERRORS_FIREBASE_MESSAGE).forEach(([key, value]) => {
          if (Error.message.includes(key)) {
            messageError = value;
          }
        });

        alertRef.current?.open({
          isOpen: true,
          text: messageError,
          status: "error",
        });
      } finally {
        setLoading(false);
      }
    }
  }

  return { formData, loading, errors, handleFormData, onSubmit, setformData };
}

function validationFields(formData: AuthDTO) {
  let errors = {} as Errors;

  Object.entries(formData).forEach(([key, value]) => {
    if (value.trim() === "") {
      errors[key as keyof Errors] = "Campo vazio";
    }
  });

  return Object.values(errors).length > 0 ? errors : null;
}

