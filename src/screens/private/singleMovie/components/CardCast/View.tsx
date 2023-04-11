import React from "react";
import { Cast } from "../../../../../models/Itmdb";

import * as S from "native-base";
import { TMBD_BACKDROP_URL } from "../../../../../constants/TMDB";
import { TouchableOpacity } from "react-native-gesture-handler";
import RenderIF from "../../../../../components/RenderIF/View";

export default function CardCast({ profile_path, name }: Cast) {
  return (
    <S.VStack mx={3} space={2} alignItems="center" justifyContent="center">
      <RenderIF condition={!!profile_path}>
        <S.Image
          rounded="lg"
          source={{ uri: `${TMBD_BACKDROP_URL}${profile_path}` }}
          width={150}
          height={200}
          alt="profile-image"
        />
      </RenderIF>

      <S.Text
        textAlign="justify"
        color="#ffffff8a"
        fontSize="md"
        fontWeight={500}
      >
        {name}
      </S.Text>
    </S.VStack>
  );
}

