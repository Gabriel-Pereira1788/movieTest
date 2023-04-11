import React from "react";
import * as S from "native-base";
import { ITmdb } from "../../../../../models/Itmdb";
import { TMDB_GENRES } from "../../../../../constants/TMDB";
import { SIZES } from "../../../../../constants/sizes";
import Animated, { FadeInLeft } from "react-native-reanimated";

type InfoMovieProps = Pick<ITmdb, "title" | "genre_ids">;

export default function InfoMovie({ title, genre_ids }: InfoMovieProps) {
  return (
    <S.VStack
      w="100%"
      flex={1}
      alignItems="center"
      justifyContent="flex-end"
      space={3}
      px={3}
      mt={5}
    >
      <Animated.View
        key={title}
        entering={FadeInLeft.delay(150).duration(150)}
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <S.Text fontSize="3xl" bold color="#fffffff7" textAlign="center">
          {title}
        </S.Text>

        <S.HStack
          w="100%"
          alignItems="center"
          justifyContent="center"
          space={2}
        >
          {genre_ids.length > 0 &&
            genre_ids.slice(0, 3).map((genre_id) => {
              const dataGenre = TMDB_GENRES.find(({ id }) => id === genre_id);
              return (
                <S.Box
                  mt={3}
                  key={genre_id}
                  shadow={5}
                  px={3}
                  py={1}
                  backgroundColor="#4e4d4d"
                  borderRadius="2xl"
                >
                  <S.Text fontWeight={500} color="#ffffffc3" fontSize="md">
                    {dataGenre?.name}
                  </S.Text>
                </S.Box>
              );
            })}
        </S.HStack>
      </Animated.View>
    </S.VStack>
  );
}

