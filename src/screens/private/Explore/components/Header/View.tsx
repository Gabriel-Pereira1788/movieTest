import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import * as S from "native-base";
import RenderIF from "../../../../../components/RenderIF/View";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

type Props = {};

export default function Header({}: Props) {
  const { user } = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation();
  return (
    <S.HStack
      w="100%"
      pt={10}
      pb={3}
      px={4}
      alignItems="center"
      justifyContent="space-between"
    >
      <S.VStack space={2}>
        <S.Text color="#8e8888c3" fontSize="md">
          Olá {user?.name}
        </S.Text>
        <S.Text color="#ffffffc3" fontWeight={500} fontSize="xl">
          Relaxe e escolha um filme...
        </S.Text>
      </S.VStack>
      <TouchableOpacity onPress={() => navigation.navigate("MyAccount")}>
        <RenderIF
          condition={!!user && !!user.photoURL}
          AlternativeComponent={
            <FontAwesome name="user-circle-o" size={25} color="#ffffffc3" />
          }
        >
          <S.Image
            source={{ uri: !!user && user.photoURL ? user!.photoURL! : "" }}
            width={50}
            height={50}
            rounded="full"
            alt="image-user"
          />
        </RenderIF>
      </TouchableOpacity>
    </S.HStack>
  );
}

