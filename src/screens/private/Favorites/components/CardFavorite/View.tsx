import React from "react";
import { FavoriteData } from "../../../../../repositories/database/models/FavoriteModel";
import * as S from "native-base";
import { TMBD_BACKDROP_URL } from "../../../../../helpers/constants/TMDB";
import Category from "../../../../../components/Category/View";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import DeleteContent from "../DeleteContent/View";
import { useNavigation } from "@react-navigation/native";

export default function CardFavorite({
  id,
  backdrop_path,
  title,
  overview,
  genres,
  movie_id,
}: FavoriteData) {
  const navigation = useNavigation();
  return (
    <S.HStack
      w="100%"
      shadow={5}
      my={2}
      p={4}
      backgroundColor="blueDark.primary"
      rounded="2xl"
      alignItems="center"
      justifyContent="space-between"
      space={2}
    >
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() =>
          navigation.navigate("SingleMovie", {
            id: movie_id!,
            type: "favorite",
          })
        }
      >
        <S.Image
          flex={1}
          source={{ uri: `${TMBD_BACKDROP_URL}${backdrop_path}` }}
          alt="image-favorite"
          width={100}
          height={120}
          rounded="lg"
        />
      </TouchableOpacity>
      <S.VStack
        space={3}
        px={0}
        flex={2}
        alignItems="flex-start"
        justifyContent="center"
      >
        <S.Text color="#ffffffc3" fontSize="md" fontWeight={500}>
          {title}
        </S.Text>
        <S.Text color="#cfcecec3" fontSize="sm" fontWeight={500}>
          {overview?.slice(0, 30)}...
        </S.Text>
        <S.HStack>
          {genres &&
            genres.length > 0 &&
            genres.slice(0, 2).map((genre) => (
              <Category
                key={genre.id}
                text={genre.name}
                currentCategory=""
                mx={0}
                mr={2}
                textProps={{
                  fontSize: "xs",
                }}
              />
            ))}
        </S.HStack>
      </S.VStack>
      <S.VStack alignItems="center" justifyContent="flex-start">
        <DeleteContent id={id || ""} title={title || ""} />
      </S.VStack>
    </S.HStack>
  );
}

