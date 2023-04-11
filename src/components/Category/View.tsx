import React from "react";
import * as S from "native-base";
interface CategorieProps extends S.IBoxProps {
  text: string;
}

export default function Category({ text, ...rest }: CategorieProps) {
  return (
    <S.Box
      mx={3}
      shadow={5}
      px={3}
      py={1}
      backgroundColor="#1e1e2c"
      borderRadius="2xl"
      {...rest}
    >
      <S.Text fontWeight={500} color="#ffffffc3" fontSize="md">
        {text}
      </S.Text>
    </S.Box>
  );
}

