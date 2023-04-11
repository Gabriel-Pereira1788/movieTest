import React from "react";
import * as S from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { ITmdb } from "../../../../../models/Itmdb";
import { ISingleMovie } from "../../../../../models/DataMovie";
import { TMBD_BACKDROP_URL } from "../../../../../constants/TMDB";
import CardCast from "../CardCast/View";
import { FlatList } from "react-native-gesture-handler";

type InfoProps = Pick<
  ITmdb,
  "title" | "vote_average" | "vote_count" | "genres" | "overview"
>;

interface InfoProops {}

export default function Info({ data, cast }: ISingleMovie) {
  const { title, vote_average, vote_count, genres, overview } = data;
  return (
    <S.VStack py={3} width="100%" overflow="hidden">
      <S.VStack padding={5} space={3}>
        <S.HStack space={2}>
          <AntDesign name="star" size={24} color="#eea12f" />

          <S.Text color="#fff" fontWeight={500}>
            4.8 ({vote_count})
          </S.Text>
        </S.HStack>
        <S.HStack alignItems="center" justifyContent="space-between">
          <S.Text fontWeight={500} fontSize="2xl" color="#fff">
            {title}
          </S.Text>
        </S.HStack>
        <S.HStack
          w="100%"
          alignItems="center"
          justifyContent="flex-start"
          space={3}
        >
          {genres &&
            genres.length > 0 &&
            genres.slice(0, 3).map(({ id, name }) => {
              return (
                <S.Box
                  mt={3}
                  key={id}
                  shadow={5}
                  px={3}
                  py={2}
                  backgroundColor="#1e1e2c"
                  borderRadius="2xl"
                >
                  <S.Text fontWeight={500} color="#ffffffc3" fontSize="md">
                    {name}
                  </S.Text>
                </S.Box>
              );
            })}
        </S.HStack>

        <S.Text
          textAlign="justify"
          color="#ffffff8a"
          fontSize="md"
          fontWeight={500}
          mt="5%"
        >
          {overview}
        </S.Text>
      </S.VStack>
    </S.VStack>
  );
}

