import React from "react";
import Alert from "../Alert/View";
import * as S from "native-base";
import { SIZES } from "../../helpers/constants/sizes";
import Button from "../Button/View";

interface ActionsFavoriteProps {
  titleAction: string;
  titleItem: string;
  loading: boolean;
  onSubmit: () => Promise<void> | void;
}

export default function ActionsFavorite({
  titleAction,
  titleItem,
  onSubmit,
}: ActionsFavoriteProps) {
  const [loading, setLoading] = React.useState(false);
  async function overrideOnSubmit() {
    setLoading(true);
    await onSubmit();
    setLoading(false);
  }

  return (
    <>
      <S.Modal.Content
        backgroundColor="rgba(15, 15, 22, 0.95)"
        p={5}
        height={SIZES.height / 3 - 50}
        width={SIZES.width - 50}
      >
        <S.VStack
          flex={1}
          alignItems="center"
          justifyContent="center"
          space={3}
        >
          <S.Text color="green.200" fontWeight={500} fontSize="xl">
            {titleItem}
          </S.Text>
          <S.Text color="#fff" fontWeight={500} fontSize="xl">
            {titleAction}
          </S.Text>

          <Button isLoading={loading} onPress={overrideOnSubmit}>
            Confirmar
          </Button>
        </S.VStack>
      </S.Modal.Content>
    </>
  );
}

