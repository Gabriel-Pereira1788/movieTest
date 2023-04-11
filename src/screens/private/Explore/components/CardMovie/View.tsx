import React from "react";
import * as S from "native-base";
import { ITmdb } from "../../../../../models/Itmdb";
import { TMBD_BACKDROP_URL } from "../../../../../constants/TMDB";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = Pick<ITmdb, "backdrop_path" | "title" | "id">;

export default function CardMovie({ backdrop_path, title, id }: Props) {
  const navigation = useNavigation();
  return (
    <Animated.View entering={FadeInDown.delay(200).duration(200)}>
      <TouchableOpacity
        onPress={() => navigation.navigate("SingleMovie", { id })}
      >
        <S.VStack space={2} alignItems="center" justifyContent="center">
          <S.Image
            mx={5}
            source={{
              uri: `${TMBD_BACKDROP_URL}${backdrop_path}`,
            }}
            width={200}
            height={250}
            borderRadius="lg"
            alt="image-movie"
          />
          <S.Text fontWeight={500} color="#ddd" fontSize="md">
            {title}
          </S.Text>
        </S.VStack>
      </TouchableOpacity>
    </Animated.View>
  );
}

