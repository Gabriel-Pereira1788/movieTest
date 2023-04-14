import React from "react";
import * as S from "native-base";
import { SIZES } from "../../helpers/constants/sizes";
import { MaterialIcons, Fontisto, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

import RenderIF from "../RenderIF/View";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import TabWrapper from "./TabWrapper/View";
import { useFonts } from "expo-font";
interface BottomTabProps extends S.IStackProps {
  currentPath: string;
}

export default function BottomTab({ currentPath, ...rest }: BottomTabProps) {
  const navigation = useNavigation();
  const { user } = useSelector((state: RootState) => state.auth);
  const [fontsLoaded] = useFonts({
    MaterialIcons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf"),
    FontAwesome: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome.ttf"),
    Fontisto: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Fontisto.ttf"),
  });
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
      <TouchableOpacity
        onPress={() => navigation.navigate("Home", { screen: "home" })}
      >
        <TabWrapper
          isCurrentPath={currentPath === "movie"}
          screenTitle="Filmes"
        >
          <MaterialIcons name="movie" size={30} color={"#fff"} />
        </TabWrapper>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Home", { screen: "explore" })}
      >
        <TabWrapper
          isCurrentPath={currentPath === "explore"}
          screenTitle="Explorar"
        >
          <MaterialIcons name="search" size={30} color={"#fff"} />
        </TabWrapper>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Home", { screen: "favorites" })}
      >
        <TabWrapper
          isCurrentPath={currentPath === "favorites"}
          screenTitle="Favoritos"
        >
          <Fontisto name="favorite" size={25} color="#fff" />
        </TabWrapper>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("MyAccount")}>
        <RenderIF
          condition={!!user && !!user.photoURL}
          AlternativeComponent={
            <FontAwesome name="user-circle-o" size={30} color="#fff" />
          }
        >
          <S.Image
            source={{ uri: !!user && user.photoURL ? user!.photoURL : "" }}
            width={10}
            height={10}
            rounded="full"
            alt="image-user"
          />
        </RenderIF>
      </TouchableOpacity>
    </S.HStack>
  );
}

