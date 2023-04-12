import React from "react";
import * as S from "native-base";
import { SIZES } from "../../../../helpers/constants/sizes";
type Props = {};

export default function FeedbackAdd({}: Props) {
  return (
    <S.Modal.Content
      backgroundColor="rgba(15, 15, 22, 0.95)"
      p={5}
      height={SIZES.height / 3 - 50}
    >
      <S.VStack flex={1} alignItems="center" justifyContent="center" space={3}>
        <S.Text color="#fff" fontWeight={500} fontSize="xl">
          Adicionar aos favoritos ?
        </S.Text>

        <S.Button
          width="70%"
          backgroundColor="#e2e2e2a8"
          _text={{
            color: "#2a2b2f",
            fontWeight: 500,
            fontSize: "md",
          }}
        >
          Confirmar
        </S.Button>
      </S.VStack>
    </S.Modal.Content>
  );
}

