import React from "react";
import * as S from "native-base";
import { NavigationProps } from "../../../router/navigation";
import { useSingleMovie } from "./useSingleMovie";

export default function SingleMovie({ route }: NavigationProps<"SingleMovie">) {
  const { id } = route.params;

  const { dataMovie } = useSingleMovie({ id });
  console.log(dataMovie);
  console.log(id);
  return (
    <S.VStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#000000ef"
    >
      <S.Text>teste</S.Text>
    </S.VStack>
  );
}

