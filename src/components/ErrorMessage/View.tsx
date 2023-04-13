import React from "react";
import * as S from "native-base";
import { AntDesign } from "@expo/vector-icons";
interface ErrorMessageProps {
  message: string;
  children?: React.ReactNode;
}

export default function ErrorMessage({ message, children }: ErrorMessageProps) {
  return (
    <S.VStack flex={1} alignItems="center" justifyContent="center" space={2}>
      {children ? (
        { children }
      ) : (
        <AntDesign name="warning" size={45} color="#991b1b" />
      )}
      <S.Text fontWeight={500} color="#a3a1a1" fontSize="lg">
        {message}
      </S.Text>
    </S.VStack>
  );
}

