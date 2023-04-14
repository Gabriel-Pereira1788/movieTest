import React from "react";
import { Cast } from "../../../../../models/Itmdb";

import * as S from "native-base";
import {
  TMBD_BACKDROP_PREVIEW,
  TMBD_BACKDROP_URL,
} from "../../../../../helpers/constants/TMDB";
import { TouchableOpacity } from "react-native-gesture-handler";
import RenderIF from "../../../../../components/RenderIF/View";
import ProgressiveImage from "../../../../../components/ProgressiveImage/View";

export default function CardCast({ profile_path, name }: Cast) {
  return (
    <S.VStack mx={3} space={2} alignItems="center" justifyContent="center">
      <RenderIF condition={!!profile_path}>
        <ProgressiveImage
          source={{
            uri: `${TMBD_BACKDROP_URL}${profile_path}`,
          }}
          thumbnailSource={`${TMBD_BACKDROP_PREVIEW}${profile_path}`}
          progressiveRenderingEnabled={true}
          containerProps={{
            style: {
              borderRadius: 20,
              borderColor: "#dddddd35",
              borderWidth: 1,
            },
          }}
          style={{
            width: 150,
            height: 200,
          }}
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

