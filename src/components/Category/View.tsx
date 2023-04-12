import React from "react";
import * as S from "native-base";
interface CategorieProps extends S.IBoxProps {
  text: string;
  identify?: string;
  currentCategory?: string;
}

export default function Category({
  text,
  currentCategory,
  identify,
  ...rest
}: CategorieProps) {
  return (
    <S.Box
      mx={3}
      shadow={5}
      px={3}
      py={1}
      backgroundColor={currentCategory === identify ? "#ffffffef" : "#1e1e2c"}
      borderRadius="2xl"
      {...rest}
    >
      <S.Text
        fontWeight={500}
        color={currentCategory === identify ? "#1e1e2c" : "#ffffffc3"}
        fontSize="md"
      >
        {text}
      </S.Text>
    </S.Box>
  );
}

