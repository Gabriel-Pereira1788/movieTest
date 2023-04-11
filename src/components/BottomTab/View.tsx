import React from "react";
import * as S from "native-base";
import { SIZES } from "../../constants/sizes";
import { MaterialIcons, Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface BottomTabProps extends S.IStackProps {
  currentPath: string;
}

export default function BottomTab({ currentPath, ...rest }: BottomTabProps) {
  const navigation = useNavigation();

  return (
    <S.HStack
      backgroundColor={"rgba(0,0,0,0.7)"}
      borderTopColor="#dddddd15"
      borderWidth={1}
      w={SIZES.width}
      py={5}
      alignItems="center"
      justifyContent="center"
      space={5}
      {...rest}
    >
      <TouchableOpacity>
        <MaterialIcons
          name="movie"
          size={30}
          color={currentPath === "movie" ? "#c54444" : "#fff"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home", { screen: "explore" })}
      >
        <MaterialIcons name="search" size={30} color="#fff" />
      </TouchableOpacity>
      <Fontisto name="favorite" size={25} color="#fff" />
    </S.HStack>
  );
}

