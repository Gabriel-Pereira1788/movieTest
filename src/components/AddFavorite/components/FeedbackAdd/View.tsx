import React from "react";
import * as S from "native-base";
import { SIZES } from "../../../../helpers/constants/sizes";
import Button from "../../../Button/View";
type Props = {};

export default function FeedbackAdd({}: Props) {
  return (
    <S.Modal.Content
      backgroundColor="rgba(15, 15, 22, 0.95)"
      p={5}
      height={SIZES.height / 3 - 50}
      width={SIZES.width - 50}
    >
      <S.VStack flex={1} alignItems="center" justifyContent="center" space={3}>
        <S.Text color="#fff" fontWeight={500} fontSize="xl">
          Adicionar aos favoritos ?
        </S.Text>

        <Button>Confirmar</Button>
      </S.VStack>
    </S.Modal.Content>
  );
}

