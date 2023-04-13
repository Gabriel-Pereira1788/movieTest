import React from "react";
import * as S from "native-base";
import RenderIF from "../../RenderIF/View";
type Props = {
  children: React.ReactNode;
  isCurrentPath: boolean;
  screenTitle: string;
};

export default function TabWrapper({
  children,
  isCurrentPath,
  screenTitle,
}: Props) {
  return (
    <S.HStack
      shadow={8}
      py={2}
      px={2}
      backgroundColor={isCurrentPath ? "orange.500" : "transparent"}
      alignItems="center"
      justifyContent="center"
      space={1}
      borderRadius="2xl"
    >
      {children}
      <RenderIF condition={isCurrentPath}>
        <S.Text color="#fff" fontWeight={500} fontSize="md">
          {screenTitle}
        </S.Text>
      </RenderIF>
    </S.HStack>
  );
}

