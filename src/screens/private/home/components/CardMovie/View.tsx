import React from "react";
import * as S from "native-base";
import { ITmdb } from "../../../../../models/Itmdb";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TMBD_BACKDROP_URL } from "../../../../../constants/TMDB";
import { SIZES } from "../../../../../constants/sizes";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";

interface CardMovieProps extends ITmdb {}

export default function CardMovie({ backdrop_path, id }: CardMovieProps) {
  return (
    <TouchableOpacity>
      <S.Box mx={2}>
        <S.Image
          source={{ uri: `${TMBD_BACKDROP_URL}${backdrop_path}` }}
          width={SIZES.width - 50}
          borderRadius="lg"
          borderColor="#dddddd35"
          borderWidth={1}
          height={SIZES.height / 2 + 50}
          alt="image-movie"
        />
      </S.Box>
    </TouchableOpacity>
  );
}

